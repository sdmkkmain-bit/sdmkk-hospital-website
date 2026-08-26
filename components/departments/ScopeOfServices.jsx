"use client";

import { useState } from "react";

import {
  Stethoscope,
  Ambulance,
  Activity,
  Microscope,
  Smile,
  PersonStanding,
  Apple,
  Leaf,
  X,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Specialist OPD",
    subtitle: "Consultation & follow-up",
    description:
      "Specialist outpatient consultations across the hospital's listed medical departments.",
    icon: Stethoscope,
    popup: "specialist",
  },
  {
    title: "General Medicine",
    subtitle: "Adult medical care",
    description:
      "Medical care for common health concerns and general physician consultations.",
    icon: Activity,
    popup: "medicine",
  },
  {
    title: "Casualty Care",
    subtitle: "Urgent medical attention",
    description:
      "Hospital-listed casualty services for patients requiring urgent medical attention.",
    icon: Ambulance,
    popup: "casualty",
  },
  {
    title: "Diagnostic Services",
    subtitle: "Tests & investigations",
    description:
      "A range of diagnostic investigations available through the hospital.",
    icon: Microscope,
    popup: "diagnostic",
  },
  {
    title: "Dental Care",
    subtitle: "Oral healthcare",
    description:
      "Dental care is included among the hospital's listed OPD departments.",
    icon: Smile,
    popup: "dental",
  },
  {
    title: "Physiotherapy",
    subtitle: "Movement & rehabilitation",
    description:
      "Physiotherapy is available as one of the hospital's listed OPD services.",
    icon: PersonStanding,
    popup: "physiotherapy",
  },
  {
    title: "Dietician",
    subtitle: "Nutrition guidance",
    description:
      "Dietician services are available as part of the hospital's listed OPD services.",
    icon: Apple,
    popup: "dietician",
  },
  {
    title: "Homeopathy",
    subtitle: "Homeopathic consultation",
    description:
      "Homeopathy is included among the hospital's listed OPD departments.",
    icon: Leaf,
    popup: "homeopathy",
  },
];

const diagnosticServices = [
  "Pathology",
  "X-Ray",
  "Histopathology",
  "Sonography",
  "ECG",
  "2D-Echo",
  "EEG / EMG",
  "Color Doppler",
  "Audiogram",
  "PFT",
  
];

const specialistDepartments = [
  "Medicine",
  "Surgery",
  "Ophthalmology",
  "ENT",
  "Orthopaedic",
  "Gynaecology",
  "Dental Care",
  "Gastroenterology",
  "Dermatology",
  "Oncology",
  "Neurology",
  "Plastic & Cosmetic Surgery",
  "Urology",
  "Paediatric",
  "Cardiology",
  "Psychiatry",
  "Homeopathy",
  "Dietician",
  "Casualty",
  "Physiotherapy",
];

const popupContent = {
  medicine: {
    title: "General Medicine",
    subtitle: "Adult medical care",
    icon: Activity,
    description:
      "General Medicine is the hospital's physician-led medical care service for adult patients. It is one of the departments listed in the hospital's OPD schedule.",
    points: [
      "General physician consultation",
      "Assessment of common medical concerns",
      "Ongoing medical care and follow-up",
    ],
  },

  casualty: {
    title: "Casualty Care",
    subtitle: "Urgent medical attention",
    icon: Ambulance,
    description:
      "Casualty is one of the hospital's listed clinical services for patients who require urgent medical attention.",
    points: [
      "Urgent medical assessment",
      "Immediate clinical attention",
      "Support for patients requiring prompt care",
    ],
  },

  dental: {
    title: "Dental Care",
    subtitle: "Oral healthcare",
    icon: Smile,
    description:
      "Dental Care is included in the hospital's official list of OPD departments.",
    points: [
      "Dental consultation",
      "Oral healthcare",
      "Outpatient dental care",
    ],
  },

  physiotherapy: {
    title: "Physiotherapy",
    subtitle: "Movement & rehabilitation",
    icon: PersonStanding,
    description:
      "Physiotherapy is one of the hospital's listed OPD services, supporting patients through physiotherapy care and rehabilitation.",
    points: [
      "Physiotherapy consultation",
      "Movement and functional support",
      "Rehabilitation-focused care",
    ],
    extra:
      "The supplied OPD schedule lists physiotherapy consultants and regular consultation timings.",
  },

  dietician: {
    title: "Dietician",
    subtitle: "Nutrition guidance",
    icon: Apple,
    description:
      "Dietician services are included in the hospital's official OPD department list.",
    points: [
      "Dietician consultation",
      "Nutrition guidance",
      "Individual dietary advice",
    ],
    extra:
      "The supplied OPD schedule lists Dietician consultations and regular consultation timings.",
  },

  homeopathy: {
    title: "Homeopathy",
    subtitle: "Homeopathic consultation",
    icon: Leaf,
    description:
      "Homeopathy is included in the hospital's official OPD department list.",
    points: [
      "Homeopathic consultation",
      "Outpatient consultation",
      "Patient-focused guidance",
    ],
    extra:
      "The supplied OPD schedule lists homeopathic consultants and regular consultation timings.",
  },

  diagnostic: {
    title: "Diagnostic Services",
    subtitle: "Tests & investigations",
    icon: Microscope,
    description:
      "The hospital's supplied OPD material specifically lists the following diagnostic services.",
    points: diagnosticServices,
  },
};

