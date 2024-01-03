import React from "react";

function featureCard(props) {
  const { svgSrc, heading, paragraph, button } = props;
  return (
    <div className="grid grid-cols-2 my-7 px-32 py-16 h-[6rem]">
      <div
        className="bg-[#b2b3f1] bg-gradient-to-r from-purple-200 to-transparent
       via-purple-200 rounded-xl "
      ></div>
      <div className="flex gap-4 py-12 px-16">
        {svgSrc}
        <div className="flex flex-col gap-[20px] ">
          <h1 className="text-left text-3xl font-semibold">{heading}</h1>
          <p className="text-left text-lg text-[#926B84]">{paragraph}</p>
          <button
            className=" flex items-center w-fit bg-[#EFF0FF] max-h-[3rem] rounded-[60px] py-[1.5rem] px-[1rem] 
          text-[#565ADD] text-sm  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default featureCard;
