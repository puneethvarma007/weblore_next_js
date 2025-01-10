import Image from 'next/image'

const solutions = [
  'Order Management System',
  'e-commerce',
  'MIS',
  'Inventory Management',
]

export default function Solutions() {
  return (
    <section className="relative py-16 px-4 md:px-8 ">
      <Image src="/images/solutions-bg.jpg" alt="Solutions background" layout="fill" objectFit="cover" className="z-0" />
      <div className="relative z-10 max-[1]:mx-auto">
        <h2 className=" max-w-md mx-auto text-3xl font-bold text-yellow-400 mb-8">Solutions</h2>
        <ul className=" space-y-4 max-w-md mx-auto bg-gradient-to-r from-yellow-400 to-gray-500 text-transparent bg-clip-text ">
          {solutions.map((solution, index) => (
            <li key={index} className="text-xl">{solution}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

