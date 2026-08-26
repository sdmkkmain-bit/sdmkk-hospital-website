"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  // =====================================================
  // 01 — GROUND FLOOR
  // =====================================================
  {
    src: "/images/gallery/hospital.png",
    title: "Shree Dombivli Manav Kalyan Kendra Charitable Hospital",
    category: "Hospital",
  },

  // =====================================================
  // 02 — FIRST FLOOR
  // =====================================================
  {
    src: "/images/gallery/dental camp.png",
    title: "Dental Camp",
    category: "Dental & OPD",
  },
  {
    src: "/images/gallery/Dental opd.png",
    title: "Dental OPD",
    category: "Dental & OPD",
  },
  {
    src: "/images/gallery/eye camp.png",
    title: "Eye Camp",
    category: "OPD",
  },
  {
    src: "/images/gallery/opd.png",
    title: "Outpatient Department",
    category: "Dental & OPD",
  },
  
  {
    src: "/images/gallery/pathology.png",
    title: "Pathology Department",
    category: "Diagnostic Services",
  },


  // =====================================================
  // 03 — SECOND FLOOR
  // =====================================================
  
  {
    src: "/images/gallery/inhouse pantry.png",
    title: "In-house Pantry",
    category: "Hospital Facilities",
  },


  // =====================================================
  // 04 — THIRD FLOOR
  // =====================================================
  {
    src: "/images/gallery/accounts dep.png",
    title: "Accounts Department",
    category: "Hospital Facilities",
  },

  
  // =====================================================
  // 05 — FOURTH FLOOR
  // =====================================================
  {
    src: "/images/gallery/recovery ward.png",
    title: "Recovery Ward",
    category: "Wards & Operation Theatre",
  },
  {
    src: "/images/gallery/ot.png",
    title: "Operation Theatre",
    category: "Operation Theatres",
  },
  {
    src: "/images/gallery/general ot.png",
    title: "General Operation Theatre",
    category: "Operation Theatres",
  },
  {
    src: "/images/gallery/icu.png",
    title: "Intensive Care Unit",
    category: "Critical Care",
  },
  {
    src: "/images/gallery/modular ot.png",
    title: "Modular Operation Theatre",
    category: "Operation Theatres",
  },
  {
    src: "/images/gallery/ophthal ot.png",
    title: "Ophthalmic Operation Theatre",
    category: "Operation Theatres",
  },
  {
    src: "/images/gallery/ophthal ot2.png",
    title: "Ophthalmic Operation Theatre",
    category: "Operation Theatres",
  },
  {
    src: "/images/gallery/surgical minor ot.png",
    title: "Surgical Minor Operation Theatre",
    category: "Operation Theatres",
  },
  {
    src: "/images/gallery/waiting area for private wards.png",
    title: "Private Wards & Waiting Area",
    category: "Private Wards & Facilities",
  },
 

  // =====================================================
  // 06 — FIFTH FLOOR
  // =====================================================
  {
    src: "/images/gallery/canteen.png",
    title: "Hospital Canteen",
    category: "Hospital Facilities",
  },
   
  {
    src: "/images/gallery/solar panels.png",
    title: "Solar Power System",
    category: "Sustainability",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const activePhoto = photos[activeIndex];

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % photos.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + photos.length) % photos.length
    );
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    setTouchStart(null);
  };

  useEffect(() => {
    document.title = "Gallery — SDMKK Charitable Hospital";

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "Escape") {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      <main className="min-h-screen bg-[#f7f9fd]">

        {/* =====================================================
            GALLERY INTRO
        ====================================================== */}
        <section className="border-b border-slate-100 bg-white">
          <div className="container py-14 md:py-18">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1E40AF]">
                  Hospital Facilities
                </p>

                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  A closer look at SDMKK
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                  Explore our hospital facilities, clinical spaces and
                  infrastructure through a closer look at the people and
                  places that make SDMKK what it is.
                </p>
              </div>

              <div className="hidden max-w-xs text-right md:block">
                <p className="text-sm leading-6 text-slate-500">
                  Browse our facilities and clinical spaces.
                  Select a photograph to view it in full.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            FEATURED GALLERY
        ====================================================== */}
        <section className="container py-12 md:py-16">

       {/* =====================================================
    FIXED DESKTOP GALLERY VIEWPORT
====================================================== */}
<div
  className="
    group relative overflow-hidden rounded-[1.75rem]
    border border-slate-200
    bg-[#eef3fa]
    shadow-[0_18px_50px_rgba(15,23,42,0.08)]
  "
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>

  {/* Controlled gallery viewport */}
  <div
    className="
      relative flex w-full items-center justify-center
      h-[min(56.25vw,calc(100vh-300px))]
      min-h-[420px]
      max-h-[680px]
      bg-[#eef3fa]
      px-3 py-3
      md:px-6 md:py-5
    "
  >

    {/* =================================================
        COMPLETE PHOTOGRAPH
    ================================================== */}
    <button
      type="button"
      onClick={() => setLightboxOpen(true)}
      className="
        relative h-full w-full
        cursor-zoom-in
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1E40AF]
        focus-visible:ring-offset-2
      "
      aria-label={`View ${activePhoto.title} in full screen`}
    >

      <Image
        key={activePhoto.src}
        src={activePhoto.src}
        alt={activePhoto.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="
          object-contain
          transition-all duration-500 ease-out
        "
      />

      {/* Very subtle hover treatment */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t
          from-slate-950/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* View full image */}
      <div
        className="
          pointer-events-none absolute
          right-4 top-4
          rounded-full
          border border-white/60
          bg-white/90
          px-3 py-1.5
          text-xs font-medium
          text-slate-700
          opacity-0
          shadow-sm
          backdrop-blur
          transition-all duration-300
          group-hover:opacity-100
        "
      >
        View full image
      </div>

    </button>


    {/* =================================================
        LEFT NAVIGATION — ON IMAGE
    ================================================== */}
    <button
      type="button"
      onClick={goPrevious}
      aria-label="Previous photograph"
      className="
        absolute left-4 top-1/2 z-20
        flex h-11 w-11
        -translate-y-1/2
        items-center justify-center
        rounded-full
        border border-white/70
        bg-white/90
        text-slate-800
        opacity-0
        shadow-lg
        backdrop-blur
        transition-all duration-300
        hover:scale-105
        hover:bg-white
        focus:opacity-100
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1E40AF]
        group-hover:opacity-100
        md:left-7
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M15 18l-6-6 6-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>


    {/* =================================================
        RIGHT NAVIGATION — ON IMAGE
    ================================================== */}
    <button
      type="button"
      onClick={goNext}
      aria-label="Next photograph"
      className="
        absolute right-4 top-1/2 z-20
        flex h-11 w-11
        -translate-y-1/2
        items-center justify-center
        rounded-full
        border border-white/70
        bg-white/90
        text-slate-800
        opacity-0
        shadow-lg
        backdrop-blur
        transition-all duration-300
        hover:scale-105
        hover:bg-white
        focus:opacity-100
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1E40AF]
        group-hover:opacity-100
        md:right-7
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M9 18l6-6-6-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>

  </div>
