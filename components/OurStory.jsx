import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="relative py-16 px-4 md:px-8">
      <Image src="/images/our-story-bg.png" alt="Our Story background" layout="fill" objectFit="cover" className="z-0" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Our Story</h2>
        <p className="mb-4">
          We are a team of tech business-savvy geeks combining a startup mindset with our corporate expertise partnering with many of our clients time and again earning their trust. We are here to build a legacy with strong customer satisfaction and customer loyalty that's beyond transactional.
        </p>
        <p className="mb-4">
          At the heart of WEBLORE lies a dedication to deliver customer satisfaction and success from inception to execution. Our team-while relentlessly focusing on pushing boundaries believes in the power of technology to make meaningful impact.
        </p>
        <p>
          Join us on the digital transformation journey because at Weblore we are not just keeping up with the technology, "We're shaping it."
        </p>
      </div>
    </section>
  )
}

