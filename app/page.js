'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, MapPin, Calendar, BedDouble, ArrowRight, ShieldCheck,
  Users, Stethoscope, HeartHandshake, ChevronRight, Clock, Award,
  Image as ImageIcon, FileCheck2, UserSquare2, Building2, Info, HeartPulse, Heart,
  CalendarCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HOSPITAL } from '@/lib/site'

const quickActions = [
  {
    title: 'OPD Schedule',
    desc: 'Find doctor timings and consult easily',
    icon: Calendar,
    href: '/opd-schedule',
    iconBg: 'bg-blue-100 text-[#1E40AF]',
  },
  {
    title: 'Bed Availability',
    desc: 'Live update of hospital, IPF & weaker section beds',
    icon: BedDouble,
    href: '/bed-availability',
    iconBg: 'bg-green-100 text-[#16A34A]',
  },
  {
    title: 'Departments',
    desc: 'Explore our multi-speciality medical departments',
    icon: Stethoscope,
    href: '/departments',
    iconBg: 'bg-violet-100 text-[#7C3AED]',
  },
  {
    title: 'Contact Hospital',
    desc: 'Reach us for appointments, emergencies & enquiries',
    icon: Phone,
    href: '/contact',
    iconBg: 'bg-rose-100 text-[#E11D48]',
  },
]

