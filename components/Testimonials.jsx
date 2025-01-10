export default function Testimonials() {
    return (
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-yellow-400">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
          </div>
          <div className="md:w-1/2">
            <video controls className="w-full rounded-lg shadow-lg">
              <source src="/videos/testimonial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    )
  }
  
  