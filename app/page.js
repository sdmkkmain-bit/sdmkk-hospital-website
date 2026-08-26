'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  MapPin,
  Calendar,
  CalendarDays,
  BedDouble,
  ArrowRight,
  ShieldCheck,
  Users,
  Stethoscope,
  HeartHandshake,
  ChevronRight,
  Clock,
  Award,
  Image as ImageIcon,
  FileCheck2,
  UserSquare2,
  Building2,
  Info,
  HeartPulse,
  CalendarCheck,
  Syringe,
 Ambulance,
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
    title: 'Departments',
    desc: 'Explore our multi-speciality medical departments',
    icon: Stethoscope,
    href: '/departments',
    iconBg: 'bg-violet-100 text-[#7C3AED]',
  },
  {
    title: 'Bed Availability',
    desc: 'Live update of hospital, Indigent Patient Beds & Weaker Patient Beds',
    icon: BedDouble,
    href: '/bed-availability',
    iconBg: 'bg-green-100 text-[#16A34A]',
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



const patientServices = [
  {
    title: 'About Us',
    desc: 'Learn about our mission, vision and journey of serving humanity.',
    href: '/about',
    icon: Info,
    color: 'bg-[#1E40AF]/5 text-[#1E40AF]',
  },
  {
    title: 'Departments',
    desc: 'Explore our multi-speciality departments and healthcare services.',
    href: '/departments',
    icon: Building2,
    color: 'bg-[#2563EB]/5 text-[#2563EB]',
  },
  {
    title: 'OPD Schedule',
    desc: 'Check consultant timings across our medical specialities.',
    href: '/opd-schedule',
    icon: Calendar,
    color: 'bg-[#0EA5E9]/5 text-[#0EA5E9]',
  },
  {
    title: 'Our Trustees',
    desc: 'Meet the trustees guiding our charitable healthcare mission.',
    href: '/trustees',
    icon: UserSquare2,
    color: 'bg-[#16A34A]/5 text-[#16A34A]',
  },
  {
    title: 'Gallery',
    desc: 'Explore photographs of our hospital, facilities and activities.',
    href: '/gallery',
    icon: ImageIcon,
    color: 'bg-[#1E40AF]/5 text-[#1E40AF]',
  },
  {
    title: 'Certificates',
    desc: 'View our registrations, accreditations and recognitions.',
    href: '/certificates',
    icon: FileCheck2,
    color: 'bg-[#2563EB]/5 text-[#2563EB]',
  },
  {
    title: 'Contact Hospital',
    desc: 'Find our location and contact us for appointments and enquiries.',
    href: '/contact',
    icon: Phone,
    color: 'bg-[#0EA5E9]/5 text-[#0EA5E9]',
  },
]

const Home = () => {
 

  return (
    <>

     {/* =====================================================
    HERO SECTION
    Traditional + modern hospital presentation
===================================================== */}

<section className="relative overflow-hidden bg-white">

  <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">

    <div className="relative grid min-h-[600px] items-center lg:grid-cols-[48%_52%]">

      {/* =================================================
          LEFT — HOSPITAL INFORMATION
      ================================================== */}

      <div className="relative z-20 py-12 sm:py-14 lg:py-16">

        {/* Registered Trust */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">

          <ShieldCheck className="h-4 w-4 text-[#173F8A]" />

          <span className="font-semibold">
            Registered Charitable Trust
          </span>

          <span className="text-slate-300">|</span>

          <span className="text-slate-500">
            Reg. No.: F-1002
          </span>

        </div>


        {/* =================================================
            HOSPITAL NAME
        ================================================== */}

       <h1
  className="font-playfair max-w-[620px] text-[48px] font-semibold leading-[1.02] tracking-[-0.025em] text-[#173F8A] sm:text-[54px] md:text-[58px] lg:text-[62px]"
>
  Shree Dombivali
  <br />
  Manav Kalyan Kendra
</h1>

        {/* Hospital Type */}
        <div className="mt-5 flex items-center gap-3 text-[#173F8A]">

          <span className="h-px w-10 bg-[#2563EB]/50" />

          <span className="text-xs font-bold uppercase tracking-[0.20em] sm:text-sm">
            Charitable Hospital &amp; Polyclinic
          </span>

          <span className="h-px w-10 bg-[#2563EB]/50" />

        </div>


        {/* Corporate Care */}
        <div className="mt-5 flex items-center gap-2">

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">

            <HeartPulse className="h-4 w-4 text-green-600" />

          </span>

          <span className="text-lg font-bold text-green-600 sm:text-xl">
            Corporate Care at Charitable Rate
          </span>

        </div>


        {/* Description */}
        <p className="mt-4 max-w-[570px] text-[15px] leading-7 text-slate-600 sm:text-base">

          Serving the community with quality healthcare, experienced
          doctors and modern medical facilities — where compassionate
          treatment meets{" "}

          <span className="font-semibold text-green-600">
            affordable care.
          </span>

        </p>


        {/* Hospital Information */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600">

          <div className="flex items-center gap-2">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">

              <CalendarDays className="h-4 w-4 text-[#2563EB]" />

            </span>

            <span>
              Established Since{" "}
              <strong className="text-slate-900">
                1984
              </strong>
            </span>

          </div>


          <span className="hidden h-5 w-px bg-slate-200 sm:block" />


          <div className="flex items-center gap-2">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">

              <MapPin className="h-4 w-4 text-[#2563EB]" />

            </span>

            <strong className="text-slate-800">
              Dombivli, Maharashtra
            </strong>

          </div>

        </div>


        {/* =================================================
            ACTION BUTTONS — 2 × 2
        ================================================== */}

        <div className="mt-6 grid max-w-[570px] grid-cols-1 gap-3 sm:grid-cols-2">

          {/* Call Hospital */}
          <a
            href={`tel:${HOSPITAL.phone.replace(/\s/g, '')}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-md"
          >

            <Phone className="h-4 w-4" />

            Call Hospital

          </a>


          {/* OPD */}
          <Link
            href="/opd-schedule"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md"
          >

            <CalendarDays className="h-4 w-4" />

            View OPD Schedule

          </Link>


          {/* Bed Availability */}
          <Link
            href="/bed-availability"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#173F8A] px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#12336F] hover:shadow-md"
          >

            <BedDouble className="h-4 w-4" />

            Check Bed Availability

          </Link>


          {/* Directions */}
          <a
            href={HOSPITAL.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
           className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#2563EB] bg-white px-5 text-sm font-semibold text-[#173F8A] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EFF6FF] hover:shadow-md"
          >

            <MapPin className="h-4 w-4" />

            Get Directions

          </a>

        </div>

      </div>


      {/* =================================================
          RIGHT — HOSPITAL IMAGE
      ================================================== */}

      <div className="relative hidden min-h-[620px] lg:block">

        {/* Soft transition into the text area */}
        <div
          className="pointer-events-none absolute inset-y-0 left-[-170px] z-10 w-[330px]"
          style={{
            background:
              'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.96) 18%, rgba(255,255,255,0.72) 42%, rgba(255,255,255,0.28) 70%, rgba(255,255,255,0) 100%)',
          }}
        />


        {/* Hospital photograph */}
        <div className="absolute top-[72px] right-[-20px] h-[500px] w-[calc(100%+20px)] overflow-hidden">

          <img
            src="/images/logos/hospital.png"
            alt="Shree Dombivali Manav Kalyan Kendra Charitable Hospital"
            className="h-full w-full object-contain object-right"
          />


          {/* Natural fade over the left edge of the photograph */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[38%]"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.72) 28%, rgba(255,255,255,0.28) 62%, rgba(255,255,255,0) 100%)',
            }}
          />

        </div>

      </div>

    </div>

  </div>


  {/* =====================================================
      MOBILE IMAGE
  ====================================================== */}

  <div className="relative mt-2 block h-[300px] w-full overflow-hidden lg:hidden">

    <img
      src="/images/logos/hospital.png"
      alt="Shree Dombivali Manav Kalyan Kendra Charitable Hospital"
      className="h-full w-full object-cover object-center"
    />

    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 35%)',
      }}
    />

  </div>

</section>
{/* =====================================================
    QUICK ACTIONS
===================================================== */}

<div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-10 pt-7 sm:px-6 md:pt-9 md:pb-14 lg:px-8">

  <div className="grid grid-cols-1 gap-3 rounded-3xl border border-slate-100 bg-white p-3 shadow-lg sm:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-4">

    {quickActions.map((q) => (

      <Link
        key={q.title}
        href={q.href}
        className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
      >

        <span
          className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${q.iconBg} transition-transform duration-300 group-hover:scale-105`}
        >
          <q.icon className="h-6 w-6" />
        </span>

        <div className="min-w-0">

          <div className="font-heading text-[15px] font-bold text-slate-900 transition group-hover:text-[#173F8A] md:text-base">
            {q.title}
          </div>

          <div className="mt-1 text-xs leading-snug text-slate-500 md:text-sm">
            {q.desc}
          </div>

        </div>

        <ChevronRight className="ml-auto hidden h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#173F8A] sm:block" />

      </Link>

    ))}

  </div>

</div>



      {/* =====================================================
          TRUSTED CARE — KEEP
      ====================================================== */}

      <section className="container mt-8 md:mt-14">

        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">

          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40AF]">
            <span className="h-px w-8 bg-[#1E40AF]/40" />
            Hospital At A Glance
            <span className="h-px w-8 bg-[#1E40AF]/40" />
          </div>

          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Trusted care, close to home
          </h2>

          <p className="mt-3 text-slate-500">
            A snapshot of the compassionate healthcare we deliver every day.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6">

  {stats.map((s) => (
    <div
      key={s.label}
      className={`group relative rounded-2xl border border-slate-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-6 ${s.cardBg}`}
    >
      <div
        className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}
      >
        <s.icon className="h-5 w-5" />
      </div>

      <div
        className={`font-heading text-3xl font-extrabold md:text-4xl ${s.valueColor}`}
      >
        {s.value}
      </div>

      <div className="mt-1 font-heading font-semibold text-slate-800">
        {s.label}
      </div>

      <div className="mt-1 text-xs text-slate-500">
        {s.sub}
      </div>
    </div>
  ))}

  {/* Vaccination */}
  <div className="group relative rounded-2xl border border-slate-100 bg-blue-50/40 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#1E40AF]">
      <Syringe className="h-5 w-5" />
    </div>

    <div className="font-heading text-2xl font-extrabold text-[#1E40AF] md:text-3xl">
      Vaccination
    </div>

    <div className="mt-1 font-heading font-semibold text-slate-800">
      Every Saturday
    </div>

    <div className="mt-1 text-xs text-slate-500">
      Vaccination services available every Saturday.
    </div>
  </div>

  {/* Ambulance */}
  <div className="group relative rounded-2xl border border-slate-100 bg-emerald-50/40 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
      <Ambulance className="h-5 w-5" />
    </div>

    <div className="font-heading text-3xl font-extrabold text-emerald-700 md:text-4xl">
      Ambulance
    </div>

    <div className="mt-1 font-heading font-semibold text-slate-800">
      Ambulance Available
    </div>

    <div className="mt-1 text-xs text-slate-500">
      Ambulance service available at the hospital.
    </div>
  </div>

