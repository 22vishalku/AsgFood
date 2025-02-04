import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
   return (
      <div className=" lg:flex lg:w-full lg:h-[40vw] lg:items-center lg:justify-center lg:bg-yellow lg:-my-10">
         <section className="pt-10 my-10 ">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl mx-auto text-center">
                  <div className="flex justify-center -space-x-2 isolate">
                     <img
                        className="relative z-30 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="src\components\1732127752348.jpg"
                        alt="Dan_Abromov"
                     />
                     <img
                        className="relative z-20 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="src\components\IMG-20180817-WA0001.jpg"
                        alt="Guillermo_Rauch"
                     />
                     <img
                        className="relative z-10 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="src\components\IMG_20190411_181510 (1).jpg"
                        alt="Lee_Robinson"
                     />
                     <img
                        className="relative z-0 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="src\components\IMG_20230419_161209.jpg"
                        alt="Delba"
                     />
                  </div>

                  <h2 className="mt-8 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
                     Join <span className="border-b-8 border-white">1,482</span>{" "}
                     other Fooders
                  </h2>
                  <p className="max-w-xl mx-auto mt-6 text-base text-gray-600 md:mt-10 lg:text-xl">
                     Indulge in a world of flavors. Join us at Asg{" "}
                     <span className="text-white">Food</span> and savor the
                     beauty of delicious moments. Culinary joy awaits – sign up today!
                  </p>
                  <p className="text-yellow">   a   </p>
                  <button>
                     <Link
                        to={"/signIn"}
                        type="button"
                        className="px-3 py-2 mt-12 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Join Now
                     </Link>
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Join;
