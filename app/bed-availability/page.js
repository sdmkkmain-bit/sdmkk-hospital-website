"use client";

import { useEffect, useState } from "react";import {
  BedDouble,
  ShieldCheck,
  HeartHandshake,
  Clock3,
  Phone,
  MapPin,
  ArrowRight,
  Activity,
  Info,
  CheckCircle2,
} from "lucide-react";

import Footer from "../../components/site/Footer";

const bedCategories = [
  {
    title: "Hospital Beds",
    subtitle: "General ward availability",
    total: 32,
    occupied: null,
    vacant: null,
    icon: BedDouble,
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    border: "border-blue-100",
    topLine: "bg-blue-600",
    statusBg: "bg-blue-50",
    statusText: "text-blue-700",
    accent: "text-blue-700",
    bar: "bg-blue-600",
  },
 {
  title: "Indigent Patient Beds",
  subtitle: "For Indigent Patients",
  total: 4,
  occupied: null,
  vacant: null,
  icon: ShieldCheck,
  iconBg: "bg-violet-600",
  iconColor: "text-white",
  border: "border-violet-100",
  topLine: "bg-violet-600",
  statusBg: "bg-violet-50",
  statusText: "text-violet-700",
  accent: "text-violet-700",
  bar: "bg-violet-600",
},
 {
  title: "Weaker Patient Beds",
  subtitle: "For Weaker Patients",
    total: 4,
    occupied: null,
    vacant: null,
    icon: HeartHandshake,
    iconBg: "bg-green-600",
    iconColor: "text-white",
    border: "border-green-100",
    topLine: "bg-green-600",
    statusBg: "bg-green-50",
    statusText: "text-green-700",
    accent: "text-green-700",
    bar: "bg-green-600",
  },
];

function BedCard({ bed }) {
  const Icon = bed.icon;

  const hasLiveNumbers =
    typeof bed.occupied === "number" &&
    typeof bed.vacant === "number";

  const occupiedPercentage =
    hasLiveNumbers && bed.total > 0
      ? Math.round((bed.occupied / bed.total) * 100)
      : 0;

  return (
    <div
      className={`
        group relative overflow-hidden rounded-[2rem]
        bg-white border ${bed.border}
        shadow-[0_10px_40px_rgba(15,23,42,0.07)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]
      `}
    >
      {/* Top colored line */}
      <div className={`absolute left-0 right-0 top-0 h-1 ${bed.topLine}`} />

      <div className="p-7 md:p-8">

        {/* Icon + Status */}
        <div className="flex items-start justify-between gap-4">
<div
  className={`
    flex h-16 w-16 shrink-0 items-center justify-center
    rounded-2xl
    shadow-lg
    transition-all duration-500
    group-hover:scale-110
    group-hover:rotate-3
    ${bed.iconBg}
  `}
>
  <Icon
    className="h-8 w-8"
    style={{ color: "#ffffff" }}
  />
</div>
 

          <div
            className={`
              inline-flex items-center gap-2
              rounded-full px-3 py-1.5
              text-xs font-bold
              ${bed.statusBg}
              ${bed.statusText}
            `}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`
                  absolute inline-flex h-full w-full
                  animate-ping rounded-full opacity-75
                  ${bed.bar}
                `}
              />

              <span
                className={`
                  relative inline-flex h-2 w-2
                  rounded-full
                  ${bed.bar}
                `}
              />
            </span>

            Live
          </div>

        </div>

        {/* Title */}
        <div className="mt-7">

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {bed.title}
          </h2>

          <p className="mt-2 text-base text-slate-500">
            {bed.subtitle}
          </p>

        </div>

        {/* Numbers */}
        <div className="mt-7 grid grid-cols-3 gap-3">

          {/* TOTAL */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
            <div className={`text-3xl font-extrabold ${bed.accent}`}>
              {bed.total}
            </div>

            <div className="mt-1 text-xs font-semibold text-slate-500">
              Total Beds
            </div>
          </div>

          {/* OCCUPIED */}
          <div className="rounded-2xl border border-red-100 bg-red-50/40 p-4 text-center">

            <div className="text-3xl font-extrabold text-red-600">
              {bed.occupied ?? "—"}
            </div>

            <div className="mt-1 text-xs font-semibold text-slate-500">
              Occupied
            </div>

          </div>

          {/* VACANT */}
          <div className="rounded-2xl border border-green-100 bg-green-50/40 p-4 text-center">

            <div className="text-3xl font-extrabold text-green-600">
              {bed.vacant ?? "—"}
            </div>

            <div className="mt-1 text-xs font-semibold text-slate-500">
              Vacant
            </div>

          </div>

        </div>


      </div>
    </div>
  );
}

