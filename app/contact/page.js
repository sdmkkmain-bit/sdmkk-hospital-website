  "use client";

  import {
    Phone,
    Mail,
    MapPin,
    CalendarDays,
    Clock3,
    Navigation,
    ArrowRight,
    HeartPulse,
    ShieldCheck,
    Sparkles,
    MessageCircle,
  } from "lucide-react";
  import Footer from "@/components/site/Footer";

  export default function ContactPage() {
    const contactCards = [
      {
        number: "01",
        icon: Phone,
        eyebrow: "CALL US",
        title: "Call Hospital",
        text: "Reach our reception for appointments or urgent enquiries.",
        href: "tel:02512445574",
        action: "Call Hospital",
      },
      {
        number: "02",
        icon: Mail,
        eyebrow: "EMAIL US",
        title: "Email Hospital",
        text: "Send us your enquiry and we will respond as promptly as possible.",
        href: "mailto:sdmk13@yahoo.in",
        action: "Send Email",
      },
      {
        number: "03",
        icon: Navigation,
        eyebrow: "OUR LOCATION",
        title: "Get Directions",
        text: "Find the hospital location and plan your visit with ease.",
        href: "https://www.google.com/maps/search/?api=1&query=Shree+Dombivli+Manav+Kalyan+Kendra",
        action: "Open Maps",
        external: true,
      },
      {
        number: "04",
        icon: CalendarDays,
        eyebrow: "APPOINTMENTS",
        title: "View OPD Schedule",
        text: "See the latest doctor timings and department schedules.",
        href: "/opd-schedule",
        action: "View Schedule",
      },
    ];

    const phoneNumbers = [
      "0251-2445574",
      "0251-2449563",
      "0251-2449573",
    ];

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-slate-900">

        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 text-white">

          {/* Animated background shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="contact-orb contact-orb-one absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-sm" />

            <div className="contact-orb contact-orb-two absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-sky-300/10" />

            <div className="contact-orb contact-orb-three absolute left-[45%] top-20 h-20 w-20 rounded-full bg-white/5 blur-xl" />

          </div>


          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="contact-fade-up flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
                  CONTACT &amp; ASSISTANCE
                </span>

              </div>


              <h1 className="contact-fade-up contact-delay-1 mt-7 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                We&apos;re here whenever
                <span className="block text-blue-100">
                  you need us.
                </span>
              </h1>


              <p className="contact-fade-up contact-delay-2 mt-6 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
                Whether you need medical assistance, appointment information,
                directions to the hospital or help understanding our services,
                our team is here to help.
              </p>


              {/* Hero information */}
              <div className="contact-fade-up contact-delay-3 mt-9 flex flex-wrap gap-4">

                <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    24×7 Emergency Assistance
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    Dombivli, Maharashtra
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            CONTACT ACTION CARDS
        ========================================================== */}

        <section className="relative bg-white py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

            <div className="mb-12 text-center">

              <p className="contact-fade-up text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                GET IN TOUCH
              </p>

              <h2 className="contact-fade-up contact-delay-1 mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Connect with the hospital
              </h2>

              <p className="contact-fade-up contact-delay-2 mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Choose the easiest way to reach us. Every option is designed
                to help you get the information you need quickly.
              </p>

            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {contactCards.map((card, index) => {

                const Icon = card.icon;

                return (
                  <a
                    key={card.number}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className={`contact-card contact-delay-${Math.min(
                      index + 1,
                      4
                    )} group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.14)]`}
                  >

                    {/* Number */}
                    <span className="absolute right-6 top-6 text-[10px] font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-200">
                      {card.number}
                    </span>


                    {/* Background glow */}
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />


                    <div className="relative">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>


                      <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                        {card.eyebrow}
                      </p>


                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {card.title}
                      </h3>


                      <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-500">
                        {card.text}
                      </p>


                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">

                        {card.action}

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />

                      </div>

                    </div>

                  </a>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            EMERGENCY CONTACT
        ========================================================== */}

        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-8 text-white shadow-xl md:p-12">

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
              <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-white/10" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                      <HeartPulse className="h-6 w-6" />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
                      EMERGENCY ASSISTANCE
                    </p>

                  </div>


                  <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                    Need urgent medical assistance?
                  </h2>


                  <p className="mt-4 max-w-2xl text-blue-50">
                    For urgent medical attention, please contact the hospital
                    directly. Our emergency assistance is available around
                    the clock.
                  </p>


                  <div className="mt-7 flex flex-wrap gap-3">

                    {phoneNumbers.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number.replaceAll("-", "")}`}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                      >
                        {number}
                      </a>
                    ))}

                  </div>

                </div>


                <a
                  href="tel:02512445574"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <Phone className="h-5 w-5" />
                  Call Hospital
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            LOCATION + HOURS
        ========================================================== */}

        <section className="bg-white py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

            <div className="grid gap-8 lg:grid-cols-2">

              {/* Location */}
              <div className="contact-panel rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] md:p-10">

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                      OUR LOCATION
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                      Visit the Hospital
                    </h2>

                  </div>


                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>

                </div>


                <p className="mt-6 max-w-md leading-7 text-slate-500">
                  Shree Dombivli Manav Kalyan Kendra
                  <br />
                  Charitable Hospital &amp; Polyclinic
                  <br />
                  Dombivli East, Maharashtra, India
                </p>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shree+Dombivli+Manav+Kalyan+Kendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

              </div>


              {/* Hours */}
              <div className="contact-panel rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] md:p-10">

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                      HOSPITAL HOURS
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                      OPD &amp; Assistance
                    </h2>

                  </div>


                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Clock3 className="h-6 w-6" />
                  </div>

                </div>


                <div className="mt-7 divide-y divide-slate-100">

                  <div className="py-4">

    {/* Monday – Saturday */}
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-600">
        Monday – Saturday
      </span>

      <span className="text-sm font-bold text-slate-900">
        08:00 AM – 09:00 PM
      </span>
    </div>

    {/* Sunday */}
    <div className="mt-4 flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-600">
        Sunday
      </span>

      <span className="text-sm font-bold text-slate-900">
        08:00 AM – 02:00 PM
      </span>
    </div>

  </div>


                  <div className="flex items-center justify-between py-4">

                    <span className="text-sm font-semibold text-slate-600">
                      Emergency
                    </span>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                      24 × 7
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            GOOGLE MAPS
        ========================================================== */}

        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

            <div className="contact-map overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)]">

              <div className="flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between md:p-9">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                    FIND US
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Find the Hospital on Google Maps
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Locate our hospital and get directions from your current location.
                  </p>

                </div>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shree+Dombivli+Manav+Kalyan+Kendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                >
                  <Navigation className="h-4 w-4" />
                  Open Google Maps
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

              </div>


              <div className="relative h-[420px] w-full overflow-hidden">

                <iframe
                  title="Shree Dombivli Manav Kalyan Kendra location"
                  src="https://www.google.com/maps?q=Shree+Dombivli+Manav+Kalyan+Kendra&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 border-t border-slate-200" />

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            WHY PATIENTS TRUST US
        ========================================================== */}

        <section className="bg-white py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

            <div className="contact-trust relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.06)] md:p-12">

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-50" />

              <div className="relative">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                  WHY PATIENTS TRUST US
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                  Compassionate care, affordable access and ethical service for every patient.
                </h2>


                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">

                    <ShieldCheck className="h-6 w-6 text-blue-600" />

                    <h3 className="mt-4 font-bold">
                      Patient-first care
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      A compassionate approach focused on every patient&apos;s needs.
                    </p>

                  </div>


                  <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">

                    <HeartPulse className="h-6 w-6 text-blue-600" />

                    <h3 className="mt-4 font-bold">
                      Comprehensive services
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Multiple departments, diagnostics and healthcare services under one roof.
                    </p>

                  </div>


                  <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">

                    <Sparkles className="h-6 w-6 text-blue-600" />

                    <h3 className="mt-4 font-bold">
                      Quality &amp; accessibility
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Healthcare designed to remain accessible to the community.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="bg-slate-50 pb-20 md:pb-24">

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-8 text-white shadow-xl md:p-10">

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
                    WE&apos;RE HERE WHENEVER YOU NEED US
                  </p>

                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Need assistance?
                  </h2>

                  <p className="mt-3 max-w-2xl text-blue-50">
                    Our hospital team is here to guide you regarding appointments,
                    departments and hospital services.
                  </p>

                </div>


                <div className="flex flex-wrap gap-3">

                  <a
                    href="tel:02512445574"
                    className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Phone className="h-4 w-4" />
                    Call Hospital
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>


                  <a
                    href="/opd-schedule"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    <CalendarDays className="h-4 w-4" />
                    View OPD Schedule
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            CONTACT PAGE ANIMATIONS
        ========================================================== */}

        <style jsx>{`

          @keyframes contactFadeUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }


          @keyframes contactFloatOne {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(-25px, 20px, 0);
            }
          }


          @keyframes contactFloatTwo {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(30px, -20px, 0) scale(1.08);
            }
          }


          @keyframes contactFloatThree {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-18px);
            }
          }


          .contact-fade-up {
            opacity: 0;
            animation: contactFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }


          .contact-delay-1 {
            animation-delay: 0.12s;
          }


          .contact-delay-2 {
            animation-delay: 0.24s;
          }


          .contact-delay-3 {
            animation-delay: 0.36s;
          }


          .contact-delay-4 {
            animation-delay: 0.48s;
          }


          .contact-orb-one {
            animation: contactFloatOne 8s ease-in-out infinite;
          }


          .contact-orb-two {
            animation: contactFloatTwo 10s ease-in-out infinite;
          }


          .contact-orb-three {
            animation: contactFloatThree 5s ease-in-out infinite;
          }


          .contact-card {
            opacity: 0;
            animation: contactFadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }


          .contact-panel,
          .contact-map,
          .contact-trust {
            animation: contactFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }


          @media (prefers-reduced-motion: reduce) {

            .contact-fade-up,
            .contact-card,
            .contact-panel,
            .contact-map,
            .contact-trust,
            .contact-orb-one,
            .contact-orb-two,
            .contact-orb-three {
              animation: none !important;
              opacity: 1 !important;
            }

          }

        `}</style>

      </main>

    </>
    );
  }