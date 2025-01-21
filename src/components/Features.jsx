import React from "react";
import { DollarSign, Zap, Wine, Filter } from "lucide-react";

const Features = () => {
   return (
      <div className="px-4 py-5 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
         <div className="max-w-xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
               Discover the Finest
               <span className="font-serif text-yellow"> Wines </span>
               with Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
               Explore an exquisite collection of wines curated just for you. At 
               <span className="font-serif text-yellow"> Wine Haven</span>, we bring sophistication and flavor to every sip. Join us for a luxurious journey through the world of wines.
            </p>
         </div>
         <div className="grid grid-cols-1 p-4 mt-12 mb-6 text-center shadow-xl gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 rounded-2xl bg-gray">
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <DollarSign className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Secure Payments
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Buy with confidence – enjoy secure payment options for a seamless shopping experience.
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <Zap className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Fast & Easy Search
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Quickly find the perfect wine for any occasion with our easy-to-use search.
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <Wine className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Premium Collection
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Explore our premium selection of wines – from classic reds to sparkling whites.
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <Filter className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Personalized Filters
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Customize your experience – filter wines by taste, region, and type to find your perfect match.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Features;
