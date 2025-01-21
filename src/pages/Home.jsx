import React from "react";

//Components
import Navbar from "../components/Navbar";
import WineItem from "../components/WineItems";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

const Home = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <Join />
         <WineItem />
         <Features />
         <Team />
         <FAQ />
         <Footer />
      </>
   );
};

export default Home;