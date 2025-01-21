import React from "react";

const Team = () => {
   return (
      <>
         <div className="px-4 py-5 mx-auto max-w-7xl lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                  Meet the{" "}
                  <span className="font-serif text-yellow">Team</span>
               </h2>
               <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
                  Behind our shop's success is a dedicated team of experts who
                  work tirelessly to curate the best products, ensure smooth
                  operations, and deliver an excellent customer experience.
               </p>
            </div>
            <br />

            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
               <div className="flex flex-col items-center shadow-2xl text-start rounded-2xl">
                  <div
                     className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px]"
                     style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}>
                     <img
                        src="https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Jane Smith"
                        className="z-0 h-full w-full rounded-[10px] object-cover"
                     />
                     <div className="absolute bottom-4 left-4">
                        <h1 className="text-xl font-semibold text-white">
                           Jane Smith
                        </h1>
                        <h6 className="text-base text-white">Store Manager</h6>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center shadow-2xl text-start rounded-2xl">
                  <div
                     className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px]"
                     style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}>
                     <img
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="David Johnson"
                        className="z-0 h-full w-full rounded-[10px] object-cover"
                     />
                     <div className="absolute bottom-4 left-4">
                        <h1 className="text-xl font-semibold text-white">
                           David Johnson
                        </h1>
                        <h6 className="text-base text-white">
                           Product Curator
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center shadow-2xl text-start rounded-2xl">
                  <div
                     className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px]"
                     style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}>
                     <img
                        src="https://images.pexels.com/photos/4065159/pexels-photo-4065159.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Sarah Lee"
                        className="z-0 h-full w-full rounded-[10px] object-cover"
                     />
                     <div className="absolute bottom-4 left-4">
                        <h1 className="text-xl font-semibold text-white">
                           Sarah Lee
                        </h1>
                        <h6 className="text-base text-white">
                           Customer Support
                        </h6>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Team;
