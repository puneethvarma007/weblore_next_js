import Image from "next/image";

export default function OurMission() {
  return (
    <section className="relative py-16 px-4 md:px-8 text-center md:text-left min-h-[450px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-800">
        <Image
          src="/images/atf-hero-image.jpg"
          alt="Our mission backgroun"
          layout="fill"
          objectFit="fill"
          className="z-0"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl text-center mx-auto mt-10">
        <p className="text-lg max-w-2xl  mx-auto mb-8 text-gradient">
        Our mission is to accelrate the digital transformation <br /> journey of our customers across the entire digital value <br /> chain in order to maximize their potential.
        </p>
      </div>
    </section>
  );
}