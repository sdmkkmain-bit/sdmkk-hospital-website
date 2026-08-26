import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[6px] text-blue-700 font-semibold mb-6">
            ABOUT SHREE DOMBIVALI MANAV KALYAN KENDRA
          </p>

          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
  <span className="block">CORPORATE CARE</span>

  <span className="block text-center">AT</span>

  <span className="block">CHARITABLE RATE</span>
</h1>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Serving the community through compassionate,
            ethical and affordable healthcare for over
            four decades.
          </p>

        </div>

        {/* RIGHT */}

        <div>

          <Image
            src="/images/logos/hospital.png"
            alt="Hospital Building"
            width={800}
            height={600}
            className="rounded-[32px] shadow-2xl w-full object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}