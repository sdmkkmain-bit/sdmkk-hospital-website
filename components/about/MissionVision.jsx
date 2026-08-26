import {
  Heart,
  ShieldCheck,
  Users,
  HandHeart,
  Target,
} from "lucide-react";

const values = [
  {
    icon: <Heart className="w-8 h-8 text-blue-700" />,
    title: "Compassion",
    description:
      "Treating every patient with empathy, dignity and respect while delivering quality healthcare.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700" />,
    title: "Integrity",
    description:
      "Maintaining honesty, transparency and ethical practices in every aspect of patient care.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-700" />,
    title: "Accessibility",
    description:
      "Providing quality healthcare at charitable rates so medical services remain accessible to everyone.",
  },
  {
    icon: <HandHeart className="w-8 h-8 text-blue-700" />,
    title: "Service",
    description:
      "Serving society with dedication, responsibility and compassion since 1984.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
            OUR PHILOSOPHY
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Guided by Compassion. Driven by Service.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Shree Dombivli Manav Kalyan Kendra Charitable Hospital follows the
            founding philosophy of compassionate, ethical and affordable
            healthcare while serving every patient with dignity.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-8">

            {/* Mission */}

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-blue-700" />
                </div>

                <div>

                  <p className="uppercase tracking-[0.3em] text-blue-700 text-xs font-semibold">
                    OUR MISSION
                  </p>

                  <h3 className="text-3xl font-bold text-slate-900 mt-2">
                    Corporate Care at Charitable Rate
                  </h3>

                </div>

              </div>

              <p className="mt-8 text-slate-600 leading-8 text-lg">
                To provide ethical, compassionate and affordable healthcare by
                combining modern medical excellence with charitable service,
                ensuring every patient receives respectful and patient-centred
                care irrespective of financial background.
              </p>

            </div>

            {/* Vision */}

            <div className="bg-blue-700 rounded-3xl shadow-xl p-8 text-white">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>

                <div>

                  <p className="uppercase tracking-[0.3em] text-blue-100 text-xs font-semibold">
                    OUR VISION
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    Healthcare with Humanity
                  </h3>

                </div>

              </div>

              <p className="mt-8 leading-8 text-blue-50 text-lg">
                To remain a trusted charitable multi-speciality institution that
                continually advances medical care while preserving the values of
                compassion, integrity, accessibility and community service
                established by our founders.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold mb-8">
              OUR CORE VALUES
            </p>

            <div className="grid grid-cols-2 gap-6">
  {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition"
                >
                  <div className="mb-4">
                    {value.icon}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-slate-600 leading-7">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>


          </div>

               </div>

        {/* Philosophy Quote */}

        <div className="mt-16 max-w-6xl mx-auto">

          <div className="border-t border-slate-200 pt-10">

            <p className="text-center text-2xl md:text-3xl italic font-medium leading-10 text-slate-700">

              "Serving Humanity with
              <span className="text-blue-700 font-semibold">
                {" "}Compassion,
              </span>

              <span className="text-blue-700 font-semibold">
                {" "}Integrity
              </span>

              &

              <span className="text-blue-700 font-semibold">
                {" "}Affordable Healthcare
              </span>

              Since 1984."

            </p>

          </div>

        </div>

      </div>

    </section>
      );
}