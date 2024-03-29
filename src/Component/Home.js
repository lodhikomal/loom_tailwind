import React from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import Review from "./Home/Review";
import Recorder from "./Home/Recorder";
import Content from "./Home/content";
import VideoMsg from "./Home/VideoMsg";
import FeaturesList from "./Home/FeaturesList";
import Blog from "./Home/Blog";
import Enterprise from "./Home/Enterprise";
import Slider from "./Home/Sliders";
import GetLink from "./Home/getLink";
import Footer from "./Home/Footer";
// import Features from "./Home/Features";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Review />
      <Recorder />
      {/* <Features /> */}
      <Content />
      <VideoMsg />
      <FeaturesList />
      <Blog />
      <Enterprise />
      <Slider />
      <GetLink />
      <Footer />
    </div>
  );
}

export default Home;
