// import Image from 'next/image';

// export default function Values() {
//   return (
//     <section className="py-16 px-4 md:px-8">
//       {/* Section Heading */}
//       <h2 className="text-3xl font-bold text-yellow-400 mb-2 text-center">Values</h2>
//       <h3 className="text-xl mb-8 text-center text-gray-600">that bring us together</h3>

//       {/* Values Grid */}
//       <div className="mx-auto">
//         <div className="flex flex-wrap gap-4 mx-auto">
//           {/* Make customers win */}
//           <div className="relative h-[600px] w-full md:w-[calc(50%-8px)]">
//             <Image
//               src="/images/values-make-customer-win.jpg"
//               alt="Make customers win"
//               fill
//               className="object-cover rounded-lg"
//             />
//             <div className="absolute left-[10%] bottom-[10%] w-[80%] md:w-[60%]  bg-white  bg-opacity-40 backdrop-blur-sm p-5 rounded-lg">
//               <h4 className="text-xl font-bold mb-2">Make<br />customers<br />win</h4>
//               <p className="text-sm">
//                 We find pride and joy in creating tailored solutions to our customer's needs making them reach full potential in all aspects of their entire digital value chain.
//               </p>
//             </div>
//           </div>

//           {/* Collective victories */}
//           <div className="relative h-[300px] w-full md:w-[calc(50%-8px)]">
//             <Image
//               src="/images/values-collective-victories.jpg"
//               alt="Collective victories"
//               fill
//               className="object-cover rounded-lg"
//             />
//             <div className="absolute left-0 bottom-0 w-[90%] md:w-[85%] bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-r-lg">
//               <div className="flex flex-col md:flex-row items-start gap-4">
//                 <h4 className="text-xl font-bold whitespace-nowrap">Collective victories</h4>
//                 <p className="text-sm">
//                   Our passion to keep an eye on the horizon for positive transformative potential and to harness latest technologies encompasses our commitment to make our customers future ready and also empower by helping to bring continual development of each and every weblorer.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Integrity */}
//           <div className="relative h-[300px] w-full md:w-[calc(50%-8px)]">
//             <Image
//               src="/images/values-integrity.jpg"
//               alt="Integrity"
//               fill
//               className="object-cover rounded-lg"
//             />
//             <div className="absolute top-[15%] left-[10%] w-[80%] md:w-[70%] bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-lg">
//               <h4 className="text-xl font-bold mb-2">Integrity</h4>
//               <p className="text-sm">
//                 We hold ourselves to the highest standards of trust, dependability and experience. We walk our talk and stay true to who we are and what we believe.
//               </p>
//             </div>
//           </div>

//           {/* Stewardship */}
//           <div className="relative h-[600px] w-full md:w-[calc(50%-8px)]">
//             <Image
//               src="/images/values-stewardship.jpg"
//               alt="Stewardship"
//               fill
//               className="object-cover rounded-lg"
//             />
//             <div className="absolute top-[15%] left-0 w-[85%] md:w-[80%] bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-r-lg">
//               <h4 className="text-xl font-bold mb-2">Stewardship</h4>
//               <p className="text-sm">
//                 We hold ourselves liable to make a positive impact on the economy and on the lives and profession of our customers, our people and communities while also pledging sustainability to be our priority.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from 'next/image';

export default function ValuesSection() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 w-full max-w-6xl h-[800px]">
        {/* Item 1: Make Customers Win */}
        <div
          className="md:col-span-2 md:row-span-2 bg-cover bg-center rounded-lg relative"
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
          className="md:col-span-2 md:row-span-1 bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-collective-victories.jpg')" }}
        >
          <div className="absolute left-0 bottom-0 bg-white bg-opacity-60 rounded-r-lg p-4 w-4/5 h-3/5 flex items-center gap-4">
            <h2 className="text-xl font-bold">Collective victories</h2>
            <p className="text-sm">
              Our passion to keep an eye on the horizon for positive transformative potential and to harness latest technologies encompasses our commitment to make our customers future ready and also empower by helping to bring continual development of each and every weblorer.
            </p>
          </div>
        </div>

        {/* Item 3: Integrity */}
        <div
          className="md:col-span-3 md:row-span-1 bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-integrity.jpg')" }}
        >
          <div className="absolute left-0 top-8 bg-white bg-opacity-60 rounded-b-lg p-4 w-3/4 h-4/5 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">Integrity</h2>
            <p className="text-sm">
              We hold ourselves to the highest standards of trust, dependability and experience. We walk our talk and stay true to who we are and what we believe.
            </p>
          </div>
        </div>

        {/* Item 4: Stewardship */}
        <div
          className="md:col-span-1 md:row-span-2 bg-cover bg-center rounded-lg relative"
          style={{ backgroundImage: "url('/images/values-stewardship.jpg')" }}
        >
          <div className="absolute left-0 top-8 bg-white bg-opacity-60 rounded-r-lg p-4 w-3/4 h-3/5">
            <h2 className="text-xl font-bold mb-2">Stewardship</h2>
            <p className="text-sm">
              We hold ourselves liable to make a positive impact on the economy and on the lives and profession of our customers, our people and communities while also pledging sustainability to be our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}