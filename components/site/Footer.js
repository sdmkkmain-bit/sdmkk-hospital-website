import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'
import { HOSPITAL, NAV_LINKS } from '@/lib/site'

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-b from-[#0B1E4E] to-[#0A1638] text-slate-200">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 rounded-full bg-white p-1 ring-1 ring-white/10">
                <Image src={HOSPITAL.logoUrl} alt="SDMKK" fill className="object-contain p-0.5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white leading-tight">SDMKK</div>
                <div className="text-xs text-slate-400">Charitable Hospital</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {HOSPITAL.fullName}
            </p>
            <p className="text-xs text-slate-400">Reg. No: {HOSPITAL.regNo}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-[#7DD3FC]">
              <Heart className="h-3.5 w-3.5" /> {HOSPITAL.tagline}
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Emergency & Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-[#7DD3FC] shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Reception Numbers</div>
                  <div className="space-y-1">
                    <a href="tel:02512445574" className="hover:text-white">0251-2445574</a>
                    <a href="tel:02512449563" className="hover:text-white">0251-2449563</a>
                    <a href="tel:02512449573" className="hover:text-white">0251-2449573</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-[#7DD3FC] shrink-0" />
                <a href="mailto:sdmk13@yahoo.in" className="hover:text-white break-all">sdmk13@yahoo.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[#7DD3FC] shrink-0" />
                <span>
                  Om Sharda Co-operative Housing Society Ltd.
                  <br /> Joshi Wadi,
                  <br /> Tilak Nagar,
                  <br /> Dombivli East,
                  <br /> District Thane,
                  <br /> Maharashtra – 421201
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-[#7DD3FC] shrink-0" />
                <span>
                  OPD Timings
                  <br /> Monday – Saturday • 08:00 AM – 09:00 PM
                  <br /> Sunday • 08:00 AM – 02:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Map placeholder */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Find Us</h4>
            <a
              href="https://maps.app.goo.gl/TJq3PxjiUMbLTGVn7"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative h-40 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(37,99,235,0.25),transparent_60%)]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white">View on Google Maps</div>
                  <div className="text-xs text-slate-300 mt-0.5">Map coming soon</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} Shree Dombivali Manav Kalyan Kendra Charitable Hospital & Polyclinic. All rights reserved.</div>
          <div>Website Designed & Developed by <span className="text-white font-medium">Monty Nandyal</span></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
