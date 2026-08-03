'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, MapPin, Calendar, BedDouble, ArrowRight, ShieldCheck,
  Users, Stethoscope, HeartHandshake, ChevronRight, Clock, Award,
  Image as ImageIcon, FileCheck2, UserSquare2, Building2, Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HOSPITAL } from '@/lib/site'

const stats = [
  { icon: BedDouble, value: '40', label: 'Hospital Beds', accent: 'from-[#1E40AF] to-[#2563EB]' },
  { icon: Stethoscope, value: '110+', label: 'Consultants', accent: 'from-[#2563EB] to-[#0EA5E9]' },
  { icon: HeartHandshake, value: 'Multi', label: 'Speciality Hospital', accent: 'from-[#0EA5E9] to-[#16A34A]' },
  { icon: ShieldCheck, value: 'Charitable', label: 'Healthcare Trust', accent: 'from-[#16A34A] to-[#1E40AF]' },
]

const bedCards = [
  {
    title: 'Hospital Beds',
    subtitle: 'General ward availability',
    icon: BedDouble,
    color: 'from-[#1E40AF] to-[#2563EB]',
    pillBg: 'bg-blue-50 text-[#1E40AF]',
  },
  {
    title: 'IPF Beds',
    subtitle: 'Indigent Patient Fund',
    icon: ShieldCheck,
    color: 'from-[#0EA5E9] to-[#38BDF8]',
    pillBg: 'bg-sky-50 text-[#0284C7]',
  },
  {
    title: 'Weaker Section Beds',
    subtitle: 'For eligible patients',
    icon: HeartHandshake,
    color: 'from-[#16A34A] to-[#22C55E]',
    pillBg: 'bg-green-50 text-[#16A34A]',
  },
]