export default function ScopeOfServices() {
  const [activePopup, setActivePopup] = useState(null);

  const activeService = services.find(
    (service) => service.popup === activePopup
  );

  const activeContent =
    activePopup === "specialist"
      ? {
          title: "Specialist OPD",
          subtitle: "Consultation & follow-up",
          icon: Stethoscope,
          description:
            "The hospital's OPD schedule lists a wide range of specialist departments. Visitors can use the OPD Schedule page for consultant timings.",
          points: specialistDepartments,
        }
      : popupContent[activePopup];

  return (
    <>
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Scope of Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From specialist consultations and urgent care to diagnostic
              investigations and supportive healthcare services, our hospital
              brings multiple areas of care together under one roof.
            </p>

          </div>

          {/* Service Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <button
                  type="button"
                  key={service.title}
                  onClick={() => setActivePopup(service.popup)}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >

                  {/* Number */}
                  <div className="absolute right-5 top-5 text-xs font-bold text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon
                      className="h-9 w-9"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Click indicator */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
                    <span>View details</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </button>
              );
            })}

          </div>

          {/* Bottom Strip */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-700 to-sky-500 p-8 text-white shadow-lg md:p-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                  One Hospital • Multiple Areas of Care
                </p>

                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  Healthcare that is easier to understand and easier to access.
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-blue-50">
                  Explore our services, diagnostic facilities and clinical
                  departments to understand the healthcare available through
                  the hospital.
                </p>

              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          SERVICE POPUP
          ========================= */}

      {activePopup && activeContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-5 py-8 backdrop-blur-sm"
          onClick={() => setActivePopup(null)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Popup Header */}
            <div className="pr-12">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <activeContent.icon
                  className="h-9 w-9"
                  strokeWidth={1.8}
                />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                {activeContent.subtitle}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                {activeContent.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {activeContent.description}
              </p>

            </div>

            {/* Information */}
            <div className="mt-8">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Available / Listed Services
              </p>

              <div className="grid gap-3 sm:grid-cols-2">

                {activeContent.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                    <span className="font-semibold text-slate-800">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Extra information */}
            {activeContent.extra && (
              <div className="mt-7 rounded-2xl bg-blue-50 p-5">

                <div className="flex gap-3">

                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                  <p className="text-sm leading-6 text-blue-900">
                    {activeContent.extra}
                  </p>

                </div>

              </div>
            )}

            {/* Specialist note */}
            {activePopup === "specialist" && (
              <div className="mt-7 rounded-2xl bg-slate-50 p-5">

                <div className="flex gap-3">

                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                  <p className="text-sm leading-6 text-slate-700">
                    Consultant names and timings are maintained separately on
                    the OPD Schedule page so visitors can check the latest
                    available schedule there.
                  </p>

                </div>

              </div>
            )}

            {/* Bottom */}
            <div className="mt-8 flex justify-end">

              <button
                type="button"
                onClick={() => setActivePopup(null)}
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}