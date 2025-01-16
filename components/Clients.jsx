'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import modules from 'swiper/modules'

import 'swiper/css'; 
import 'swiper/css/pagination'; 

const clients = [
  { name: 'bus', title: 'Bus Ticketing', logo: '/images/bus logo.png' },
  { name: 'tecurate', title: 'Techurate', logo: '/images/tecurate.png' },
  { name: 'effibuild', title: 'Effibuild', logo: '/images/effibuild.png' },
  { name: 'GOCS', logo: '/images/gocs.jpg' },
  { name: 'Cutis', logo: '/images/Cutis-logo.png' },
  { name: 'SKD Pharma', logo: '/images/skd_pharma.png' },
];

export default function Clients() {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Our Clients</h2>
      <div
        className="clients-slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]} 
          slidesPerView={4} 
          spaceBetween={40} 
          loop={true} 
          autoplay={{ delay: 1700, disableOnInteraction: false }} 
          pagination={{ clickable: true }} 
          breakpoints={{            
            320: { slidesPerView: 1 }, 
            420: { slidesPerView: 2 }, 
            768: { slidesPerView: 3 }, 
            1024:{ slidesPerView: 4 },
            1280:{ slidesPerView: 5 }, 
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="py-12">
              <div className="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={70}
                  priority
                  className="object-contain hover:opacity-100 transition-opacity duration-300"
                  style={{ height: '100px', width: '200px' }}
                />
                {client.title && <p className="text-center mt-2">{client.title}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ccc; 
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
          transition: background-color 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #FFF176; 
        }
      `}</style>
    </section>
  );
}