const stats = [
  {
    value: '40',
    label: 'Hospital Beds',
    sub: 'Dedicated for quality care',
    icon: BedDouble,
    valueColor: 'text-[#1E40AF]',
    iconBg: 'bg-blue-100 text-[#1E40AF]',
    cardBg: 'bg-gradient-to-br from-blue-50 to-white',
  },
  {
    value: '110+',
    label: 'Consultants',
    sub: 'Experienced & qualified',
    icon: Users,
    valueColor: 'text-[#16A34A]',
    iconBg: 'bg-green-100 text-[#16A34A]',
    cardBg: 'bg-gradient-to-br from-green-50 to-white',
  },
  {
    value: 'Multi',
    label: 'Speciality Hospital',
    sub: 'Comprehensive healthcare',
    icon: ShieldCheck,
    valueColor: 'text-[#7C3AED]',
    iconBg: 'bg-violet-100 text-[#7C3AED]',
    cardBg: 'bg-gradient-to-br from-violet-50 to-white',
  },
  {
    value: 'Charitable',
    label: 'Healthcare Trust',
    sub: 'Care with compassion',
    icon: HeartHandshake,
    valueColor: 'text-[#D97706]',
    iconBg: 'bg-amber-100 text-[#D97706]',
    cardBg: 'bg-gradient-to-br from-amber-50 to-white',
  },
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
      {/* HERO - true two-column split */}
      <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="container pt-10 md:pt-14 pb-8 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
            {/* LEFT — content on white */}
            <div className="animate-fade-in-up">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 pl-2 pr-3 py-1.5 text-xs md:text-sm shadow-soft">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#1E40AF]/10 text-[#173F8A]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                <span className="font-semibold text-slate-700">Registered Charitable Trust</span>
                <span className="h-3 w-px bg-slate-300" />
                <span className="text-slate-500">Reg. No.: {HOSPITAL.regNo}</span>
              </div>

              {/* Premium Serif Title */}
              <h1
                className="mt-6 font-serif text-[#173F8A] text-[40px] sm:text-5xl md:text-[54px] lg:text-[60px] leading-[1.08] md:leading-[1.05] text-balance"
                style={{ fontWeight: 700, letterSpacing: '-0.005em' }}
              >
                Shree Dombivali<br className="hidden sm:block" /> Manav Kalyan Kendra
              </h1>

              {/* Divider label */}
              <div className="mt-4 flex items-center gap-3 max-w-md">
                <span className="h-px flex-1 bg-[#1E40AF]/25" />
                <span className="font-heading font-bold text-[#1E40AF] text-sm md:text-base tracking-[0.18em] uppercase whitespace-nowrap">
                  Charitable Hospital &amp; Polyclinic
                </span>
                <span className="h-px flex-1 bg-[#1E40AF]/25" />
              </div>

              {/* Green tagline (inline) */}
              <div className="mt-5 flex items-center gap-2.5 text-[#16A34A]">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                  <HeartPulse className="h-4 w-4" />
                </span>
                <span className="font-heading font-bold text-lg md:text-2xl">
                  {HOSPITAL.tagline}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-slate-600 text-base md:text-lg leading-[1.75] max-w-xl">
                Serving the community with quality healthcare, experienced doctors and
                modern medical facilities — where compassionate treatment meets{' '}
                <span className="font-semibold text-[#16A34A]">affordable care</span>.
              </p>

              {/* Establishment info row */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-[15px] text-slate-700">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 text-[#173F8A]">
                    <CalendarCheck className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="text-slate-500">Established Since</span>{' '}
                    <span className="font-heading font-bold text-slate-900">1984</span>
                  </span>
                </div>
                <span className="hidden md:inline h-4 w-px bg-slate-300" />
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 text-[#173F8A]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="font-heading font-semibold">Dombivli, Maharashtra</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${HOSPITAL.phone.replace(/\s/g, '')}`}>
                  <Button size="lg" className="h-12 px-5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white gap-2 shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all">
                    <Phone className="h-4 w-4" /> Call Hospital
                  </Button>
                </a>
                <Link href="/opd-schedule">
                  <Button size="lg" className="h-12 px-5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white gap-2 shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all">
                    <Calendar className="h-4 w-4" /> View OPD Schedule
                  </Button>
                </Link>
                <Link href="/bed-availability">
                  <Button size="lg" className="h-12 px-5 rounded-xl bg-[#173F8A] hover:bg-[#1E40AF] text-white gap-2 shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all">
                    <BedDouble className="h-4 w-4" /> Check Bed Availability
                  </Button>
                </Link>
                <a href={HOSPITAL.mapsUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="h-12 px-5 rounded-xl bg-white border-slate-200 text-slate-700 hover:bg-slate-50 gap-2 shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all">
                    <MapPin className="h-4 w-4 text-[#173F8A]" /> Get Directions
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT — hospital image, seamlessly blended with left */}
            <div className="relative animate-fade-in-up">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[5/4] bg-slate-100">
                <Image
                  src={HOSPITAL.heroImage}
                  alt="Shree Dombivali Manav Kalyan Kendra Charitable Hospital"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                {/* Seamless white-to-transparent blend from left */}
                <div
                  className="hidden lg:block absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0.98) 12%, rgba(255,255,255,0.75) 35%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 70%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick action strip */}
        <div className="container pb-10 md:pb-14">
          <div className="rounded-2xl bg-white border border-slate-100 shadow-card p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {quickActions.map((q) => (
              <Link
                key={q.title}
                href={q.href}
                className="group flex items-start gap-4 p-3 md:p-4 rounded-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
              >
                <span
                  className={`inline-flex items-center justify-center rounded-2xl shrink-0 ${q.iconBg} group-hover:scale-105 transition-transform`}
                  style={{ height: '3.5rem', width: '3.5rem' }}
                >
                  <q.icon className="h-7 w-7" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <div className="font-heading font-bold text-slate-900 text-[15px] md:text-base group-hover:text-[#173F8A] transition">
                    {q.title}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 leading-snug mt-1">
                    {q.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOSPITAL AT A GLANCE */}
      <section className="container mt-10 md:mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40AF] mb-3">
            <span className="h-px w-8 bg-[#1E40AF]/40" /> Hospital At A Glance <span className="h-px w-8 bg-[#1E40AF]/40" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">Trusted care, close to home</h2>
          <p className="mt-3 text-slate-500">A snapshot of the compassionate healthcare we deliver every day.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`group relative rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${s.cardBg}`}
            >
              <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl mb-4 ${s.iconBg}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className={`font-heading text-3xl md:text-4xl font-extrabold ${s.valueColor}`}>{s.value}</div>
              <div className="mt-1 font-heading font-semibold text-slate-800">{s.label}</div>
              <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BED AVAILABILITY PREVIEW */}
      <section className="container mt-20 md:mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1E40AF]/10 px-3 py-1 text-xs font-semibold text-[#1E40AF] mb-3">
              <BedDouble className="h-3.5 w-3.5" /> Bed Availability
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">Live bed availability preview</h2>
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
              <h3 className="font-heading font-bold text-xl mt-5 text-slate-900">{b.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{b.subtitle}</p>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-heading font-bold text-slate-900">—</div>
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
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40AF] mb-3">
            <span className="h-px w-8 bg-[#1E40AF]/40" /> Explore <span className="h-px w-8 bg-[#1E40AF]/40" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">Everything you need, in one place</h2>
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
              <h3 className="mt-5 font-heading font-bold text-xl text-slate-900">{c.title}</h3>
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
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35), transparent 40%)' }} />
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
              <a href={`tel:${HOSPITAL.phone.replace(/\s/g, '')}`}>
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
