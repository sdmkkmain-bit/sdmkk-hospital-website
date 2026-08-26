"use client";

import { useEffect, useState } from "react";
import {
  BedDouble,
  ShieldCheck,
  Lock,
  Save,
  Clock,
  LogOut,
  Users,
  HeartHandshake,
  Building2,
  CheckCircle2,
} from "lucide-react";

/*
=========================================================
FIXED BED CAPACITY
=========================================================

These numbers are NOT editable from the admin panel.

Only OCCUPIED beds can be changed.
VACANT beds are calculated automatically.

Total:
32 Hospital Beds
+ 4 Indigent Patient Beds
+ 4 Weaker Patient Beds
= 40 Beds
*/

const BED_CAPACITY = {
  hospital: 32,
  ipf: 4,
  weaker: 4,
};

const initialBeds = {
  hospital: {
    name: "Hospital Beds",
    subtitle: "General ward availability",
    total: BED_CAPACITY.hospital,
    occupied: 0,
  },

  ipf: {
    name: "Indigent Patient Beds",
    subtitle: "For Indigent Patients",
    total: BED_CAPACITY.ipf,
    occupied: 0,
  },

  weaker: {
    name: "Weaker Patient Beds",
    subtitle: "For Weaker Patients",
    total: BED_CAPACITY.weaker,
    occupied: 0,
  },
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [beds, setBeds] = useState(initialBeds);

  const [lastUpdated, setLastUpdated] = useState(null);
  const [loadingBeds, setLoadingBeds] = useState(true);

  const [saved, setSaved] = useState(false);
    useEffect(() => {
    if (!loggedIn) return;

    const loadBeds = async () => {
      try {
        setLoadingBeds(true);

        const response = await fetch("/api/beds", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load bed availability");
        }

        const data = await response.json();

        setBeds({
          hospital: {
            ...initialBeds.hospital,
            occupied: Number(data.hospital?.occupied ?? 0),
          },

          ipf: {
            ...initialBeds.ipf,
            occupied: Number(data.ipf?.occupied ?? 0),
          },

          weaker: {
            ...initialBeds.weaker,
            occupied: Number(data.weaker?.occupied ?? 0),
          },
        });

        setLastUpdated(data.lastUpdated ?? null);
        setSaved(true);
      } catch (error) {
        console.error("Load bed availability error:", error);
      } finally {
        setLoadingBeds(false);
      }
    };

    loadBeds();
  }, [loggedIn]);
  /*
  ========================================================
  LOGIN
  ========================================================
  */

  const handleLogin = (e) => {
    e.preventDefault();

    /*
      TEMPORARY DEVELOPMENT LOGIN.

      Real secure authentication will be connected later.
    */

    if (username.trim() && password.trim()) {
      setLoggedIn(true);
    }
  };

  /*
  ========================================================
  UPDATE OCCUPIED BEDS
  ========================================================
  */

  const updateOccupied = (category, value) => {
    /*
      Allow the field to temporarily be empty while typing.
      This prevents the old 0 from staying in front.
    */

    if (value === "") {
      setBeds((previous) => ({
        ...previous,
        [category]: {
          ...previous[category],
          occupied: "",
        },
      }));

      setSaved(false);
      return;
    }

    /*
      Remove anything that isn't a number.
    */

    const cleanValue = value.replace(/\D/g, "");

    if (cleanValue === "") {
      setBeds((previous) => ({
        ...previous,
        [category]: {
          ...previous[category],
          occupied: "",
        },
      }));

      setSaved(false);
      return;
    }

    /*
      Convert to number.
    */

    let numberValue = Number(cleanValue);

    /*
      Occupied can never be greater than total beds.
    */

    numberValue = Math.min(
      beds[category].total,
      Math.max(0, numberValue)
    );

    setBeds((previous) => ({
      ...previous,
      [category]: {
        ...previous[category],
        occupied: numberValue,
      },
    }));

    setSaved(false);
  };

  /*
  ========================================================
  VACANT
  ========================================================
  */

  const getVacant = (category) => {
    const occupied =
      beds[category].occupied === ""
        ? 0
        : Number(beds[category].occupied);

    return Math.max(
      0,
      beds[category].total - occupied
    );
  };

  /*
  ========================================================
  SAVE
  ========================================================
  */

  const handleSave = async () => {
    try {
      setSaved(false);

      const payload = {
        hospital: {
          total: beds.hospital.total,
          occupied:
            beds.hospital.occupied === ""
              ? 0
              : Number(beds.hospital.occupied),
          vacant: getVacant("hospital"),
        },

        ipf: {
          total: beds.ipf.total,
          occupied:
            beds.ipf.occupied === ""
              ? 0
              : Number(beds.ipf.occupied),
          vacant: getVacant("ipf"),
        },

        weaker: {
          total: beds.weaker.total,
          occupied:
            beds.weaker.occupied === ""
              ? 0
              : Number(beds.weaker.occupied),
          vacant: getVacant("weaker"),
        },

        lastUpdated: new Date().toISOString(),
      };

      const response = await fetch("/api/beds", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save bed availability");
      }

      setSaved(true);
    } catch (error) {
      console.error("Save error:", error);
      alert(
        "Unable to save bed availability. Please try again."
      );
    }
  };

  /*
  ========================================================
  LOGIN SCREEN
  ========================================================
  */

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">

        <div className="w-full max-w-md">

          {/* Icon */}

          <div className="text-center mb-8">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 shadow-sm">
              <ShieldCheck className="h-10 w-10" />
            </div>

            <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
              Hospital Admin
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Bed Availability Management
            </p>

          </div>

          {/* Login Card */}

          <form
            onSubmit={handleLogin}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl"
          >

            <div className="mb-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Lock className="h-5 w-5" />
                </div>

                <div>

                  <h2 className="font-bold text-slate-900">
                    Admin Login
                  </h2>

                  <p className="text-xs text-slate-500">
                    Authorized hospital staff only
                  </p>

                </div>

              </div>

            </div>

            {/* Username */}

            <div className="mb-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder="Enter username"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

            {/* Password */}

            <div className="mb-6">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:-translate-y-0.5"
            >
              <Lock className="h-4 w-4" />
              Login
            </button>

            <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4">

              <p className="text-xs leading-5 text-amber-800">
                <strong>Development screen:</strong>{" "}
                secure authentication will be connected
                to the backend in the next step.
              </p>

            </div>

          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Shree Dombivli Manav Kalyan Kendra
          </p>

        </div>

      </main>
    );
  }

  /*
  ========================================================
  ADMIN DASHBOARD
  ========================================================
  */

  const totalBeds =
    beds.hospital.total +
    beds.ipf.total +
    beds.weaker.total;

  const totalOccupied =
    (beds.hospital.occupied === ""
      ? 0
      : Number(beds.hospital.occupied)) +
    (beds.ipf.occupied === ""
      ? 0
      : Number(beds.ipf.occupied)) +
    (beds.weaker.occupied === ""
      ? 0
      : Number(beds.weaker.occupied));

  const totalVacant =
    getVacant("hospital") +
    getVacant("ipf") +
    getVacant("weaker");

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div>

              <h1 className="font-bold text-slate-900">
                Bed Availability Management
              </h1>

              <p className="text-sm text-slate-500">
                Hospital administration panel
              </p>

            </div>

          </div>

          <button
            onClick={() => {
              setLoggedIn(false);
              setUsername("");
              setPassword("");
            }}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>

        </div>

      </header>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

        {/* Page heading */}

        <section className="mb-8">

          <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">

            <Building2 className="h-4 w-4" />

            Hospital Operations

          </div>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Update Bed Availability
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Update the number of currently occupied beds.
            Total bed capacity is fixed and vacant beds are
            calculated automatically.
          </p>

        </section>

        {/* =================================================
            LAST UPDATED
        ================================================= */}

        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-blue-100 bg-blue-50 p-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <Clock className="h-6 w-6" />
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Last Updated
              </p>

             <p className="mt-1 font-semibold text-slate-900">
  {lastUpdated
    ? new Date(lastUpdated).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "No update saved yet"}
