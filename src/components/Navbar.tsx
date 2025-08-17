'use client'
import { useCart } from '@/store/useCart'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { items } = useCart() 

  const cartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.25 19.25" fill="currentColor" className="w-6 h-6 text-text">
    <path d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
      C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164
      c0.008,0.045,0.031,0.082,0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151
      c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
      c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065
      c0.116,0.047,0.238,0.075,0.367,0.075c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1
      s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
      C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z
      M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2h-3v-2H12.25z M8.25,4.625v2h-3
      c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597
      L5.264,7.625z M13.25,9.625v-2h3.418l-0.285,2H13.25z"/>
    <circle cx="6.75" cy="17.125" r="1.5" />
    <circle cx="15.75" cy="17.125" r="1.5" />
  </svg>)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="w-full bg-background py-4 px-5 md:px-10 flex justify-between items-center text-text border-border border-b-[0.1px]">
      <div className='flex items-center gap-4'>
        <Sidebar/>
        <Link href={'/'}>
          <h1 className="text-xl font-bold">🛒 Tienda</h1>
        </Link> 
      </div>
      <div className="relative flex items-center gap-4 text-[#efeceb]">
        <Link href='/cart' className='flex items-center cursor-pointer ' >
          <span className='text-text'>{cartIcon()}</span>
          <span className="ml-2 bg-accent rounded-full px-2 font-bold text-sm ml[-1px]">
            {items.length}
          </span>
        </Link>

        {mounted && (
          <button onClick={toggleTheme} className='cursor-pointer'>
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