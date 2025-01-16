import Image from "next/image";

export default function OurMission() {
  return (
    <section className="relative py-16 px-4 md:px-8 text-center md:text-left min-h-[450px] max-sm:min-h-[350px]">
      <div className="absolute inset-0 bg-gray-800">
        <Image
          src="/images/atf-hero-image.jpg"
          alt="Our mission background"
          layout="fill"
          objectFit="cover" 
          className="z-0"
        />
      </div>

      <div className="relative z-10 max-w-6xl text-center mx-auto mt-10">
        <p className="text-lg max-[400px]:text-[11px] max-sm:text-sm max-w-2xl mx-auto mb-8 text-gradient whitespace-pre-line">
          Our mission is to accelerate the digital transformation{"\n"}
          journey of our customers across the entire digital value{"\n"}
          chain in order to maximize their potential.
        </p>
      </div>
    </section>
  );
}