import React, { useRef } from "react";
import img1 from "../../assets/slider1.svg";
import alex from "../../assets/alex.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sliders() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="w-[70%] mx-auto rounded-[3rem] relative">
      <div
        className="h-12 w-12 flex items-center justify-center bg-white 
      z-[1] rounded-full absolute right-[16px] top-[11rem]"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faArrowRight} className="h-30" />
      </div>
      <div
        className="h-12 w-12 flex items-center justify-center bg-white rounded-full 
      absolute z-[1]  left-[16px] top-[11rem]"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="bg-[#EFF0FF] w-[70%]  rounded-[3rem] py-20 px-20">
          <img src={img1} alt=" " className="h-6 m-auto"></img>
          <div className="text-[#2B1C50] text-2xl font-bold pt-10 px-10">
            ‘Loom has been the light of my life since you showed me it.’ – I
            never tire of hearing this from folks. Not even an investor... yet.
          </div>
          <div className="flex items-center justify-center gap-3 pb-5  pt-5 ">
            <img src={alex} alt="" className="h-12 w-12  rounded-full"></img>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#3D2E7C] text-sm">Alexis Ohanian</p>
              <p className="text-[#3D2E7C] text-xs">Founder, SevenSevenSix</p>
            </div>
          </div>
        </div>
        <div className="bg-[#EFF0FF] w-[70%]  rounded-[3rem] py-20 px-20">
          <img src={img1} alt=" " className="h-6 m-auto"></img>
          <div className="text-[#2B1C50] text-2xl font-bold pt-10 px-10">
            ‘Loom has been the light of my life since you showed me it.’ – I
            never tire of hearing this from folks. Not even an investor... yet.
          </div>
          <div className="flex items-center justify-center gap-3 pb-5  pt-5 ">
            <img src={alex} alt="" className="h-12 w-12  rounded-full"></img>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#3D2E7C] text-sm">Alexis Ohanian</p>
              <p className="text-[#3D2E7C] text-xs">Founder, SevenSevenSix</p>
            </div>
          </div>
        </div>
        <div className="bg-[#EFF0FF] w-[70%]  rounded-[3rem] py-20 px-20">
          <img src={img1} alt=" " className="h-6 m-auto"></img>
          <div className="text-[#2B1C50] text-2xl font-bold pt-10 px-10">
            ‘Loom has been the light of my life since you showed me it.’ – I
            never tire of hearing this from folks. Not even an investor... yet.
          </div>
          <div className="flex items-center justify-center gap-3 pb-5  pt-5 ">
            <img src={alex} alt="" className="h-12 w-12  rounded-full"></img>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#3D2E7C] text-sm">Alexis Ohanian</p>
              <p className="text-[#3D2E7C] text-xs">Founder, SevenSevenSix</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
