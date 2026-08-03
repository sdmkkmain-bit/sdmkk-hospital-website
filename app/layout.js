import './globals.css'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'

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
  title: 'Shree Dombivali Manav Kalyan Kendra Charitable Hospital & Polyclinic',
  description: 'Corporate Care at Charitable Rate — A multi-speciality charitable hospital in Dombivali.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#1F2937]">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
