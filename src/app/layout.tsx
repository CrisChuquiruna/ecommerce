import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'e-commerce con Next.js y Zustand',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />  
          <hr className='w-full bg-text mb-8'/>
          {children}
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}