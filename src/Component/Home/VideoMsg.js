import React from "react";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import card4 from "../../assets/card4.webp";

function VideoMsg() {
  return (
    <div>
      <h1 className="text-[3.5rem] font-semibold my-8">
        Video messaging for all use cases
      </h1>
      <div className="flex gap-[40px] px-12 py-16 mobile:flex-col mobile:px-3">
        <div
          class="max-w-sm bg-[#E2EFDD] border  rounded-3xl 
         py-[2rem] shadow hover:shadow-xl[]  hover:blur-sm cursor-pointer"
        >
          <a href="#">
            <img src={card1} alt="" className="rounded-2xl px-[1.5rem]"></img>
          </a>
          <div className="pt-[2rem] px-[1.5rem]">
            <a href="#">
              <p className="mb-2 text-2xl text-[#365B49] tracking-normal dark:text-white">
                sales
              </p>
            </a>
            <p className="mb-3 font-normal text-[#365B49]">
              Personalize your pitch with video outreach to close more deals.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-[#F5EAF8] border  rounded-3xl 
         py-[2rem] shadow hover:shadow-xl[]  hover:blur-sm cursor-pointer"
        >
          <a href="#">
            <img src={card2} alt="" className="rounded-2xl px-[1.5rem]"></img>
          </a>
          <div className="pt-[2rem] px-[1.5rem]">
            <a href="#">
              <p className="mb-2 text-2xl text-[#450F3A] tracking-normal dark:text-white">
                Engineering
              </p>
            </a>
            <p className="mb-3 font-normal text-[#450F3A]">
              Personalize your pitch with video outreach to close more deals.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-[#DFEFFB] border  rounded-3xl 
         py-[2rem] shadow hover:shadow-xl[]  hover:blur-sm cursor-pointer"
        >
          <a href="#">
            <img src={card3} alt="" className="rounded-2xl px-[1.5rem]"></img>
          </a>
          <div className="pt-[2rem] px-[1.5rem]">
            <a href="#">
              <p className="mb-2 text-2xl text-[#333B60] tracking-normal dark:text-white">
                sales
              </p>
            </a>
            <p className="mb-3 font-normal text-[#333B60]">
              Personalize your pitch with video outreach to close more deals.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-[#EDEEFD] border  rounded-3xl 
         py-[2rem] shadow hover:shadow-xl[]  hover:blur-sm cursor-pointer"
        >
          <a href="#">
            <img src={card4} alt="" className="rounded-2xl px-[1.5rem]"></img>
          </a>
          <div className="pt-[2rem] px-[1.5rem]">
            <a href="#">
              <p className="mb-2 text-2xl text-[#3A2D5D] tracking-normal dark:text-white">
                sales
              </p>
            </a>
            <p className="mb-3 font-normal text-[#3A2D5D]">
              Personalize your pitch with video outreach to close more deals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoMsg;
