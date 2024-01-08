import React from "react";
import enterImg from "../../assets/enterprise.webp";

function Enterprise() {
  return (
    <div className="bg-bgImg  w-[92%] mx-auto my-20 py-20 rounded-3xl relative">
      <h1 className="text-white text-5xl font-bold py-3">
        Loom for Enterprise
      </h1>
      <p className="text-[#BBB6C6] text-2xl py-8 px-[16rem]">
        Loom for Enterprise helps teams securely manage and organize async video
        communication at scale
      </p>
      <button className="btn mx-auto h-8 border-[#3D2E7C]">
        <span>
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-4 mr-2">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.778 7.667A.778.778 0 005 8.444v9.778a.778.778 0 00.778.778h9.778a.778.778 0 00.777-.778V12.89a1 1 0 112 0v5.333A2.778 2.778 0 0115.556 21H5.778A2.778 2.778 0 013 18.222V8.444a2.778 2.778 0 012.778-2.777h5.333a1 1 0 110 2H5.778zM13.667 4a1 1 0 011-1H20a1 1 0 011 1v5.333a1 1 0 11-2 0V5h-4.333a1 1 0 01-1-1z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.707 3.293a1 1 0 010 1.414l-9.778 9.778a1 1 0 01-1.414-1.414l9.778-9.778a1 1 0 011.414 0z"
              fill="currentColor"
            ></path>
          </svg>
        </span>{" "}
        Learn More
      </button>
      <img src={enterImg} alt="" className="px-[8rem] py-[4rem]"></img>
      <div className="absolute left-[49rem] bottom-[14rem] z-[1]">
        <video
          autoPlay
          muted
          loop
          playsinline
          className="RecordScreenAnimation_cam__ivFyG size-44 object-cover
        relative rounded-full mx-auto z-10 mobile:size-28"
        >
          <source
            src="https://cdn.loom.com/assets/marketing/bubbs/angelina.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Enterprise;