</div>

          {/* =====================================================
              ELEGANT PHOTO INFORMATION
          ====================================================== */}
          <div className="mt-6 flex flex-col gap-5 border-b border-slate-200 pb-7 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1E40AF]">
                {activePhoto.category}
              </p>

              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {activePhoto.title}
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                {activePhoto.description}
              </p>
            </div>


            {/* Counter */}
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm font-semibold text-slate-900">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-slate-300" />

              <span className="text-sm text-slate-400">
                {String(photos.length).padStart(2, "0")}
              </span>
            </div>

          </div>


          {/* =====================================================
              PROGRESS
          ====================================================== */}
          <div className="mt-5 flex gap-1.5">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`View ${photo.title}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-10 bg-[#1E40AF]"
                    : "w-3 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>


          {/* =====================================================
              MOBILE SWIPE HINT
          ====================================================== */}
          <p className="mt-5 text-center text-xs text-slate-400 md:hidden">
            Swipe left or right to explore
          </p>

        </section>


        {/* =====================================================
            FULL SCREEN LIGHTBOX
        ====================================================== */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 md:p-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label={`${activePhoto.title} full screen gallery`}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-7 md:top-7"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                />
              </svg>
            </button>


            {/* Previous */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous photograph"
              className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-7"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>


            {/* Next */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photograph"
              className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-7"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>


            {/* Image + Caption */}
            <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center">

              <div className="relative h-[70vh] w-full">
                <Image
                  key={`lightbox-${activePhoto.src}`}
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>


              <div className="mt-4 flex w-full max-w-5xl items-end justify-between px-4">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                    {activePhoto.category}
                  </p>

                  <h2 className="mt-1 font-heading text-xl font-semibold text-white md:text-2xl">
                    {activePhoto.title}
                  </h2>
                </div>

                <p className="text-sm text-white/50">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(photos.length).padStart(2, "0")}
                </p>

              </div>

            </div>

          </div>
        )}

      </main>
    </>
  );
}