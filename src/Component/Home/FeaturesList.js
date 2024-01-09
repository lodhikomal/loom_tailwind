import React from "react";
import ListCard from "./ListCard";

function FeaturesList() {
  return (
    <div className="my-8">
      <button
        className="m-auto flex items-center w-fit bg-[#EFF0FF] max-h-[3rem] rounded-[60px] py-[1.5rem] px-[1rem] 
          text-[#565ADD] text-sm  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        See All uses
      </button>
      <h1 className="text-5xl font-semibold my-12 py-10">
        Powerful features for easy, custom recordings
      </h1>
      <div className="flex flex-col gap-7">
        <ListCard
          list={"Screen and camera recording"}
          list2={"Easy sharing and embedding"}
        />
        <ListCard
          list={"Trim and stitch video clips"}
          list2={"Download and upload"}
        />
        <ListCard
          list={"Transcriptions and closed captions"}
          list2={"Video privacy controls"}
        />
        <ListCard
          list={"Custom background"}
          list2={"Video and viewer insights"}
        />
      </div>
      <button
        className="cursor-pointer text-sm leading-3 border-black mt-10 pt-24 
      mobile:pt-0 border-b-[1px] bottom-5 w-fit"
      >
        See all Features
      </button>
    </div>
  );
}

export default FeaturesList;