export default function BedAvailabilityPage() {
  const [liveBeds, setLiveBeds] = useState(null);

  useEffect(() => {
    async function loadBedAvailability() {
      try {
        const response = await fetch("/api/beds");

        if (!response.ok) {
          throw new Error("Failed to load bed availability");
        }

        const data = await response.json();
        setLiveBeds(data);
      } catch (error) {
        console.error("Unable to load bed availability:", error);
      }
    }

    loadBedAvailability();
  }, []);

  const liveBedCategories = bedCategories.map((bed) => {
    if (!liveBeds) {
      return bed;
    }

    if (bed.title === "Hospital Beds") {
      return {
        ...bed,
        occupied: liveBeds.hospital?.occupied ?? null,
        vacant: liveBeds.hospital?.vacant ?? null,
      };
    }

   if (bed.title === "Indigent Patient Beds") {
  return {
    ...bed,
    occupied: liveBeds.ipf?.occupied ?? null,
    vacant: liveBeds.ipf?.vacant ?? null,
  };
}
    if (bed.title === "Weaker Patient Beds") {
      return {
        ...bed,
        occupied: liveBeds.weaker?.occupied ?? null,
        vacant: liveBeds.weaker?.vacant ?? null,
      };
    }

    return bed;
  });

  return (
    <>
      {/* IMPORTANT:
          Header is NOT here.
          Your app/layout.js already provides it.
      */}

      <main className="min-h-screen overflow-hidden bg-white text-slate-900">

        {/* ============================================================
            HERO
        ============================================================ */}

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-sky-500">

          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />

          <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/10" />

          <div className="absolute right-[20%] top-[20%] h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl animate-pulse" />

          <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:px-10">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

              {/* Hero text */}
              <div className="max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">

                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-300" />
                  </span>

                  Live Update

                </div>

                <h1 className="mt-7 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
                  Bed Availability
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
                  Real-time bed availability across Hospital, Indigent Patient
and Weaker Patient categories.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium text-blue-50">

                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Transparent information
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Updated regularly
                  </div>

                </div>

              </div>

              {/* Last Updated */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[2rem]
                  border border-white/30
                  bg-white/95
                  p-7
                  shadow-2xl
                  lg:min-w-[300px]
                "
              >

                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100" />

                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                    <Clock3 className="h-7 w-7 text-blue-700" />

                  </div>

                  <p className="mt-5 text-sm font-semibold text-slate-500">
                    Last Updated
                  </p>

                  <p className="mt-2 text-lg font-bold text-blue-800">
  {liveBeds?.lastUpdated
    ? new Date(liveBeds.lastUpdated).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Awaiting live update"}
</p>

<p className="mt-2 text-sm text-slate-500">
  Latest bed availability is shown below.
</p>
                

                </div>

              </div>

            </div>

          </div>

          <div className="h-3 bg-gradient-to-r from-green-500 via-blue-600 to-cyan-400" />

        </section>


        {/* ============================================================
            DASHBOARD
        ============================================================ */}

        <section className="bg-slate-50 py-14 md:py-16">

          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">

            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">

                <BedDouble className="h-4 w-4" />

                Live Bed Dashboard

              </div>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Current Bed Status
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                View the current total, occupied and vacant beds across
                the hospital's major bed categories.
              </p>

            </div>


            {/* THREE BED CARDS */}

            <div className="mt-12 grid gap-7 lg:grid-cols-3">

              {liveBedCategories.map((bed) => (
                <BedCard
                  key={bed.title}
                  bed={bed}
                />
              ))}

            </div>


            {/* Important information */}

            <div
              className="
                mt-10 rounded-[2rem]
                border border-blue-100
                bg-gradient-to-r from-blue-50 to-sky-50
                p-7 md:p-8
              "
            >

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">

                    <Info className="h-6 w-6" />

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-blue-900">
                      Important Information
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                      Bed availability can change throughout the day.
                      Please contact the hospital before visiting to
                      confirm current availability for admissions.
                    </p>

                  </div>

                </div>


                <a
                  href="tel:02512445574"
                  className="
                    inline-flex shrink-0 items-center justify-center
                    gap-2 rounded-full
                    bg-blue-700 px-6 py-3.5
                    text-sm font-bold text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-blue-800
                  "
                >

                  <Phone className="h-5 w-5" />

                  Call Hospital

                  <ArrowRight className="h-4 w-4" />

                </a>

              </div>

            </div>


            {/* Service strip */}

            <div
              className="
                mt-8 overflow-hidden
                rounded-[2rem]
                border border-slate-200
                bg-white
                shadow-sm
              "
            >

              <div className="grid md:grid-cols-4">

                <div className="flex items-center gap-4 p-6">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">

                    <Clock3 className="h-6 w-6 text-blue-700" />

                  </div>

                  <div>

                    <p className="font-bold text-blue-800">
                      24×7 Support
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Assistance whenever you need it
                    </p>

                  </div>

                </div>


                <div className="flex items-center gap-4 border-t border-slate-100 p-6 md:border-l md:border-t-0">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100">

                    <ShieldCheck className="h-6 w-6 text-green-700" />

                  </div>

                  <div>

                    <p className="font-bold text-green-700">
                      Trusted Care
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Compassionate healthcare
                    </p>

                  </div>

                </div>


                <div className="flex items-center gap-4 border-t border-slate-100 p-6 md:border-l md:border-t-0">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100">

                    <HeartHandshake className="h-6 w-6 text-purple-700" />

                  </div>

                  <div>

                    <p className="font-bold text-purple-700">
                      Patient First
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Your comfort matters
                    </p>

                  </div>

                </div>


                <div className="flex items-center gap-4 border-t border-slate-100 p-6 md:border-l md:border-t-0">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100">

                    <Activity className="h-6 w-6 text-orange-600" />

                  </div>

                  <div>

                    <p className="font-bold text-orange-600">
                      Transparent Service
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Clear availability information
                    </p>

                  </div>

                </div>

              </div>

            </div>
{/* =========================================================
    HOW TO READ BED STATUS
========================================================= */}
<section className="mx-auto w-full max-w-5xl px-4 pt-12 pb-12 sm:px-6 sm:pt-16">
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

    {/* Heading */}
    <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
          <span className="text-xl">🛏️</span>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Bed availability at a glance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Understanding the information shown above
          </p>
        </div>
      </div>
    </div>

    {/* Status explanations */}
    <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">

      {/* Vacant */}
      <div className="flex items-start gap-4 px-6 py-5 transition-all duration-300 hover:bg-emerald-50/40 sm:px-8">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50">
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Vacant
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Beds currently available for patients.
          </p>
        </div>
      </div>

      {/* Occupied */}
      <div className="flex items-start gap-4 px-6 py-5 transition-all duration-300 hover:bg-red-50/40 sm:px-8">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50">
          <span className="h-3 w-3 rounded-full bg-red-500" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Occupied
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Beds currently occupied by patients.
          </p>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-start gap-4 px-6 py-5 transition-all duration-300 hover:bg-blue-50/40 sm:px-8">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Total Beds
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Total beds available in that category.
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <div className="flex items-start gap-4 px-6 py-5 transition-all duration-300 hover:bg-slate-50 sm:px-8">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <span className="text-sm">🕒</span>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Last Updated
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Shows when the latest bed information was updated.
          </p>
        </div>
      </div>

    </div>

    {/* Important note */}
    <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-5 sm:px-8">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-base">ℹ️</span>

        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-800">
            Please note:
          </span>{" "}
          Bed availability can change during the day. For urgent admissions,
          please contact the hospital directly.
        </p>
      </div>
    </div>

  </div>
</section>

            {/* Location */}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-500 sm:flex-row">

              <MapPin className="h-5 w-5 text-blue-600" />

              <span>
                Shree Dombivli Manav Kalyan Kendra Charitable Hospital &amp; Polyclinic
              </span>

              <span className="hidden text-slate-300 sm:inline">
                •
              </span>

              <span>
                Dombivli East, Maharashtra
              </span>

            </div>

          </div>

        </section>

      </main>

   

    </>
  );
}