export default function JourneyTimeline() {
 const journeyTimeline = [
  {
    year: "1984",
    title: "The Beginning",
    description: (
      <>
        Shree Dombivali Manav Kalyan Kendra Charitable Hospital was established on the auspicious occasion
         of Gudi Padwa through the vision and dedicated efforts of{" "}
        <strong>
          Dr. Mulchand Chheda, Shri Mavji Vora, Shri Premji Savla
        </strong>{" "}
        and their committed team. The institution began its journey with a humble 500 sq. ft. charitable 
        healthcare facility devoted to serving society.
      </>
    ),
  },
    {
      year: "1984 – 2023",
      title: "Steady Growth",
      description:
        "Over the next four decades, the hospital steadily expanded its infrastructure, medical specialties and patient-care services. While growing from a small charitable clinic into a respected multi-speciality institution, it remained firmly committed to affordable, compassionate and ethical healthcare for every patient.",
    },
    {
  year: "April 2024",
  title: "A New Era of Transformation",
 description: (
  <>
    Under the leadership of{" "}
    <strong>Dr. Chandresh H. Pasad</strong>{" "}
    and the Board of Trustees, the hospital expanded, significantly
    strengthening its infrastructure and broadening its medical services.
    Patient-care facilities were modernized, advanced equipment were
    introduced, medical specialties were expanded, and the institution
    embraced a renewed vision for the future while preserving its founding
    philosophy of providing Corporate Care at Charitable Rate.
  </>
),
},
    {
      year: "Today",
      title: "Serving the Community",
      description:
        "Today, the hospital continues its mission with more than 110 consultants across multiple specialties, providing Corporate Care at Charitable Rate while serving thousands of patients every year with compassion, integrity and dignity.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
            OUR JOURNEY
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Four Decades of Service to Society
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Since 1984, every milestone has strengthened our commitment to
            compassionate, ethical and affordable healthcare while preserving
            our philosophy of
            <span className="font-semibold text-blue-700">
              {" "}
              Corporate Care at Charitable Rate.
            </span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-blue-200"></div>

          {journeyTimeline.map((item, index) => (
            <div key={index} className="relative pl-14 mb-10">

              {/* Dot */}
              <div className="absolute left-[18px] top-8 z-10">
  <div className="w-4 h-4 rounded-full bg-blue-700 border-4 border-white shadow-sm"></div>

</div>

              {/* Card */}
              <div
                className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
             
                {/* Year */}
                <span className="inline-flex rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[17px] leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}