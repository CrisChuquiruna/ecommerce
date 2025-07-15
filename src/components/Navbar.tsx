'use client'
import { useCart } from '@/store/useCart'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { items } = useCart() 

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="w-full bg-background py-4 px-10 flex justify-between items-center text-text border-border border-b-[0.1px]">
      <h1 className="text-xl font-bold">🛒 MyStore</h1>
      <div className="relative flex items-center gap-4">
        <span>Carrito</span>
        <span className="ml-2 bg-blue-600 rounded-full px-2 text-sm">
          {items.length}
        </span>

        {mounted && (
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 
            <Image src="/assets/icons/dark-theme.svg" alt="Moon Icon" width={24} height={24} />
            :  <Image src="/assets/icons/light-theme.svg" alt="Sun Icon" width={24} height={24} />
            }
          </button>
        )}
      </div>
    </nav>
  )
} 