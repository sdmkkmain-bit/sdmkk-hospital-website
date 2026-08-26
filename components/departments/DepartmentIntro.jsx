import { ShieldCheck, Users, HeartHandshake, Stethoscope } from "lucide-react";

export default function DepartmentIntro() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10 shadow-sm hover:shadow-xl transition-all duration-300">

            <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
              NABH QUALITY CARE
            </p>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 leading-tight">
              Comprehensive medical care under one roof.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our specialists, modern diagnostics and patient-first approach
              work together to provide ethical, affordable and compassionate
              healthcare for every patient.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="rounded-2xl bg-white p-5 border border-slate-200">
                <Users className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="font-semibold">Patient First</h4>
              </div>

               <div className="rounded-2xl bg-white p-5 border border-slate-200">
                <HeartHandshake className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="font-semibold">Compassionate Care</h4>
              </div>


              <div className="rounded-2xl bg-white p-5 border border-slate-200">
                <Stethoscope className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="font-semibold">Experienced Specialists</h4>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="font-semibold">Quality Healthcare</h4>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300">

            <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
              DEPARTMENT HIGHLIGHTS
            </p>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 leading-tight">
              Healthcare designed around every patient's needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every department works together to provide seamless diagnosis,
              treatment and follow-up care using modern technology and
              experienced consultants.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-blue-700" />
                <div>
                  <h4 className="font-semibold">Integrated Diagnostics</h4>
                  <p className="text-slate-600 text-sm">
                    Accurate investigations under one roof.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                <HeartHandshake className="w-8 h-8 text-blue-700" />
                <div>
                  <h4 className="font-semibold">Coordinated Treatment</h4>
                  <p className="text-slate-600 text-sm">
                    Specialists collaborate for better outcomes.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}