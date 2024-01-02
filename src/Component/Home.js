import React from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import Review from "./Home/Review";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Review />
    </div>
  );
}

export default Home;