</p>

            </div>

          </div>

          <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-500">
            Total bed capacity is fixed
          </div>

        </div>

        {/* =================================================
            BED CARDS
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* HOSPITAL */}

          <BedAdminCard
            category="hospital"
            data={beds.hospital}
            vacant={getVacant("hospital")}
            updateOccupied={updateOccupied}
            icon={<BedDouble className="h-6 w-6" />}
            iconClass="bg-blue-600 text-white"
            borderClass="border-blue-100"
            accentClass="bg-blue-600"
          />

          {/* INDIGENT PATIENTS */}

          <BedAdminCard
            category="ipf"
            data={beds.ipf}
            vacant={getVacant("ipf")}
            updateOccupied={updateOccupied}
            icon={<HeartHandshake className="h-6 w-6" />}
            iconClass="bg-purple-600 text-white"
            borderClass="border-purple-100"
            accentClass="bg-purple-600"
          />

          {/* WEAKER PATIENTS */}

          <BedAdminCard
            category="weaker"
            data={beds.weaker}
            vacant={getVacant("weaker")}
            updateOccupied={updateOccupied}
            icon={<Users className="h-6 w-6" />}
            iconClass="bg-green-600 text-white"
            borderClass="border-green-100"
            accentClass="bg-green-600"
          />

        </div>

        {/* =================================================
            SUMMARY
        ================================================= */}

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <BedDouble className="h-5 w-5" />
            </div>

            <div>

              <h3 className="font-bold text-slate-900">
                Availability Summary
              </h3>

              <p className="text-sm text-slate-500">
                Current hospital-wide bed summary
              </p>

            </div>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <SummaryBox
              label="Total Beds"
              value={totalBeds}
              color="text-blue-600"
            />

            <SummaryBox
              label="Occupied"
              value={totalOccupied}
              color="text-red-600"
            />

            <SummaryBox
              label="Vacant"
              value={totalVacant}
              color="text-green-600"
            />

          </div>

        </section>

        {/* =================================================
            SAVE
        ================================================= */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row">

          <div>

            <p className="font-semibold text-slate-900">
              Ready to publish the update?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Save the latest occupied-bed figures provided
              by the hospital.
            </p>

          </div>

          <button
            onClick={handleSave}
            className="flex min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >

            {saved ? (
              <>
                <CheckCircle2 className="h-5 w-5" />
                Saved
              </>
            ) : (
              <>
                <Save className="h-5 w-5" />
                Save Update
              </>
            )}

          </button>

        </div>

        {/* =================================================
            NOTICE
        ================================================= */}

        <div className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-5">

          <p className="font-semibold text-amber-900">
            Important
          </p>

          <p className="mt-1 text-sm leading-6 text-amber-800">
            Bed availability can change throughout the day.
            Please ensure the figures are updated only using
            the latest information provided by the hospital.
          </p>

        </div>

      </div>

    </main>
  );
}