const previewCards = [
  { title: 'About Us', desc: 'Our mission, vision and the journey of serving humanity.', href: '/about', icon: Info, color: 'bg-[#1E40AF]/5 text-[#1E40AF]' },
  { title: 'Departments', desc: 'Multi-speciality departments delivering compassionate care.', href: '/departments', icon: Building2, color: 'bg-[#2563EB]/5 text-[#2563EB]' },
  { title: 'OPD Schedule', desc: 'Consultant timings across specialities, updated regularly.', href: '/opd-schedule', icon: Calendar, color: 'bg-[#0EA5E9]/5 text-[#0EA5E9]' },
  { title: 'Trustees', desc: 'Meet the visionaries behind our charitable mission.', href: '/trustees', icon: UserSquare2, color: 'bg-[#16A34A]/5 text-[#16A34A]' },
  { title: 'Gallery', desc: 'A visual walk-through of our facilities and moments.', href: '/gallery', icon: ImageIcon, color: 'bg-[#1E40AF]/5 text-[#1E40AF]' },
  { title: 'Certificates', desc: 'Accreditations, registrations and recognitions.', href: '/certificates', icon: FileCheck2, color: 'bg-[#2563EB]/5 text-[#2563EB]' },
  { title: 'Contact', desc: 'Reach us for appointments, queries or emergencies.', href: '/contact', icon: Phone, color: 'bg-[#0EA5E9]/5 text-[#0EA5E9]' },
]

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HOSPITAL.heroImage}
            alt="Shree Dombivali Manav Kalyan Kendra Charitable Hospital"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative container min-h-[86vh] md:min-h-[92vh] flex items-center py-24 md:py-28">
          <div className="max-w-4xl text-white animate-fade-in-up">
            <h1
              className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12] md:leading-[1.1] text-balance"
              style={{
                fontWeight: 900,
                letterSpacing: '0.005em',
                textShadow: '0 4px 24px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.45)',
              }}
            >
              Shree Dombivali Manav Kalyan Kendra
            </h1>
            <p
              className="mt-4 md:mt-5 text-white text-2xl md:text-3xl lg:text-[34px] font-heading leading-[1.25] text-balance"
              style={{
                fontWeight: 800,
                letterSpacing: '0.005em',
                textShadow: '0 3px 18px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)',
              }}
            >
              Charitable Hospital & Polyclinic
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 px-4 py-2 text-xs md:text-sm font-medium text-white shadow-lg shadow-black/10">
              <span className="h-2 w-2 rounded-full bg-[#4ADE80] shadow-[0_0_0_4px_rgba(74,222,128,0.2)] animate-pulse" />
              <span className="font-semibold tracking-wide">Registered Charitable Trust</span>
              <span className="h-3 w-px bg-white/30" />
              <span className="text-white/90">Reg. No. {HOSPITAL.regNo}</span>
            </div>

            <div className="mt-4">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-xl shadow-black/25 ring-1 ring-white/20"
                style={{ letterSpacing: '0.01em' }}
              >
                <HeartHandshake className="h-4 w-4" /> {HOSPITAL.tagline}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${HOSPITAL.phone.replace(/\s/g,'')}`}>
                <Button size="lg" className="h-12 px-6 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white gap-2 shadow-xl shadow-black/20">
                  <Phone className="h-4 w-4" /> Call Hospital
                </Button>
              </a>
              <Link href="/opd-schedule">
                <Button size="lg" className="h-12 px-6 rounded-full bg-white text-[#1E40AF] hover:bg-white/90 gap-2 shadow-xl shadow-black/20">
                  <Calendar className="h-4 w-4" /> View OPD Schedule
                </Button>
              </Link>
              <a href={HOSPITAL.mapsUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="h-12 px-6 rounded-full border-white/60 text-white hover:bg-white hover:text-[#1E40AF] gap-2 bg-white/5 backdrop-blur-sm">
                  <MapPin className="h-4 w-4" /> Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-16 md:h-24 text-[#F8FAFC]" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,60 C240,110 480,10 720,50 C960,90 1200,30 1440,70 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* AT A GLANCE */}
      <section className="container -mt-6 md:-mt-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1E40AF] mb-3">
            <span className="h-px w-8 bg-[#1E40AF]/40" /> Hospital At A Glance <span className="h-px w-8 bg-[#1E40AF]/40" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937]">Trusted care, close to home</h2>
          <p className="mt-3 text-slate-500">A snapshot of the compassionate healthcare we deliver every day.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden">
              <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${s.accent} opacity-10 group-hover:opacity-20 transition`} />
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-md mb-4`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937]">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BED AVAILABILITY PREVIEW */}
      <section className="container mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1E40AF]/10 px-3 py-1 text-xs font-semibold text-[#1E40AF] mb-3">
              <BedDouble className="h-3.5 w-3.5" /> Bed Availability
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937]">Live bed availability preview</h2>
            <p className="mt-3 text-slate-500">Transparent, real-time information for our patients and families. Full dashboard coming soon.</p>
          </div>
          <Link href="/bed-availability" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40AF] hover:text-[#2563EB]">
            View full availability <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {bedCards.map((b) => (
            <div key={b.title} className="group relative overflow-hidden bg-white rounded-3xl p-6 md:p-7 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${b.color}`} />
              <div className="flex items-start justify-between">
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${b.color} text-white shadow-md`}>
                  <b.icon className="h-6 w-6" />
                </div>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${b.pillBg}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" /> Available
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl mt-5 text-[#1F2937]">{b.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{b.subtitle}</p>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-heading font-bold text-[#1F2937]">—</div>
                  <div className="text-xs text-slate-400 mt-1">Total / Available</div>
                </div>
                <div className="h-14 w-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
                  <BedDouble className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Clock className="h-3.5 w-3.5" /> Last updated: <span className="font-medium text-slate-600">— to be updated —</span>
        </div>
      </section>

      {/* PREVIEW CARDS */}
      <section className="container mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1E40AF] mb-3">
            <span className="h-px w-8 bg-[#1E40AF]/40" /> Explore <span className="h-px w-8 bg-[#1E40AF]/40" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937]">Everything you need, in one place</h2>
          <p className="mt-3 text-slate-500">Navigate through the important sections of our hospital website.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {previewCards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#1E40AF]/5 to-[#0EA5E9]/5 group-hover:scale-110 transition" />
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl ${c.color}`}>
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading font-bold text-xl text-[#1F2937]">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E40AF] group-hover:gap-2.5 transition-all">
                View More <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mt-24 mb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#0EA5E9] p-8 md:p-14 text-white shadow-hover">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35), transparent 40%)'}} />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs font-medium mb-4 backdrop-blur">
                <Award className="h-3.5 w-3.5" /> A charitable initiative for the community
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-4xl leading-tight text-balance">
                Compassionate care shouldn’t be a privilege — it’s a right.
              </h3>
              <p className="mt-3 text-white/85 max-w-lg">
                Reach out for appointments, emergency assistance or to learn more about our charitable schemes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={`tel:${HOSPITAL.phone.replace(/\s/g,'')}`}>
                <Button size="lg" className="h-12 px-6 rounded-full bg-white text-[#1E40AF] hover:bg-white/90 gap-2">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-12 px-6 rounded-full border-white/60 bg-white/5 text-white hover:bg-white hover:text-[#1E40AF] gap-2 backdrop-blur">
                  <Users className="h-4 w-4" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return <Home />
}

export default App
