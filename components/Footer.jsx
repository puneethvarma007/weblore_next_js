import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id='contact' className="relative text-white">
      <Image
        src="/images/footer-bg.png"
        alt="Footer background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="relative z-10 py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-evenly items-start mb-12 gap-8">
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/footer-logo.png"
              alt="Weblore Logo"
              width={150}
              height={60}
            />
          </div>

          <div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Corporate Office</h3>
              <p>TRION WEBLORE TECHNOLOGIES PRIVATE LIMITED</p>
              <p>70, 2ND CROSS,HBCS LAYOUT, MARENAHALLI, </p>
              <p>Vijayanagar (Bangalore),Bangalore North, Bangalore- 560040, Karnataka</p>
          </div>

          <div className="mt-8 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Office</h3>
                <p># 553, 2nd Floor, 9th A Main, 1st Stage,Indiranagar,Banglore, Karnataka- 560038</p>
          </div>

          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Email Us</h3>
            <p>
              <a href="mailto:contact@webloretech.com.com" target='_blank' className="hover:underline">
                contact@webloretech.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Call Us</h3>
            <p>9606189129</p>
            {/* <p>+91 70930 66502</p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          <div className='flex items-end'>
            <ul >
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:underline">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

  
          <div className='flex items-end'>
            <ul className='mt-5'>
              <li>
                <Link href="#our-story" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#values" className="hover:underline">
                  Our Values
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex items-end'>
            <ul>
              <li>
                <Link href="#testimonial" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="bg-black text-white px-2 py-2 font-semibold mb-4">
              Follow Us
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="#contact" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  X
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            &copy; Copyright TRION WEBLORE TECHNOLOGIES PRIVATE LIMITED
          </p>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}