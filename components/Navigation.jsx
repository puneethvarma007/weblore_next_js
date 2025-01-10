'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-4">
        <Image src="/images/nav-logo.png" alt="Weblore Logo" width={100} height={40} />
        <button onClick={toggleMenu} className="text-3xl">
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col">
            {['Home', 'Services', 'Solutions', 'Our Story', 'Testimonial', 'Contact'].map((item) => (
              <li key={item} className="border-b border-gray-200">
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-2 px-4 hover:bg-gray-100">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

