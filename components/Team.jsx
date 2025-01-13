import Image from 'next/image'

export default function Team() {
  return (
    <section className="py-16 px-4  md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mx-auto">
        <div className="md:w-1/2">
          <Image src="/images/this-is-us.jpg" alt="Our Team" width={500} height={300} className="w-full h-auto" />
          <h3 className="text-2xl font-bold mt-4 text-center text-gray-400">Meet our amazing team</h3>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">This is Us</h2>
          <p>
            We pride ourselves in hiring high driven and high performing individuals who are generously exchanging expertise and skills to achieve the common goal of collective victories and also helping us create an energetic workplace environment. Our team has expertise in building projects across all stages of development. Thanks to our team's commitment to deliver exceptional outcomes we have partnered with many of our customers time and again.
          </p>
        </div>
      </div>
    </section>
  )
}

