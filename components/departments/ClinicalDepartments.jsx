"use client";

import { useState } from "react";

import {
  Stethoscope,
  Scissors,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Ear,
  Eye,
  Smile,
  Droplets,
  Sparkles,
  ShieldPlus,
  UserRound,
  Activity,
  Leaf,
  Apple,
  Syringe,
  Venus,
  X,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const departments = [
  {
    name: "General Medicine",
    category: "Medical Care",
    icon: Stethoscope,
    description:
      "Medical care for common health concerns, ongoing conditions and general physician consultation.",
    points: [
      "General physician consultation",
      "Medical assessment",
      "Ongoing care and follow-up",
    ],
  },

  {
    name: "Gastroenterology",
    category: "Digestive Health",
    icon: Activity,
    description:
      "Care related to the digestive system, including stomach, intestine, liver and related health concerns.",
    points: [
      "Digestive health consultation",
      "Gastrointestinal assessment",
      "Specialist follow-up",
    ],
  },

  {
    name: "Gynaecology",
    category: "Women's Health",
    icon: Venus,
    description:
      "Healthcare focused on women's health, reproductive wellbeing and gynaecological concerns.",
    points: [
      "Women's health consultation",
      "Gynaecological assessment",
      "Reproductive health guidance",
    ],
  },

  {
    name: "General Surgery",
    category: "Surgical Care",
    icon: Scissors,
    description:
      "Surgical consultation and care for conditions that may require operative or procedural treatment.",
    points: [
      "Surgical consultation",
      "Pre-operative assessment",
      "Post-operative follow-up",
    ],
  },

  {
    name: "ENT",
    category: "Ear • Nose • Throat",
    icon: Ear,
    description:
      "Care for conditions affecting the ear, nose and throat, helping patients receive focused specialist assessment.",
    points: [
      "Ear-related concerns",
      "Nose and sinus concerns",
      "Throat-related concerns",
    ],
  },

  {
    name: "Oncology",
    category: "Cancer Care",
    icon: ShieldPlus,
    description:
      "Specialist medical care concerned with the evaluation and management of cancer-related conditions.",
    points: [
      "Oncology consultation",
      "Clinical assessment",
      "Specialist care coordination",
    ],
  },

  {
    name: "Dermatology",
    category: "Skin & Hair",
    icon: Sparkles,
    description:
      "Specialist care for skin, hair and related conditions affecting patients of different age groups.",
    points: [
      "Skin consultation",
      "Hair and scalp concerns",
      "Dermatological assessment",
    ],
  },

  {
    name: "Neurology",
    category: "Brain & Nervous System",
    icon: Brain,
    description:
      "Specialist care for conditions involving the brain, nerves and nervous system.",
    points: [
      "Neurological consultation",
      "Nervous-system assessment",
      "Specialist follow-up",
    ],
  },

  {
    name: "Orthopaedic",
    category: "Bones & Joints",
    icon: Bone,
    description:
      "Care related to bones, joints, muscles and movement-related health concerns.",
    points: [
      "Bone and joint consultation",
      "Musculoskeletal assessment",
      "Mobility-related care",
    ],
  },

  {
    name: "Plastic & Cosmetic Surgery",
    category: "Surgical Specialty",
    icon: UserRound,
    description:
      "Specialist surgical consultation relating to reconstructive and cosmetic surgical concerns.",
    points: [
      "Specialist consultation",
      "Surgical assessment",
      "Reconstructive and cosmetic care discussion",
    ],
  },

  {
    name: "Dental Care",
    category: "Oral Health",
    icon: Smile,
    description:
      "Dental and oral healthcare through outpatient consultation and assessment.",
    points: [
      "Dental consultation",
      "Oral health assessment",
      "Dental care guidance",
    ],
  },

  {
    name: "Urology",
    category: "Urinary Health",
    icon: Droplets,
    description:
      "Specialist care for conditions involving the urinary system and related urological concerns.",
    points: [
      "Urological consultation",
      "Urinary health assessment",
      "Specialist follow-up",
    ],
  },

  {
    name: "Ophthalmology",
    category: "Eye Care",
    icon: Eye,
    description:
      "Specialist eye care focused on vision, eye health and ophthalmic assessment.",
    points: [
      "Eye consultation",
      "Vision assessment",
      "Ophthalmic care",
    ],
  },

  {
    name: "Paediatric",
    category: "Child Healthcare",
    icon: Baby,
    description:
      "Healthcare focused on infants, children and adolescents, supporting their growth and wellbeing.",
    points: [
      "Child health consultation",
      "Paediatric assessment",
      "Growth and development guidance",
    ],
  },

  {
    name: "Casualty",
    category: "Urgent Care",
    icon: Syringe,
    description:
      "Hospital-listed casualty care for patients requiring urgent medical attention.",
    points: [
      "Urgent medical assessment",
      "Prompt clinical attention",
      "Emergency support",
    ],
  },

  {
    name: "Cardiology",
    category: "Heart Care",
    icon: HeartPulse,
    description:
      "Specialist care related to the heart and cardiovascular system.",
    points: [
      "Cardiac consultation",
      "Heart health assessment",
      "Cardiology follow-up",
    ],
  },

  {
    name: "Physiotherapy",
    category: "Movement & Rehabilitation",
    icon: Activity,
    description:
      "Care focused on movement, physical function, recovery and rehabilitation.",
    points: [
      "Physiotherapy consultation",
      "Movement and mobility support",
      "Rehabilitation care",
    ],
  },

  {
    name: "Psychiatry",
    category: "Mental Healthcare",
    icon: Brain,
    description:
      "Specialist medical care concerned with mental health and emotional wellbeing.",
    points: [
      "Mental health consultation",
      "Psychiatric assessment",
      "Ongoing specialist care",
    ],
  },

  {
    name: "Homeopathy",
    category: "Alternative Healthcare",
    icon: Leaf,
    description:
      "Homeopathic consultation is included in the hospital's listed OPD departments.",
    points: [
      "Homeopathic consultation",
      "Patient assessment",
      "Individual guidance",
    ],
  },

  {
    name: "Dietician",
    category: "Nutrition & Wellness",
    icon: Apple,
    description:
      "Nutrition-focused consultation and dietary guidance as part of the hospital's listed OPD services.",
    points: [
      "Dietician consultation",
      "Nutrition guidance",
      "Individual dietary advice",
    ],
  },
];

export default function ClinicalDepartments() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <>
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Medical Departments
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Departments delivering coordinated clinical care.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our hospital's listed departments bring different areas of
              medical expertise together to make healthcare easier to
              understand and access.
            </p>

          </div>

          {/* Department Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {departments.map((department, index) => {
              const Icon = department.icon;

              return (
                <button
                  key={department.name}
                  type="button"
                  onClick={() => setSelectedDepartment(department)}
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

                  {/* Category */}
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {department.category}
                  </p>

                  {/* Name */}
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {department.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {department.description}
                  </p>

                  {/* Click indicator */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
                    <span>View department</span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                </button>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================
          DEPARTMENT POPUP
          ========================= */}

      {selectedDepartment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedDepartment(null)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedDepartment(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close department details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="pr-12">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                {(() => {
                  const Icon = selectedDepartment.icon;

                  return (
                    <Icon
                      className="h-9 w-9"
                      strokeWidth={1.8}
                    />
                  );
                })()}
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                {selectedDepartment.category}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                {selectedDepartment.name}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {selectedDepartment.description}
              </p>

            </div>

            {/* Services */}
            <div className="mt-8">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                About this department
              </p>

              <div className="grid gap-3 sm:grid-cols-2">

                {selectedDepartment.points.map((point) => (
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

            {/* OPD reminder */}
            <div className="mt-7 rounded-2xl bg-blue-50 p-5">

              <p className="text-sm leading-6 text-blue-900">
                Consultant names and OPD timings are maintained on the
                hospital's OPD Schedule page. Please check that page for the
                current consultation schedule.
              </p>

            </div>

            {/* Close */}
            <div className="mt-8 flex justify-end">

              <button
                type="button"
                onClick={() => setSelectedDepartment(null)}
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