import Image from 'next/image'

const clients = [
  { name: 'Cutis', logo: '/images/Cutis-logo.png' },
  { name: 'Green Olive Control Systems', logo: '/images/greenolivecontrolsystems.png' },
  { name: 'SKD Pharma', logo: '/images/skd_pharma.png' },
  { name: 'GOCS', logo: '/images/gocs.jpg' },
]

export default function Clients() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Our Clients</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {clients.map((client, index) => (
          <div key={index} className="w-40 h-40 flex items-center justify-center">
            <Image src={client.logo} alt={client.name} width={150} height={150} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

