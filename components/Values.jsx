// import Image from 'next/image';

export default function ValuesSection() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-8 gap-4 w-[80%] h-[800px]">
        {/* Item 1: Make Customers Win */}
        <div
          className="md:col-span-4 md:row-span-5 bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-make-customer-win.jpg')" }}
        >
          <div className="absolute left-8 bottom-8 bg-white bg-opacity-60 rounded-lg p-6 w-3/4 h-3/4 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">Make<br />customers<br />win</h2>
            <p className="text-sm">
              We find pride and joy in creating tailored solutions to our customer's needs, making them reach full potential in all aspects of their entire digital value chain.
            </p>
          </div>
        </div>

        {/* Item 2: Collective Victories */}
        <div
          className="md:col-span-5 md:col-start-5 md:row-span-3 bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-collective-victories.jpg')" }}
        >
          <div className="absolute left-0 bottom-0 bg-white bg-opacity-60 rounded-r-lg p-4 w-4/5 h-3/5 flex items-center gap-4">
            <h2 className="text-xl font-bold">Collective victories</h2>
            <p className="text-sm">
              Our passion to keep an eye on the horizon for positive transformative potential and to harness latest technologies encompasses our commitment to make our customers future ready and also empower by helping to bring continual development of each and every weblorer.
            </p>
          </div>
        </div>

        {/* Item 4: Stewardship */}
        <div
          className="md:col-span-4 md:col-start-6 md:row-span-5 bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-stewardship.jpg')" }}
        >
          <div className="absolute left-0 top-8 bg-white bg-opacity-60 rounded-r-lg p-4 w-3/4 h-3/5">
            <h2 className="text-xl font-bold mb-2">Stewardship</h2>
            <p className="text-sm">
              We hold ourselves liable to make a positive impact on the economy and on the lives and profession of our customers, our people and communities while also pledging sustainability to be our priority.
            </p>
          </div>
        </div>

         {/* Item 3: Integrity */}
         <div
          className="md:col-span-5 md:row-span-4 md:col-start-1  bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-integrity.jpg')" }}
        >
          <div className="absolute left-0 top-8 bg-white bg-opacity-60 rounded-b-lg p-4 w-3/4 h-4/5 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">Integrity</h2>
            <p className="text-sm">
              We hold ourselves to the highest standards of trust, dependability and experience. We walk our talk and stay true to who we are and what we believe.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}