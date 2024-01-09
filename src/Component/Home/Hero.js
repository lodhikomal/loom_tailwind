import React from "react";

function Hero() {
  return (
    <div className="bg-[rgb(209,209,247)] px-28 py-16 flex flex-col items-center justify-center mobile:px-3 mobile:[py-10]">
      <div className="flex items-center flex-col my-16 py-6 mobile:items-start">
        <h1 className="text-[#2B1C50] text-center text-[4rem] font-custom  mobile:text-left mobile:text-4xl">
          One video is worth a thousand words
        </h1>
        <p
          className="text-[#3D2E7C] my-5 pt-3 pb-3 leading-[3rem] mobile:text-left 
        mobile:text-xl mobile:px-1 text-3xl pl-24 pr-24 tablet:px-6"
        >
          Easily record and share AI-powered video messages with your teammates
          and customers to supercharge productivity
        </p>
        <button
          className=" border-8 btn mobile:inline-flex max-h-24 w-fit my-5 justify-center text-2xl mobile:w-fit
          "
        >
          Get loom for free
        </button>
      </div>

      <div className="shadow-2xl shadow-[#9791EC]  rounded-[2rem]">
        <video autoPlay loop muted playsInline className="rounded-[2rem] ">
          <source
            src="https://cdn.loom.com/sessions/thumbnails/313bf71d20ca47b2a35b6634cefdb761-00001.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[58rem] left-[40rem] tablet:top-[60rem] tablet:left-[22rem] mobile:top-[44rem] mobile:left-[40%]">
          <svg viewBox="0 0 90 90" fill="none" className="w-20 ">
            <path
              fill="#ffffff"
              opacity="0.3"
              d="M45 90C69.8529 90 90 69.8527 90 44.9999C90 20.1471 69.8529 0 45 0C20.1472 0 0 20.1471 0 44.9999C0 69.8527 20.1472 90 45 90Z"
            ></path>
            <path
              fill="#ffffff"
              d="M45 85C67.0914 85 85 67.0913 85 44.9999C85 22.9086 67.0914 5 45 5C22.9086 5 5 22.9086 5 44.9999C5 67.0913 22.9086 85 45 85Z"
            ></path>
            <path
              d="M35 33.268V56.732C35 58.5212 37.0582 59.6083 38.6432 58.6344L57.8999 46.9025C59.3667 46.0192 59.3667 43.9808 57.8999 43.0749L38.6432 31.3656C37.0582 30.3917 35 31.4788 35 33.268Z"
              fill="black"
              opacity="0.7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