/*
=========================================================
BED ADMIN CARD
=========================================================
*/

function BedAdminCard({
  category,
  data,
  vacant,
  updateOccupied,
  icon,
  iconClass,
  borderClass,
  accentClass,
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border ${borderClass} bg-white p-6 shadow-sm`}
    >

      {/* Top accent */}

      <div
        className={`absolute left-0 right-0 top-0 h-1.5 ${accentClass}`}
      />

      {/* Heading */}

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-center gap-4">

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}
          >
            {icon}
          </div>

          <div>

            <h3 className="font-bold text-slate-900">
              {data.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {data.subtitle}
            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
          Live
        </span>

      </div>

      {/* =================================================
          TOTAL + OCCUPIED
      ================================================= */}

      <div className="mt-7 grid grid-cols-2 gap-4">

        {/* FIXED TOTAL */}

        <div>

          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Total Beds
          </label>

          <div className="flex h-[50px] w-full items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-lg font-bold text-blue-600">
            {data.total}
          </div>

        </div>

        {/* EDITABLE OCCUPIED */}

        <div>

          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Occupied
          </label>

          <input
            type="text"
            inputMode="numeric"
            value={data.occupied}
            onChange={(e) =>
              updateOccupied(
                category,
                e.target.value
              )
            }
            placeholder="0"
            className="h-[50px] w-full rounded-2xl border border-red-100 bg-red-50 px-4 text-lg font-bold text-red-600 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
          />

        </div>

      </div>

      {/* =================================================
          VACANT
      ================================================= */}

      <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-wider text-green-700">
              Vacant Beds
            </p>

            <p className="mt-1 text-3xl font-extrabold text-green-600">
              {vacant}
            </p>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-600 shadow-sm">
            <BedDouble className="h-5 w-5" />
          </div>

        </div>

      </div>

    </section>
  );
}


/*
=========================================================
SUMMARY BOX
=========================================================
*/

function SummaryBox({
  label,
  value,
  color,
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p
        className={`mt-2 text-3xl font-extrabold ${color}`}
      >
        {value}
      </p>

    </div>
  );
}