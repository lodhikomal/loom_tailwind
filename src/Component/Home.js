import React from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import Review from "./Home/Review";
import Recorder from "./Home/Recorder";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Review />
      <Recorder />
    </div>
  );
}

export default Home;
