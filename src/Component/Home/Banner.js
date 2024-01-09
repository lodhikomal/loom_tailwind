import React from "react";
import hubImg from "../../assets/hubspot.svg";
import locImg from "../../assets/Lacoste.svg";
import mImg from "../../assets/m.svg";
import brazImg from "../../assets/braze.svg";
import brexImg from "../../assets/brex.svg";
import fabImg from "../../assets/fab.svg";
import greenImg from "../../assets/green.svg";
import gtmImg from "../../assets/gtm.svg";
import juniperImg from "../../assets/juniper.svg";
import lacoImg from "../../assets/Lacoste.svg";
import launchImg from "../../assets/launch.png";
import remoteImg from "../../assets/remote.svg";
import postImg from "../../assets/Post.svg";
import merImg from "../../assets/mercedes.svg";
import fordImg from "../../assets/ford.svg";
import teslaImg from "../../assets/tesla.svg";
import asanaImg from "../../assets/asana.svg";
import atalaImg from "../../assets/atala.svg";
import amazonImg from "../../assets/amazon.svg";
import apple1Img from "../../assets/apple1.svg";
import goldmanImg from "../../assets/goldman.svg";
import volvoImg from "../../assets/volvo.svg";
import walImg from "../../assets/walmart.svg";
import wayImg from "../../assets/wayfair.svg";
import disneyImg from "../../assets/disney.svg";
import AEImg from "../../assets/Ae.svg";
import nordeImg from "../../assets/nordstrom.svg";
import ticketImg from "../../assets/ticket.svg";
import gapImg from "../../assets/gap.svg";

function Banner() {
  return (
    <div>
      <h1
        className="mt-6 pt-10 text-center text-[#2B1C50] text-[2.5rem] font-bold px-48
      tablet:px-6 mobile:pl-[1rem] mobile:pr-[1rem]"
      >
        More than 21 million people across 200,000 companies choose Loom
      </h1>

      {/* <div className="flex"> */}
      <div class="relative flex overflow-x-hidden  -z-10">
        <div class="py-12 animate-marquee whitespace-nowrap flex gap-24 items-center ">
          <img
            src={hubImg}
            alt=""
            className="h-[2rem] w-[14rem] filter invert-58 sepia-13 saturate-501 hue-rotate-213 brightness-86 contrast-88"
          />

          <img src={locImg} alt="" className=" h-[1rem] w-[14rem]" />

          <img src={mImg} alt="" className=" h-[2rem] w-[14rem]" />

          <img src={postImg} alt="" className="h-[1rem] w-[14rem]"></img>

          <img src={remoteImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={brazImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={brexImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={fabImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={greenImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={gtmImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={juniperImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={lacoImg} alt="" className="h-[1rem] w-[14rem]"></img>

          <img src={launchImg} alt="" className="h-[2rem] w-[14rem]"></img>
        </div>
      </div>
      <div class="relative flex overflow-x-hidden -z-10">
        <div class=" pb-12 animate-marquee whitespace-nowrap flex gap-24 items-center ">
          <img src={fordImg} alt="" className=" h-[1rem] w-[14rem]" />

          <img src={merImg} alt="" className=" h-[2rem] w-[14rem]" />

          <img src={teslaImg} alt="" className="h-[1rem] w-[14rem]"></img>

          <img src={amazonImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={atalaImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={volvoImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={goldmanImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={apple1Img} alt="" className="h-[2rem] w-[14rem]"></img>
          <img src={asanaImg} alt="" className="h-[2rem] w-[14rem]"></img>
        </div>
      </div>
      <div class="relative flex overflow-x-hidden -z-10">
        <div class="pb-12 animate-marquee whitespace-nowrap flex gap-24 items-center ">
          <img src={wayImg} alt="" className=" h-[2rem] w-[14rem]" />

          <img src={walImg} alt="" className=" h-[2rem] w-[14rem]" />

          <img src={gapImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={nordeImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={disneyImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={volvoImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={ticketImg} alt="" className="h-[2rem] w-[14rem]"></img>

          <img src={AEImg} alt="" className="h-[2rem] w-[14rem]"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
