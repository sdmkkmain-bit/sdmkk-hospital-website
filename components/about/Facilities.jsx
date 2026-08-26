import {
  Stethoscope,
  Microscope,
  Ambulance,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    icon: <Stethoscope className="w-10 h-10 text-blue-700" />,
    title: "Multi-Speciality Care",
    description:
      "Comprehensive healthcare services across multiple specialties delivered by experienced consultants and dedicated medical professionals.",
  },
  {
    icon: <Microscope className="w-10 h-10 text-blue-700" />,
    title: "Modern Diagnostics",
    description:
      "Reliable diagnostic services supported by modern medical equipment for timely and accurate patient care.",
  },
  {
    icon: <Ambulance className="w-10 h-10 text-blue-700" />,
    title: "Emergency Services",
    description:
      "Prompt emergency medical care with trained professionals focused on patient safety and compassionate treatment.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-blue-700" />,
    title: "Affordable Healthcare",
    description:
      "Quality healthcare at charitable rates, ensuring advanced medical services remain accessible to every family.",
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
            OUR FACILITIES
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Modern Healthcare.
            <br />
            Compassionate Service.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our hospital combines modern infrastructure, experienced medical
            professionals and compassionate care to provide quality treatment
            under one roof while remaining committed to affordable healthcare.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

          {facilities.map((facility, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {facility.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {facility.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                {facility.description}
              </p>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            href="/departments"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Our Departments
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}