export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">

          <p className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Medical Specialities
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-white">
            Medical Departments
          </h1>

          <p className="mt-8 text-xl leading-9 text-blue-50">
            Comprehensive healthcare delivered through experienced specialists,
            advanced diagnostics and compassionate patient care — all under one roof.
          </p>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-green-500"></div>
    </section>
  );
}