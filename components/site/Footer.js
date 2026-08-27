"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Heart,
  Navigation,
  ArrowRight,
  X,
} from "lucide-react";

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  const quickLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Departments", "/departments"],
    ["OPD Schedule", "/opd-schedule"],
    ["Bed Availability", "/bed-availability"],
    ["Trustees", "/trustees"],
    ["Gallery", "/gallery"],
    ["Certificates", "/certificates"],
    ["Contact", "/contact"],
  ];

  const phoneNumbers = [
    "0251-2449563",
    "0251-2449573",
    "0251-2445574",
    
  ];

  const openEgg = () => {
    setShowEgg(true);
  };

  const closeEgg = () => {
    setShowEgg(false);
  };

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative z-20 w-full overflow-hidden bg-[#071a4d] text-white">

        {/* Animated background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="footer-glow footer-glow-one absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/10" />

          <div className="footer-glow footer-glow-two absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full bg-sky-400/10" />

        </div>


        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">

          {/* =================================================
              MAIN FOOTER GRID
          ================================================== */}

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


            {/* =================================================
                HOSPITAL
            ================================================== */}

            <div className="footer-reveal">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg">

                  <img
                    src="/images/logos/hospital-logo.png"
                    alt="Shree Dombivli Manav Kalyan Kendra"
                    className="h-full w-full object-contain"
                  />

                </div>


                <div>

                  <h3 className="text-xl font-bold">
                    SDMKK
                  </h3>

                  <p className="text-sm text-blue-200">
                    Charitable Hospital
                  </p>

                </div>

              </div>


              <p className="mt-7 max-w-sm text-sm leading-7 text-blue-100">
                Shree Dombivli Manav Kalyan Kendra
                Charitable Hospital &amp; Polyclinic.
              </p>


              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-900/40 px-4 py-2 text-xs font-semibold text-blue-200">

                <Heart className="h-4 w-4 text-green-500"/>

                Corporate Care at Charitable Rate

              </div>

            </div>


            {/* =================================================
                QUICK LINKS
            ================================================== */}

            <div className="footer-reveal footer-delay-1">

              <h3 className="text-lg font-bold tracking-wide">
                QUICK LINKS
              </h3>


              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">

                {quickLinks.map(([label, href]) => (

                  <a
                    key={label}
                    href={href}
                    className="group flex w-fit items-center gap-1 text-sm text-blue-100 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >

                    <span>{label}</span>

                    <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

                  </a>

                ))}

              </div>

            </div>


            {/* =================================================
                CONTACT
            ================================================== */}

            <div className="footer-reveal footer-delay-2">

              <h3 className="text-lg font-bold tracking-wide">
                CONTACT &amp; ASSISTANCE
              </h3>


              {/* Phone */}

              <div className="mt-7 flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">

                  <Phone className="h-5 w-5 text-blue-200" />

                </div>


                <div>

                  <p className="text-xs uppercase tracking-wider text-blue-300">
                    24×7 Emergency
                  </p>


                  <div className="mt-2 space-y-1">

                    {phoneNumbers.map((number) => (

                      <a
                        key={number}
                        href={`tel:${number.replaceAll("-", "")}`}
                        className="block text-sm font-semibold text-white transition-colors hover:text-blue-200"
                      >
                        {number}
                      </a>

                    ))}

                  </div>

                </div>

              </div>


              {/* Email */}

              <div className="mt-6 flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">

                  <Mail className="h-5 w-5 text-blue-200" />

                </div>


                <div>

                  <p className="text-xs uppercase tracking-wider text-blue-300">
                    Email
                  </p>

                  <a
                    href="mailto:sdmk13@yahoo.in"
                    className="mt-1 block text-sm font-semibold text-white hover:text-blue-200"
                  >
                    sdmk13@yahoo.in
                  </a>

                </div>

              </div>


              {/* Location */}

              <div className="mt-6 flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">

                  <MapPin className="h-5 w-5 text-blue-200" />

                </div>


                <div>

                  <p className="text-xs uppercase tracking-wider text-blue-300">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    Dombivli East,
                    <br />
                    Maharashtra, India
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                GOOGLE MAPS
            ================================================== */}

            <div className="footer-reveal footer-delay-3">

              <h3 className="text-lg font-bold tracking-wide">
                FIND US
              </h3>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Shree+Dombivli+Manav+Kalyan+Kendra"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 block min-h-[225px] overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-800 via-blue-900 to-[#071a4d] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
              >

                {/* Animated circle */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 transition-all duration-700 group-hover:scale-[2]" />


                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">

                  <MapPin className="h-7 w-7 text-blue-100" />

                </div>


                <h4 className="relative mt-5 text-lg font-bold">
                  View on Google Maps
                </h4>


                <p className="relative mt-2 text-sm leading-6 text-blue-200">
                  Find the hospital and get directions.
                </p>


                <div className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">

                  <Navigation className="h-4 w-4" />

                  Open Maps

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />

                </div>

              </a>

            </div>

          </div>


          {/* =================================================
    HOSPITAL HOURS STRIP
================================================== */}

<div className="footer-reveal footer-delay-2 mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

    {/* OPD HOURS */}
    <div className="flex items-start gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Clock3 className="h-5 w-5 text-blue-200" />
      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
          OPD HOURS
        </p>

        <div className="mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-1">

          <div>
            <span className="font-semibold text-white">
              Monday – Saturday
            </span>

            <span className="ml-2 text-blue-100">
              08:00 AM – 09:00 PM
            </span>
          </div>

          <div>
            <span className="font-semibold text-white">
              Sunday
            </span>

            <span className="ml-2 text-blue-100">
              08:00 AM – 02:00 PM
            </span>
          </div>

        </div>

      </div>

    </div>


    {/* EMERGENCY ASSISTANCE */}
    <div className="shrink-0 rounded-full bg-green-500/10 px-4 py-2 text-xs font-bold text-green-300">
      Emergency Assistance · 24 × 7
    </div>

  </div>

</div>

          {/* =================================================
              BOTTOM
          ================================================== */}

          <div className="mt-10 border-t border-white/10 pt-7">

            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">


              {/* Copyright */}

              <p className="text-xs leading-6 text-blue-300">

                © 2026 Shree Dombivli Manav Kalyan Kendra
                Charitable Hospital &amp; Polyclinic.
                All rights reserved.

              </p>


              {/* =================================================
                  MONTY EASTER EGG
              ================================================== */}

              <button
                type="button"
                onClick={openEgg}
                className="group cursor-pointer border-0 bg-transparent text-xs text-blue-300 transition-all duration-300 hover:text-white"
              >

                Website Designed &amp; Developed by{" "}

                <span className="font-bold text-white transition-all duration-300 group-hover:text-blue-200 group-hover:tracking-wide">
                  Monty Nandyal
                </span>

              </button>

            </div>

          </div>

        </div>

      </footer>


      {/* =====================================================
          EASTER EGG
      ====================================================== */}

      {showEgg && (

        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur-md"
          onClick={closeEgg}
        >

          {/* =========================
              EGG
          ========================== */}

          <div className="egg-wrapper pointer-events-none absolute left-1/2 top-1/2 h-36 w-28 -translate-x-1/2 -translate-y-1/2">

            <div className="egg-top absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-[55%_55%_45%_45%] border-4 border-white bg-white shadow-2xl">

              <div className="absolute bottom-3 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full bg-slate-300" />

            </div>


            <div className="egg-bottom absolute bottom-0 left-1/2 h-20 w-28 -translate-x-1/2 rounded-[40%_40%_55%_55%] border-4 border-white bg-white shadow-2xl">

              <div className="absolute left-1/2 top-2 h-9 w-9 -translate-x-1/2 rounded-full bg-yellow-300 shadow-lg" />

            </div>


            {/* Crack */}

            <div className="absolute left-1/2 top-[56%] z-20 h-1 w-20 -translate-x-1/2 rotate-[-8deg] bg-slate-400" />

          </div>


          {/* =========================
              POPUP
          ========================== */}

          <div
            className="egg-popup fixed left-1/2 top-1/2 z-[100000] max-h-[82vh] w-[calc(100%-32px)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2rem] border border-white/50 bg-white text-center shadow-[0_35px_100px_rgba(0,0,0,0.5)]"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={closeEgg}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:rotate-90 hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>


            <div className="p-8 md:p-10">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl shadow-inner">
                🥚
              </div>


              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600">
                SECRET DISCOVERED
              </p>


              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Well... hello there! 👋
              </h2>


              <p className="mt-5 text-base leading-7 text-slate-600">

                You actually clicked my name.

                <br />

                <span className="font-bold text-slate-900">
                  I&apos;m Monty Nandyal. 😄
                </span>

              </p>


              <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-left">

                <p className="text-sm font-bold text-blue-700">
                  🥚 A tiny secret from Monty
                </p>


                <p className="mt-2 text-sm leading-6 text-slate-600">

                  I was supposed to be building a hospital website...

                  <br />

                  but apparently I couldn&apos;t resist hiding an
                  Easter egg in the footer. 😂

                </p>

              </div>


              <p className="mt-6 text-sm leading-6 italic text-slate-500">

                If you found this, congratulations.

                <br />

                You are officially the one who actually
                clicked

                <span className="font-semibold text-slate-700">
                  {" "}“Website Designed &amp; Developed by Monty Nandyal”.
                </span>

              </p>


              <div className="mt-7 flex justify-center gap-2 text-2xl">
                🥚 💻 🏥 😂
              </div>


              <p className="mt-4 text-xs text-slate-400">
                P.S. — Please don&apos;t tell anyone. 🤫
              </p>


              <button
                type="button"
                onClick={closeEgg}
                className="mt-7 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Okay, I&apos;ll keep the secret 🤫
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          FOOTER ANIMATIONS
      ====================================================== */}

      <style jsx>{`

        @keyframes footerFloatOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-25px, 20px) scale(1.08);
          }
        }


        @keyframes footerFloatTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(25px, -25px);
          }
        }


        @keyframes footerReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes eggTop {

          0% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }

          45% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }

          100% {
            transform: translateX(-75%) translateY(-70px) rotate(-28deg);
          }

        }


        @keyframes eggBottom {

          0% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }

          45% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }

          100% {
            transform: translateX(-25%) translateY(70px) rotate(25deg);
          }

        }


        @keyframes eggPopup {

          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.55);
          }

          70% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.04);
          }

          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }

        }


        .footer-glow-one {
          animation: footerFloatOne 9s ease-in-out infinite;
        }


        .footer-glow-two {
          animation: footerFloatTwo 11s ease-in-out infinite;
        }


        .footer-reveal {
          animation: footerReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }


        .footer-delay-1 {
          animation-delay: 0.12s;
        }


        .footer-delay-2 {
          animation-delay: 0.24s;
        }


        .footer-delay-3 {
          animation-delay: 0.36s;
        }


        .egg-top {
          animation: eggTop 1.2s ease-out forwards;
        }


        .egg-bottom {
          animation: eggBottom 1.2s ease-out forwards;
        }


        .egg-popup {
          opacity: 0;
          animation: eggPopup 0.55s ease-out 0.95s forwards;
        }


        @media (prefers-reduced-motion: reduce) {

          .footer-glow-one,
          .footer-glow-two,
          .footer-reveal,
          .egg-top,
          .egg-bottom,
          .egg-popup {
            animation: none !important;
          }

          .egg-popup {
            opacity: 1;
          }

        }

      `}</style>
    </>
  );
}