</div>
      </section>

  

        {/* ==================== WHY CHOOSE US ==================== */}
<section className="relative overflow-hidden bg-white py-20 lg:py-24">

  {/* Heritage year */}
  <div className="pointer-events-none absolute right-4 top-2 select-none text-[110px] font-extrabold leading-none tracking-[-0.06em] text-blue-50/70 sm:text-[140px] lg:right-10 lg:text-[180px]">
    1984
  </div>

  <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

    {/* ==================== SECTION HEADING ==================== */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-blue-200"></span>

        <span className="text-[12px] font-bold uppercase tracking-[0.28em] text-blue-700">
          Why Choose Us
        </span>

        <span className="h-px w-10 bg-blue-200"></span>
      </div>

      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
        Healthcare with compassion.
        <br />
        <span className="text-blue-700">
          Care without compromise.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        At Shree Dombivali Manav Kalyan Kendra Charitable Hospital &
        Polyclinic, quality healthcare is guided by compassion,
        affordability and a commitment to serving the community.
      </p>
    </div>


    {/* ==================== FOUR REASONS ==================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">

      {/* ==================== CARD 01 ==================== */}
      <div className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.20em] text-blue-700">
            01
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.20em] text-slate-400">
            Since 1984
          </span>
        </div>

        {/* Refined underline */}
        <div className="mt-3 h-px w-10 bg-blue-300 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-600"></div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
          A Legacy of Service
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          For decades, our hospital has remained committed to serving
          the health and wellbeing of Dombivli and the surrounding
          community.
        </p>

        {/* Very subtle background number */}
        <div className="pointer-events-none absolute -bottom-3 right-3 select-none text-[58px] font-black leading-none tracking-[-0.05em] text-slate-100/80">
          01
        </div>
      </div>


      {/* ==================== CARD 02 ==================== */}
      <div className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.20em] text-emerald-700">
            02
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.20em] text-slate-400">
            Our Philosophy
          </span>
        </div>

        <div className="mt-3 h-px w-10 bg-emerald-300 transition-all duration-300 group-hover:w-16 group-hover:bg-emerald-600"></div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
          Corporate Care at Charitable Rate
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          We strive to make quality healthcare accessible and
          affordable while maintaining the standards of care expected
          from a modern hospital.
        </p>

        <div className="pointer-events-none absolute -bottom-3 right-3 select-none text-[58px] font-black leading-none tracking-[-0.05em] text-slate-100/80">
          02
        </div>
      </div>


      {/* ==================== CARD 03 ==================== */}
      <div className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.20em] text-blue-700">
            03
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.20em] text-slate-400">
            Our Values
          </span>
        </div>

        <div className="mt-3 h-px w-10 bg-blue-300 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-600"></div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
          Compassionate & Respectful Care
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          Every patient deserves dignity, attention and compassionate
          care, regardless of their social or economic circumstances.
        </p>

        <div className="pointer-events-none absolute -bottom-3 right-3 select-none text-[58px] font-black leading-none tracking-[-0.05em] text-slate-100/80">
          03
        </div>
      </div>


      {/* ==================== CARD 04 ==================== */}
      <div className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.20em] text-emerald-700">
            04
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.20em] text-slate-400">
            Then & Now
          </span>
        </div>

        <div className="mt-3 h-px w-10 bg-emerald-300 transition-all duration-300 group-hover:w-16 group-hover:bg-emerald-600"></div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
          Modern Healthcare, Rooted in Trust
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          Our hospital continues to evolve with improved
          infrastructure and healthcare facilities while keeping its
          charitable purpose at the heart of patient care.
        </p>

        <div className="pointer-events-none absolute -bottom-3 right-3 select-none text-[58px] font-black leading-none tracking-[-0.05em] text-slate-100/80">
          04
        </div>
      </div>

    </div>


    {/* ==================== OUR COMMITMENT ==================== */}
    <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/70 px-6 py-9 text-center shadow-[0_4px_18px_rgba(15,23,42,0.03)] sm:px-10 sm:py-10">

      {/* Subtle decorative circles */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full border border-blue-200/50"></div>

      <div className="pointer-events-none absolute -bottom-14 -right-10 h-36 w-36 rounded-full border border-emerald-200/50"></div>

      <div className="relative">

        {/* Commitment label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-blue-200"></span>

          <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-blue-700">
            A Charitable Initiative for the Community
          </span>

          <span className="h-px w-8 bg-blue-200"></span>
        </div>

        {/* Main commitment */}
        <h3 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[32px]">
          Compassionate care shouldn’t be a privilege —
          <br className="hidden sm:block" />
          <span className="text-blue-700">
            it’s a right.
          </span>
        </h3>

        {/* Values */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          <span>Compassion</span>

          <span className="text-blue-300">•</span>

          <span>Affordable Healthcare</span>

          <span className="text-blue-300">•</span>

          <span>Equal Access</span>

          <span className="text-blue-300">•</span>

          <span>Community Welfare</span>
        </div>

      </div>
    </div>

  </div>
</section>

{/* =====================================================
    DONATION — SUPPORT OUR CHARITABLE MISSION
===================================================== */}
<section className="container mt-2 mb-2">
  <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-6 py-10 shadow-sm md:px-12 md:py-12">

    {/* Subtle decorative circles */}
    <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full border border-blue-200/50" />
    <div className="pointer-events-none absolute -bottom-20 -right-12 h-44 w-44 rounded-full border border-emerald-200/50" />

    <div className="relative">

      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-blue-300" />

          <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-blue-700">
            Support Our Mission
          </span>

          <span className="h-px w-8 bg-blue-300" />
        </div>

        <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
          Make a Difference Through Your Support
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          A small help from you can mean a whole life to someone.
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Your contribution helps the trust continue its mission of
          providing compassionate and affordable healthcare to the community.
        </p>

      </div>


      {/* Donation Information */}
<div className="mx-auto mt-9 grid max-w-5xl gap-6 lg:grid-cols-2">


    {/* Trust Information */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#1E40AF]">
          <HeartHandshake className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-slate-900">
            Support Our Charitable Work
          </h3>

          <p className="text-xs text-slate-500">
            Every contribution helps us serve the community.
          </p>
        </div>
      </div>

      <div className="space-y-3 text-sm leading-6 text-slate-600">

        <p>
          Donations to the Trust are eligible for deduction under
          <strong className="text-slate-900"> Section 80G </strong>
          of the Income Tax Act, subject to applicable rules.
        </p>

        <p>
          The Trust is registered for undertaking
          <strong className="text-slate-900"> CSR activities.</strong>
        </p>

        <div className="mt-5 rounded-xl bg-blue-50 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Registration & PAN
          </div>

          <div className="mt-2 space-y-1 text-sm text-slate-700">
            <div>
              <span className="font-semibold">Registration No.:</span>{" "}
              F-1002
            </div>

            <div>
              <span className="font-semibold">PAN No.:</span>{" "}
              AAATS6145C
            </div>
          </div>
        </div>

      </div>
    </div>
    {/* Bank Details */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

    <div className="mb-5">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
        Bank Account Details
      </div>

      <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
        Make a Donation
      </h3>
    </div>

    <div className="divide-y divide-slate-100 rounded-xl border border-slate-100">

      <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
        <span className="text-slate-500">Name of Bank</span>
        <span className="font-semibold text-slate-900">
          Punjab National Bank
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
        <span className="text-slate-500">Account Type</span>
        <span className="font-semibold text-slate-900">
          Saving Account
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
        <span className="text-slate-500">Account No.</span>
        <span className="font-semibold tracking-wide text-slate-900">
          07452010011730
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
        <span className="text-slate-500">IFSC Code</span>
        <span className="font-semibold tracking-wide text-slate-900">
          PUNB0074510
        </span>
      </div>

    </div>

    <p className="mt-4 text-xs leading-5 text-slate-500">
      Please ensure that the beneficiary and bank details are verified
      before making a donation.
    </p>

  </div>


    {/* Donation Confirmation */}
    <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm md:p-7 lg:col-span-2">
      <div className="text-center text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
  After Making Your Donation
</div>

     <p className="mt-2 text-center text-sm leading-6 text-slate-600">
        Please send the transaction details to{" "}
        <a
          href="mailto:sdmk13@yahoo.in"
          className="font-semibold text-[#1E40AF] hover:underline"
        >
          sdmk13@yahoo.in
        </a>{" "}
        for confirmation and to help process the applicable 80G documentation.
      </p>

      <div className="mt-3 text-center text-xs leading-6 text-slate-600">
  <div className="font-semibold text-slate-900">
    Please include:
  </div>


  <div className="mx-auto mt-1 grid max-w-2xl grid-cols-3 gap-x-6 gap-y-1 text-left font-semibold text-slate-900">
    <span>●NAME</span>
    <span>●AADHAR CARD</span>
    <span>●CONTACT</span>

    <span>●PAN CARD</span>
    <span>●ADDRESS</span>
    <span>●TRANSACTION ID</span>
  </div>
</div>
    </div>


      </div>

    </div>
  </div>
</section>

     {/* =====================================================
    BLUE CTA — ACTION / CONTACT
===================================================== */}

<section className="container mt-1 mb-14">

  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#0EA5E9] p-8 text-white shadow-lg md:p-14">

    {/* Soft light texture */}
    <div
      className="pointer-events-none absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35), transparent 40%)',
      }}
    />

    <div className="relative grid items-center gap-8 md:grid-cols-2">

      {/* LEFT — MESSAGE */}
      <div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          <Award className="h-3.5 w-3.5" />
          Here when you need us
        </div>

        <h3 className="font-heading text-2xl font-bold leading-tight md:text-4xl">
          Quality healthcare,
          <br />
          within reach.
        </h3>

        <p className="mt-3 max-w-lg text-white/85">
          For appointments, assistance or more information,
          our hospital team is here to help.
        </p>

      </div>


           {/* RIGHT — ACTIONS */}
      <div className="flex flex-wrap gap-3 md:justify-end">

        {/* Call */}
        <a href={`tel:${HOSPITAL.phone.replace(/\s/g, '')}`}>
          <Button
            size="lg"
            className="h-12 rounded-full bg-white px-6 text-[#1E40AF] hover:bg-white/90"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
        </a>

        {/* Directions */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            "Shree Dombivali Manav Kalyan Kendra Charitable Hospital & Polyclinic, Dombivli, Maharashtra"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/60 bg-white/5 px-6 text-white hover:bg-white hover:text-[#1E40AF]"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </Button>
        </a>

      </div>

    </div>

  </div>
  </section>
  </>
  )
}

export default Home