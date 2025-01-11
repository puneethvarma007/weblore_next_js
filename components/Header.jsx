'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-[350px] ">
      {/* Background Image */}
      <Image src="/images/atf-bg.png" alt="Header background" layout="fill" objectFit="cover" />

      {/* Navigation Bar */}
      <nav className="relative z-10 p-4">
        <div className="container mx-auto flex gap-4 max-xl:justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/nav-logo.png" alt="Weblore Logo" width={100} height={40} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className="lg:hidden text-3xl text-black">
            ☰
          </button>

          {/* Navigation Links */}
          <ul
            className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col z-50 opacity-100 lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-full bg-white lg:bg-transparent shadow-md lg:shadow-none lg:justify-center lg:space-x-8`}
          >
            {['Home', 'Services', 'Solutions', 'Our Story', 'Testimonial', 'Contact'].map((item) => (
              <li key={item} className="border-b lg:border-b-0 border-gray-200">
                <Link
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 px-4 text-black lg:text-black hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-gray-700"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header Content */}
      {/* <div className="relative z-10 text-center text-white p-8">
        <div className=" mx-auto flex justify-center">
        <Image src="/images/logo.png" alt="Weblore Logo"  width={200} height={160} />
        </div>
        <p className="text-2xl mt-4 bg-gradient-to-r from-yellow-400 to-gray-500 text-transparent bg-clip-text">
          We develop <strong>softwares</strong> to power your <strong>dreams</strong>.
        </p>
      </div> */}
      {/* Hero Section */}
      <div className="relative z-10 text-center text-white p-8 h-auto">
        {/* Logo */}
        <div className="mx-auto h-full flex justify-center">
          <Image src="/images/logo.png" alt="Weblore Logo" width={400} height={300} />
        </div>

        {/* Subheading */}
        <p className="text-2xl mt-4 bg-gradient-to-r from-yellow-400 to-gray-500 text-transparent bg-clip-text">
          We develop <strong>softwares</strong> to power your <strong>dreams</strong>.
        </p>
      </div>
    </header>
  );
}