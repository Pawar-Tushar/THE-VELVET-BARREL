import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
   return (
      <section className="px-4 py-10 mx-auto max-w-7xl ">
         <div>
            <div className="max-w-3xl mx-auto lg:text-center">
               <h2 className="text-3xl font-bold text-black lg:leading-tight sm:text-4xl lg:text-5xl">
                  Frequently Asked{" "}
                  <span className="font-serif text-yellow">Questions</span>
               </h2>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 md:mt-16 md:grid-cols-2">
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     What are your shop's hours of operation?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     Our shop is open from 9:00 AM to 9:00 PM, Monday through Saturday. We are closed on Sundays.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     Do you offer home delivery?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     Yes, we offer home delivery within a 10-mile radius of our shop. Delivery charges may apply based on your location.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     What is your return and exchange policy?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     We accept returns or exchanges within 7 days of purchase, provided the items are in their original condition and packaging. Please bring your receipt for a hassle-free process.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     Can I place an order online?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     Yes, you can place an order directly through our website. Simply add items to your cart, proceed to checkout, and follow the instructions.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FAQ;
