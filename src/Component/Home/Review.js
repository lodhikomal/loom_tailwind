import React from "react";
import reviewImg from "../../assets/review.jpeg";

function Review() {
  return (
    <div
      className=" flex justify-center gap-[96px] bg-[#2B1C50] max-w-screen-xl mx-auto my-20 rounded-3xl 
    py-10  "
    >
      <div className="w-1/3 py-20">
        <img src={reviewImg} alt="" className="rounded-3xl "></img>
      </div>
      <div className="flex items-start flex-col w-1/3 py-24 ">
        <p className="text-[#D1D1F7] text-2xl">New!</p>
        <h1 className="text-[4rem] text-white text-left leading-[5rem]">
          Loom 2023 in Review
        </h1>
        <p className="text-[#CBCEF7] text-2xl text-left my-3">
          Learn how 25+ million people around the world use async video to
          improve focus, clarity, and connectedness.
        </p>
        <button className="btn my-7 h-3  border-[#3C3588]">
          read the review
        </button>
      </div>
    </div>
  );
}

export default Review;
