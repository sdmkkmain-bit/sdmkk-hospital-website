'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function SiteChrome({ children }) {
  const pathname = usePathname()

  const isAdminPage = pathname === '/admin'

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdminPage && <Header />}

      <main className="flex-1">
        {children}
      </main>

      {!isAdminPage && <Footer />}
    </div>
  )
}