import Image from "next/image";

export const metadata = {
  title:
    "Leadership & Administration | SDMKK Charitable Hospital, Dombivli",
  description:
    "Learn about the leadership and administration of Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic, a charitable healthcare institution serving the Dombivli community.",
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fd]">

      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container py-14 md:py-18">
          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#1E40AF] sm:text-sm">
              Leadership & Administration
            </p>

            <h1 className="mt-3 font-heading text-4xl font-black tracking-[-0.045em] text-[#0F172A] sm:text-5xl lg:text-6xl">
              Leadership with Experience.
              <br className="hidden md:block" />
              Service with Purpose.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Guided by a long-standing commitment to compassionate,
              accessible and affordable healthcare, our leadership continues
              to uphold the values on which SDMKK was built.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CEO / LEADERSHIP PROFILE
      ====================================================== */}
      <section className="container py-14 md:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* -------------------------------------------------
                LEFT — PHOTOGRAPH
            -------------------------------------------------- */}
            <div className="relative bg-[#F8FAFF] p-6 md:p-8 lg:p-10">
  <div className="relative mx-auto mt-4 aspect-[4/5] max-w-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/leaderships/dr-shreeram-mishra.jpg"
                  alt="Dr. Shreeram Mishra, Chief Executive Officer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[35%_55%]"
                />

              </div>
            </div>


            {/* -------------------------------------------------
                RIGHT — MESSAGE
            -------------------------------------------------- */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">

              {/* Section Label */}
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E40AF]">
                A Message from the Leadership
              </p>


              {/* CEO Name */}
              <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.03em] text-[#0F172A] sm:text-4xl">
                Dr. Shreeram Mishra
              </h2>


              {/* Designation */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-[#1E40AF]">
                  Chief Executive Officer
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-sm font-medium text-[#16A34A]">
                  35+ Years of Dedicated Service
                </span>
              </div>


              {/* Message */}
              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">

                <p>
                  For more than three decades, my association with
                  Shree Dombivali Manav Kalyan Kendra has been a journey
                  of service, responsibility and deep commitment to the
                  community.
                </p>

                <p>
                  Our purpose has always remained simple — to make quality
                  healthcare accessible and affordable, while treating every
                  patient with compassion, dignity and respect.
                </p>

                <p>
                  As we continue to grow, we remain firmly rooted in the
                  values that have shaped this institution: humanity,
                  affordability and selfless service.
                </p>

              </div>


              {/* Signature */}
              <div className="mt-8 border-t border-slate-200 pt-6">

                <p className="font-heading text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
                  Dr. Shreeram Mishra
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Chief Executive Officer
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          LEADERSHIP PRINCIPLE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 md:py-14">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1E40AF] sm:text-sm">
              Our Guiding Principle
            </p>

            <blockquote className="mt-5 font-heading text-2xl font-bold leading-relaxed tracking-[-0.02em] text-[#0F172A] sm:text-3xl">
              “Quality healthcare should remain accessible and affordable
              for all, with compassion and dignity.”
            </blockquote>

            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#16A34A]" />

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              A philosophy that continues to guide the work of
              Shree Dombivali Manav Kalyan Kendra.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}