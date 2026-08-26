"use client";

import { useState } from "react";
import {
  ScanLine,
  HeartPulse,
  FlaskConical,
  Stethoscope,
  X,
  Activity,
  Microscope,
  ShieldCheck,
  Syringe,
  Monitor,
} from "lucide-react";

const equipmentCategories = [
  {
    number: "01",
    icon: ScanLine,
    eyebrow: "ULTRASOUND & SONOGRAPHY",
    title: "Advanced Ultrasound Technology",
    description:
      "Modern ultrasound systems supporting diagnostic sonography and imaging services.",
    brands: [
      {
        name: "Samsung",
        description: "Ultrasound imaging technology for diagnostic sonography.",
        icon: ScanLine,
      },
      {
        name: "Toshiba / Canon Medical",
        description:
          "Ultrasound imaging technology supporting diagnostic examinations.",
        icon: ScanLine,
      },
    ],
  },

  {
    number: "02",
    icon: FlaskConical,
    eyebrow: "PATHOLOGY & LABORATORY",
    title: "Modern Laboratory Technology",
    description:
      "Laboratory systems supporting blood, biochemistry, HbA1c, coagulation, electrolyte and other diagnostic investigations.",
    brands: [
      {
        name: "Siemens",
        description:
          "Laboratory technology supporting routine diagnostic testing.",
        icon: FlaskConical,
      },
      {
        name: "Transasia",
        description:
          "Biochemistry testing technology used for laboratory investigations.",
        icon: Activity,
      },
      {
        name: "Erba Mannheim",
        description:
          "Laboratory chemistry technology supporting routine testing.",
        icon: FlaskConical,
      },
      {
        name: "Bio-Rad",
        description:
          "HbA1c testing technology supporting diabetes-related laboratory assessment.",
        icon: Activity,
      },
      {
        name: "Sysmex",
        description:
          "Hematology technology supporting blood-cell analysis and CBC testing.",
        icon: Microscope,
      },
      {
        name: "Coagulation & Electrolyte Systems",
        description:
          "Dedicated laboratory technology supporting clotting and electrolyte investigations.",
        icon: Activity,
      },
    ],
  },

  {
    number: "03",
    icon: HeartPulse,
    eyebrow: "CARDIAC & PATIENT MONITORING",
    title: "Monitoring & Emergency Technology",
    description:
      "Cardiac assessment, patient monitoring and emergency-support technology used across patient-care areas.",
    brands: [
      {
        name: "Philips",
        description:
          "Patient monitoring and cardiac-support technology.",
        icon: HeartPulse,
      },
      {
        name: "Portable ECG",
        description:
          "Portable electrocardiography for cardiac assessment.",
        icon: Activity,
      },
      {
        name: "Philips Defibrillator",
        description:
          "Emergency equipment supporting rapid cardiac care.",
        icon: HeartPulse,
      },
      {
        name: "BPL",
        description:
          "Electrocardiography equipment supporting ECG assessment.",
        icon: Activity,
      },
    ],
  },

  {
    number: "04",
    icon: Stethoscope,
    eyebrow: "ANAESTHESIA & PATIENT SUPPORT",
    title: "Operation Theatre Technology",
    description:
      "Technology and equipment supporting anaesthesia, surgical procedures, patient monitoring and safe operation-theatre care.",
    brands: [
      {
        name: "Patient Monitoring",
        description:
          "Monitoring systems supporting continuous observation of patients during care.",
        icon: Monitor,
      },
      {
        name: "Electrosurgical / Cautery Systems",
        description:
          "Technology supporting surgical procedures and electrosurgery.",
        icon: Syringe,
      },
      
      {
        name: "Surgical Equipment",
        description:
          "Equipment supporting procedures performed in the operation theatre.",
        icon: Stethoscope,
      },
      {
        name: "OT Support & Safety Equipment",
        description:
          "Equipment supporting safe and effective operation-theatre care.",
        icon: ShieldCheck,
      },
      {
        name: "Dräger",
        description:
          "Anaesthesia technology supporting controlled and monitored surgical care.",
        icon: Stethoscope,
      },
    ],
  },
];

export default function MedicalEquipment() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              MEDICAL EQUIPMENT & TECHNOLOGY
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Technology supporting better patient care.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our hospital uses established medical technology across
              diagnostic, laboratory, cardiac and operation-theatre services
              to support safe and effective patient care.
            </p>

          </div>

          {/* EQUIPMENT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {equipmentCategories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.number}
                  onClick={() => setSelectedCategory(category)}
                  className="group text-left rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <span className="text-xs font-semibold text-slate-300">
                      {category.number}
                    </span>

                  </div>

                  <p className="mt-7 text-[10px] font-bold tracking-[0.22em] text-blue-600 uppercase">
                    {category.eyebrow}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900 leading-tight">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    View technology
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>

                </button>
              );
            })}

          </div>

          {/* BOTTOM INFORMATION STRIP */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-8 md:p-10 text-white">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                  TECHNOLOGY • CARE • TRUST
                </p>

                <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                  Modern technology with patient-focused care.
                </h3>

                <p className="mt-3 max-w-3xl text-blue-50 leading-7">
                  Equipment and technology are selected to support diagnosis,
                  treatment, monitoring and safe patient care across the
                  hospital.
                </p>
              </div>

              <div className="w-14 h-14 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                <HeartPulse className="w-7 h-7 text-white" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* POPUP */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedCategory(null)}
        >

          <div
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-[2rem] bg-white shadow-2xl animate-[fadeIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* POPUP HEADER */}
            <div className="relative overflow-hidden rounded-t-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-8 md:p-10 text-white">

              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />
              <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-white/10" />

              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/90 text-slate-700 flex items-center justify-center hover:bg-white hover:scale-105 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative flex items-start gap-5 pr-12">

                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                  {(() => {
                    const PopupIcon = selectedCategory.icon;
                    return <PopupIcon className="w-8 h-8 text-white" />;
                  })()}
                </div>

                <div>

                  <p className="text-xs font-bold tracking-[0.3em] text-blue-100 uppercase">
                    {selectedCategory.eyebrow}
                  </p>

                  <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
                    {selectedCategory.title}
                  </h2>

                </div>

              </div>

              <p className="relative mt-6 text-lg leading-8 text-blue-50">
                {selectedCategory.description}
              </p>

            </div>

            {/* POPUP CONTENT */}
            <div className="p-6 md:p-8">

              <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-5">
                TECHNOLOGY & SYSTEMS
              </p>

              <div className="space-y-4">

                {selectedCategory.brands.map((brand, index) => {
                  const BrandIcon = brand.icon;

                  return (
                    <div
                      key={`${brand.name}-${index}`}
                      className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                    >

                      <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                        <BrandIcon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <div>
                        <h3 className="font-bold text-lg text-slate-900">
                          {brand.name}
                        </h3>

                        <p className="mt-1 text-sm md:text-base text-slate-600">
                          {brand.description}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              {/* NOTE */}
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <p className="text-sm md:text-base leading-7 text-blue-900">
                  The equipment and technology information presented here
                   highlights the systems available across the hospital's
                    patient-care services. Specific equipment details may
                     vary as services are updated.
                </p>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}