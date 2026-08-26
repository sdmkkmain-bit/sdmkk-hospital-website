import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection
let client;
let db;

async function connectToMongo() {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not configured");
  }

  if (!process.env.DB_NAME) {
    throw new Error("DB_NAME is not configured");
  }

  try {
    if (!client) {
      client = new MongoClient(process.env.MONGO_URL);
      await client.connect();
    }

    if (!db) {
      db = client.db(process.env.DB_NAME);
    }

    // Test that the connection is still alive
    await db.command({ ping: 1 });

    return db;
  } catch (error) {
    // Throw away the broken connection so the next request
    // can create a fresh MongoDB connection.
    try {
      await client?.close();
    } catch {}

    client = null;
    db = null;

    throw error;
  }
}

// CORS helper
function handleCORS(response) {
  response.headers.set(
    "Access-Control-Allow-Origin",
    process.env.CORS_ORIGINS || "*"
  );

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  response.headers.set(
    "Access-Control-Allow-Credentials",
    "true"
  );

  return response;
}

// OPTIONS
export async function OPTIONS() {
  return handleCORS(
    new NextResponse(null, {
      status: 200,
    })
  );
}

// Main API handler
async function handleRoute(request, { params }) {
  const { path = [] } = await params;

  const route = `/${path.join("/")}`;
  const method = request.method;

  try {
    const database = await connectToMongo();

    // =========================================================
    // BED AVAILABILITY
    // =========================================================

    // GET /api/beds
    if (route === "/beds" && method === "GET") {
      const data = await database
        .collection("bed_availability")
        .findOne({ _id: "current" });

      // If nothing has been saved yet, return default values
      if (!data) {
        return handleCORS(
          NextResponse.json({
            hospital: {
              total: 32,
              occupied: 0,
              vacant: 32,
            },

            ipf: {
              total: 4,
              occupied: 0,
              vacant: 4,
            },

            weaker: {
              total: 4,
              occupied: 0,
              vacant: 4,
            },

            lastUpdated: null,
          })
        );
      }

      // Remove MongoDB _id from response
      const { _id, ...cleanData } = data;

      return handleCORS(
        NextResponse.json(cleanData)
      );
    }

    // PUT /api/beds
    if (route === "/beds" && method === "PUT") {
      const body = await request.json();

      // ---------------------------------------------------------
      // Fixed total capacities
      // ---------------------------------------------------------

      const hospitalTotal = 32;
      const ipfTotal = 4;
      const weakerTotal = 4;

      // ---------------------------------------------------------
      // Occupied values
      // ---------------------------------------------------------

      const hospitalOccupied = Number(body.hospital?.occupied || 0);
      const ipfOccupied = Number(body.ipf?.occupied || 0);
      const weakerOccupied = Number(body.weaker?.occupied || 0);

      // ---------------------------------------------------------
      // Safety checks
      // ---------------------------------------------------------

      if (
        hospitalOccupied < 0 ||
        hospitalOccupied > hospitalTotal
      ) {
        return handleCORS(
          NextResponse.json(
            {
              error:
                "Hospital occupied beds must be between 0 and 32.",
            },
            { status: 400 }
          )
        );
      }

      if (
        ipfOccupied < 0 ||
        ipfOccupied > ipfTotal
      ) {
        return handleCORS(
          NextResponse.json(
            {
              error:
                "IPF occupied beds must be between 0 and 4.",
            },
            { status: 400 }
          )
        );
      }

      if (
        weakerOccupied < 0 ||
        weakerOccupied > weakerTotal
      ) {
        return handleCORS(
          NextResponse.json(
            {
              error:
                "Weaker Section occupied beds must be between 0 and 4.",
            },
            { status: 400 }
          )
        );
      }

      // ---------------------------------------------------------
      // Calculate vacant beds automatically
      // ---------------------------------------------------------

      const hospitalVacant =
        hospitalTotal - hospitalOccupied;

      const ipfVacant =
        ipfTotal - ipfOccupied;

      const weakerVacant =
        weakerTotal - weakerOccupied;

      // ---------------------------------------------------------
      // Create the data that will be saved
      // ---------------------------------------------------------

      const bedData = {
        hospital: {
          total: hospitalTotal,
          occupied: hospitalOccupied,
          vacant: hospitalVacant,
        },

        ipf: {
          total: ipfTotal,
          occupied: ipfOccupied,
          vacant: ipfVacant,
        },

        weaker: {
          total: weakerTotal,
          occupied: weakerOccupied,
          vacant: weakerVacant,
        },

        lastUpdated: new Date(),
      };

      // ---------------------------------------------------------
      // Save / update current bed information
      // ---------------------------------------------------------

      await database
        .collection("bed_availability")
        .updateOne(
          { _id: "current" },
          {
            $set: bedData,
          },
          {
            upsert: true,
          }
        );

      // ---------------------------------------------------------
      // Send saved data back to Admin page
      // ---------------------------------------------------------

      return handleCORS(
        NextResponse.json({
          success: true,
          message: "Bed availability saved successfully.",
          data: bedData,
        })
      );
    }

    // =========================================================
    // ROOT
    // =========================================================

    if (route === "/" && method === "GET") {
      return handleCORS(
        NextResponse.json({
          message: "API is working",
        })
      );
    }

    // =========================================================
    // UNKNOWN ROUTE
    // =========================================================

    return handleCORS(
      NextResponse.json(
        {
          error: `Route ${route} not found`,
        },
        {
          status: 404,
        }
      )
    );
  } catch (error) {
    console.error("API Error:", error);

    return handleCORS(
      NextResponse.json(
        {
          error: "Internal server error",
          details: error.message,
        },
        {
          status: 500,
        }
      )
    );
  }
}

// HTTP methods
export const GET = handleRoute;
export const POST = handleRoute;
export const PUT = handleRoute;
export const DELETE = handleRoute;
export const PATCH = handleRoute;