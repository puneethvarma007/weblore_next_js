// import Image from 'next/image'
// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="relative text-white">
//       <Image src="/images/footer-bg.png" alt="Footer background" layout="fill" objectFit="cover" className="z-0" />
//       <div className="relative z-10 py-16 px-4 md:px-8">
//         <div className="flex flex-col md:flex-row justify-evenly items-start mb-12">
//           <div className="mb-8 md:mb-0">
//             <Image src="/images/footer-logo.png" alt="Weblore Logo" width={150} height={60} />
//           </div>
//           <div className="mb-8 md:mb-0">
//             <h3 className="font-bold mb-4">Email Us</h3>
//             <p><a href="mailto:admin@adharvasoft.com">admin@adharvasoft.com</a></p>
//             <p><a href="mailto:hr@adharvasoft.com">hr@adharvasoft.com</a></p>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">Call Us</h3>
//             <p>+91 70930 66502</p>
//             <p>+91 80952 47772</p>
//           </div>
//         </div>
//         <div className="grid grid-cols md:grid-cols-4 gap-8 mb-12">
//           <div>
//             <h3 className="font-bold mb-4">Services</h3>
//             <ul>
//               <li><Link href="#services">Services</Link></li>
//               <li><Link href="#solutions">Solutions</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">About Us</h3>
//             <ul>
//               <li><Link href="#our-story">Our Story</Link></li>
//               <li><Link href="#values">Our Values</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">Connect</h3>
//             <ul>
//               <li><Link href="#testimonials">Testimonials</Link></li>
//               <li><Link href="#contact">Contact</Link></li>
//             </ul>
//           </div>
//            <div>
//       <h3 className="bg-black text-white px-1 pl-2 py-2 font-semibold mb-4">Follow Us</h3>
//       <ul className="flex flex-wrap gap-0">
//         {/* First Row */}
//         <li className="w-[calc(50%-8px)]"><Link href="#contact">Instagram</Link></li>
//         <li className="w-[calc(50%-8px)]"><Link href="#testimonials">X</Link></li>

//         {/* Second Row */}
//         <li className="w-[calc(50%-8px)]"><Link href="#testimonials">Linkedin</Link></li>
//         <li className="w-[calc(50%-8px)]"><Link href="#contact">Facebook</Link></li>
//       </ul>
//     </div>
//         </div>
//         <hr className='mb-2' />
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p>&copy; Copyright Adharva Soft Labs Pvt.Ltd. All Rights Reserved</p>
//           <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <Image
        src="/images/footer-bg.png"
        alt="Footer background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Content */}
      <div className="relative z-10 py-16 px-4 md:px-8">
        {/* Top Section: Logo, Email, Call Us */}
        <div className="flex flex-col md:flex-row justify-evenly items-start mb-12 gap-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/footer-logo.png"
              alt="Weblore Logo"
              width={150}
              height={60}
            />
          </div>

          {/* Email Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Email Us</h3>
            <p>
              <a href="mailto:admin@adharvasoft.com" className="hover:underline">
                admin@adharvasoft.com
              </a>
            </p>
            <p>
              <a href="mailto:hr@adharvasoft.com" className="hover:underline">
                hr@adharvasoft.com
              </a>
            </p>
          </div>

          {/* Call Us */}
          <div>
            <h3 className="font-bold mb-4">Call Us</h3>
            <p>+91 70930 66502</p>
            <p>+91 80952 47772</p>
          </div>
        </div>

        {/* Middle Section: Services, About Us, Connect, Follow Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Services */}
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

          {/* About Us */}
          <div className='flex items-end'>
            {/* <h3 className="font-bold mb-5"></h3> */}
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

          {/* Connect */}
          <div className='flex items-end'>
            <ul>
              <li>
                <Link href="#testimonials" className="hover:underline">
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

          {/* Follow Us */}
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
                <Link href="#testimonials" className="hover:underline">
                  X
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:underline">
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

        {/* Bottom Section: Copyright and Privacy Policy */}
        <hr className="mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            &copy; Copyright Adharva Soft Labs Pvt.Ltd. All Rights Reserved
          </p>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}