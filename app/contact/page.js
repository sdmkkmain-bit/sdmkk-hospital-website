import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, LifeBuoy, ArrowRight, Calendar, HeartPulse, ShieldCheck, Users } from 'lucide-react'

export const metadata = { title: 'Contact — SDMKK Charitable Hospital' }

const phoneNumbers = ['0251-2445574', '0251-2449563', '0251-2449573']
const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=Manav+Kalyan+Kendra+Hospital+Ground+1st+%26+2nd+Floor+Sharda+Apartment+TATA+Power+Lane+Joshi+Wadi+Tilak+Nagar+Dombivli+East+Kalyan+Maharashtra+421201'
const embedSrc =
  'https://www.google.com/maps?q=Manav+Kalyan+Kendra+Hospital+Ground+1st+%26+2nd+Floor+Sharda+Apartment+TATA+Power+Lane+Joshi+Wadi+Tilak+Nagar+Dombivli+East+Kalyan+Maharashtra+421201&output=embed'

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="overflow-hidden bg-[#1E40AF] py-20 text-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-200 font-semibold">Contact Us</p>
            <h1 className="text-4xl font-heading font-black tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
              We are here to assist you with appointments, enquiries and emergency healthcare services.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Our team is committed to providing timely support and compassionate guidance for every patient and family.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <Users className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1E40AF] font-semibold">Reception</p>
            <div className="mt-4 space-y-3 text-slate-600 leading-7">
              {phoneNumbers.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <Mail className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1E40AF] font-semibold">Email</p>
            <p className="mt-4 text-slate-600 leading-7">sdmk13@yahoo.in</p>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1E40AF] font-semibold">Address</p>
            <p className="mt-4 text-slate-600 leading-7">
              Manav Kalyan Kendra Hospital
              <br /> Ground, 1st &amp; 2nd Floor,
              <br /> Sharda Apartment,
              <br /> TATA Power Lane,
              <br /> Joshi Wadi,
              <br /> Tilak Nagar,
              <br /> Dombivli East,
              <br /> Kalyan,
              <br /> Maharashtra 421201
            </p>
          </a>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <Clock className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1E40AF] font-semibold">Working Hours</p>
            <div className="mt-4 text-slate-600 leading-7 space-y-3">
              <div>
                <span className="font-semibold text-slate-900">Monday – Saturday</span>
                <br /> OPD Timings: 08:00 AM – 09:00 PM
              </div>
              <div>
                <span className="font-semibold text-slate-900">Sunday</span>
                <br /> OPD Timings: 08:00 AM – 02:00 PM
              </div>
              <div>
                <span className="font-semibold text-slate-900">Emergency Services</span>
                <br /> 24 × 7
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <iframe
              src={embedSrc}
              title="Manav Kalyan Kendra Hospital location map"
              className="h-[450px] w-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-slate-200 bg-white p-8 text-center">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#1E40AF] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1E40AF]/20 transition hover:bg-[#173F8A]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="rounded-[2rem] border border-[#1E40AF] bg-[#1E40AF] p-10 text-white shadow-soft shadow-[#1E40AF]/20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-[#BFDBFE] font-semibold">Need Immediate Medical Assistance?</p>
              <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl">
                Our emergency services are available around the clock to provide timely medical care whenever you need us.
              </h2>
              <div className="space-y-3 text-slate-100 leading-8">
                <p>Please call any of the hospital numbers below for urgent assistance.</p>
                {phoneNumbers.map((phone) => (
                  <p key={phone} className="font-semibold text-white">
                    {phone}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <a
                href={`tel:${phoneNumbers[0].replace(/-/g, '')}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#1E40AF] shadow-lg shadow-[#000000]/10 transition hover:bg-slate-100"
              >
                Call Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <a
            href={`tel:${phoneNumbers[0].replace(/-/g, '')}`}
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Call Hospital</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Reach our reception for appointments or urgent enquiries.</p>
          </a>

          <a
            href="mailto:sdmk13@yahoo.in"
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Email Hospital</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Send us your enquiry and we will respond as promptly as possible.</p>
          </a>

          <a
            href="https://maps.app.goo.gl/TJq3PxjiUMbLTGVn7"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Get Directions</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Find the hospital location and plan your visit with ease.</p>
          </a>

          <Link
            href="/opd-schedule"
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#1E40AF]/10 text-[#1E40AF]">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">View OPD Schedule</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">See the latest doctor timings and department schedules.</p>
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1E40AF] font-semibold">Why Patients Trust Us</p>
            <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">
              Compassionate care, affordable access and ethical service for every patient.
            </h2>
            <div className="mt-6 space-y-5 text-slate-600 leading-8">
              <p>
                Patients choose SDMKK because we combine corporate care standards with charitable rates and a patient-first approach.
              </p>
              <p>
                Our team delivers healthcare with warmth, dignity and respect, ensuring services remain accessible to everyone in the community.
              </p>
              <p>
                We focus on ethical medical practice, experienced professionals and support that helps patients feel heard and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-[#1E40AF] p-10 text-white shadow-soft shadow-[#1E40AF]/20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#BFDBFE] font-semibold">We're Here Whenever You Need Us</p>
              <h2 className="mt-4 text-3xl font-heading font-bold text-white sm:text-4xl">
                Whether you need an appointment, medical guidance or emergency assistance, our team is always ready to support you with compassion, professionalism and quality healthcare.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href={`tel:${phoneNumbers[0].replace(/-/g, '')}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#1E40AF] shadow-lg shadow-[#000000]/10 transition hover:bg-slate-100"
              >
                Call Hospital
              </a>
              <Link
                href="/opd-schedule"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                View OPD Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
