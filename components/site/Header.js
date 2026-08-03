'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, MapPin, Menu, X, Globe, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HOSPITAL, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('EN')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-slate-100' : 'bg-white border-b border-slate-100'
    )}>
      {/* Top strip */}
      <div className="hidden md:block bg-[#1E40AF] text-white text-xs">
        <div className="container flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="h-3.5 w-3.5" /> 24x7 Emergency Helpline
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="h-3.5 w-3.5" /> Dombivali, Maharashtra
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-90">Reg. No: {HOSPITAL.regNo}</span>
            <div className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5" />
              <button
                onClick={() => setLang('EN')}
                className={cn('px-1.5 py-0.5 rounded transition', lang === 'EN' ? 'bg-white/15 font-semibold' : 'opacity-80 hover:opacity-100')}
              >English</button>
              <span className="opacity-50">|</span>
              <button
                onClick={() => setLang('MR')}
                className={cn('px-1.5 py-0.5 rounded transition', lang === 'MR' ? 'bg-white/15 font-semibold' : 'opacity-80 hover:opacity-100')}
              >मराठी</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full overflow-hidden ring-1 ring-slate-200 bg-white">
            <Image
              src={HOSPITAL.logoUrl}
              alt="SDMKK Logo"
              fill
              sizes="56px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="font-heading font-bold text-[13px] md:text-[15px] leading-tight text-[#1E40AF] truncate">
              Shree Dombivali Manav Kalyan Kendra
            </div>
            <div className="text-[11px] md:text-xs text-slate-500 truncate">
              Charitable Hospital & Polyclinic • <span className="text-[#16A34A] font-medium">{HOSPITAL.tagline}</span>
            </div>
          </div>
        </Link>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a href={`tel:${HOSPITAL.phone.replace(/\s/g,'')}`}>
            <Button size="sm" className="bg-[#16A34A] hover:bg-[#15803D] text-white gap-2 h-10 px-4 rounded-full shadow-soft">
              <Phone className="h-4 w-4" /> Call Now
            </Button>
          </a>
          <a href={HOSPITAL.mapsUrl} target="_blank" rel="noreferrer">
            <Button size="sm" variant="outline" className="gap-2 h-10 px-4 rounded-full border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white">
              <MapPin className="h-4 w-4" /> Get Directions
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-[#1E40AF]"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block border-t border-slate-100 bg-white">
        <div className="container flex items-center justify-center gap-1 py-1">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-3 text-sm font-medium transition-colors rounded-md',
                  active ? 'text-[#1E40AF]' : 'text-slate-600 hover:text-[#1E40AF]'
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-[3px] rounded-full bg-[#1E40AF]" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={cn(
        'lg:hidden overflow-hidden transition-all duration-300 border-t border-slate-100 bg-white',
        open ? 'max-h-[720px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="container py-3 flex flex-col">
          <div className="flex items-center gap-2 py-2">
            <a href={`tel:${HOSPITAL.phone.replace(/\s/g,'')}`} className="flex-1">
              <Button className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white gap-2 h-11 rounded-full">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
            <a href={HOSPITAL.mapsUrl} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="outline" className="w-full gap-2 h-11 rounded-full border-[#1E40AF] text-[#1E40AF]">
                <MapPin className="h-4 w-4" /> Directions
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-2 py-2 text-xs text-slate-500 border-t border-slate-100 mt-1">
            <Globe className="h-3.5 w-3.5" />
            <button onClick={() => setLang('EN')} className={cn('px-2 py-1 rounded', lang==='EN' && 'bg-[#1E40AF]/10 text-[#1E40AF] font-semibold')}>English</button>
            <span>|</span>
            <button onClick={() => setLang('MR')} className={cn('px-2 py-1 rounded', lang==='MR' && 'bg-[#1E40AF]/10 text-[#1E40AF] font-semibold')}>मराठी</button>
          </div>
          <nav className="flex flex-col pt-1">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between py-3 px-2 border-b border-slate-100 text-sm font-medium',
                    active ? 'text-[#1E40AF]' : 'text-slate-700'
                  )}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 opacity-40" />
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
