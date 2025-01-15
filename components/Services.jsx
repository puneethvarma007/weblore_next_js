import Image from 'next/image';

const services = [
  { name: 'Web & App Development', image: '/images/services-web-development.png' },
  { name: 'DevOps & Cloud Automation', image: '/images/services-devops.png' },
  { name: 'SEO & Digital Marketing', image: '/images/services-seo.png' },
  { name: 'IT Staff Augmentation', image: '/images/services-it-staff.png' },
  { name: 'Re - Engineering', image: '/images/services-re-engineering.png' },
];

export default function Services() {
  return (
    <section id='services' className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 2xl:ml-20 xl:ml-16 lg:ml-14 md:ml-10 sm:ml-8 xs:ml-6 ml-4 max-[320px]:ml-2">
  SERVICES
</h2>
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
                className="mx-auto mt-2 my-0 "
              />
              <p className="mt-0 text-xl">
                {service.name === 'Web & App Development' && (
                  <>
                    <span className="text-yellow-400">Web & App</span>{' '}
                    <span className="text-black">Development</span>
                  </>
                )}
                {service.name === 'DevOps & Cloud Automation' && (
                  <>
                    <span className="text-yellow-400">DevOps & Cloud</span>{' '}
                    <span className="text-black">Automation</span>
                  </>
                )}
                {service.name === 'SEO & Digital Marketing' && (
                  <>
                    <span className="text-yellow-400">SEO & Digital</span>{' '}
                    <span className="text-black">Marketing</span>
                  </>
                )}
                {service.name === 'IT Staff Augmentation' && (
                  <>
                    <span className="text-yellow-400">IT Staff</span>{' '}
                    <span className="text-black">Augmentation</span>
                  </>
                )}
                {service.name === 'Re - Engineering' && (
                  <>
                    <span className="text-black">Re -</span>{' '}
                    <span className="text-yellow-400">Engineering</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
