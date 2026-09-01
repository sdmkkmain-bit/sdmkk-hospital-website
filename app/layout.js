import './globals.css'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import { Providers } from './providers'
import SiteChrome from '@/components/site/SiteChrome'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500','600','700','800','900'],
  style: ['normal','italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.sdmkkhospital.com'),

  title:
    'Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic',

  description:
  'Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic is a multi-speciality charitable hospital in Dombivli, Maharashtra, providing quality healthcare at charitable rates.',

  openGraph: {
    title:
      'Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic',

    description:
      'A multi-speciality charitable hospital in Dombivli, Maharashtra, providing quality healthcare at charitable rates.',

    url: 'https://www.sdmkkhospital.com',

    siteName:
      'Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic',

    images: [
      {
        url: '/images/logos/hospital.png',
        width: 1200,
        height: 630,
        alt: 'Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic',
      },
    ],

    locale: 'en_IN',
    type: 'website',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#1F2937]">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Hospital",

      "name": "Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic",

      "url": "https://www.sdmkkhospital.com",

      "image": "https://www.sdmkkhospital.com/images/logos/hospital.png",

      "priceRange": "₹",

      "telephone": [
        "0251-2445574",
        "0251-2449573",
        "0251-2449563"
      ],

      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Ground, 1st & 2nd Floor, Sharda Apartment, TATA Power Lane, Joshi Wadi, Tilak Nagar, Dombivli East",
        "addressLocality": "Dombivli",
        "addressRegion": "Maharashtra",
        "postalCode": "421201",
        "addressCountry": "IN"
      }
    }),
  }}
/>
  <Providers>
    <SiteChrome>
      {children}
    </SiteChrome>
  </Providers>
</body>
    </html>
  )
}
