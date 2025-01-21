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
                        src="https://images.pexels.com/photos/3182741/pexels-photo-3182741.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Shop_Manager"
                     />
                     <img
                        className="relative z-20 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/3987307/pexels-photo-3987307.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Product_Curator"
                     />
                     <img
                        className="relative z-10 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/4065159/pexels-photo-4065159.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Customer_Service"
                     />
                     <img
                        className="relative z-0 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Operations_Lead"
                     />
               </div>

                  <h2 className="mt-8 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
                     Join <span className="border-b-8 border-white">1,482</span>{" "} other Wine Enthusiasts
                  </h2>
                  <p className="max-w-xl mx-auto mt-6 text-base text-gray-600 md:mt-10 lg:text-xl">
                     Discover the finest wines and elevate your tasting experience. Join us at{" "}
                     <span className="text-blue">The Velvet Barrerl</span> and savor every exquisite sip. Cheers to great moments – sign up today!
                  </p>
                  <button>
                     <Link
                        to={"/signIn"}
                        type="button"
                        className="px-3 py-2 mt-8 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
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