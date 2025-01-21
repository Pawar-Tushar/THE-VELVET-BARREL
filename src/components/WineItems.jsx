import React from "react";
import toast, { Toaster } from "react-hot-toast";

import WineCard from "./WineCard.jsx";
import WineData from "../data/WineData.js";

const WineItems = () => {
   const handleToast = (name) => toast.success(` added ${name} to cart`);

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <div className="py-5">
            <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
               <h1 className="text-2xl font-bold lg:text-5xl">
                  Find the <span className="font-serif text-yellow">Best</span>{" "}
                  Wine
               </h1>
            </span>
            <div className="flex flex-wrap justify-center gap-10 lg:mx-20">
               {WineData.map((wine) => {
                  return (
                     <WineCard
                        key={wine.id}
                        id={wine.id}
                        name={wine.name}
                        price={wine.price}
                        desc={wine.desc}
                        rating={wine.rating}
                        img={wine.img}
                        handleToast={handleToast}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default WineItems;