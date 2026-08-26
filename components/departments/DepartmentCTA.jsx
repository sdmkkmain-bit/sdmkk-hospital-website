"use client";

import {
  CalendarDays,
  PhoneCall,
  ArrowRight,
  HeartPulse,
  MapPin,
} from "lucide-react";

export default function DepartmentCTA() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-8 md:p-12 lg:p-14 text-white shadow-xl">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-white/10" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-3xl">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>

                <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-100">
                  YOUR CARE • OUR COMMITMENT
                </p>

              </div>

              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Need medical care or want to know more?
              </h2>

              <p className="mt-5 text-lg md:text-xl leading-8 text-blue-50">
                Explore our departments, check the OPD schedule or contact
                the hospital to understand the right care option for you
                and your family.
              </p>

              {/* Small information points */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">

                <div className="flex items-center gap-3 text-blue-50">
                  <CalendarDays className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    OPD consultations
                  </span>
                </div>

                <div className="flex items-center gap-3 text-blue-50">
                  <PhoneCall className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Hospital assistance
                  </span>
                </div>

                <div className="flex items-center gap-3 text-blue-50">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Dombivli, Maharashtra
                  </span>
                </div>

              </div>

            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex flex-col gap-4 w-full lg:w-64">

              <a
                href="/opd-schedule"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-blue-700 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <CalendarDays className="w-5 h-5" />

                View OPD Schedule

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5" />

                Contact Hospital

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}