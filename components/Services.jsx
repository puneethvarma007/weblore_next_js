// import Image from 'next/image'

// const services = [
//   { name: 'Web & App Development', image: '/images/services-web-development.png' },
//   { name: 'DevOps & Cloud Automation', image: '/images/services-devops.png' },
//   { name: 'SEO & Digital Marketing', image: '/images/services-seo.png' },
//   { name: 'IT Staff Augmentation', image: '/images/services-it-staff.png' },
//   { name: 'Re-Engineering', image: '/images/services-re-engineering.png' },
// ]

// export default function Services() {
//   return (
//     <section className="py-16 px-4 md:px-8">
//       <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">SERVICES</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//         {services.map((service, index) => (
//           <div key={index} className="text-center">
//             <Image src={service.image} alt={service.name} width={200} height={200} className="mx-auto" />
//             <p className="mt-4 text-lg">
//               <span className="text-yellow-400">{service.name.split(' ')[0]}</span>{' '}
//               {service.name.split(' ').slice(1).join(' ')}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
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
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
    </section>
  );
}