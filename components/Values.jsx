export default function ValuesSection() {
  return (
    <section id="values" className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 2xl:ml-20 xl:ml-16 lg:ml-14 md:ml-10 sm:ml-8 xs:ml-6 ml-4 max-[320px]:ml-2">Values</h2>
          <p className="text-2xl font-bold text-gray-400 mt-2 2xl:ml-20 xl:ml-16 lg:ml-14 md:ml-10 sm:ml-8 xs:ml-6 ml-4 max-[320px]:ml-2">that brings us together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-8 gap-4 w-[95%] md:w-[100%] h-auto md:h-[800px] mx-auto">
          {/* Item 1: Make Customers Win */}
          <div
            className="md:col-span-4 md:row-span-5 bg-cover bg-center rounded-lg relative min-h-[300px] md:min-h-0"
            style={{ backgroundImage: "url('/images/values-make-customer-win.jpg')" }}
          >
            <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8 bg-white bg-opacity-60 rounded-lg p-4 md:p-6 w-[85%] md:w-3/4 h-auto md:h-3/4 flex flex-col justify-center">
              <h2 className="text-gray-600 text-lg md:text-xl font-bold mb-2 leading-tight">Make customers win</h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We find pride and joy in creating tailored solutions to our customer's needs, making them reach full potential in all aspects of their entire digital value chain.
              </p>
            </div>
          </div>

          {/* Item 2: Collective Victories */}
          <div
            className="md:col-span-5 md:col-start-5 md:row-span-3 bg-cover bg-center rounded-lg relative min-h-[300px] md:min-h-0"
            style={{ backgroundImage: "url('/images/values-collective-victories.jpg')" }}
          >
            <div className="absolute left-0 bottom-0 bg-white bg-opacity-60 rounded-r-lg p-4 w-[90%] md:w-[90%] h-auto md:h-[70%] flex flex-col justify-center">
              <h2 className="text-gray-600 text-lg md:text-xl font-bold mb-2 leading-tight">Collective victories</h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed md:leading-relaxed md:text-[12px] lg:text-sm">
                Our passion to keep an eye on the horizon for positive transformative potential and to harness latest technologies encompasses our commitment to make our customers future ready and also empower by helping to bring continual development of each and every weblorer.
              </p>
            </div>
          </div>

          {/* Item 4: Stewardship */}
          <div
            className="md:col-span-4 md:col-start-6 md:row-span-5 bg-cover bg-center rounded-lg relative min-h-[300px] md:min-h-0 top-3 max-sm:top-0"
            style={{ backgroundImage: "url('/images/values-stewardship.jpg')" }}
          >
            <div className="absolute left-0 top-4 md:top-8 bg-white bg-opacity-60 rounded-r-lg p-4 w-[90%] md:w-3/4 h-auto md:h-3/5 flex flex-col justify-center">
              <h2 className="text-lg md:text-xl font-bold mb-2 leading-tight text-gray-600">Stewardship</h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We hold ourselves liable to make a positive impact on the economy and on the lives and profession of our customers, our people and communities while also pledging sustainability to be our priority.
              </p>
            </div>
          </div>

          {/* Item 3: Integrity */}
          <div
            className="md:col-span-5 md:row-span-4 md:col-start-1 bg-cover bg-center rounded-lg relative min-h-[300px] md:min-h-0"
            style={{ backgroundImage: "url('/images/values-integrity.jpg')" }}
          >
            <div className="absolute left-0 top-4 md:top-0 md:left-12 xl:left-20 bg-white bg-opacity-60 rounded-b-lg p-4 w-[90%] md:w-3/4 h-auto md:h-4/5 flex flex-col justify-center">
              <h2 className="text-gray-600 text-lg md:text-xl font-bold mb-2 leading-tight">Integrity</h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We hold ourselves to the highest standards of trust, dependability and experience. We walk our talk and stay true to who we are and what we believe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
