// import Image from 'next/image';

// const services = [
//   { name: 'Web & App Development', image: '/images/services-web-development.png' },
//   { name: 'DevOps & Cloud Automation', image: '/images/services-devops.png' },
//   { name: 'SEO & Digital Marketing', image: '/images/services-seo.png' },
//   { name: 'IT Staff Augmentation', image: '/images/services-it-staff.png' },
//   { name: 'Re-Engineering', image: '/images/services-re-engineering.png' },
// ];

// export default function Services() {
//   return (
//     <section className="py-16 px-4 md:px-8 ">
//       <h2 className="text-3xl font-bold text-yellow-400 mb-8 ">SERVICES</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-6xl">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`text-center ${service.name === 'SEO & Digital Marketing' ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}`}
//           >
//             <Image
//               src={service.image}
//               alt={service.name}
//               width={2000}
//               height={200}
//               className="mx-auto"
//             />
//             <p className="mt-4 text-xl">
//               <span className="text-yellow-400">{service.name.split(' ')[0]}</span>{' '}
//               {service.name.split(' ').slice(1).join(' ')}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import Image from 'next/image';

// const services = [
//   { name: 'Web & App Development', image: '/images/services-web-development.png' },
//   { name: 'DevOps & Cloud Automation', image: '/images/services-devops.png' },
//   { name: 'SEO & Digital Marketing', image: '/images/services-seo.png' },
//   { name: 'IT Staff Augmentation', image: '/images/services-it-staff.png' },
//   { name: 'Re-Engineering', image: '/images/services-re-engineering.png' },
// ];

// export default function Services() {
//   return (
//     <section className="py-16 px-4 md:px-8">
//       {/* Move the title outside the grid and above it */}
//       <h2 className="text-3xl font-bold text-yellow-400 mb-8 md:mx-auto md:max-w-5xl ">SERVICES</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-6xl">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`text-center ${service.name === 'SEO & Digital Marketing' ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}`}
//           >
//             <Image
//               src={service.image}
//               alt={service.name}
//               width={2000}
//               height={200}
//               className="mx-auto"
//             />
//             <p className="mt-4 text-xl">
//               <span className="text-yellow-400">{service.name.split(' ')[0]}</span>{' '}
//               {service.name.split(' ').slice(1).join(' ')}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import Image from 'next/image';

const services = [
  { name: 'Web & App Development', image: '/images/services-web-development.png' },
  { name: 'DevOps & Cloud Automation', image: '/images/services-devops.png' },
  { name: 'SEO & Digital Marketing', image: '/images/services-seo.png' },
  { name: 'IT Staff Augmentation', image: '/images/services-it-staff.png' },
  { name: 'Re-Engineering', image: '/images/services-re-engineering.png' },
];

export default function Services() {
  return (
    <section className="py-16 px-4 md:px-8">
      {/* Container for heading and grid to align them */}
      <div className="mx-auto max-w-6xl">
        {/* Heading aligned with the grid */}
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 ml-10">SERVICES</h2>
        
        {/* Grid for images and text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center ${service.name === 'SEO & Digital Marketing' ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}`}
            >
              <Image
                src={service.image}
                alt={service.name}
                width={2000}
                height={200}
                className="mx-auto"
              />
              <p className="mt-4 text-xl">
                <span className="text-yellow-400">{service.name.split(' ')[0]}</span>{' '}
                {service.name.split(' ').slice(1).join(' ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}