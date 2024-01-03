import React from "react";
import FeatureCard from "../featureCard";
function Features() {
  return (
    <>
      <div className="py-10">
        <h1 className="font-semibold text-5xl px-3 my-10">
          So much more than a screen recorder
        </h1>
      </div>
      <FeatureCard
        svgSrc={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-[3rem] w-[7rem] bg-[#b2b3f1] rounded-full p-2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.693 9.693a1 1 0 011.092-.216l9.6 4a1 1 0 01-.063 1.87l-3.714 1.26-1.261 3.714a1 1 0 01-1.87.063l-4-9.6a1 1 0 01.216-1.091zm2.564 2.564l2.047 4.914.569-1.673a1 1 0 01.625-.625l1.673-.569-4.914-2.047z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.35 15.35a1 1 0 011.414 0l3.394 3.394a1 1 0 01-1.414 1.414l-3.394-3.394a1 1 0 010-1.414zM5.6 5a.6.6 0 00-.6.6v7.2a.6.6 0 00.6.6h.8a1 1 0 110 2h-.8A2.6 2.6 0 013 12.8V5.6A2.6 2.6 0 015.6 3h7.2a2.6 2.6 0 012.6 2.6v.8a1 1 0 11-2 0v-.8a.6.6 0 00-.6-.6H5.6z"
              fill="currentColor"
            ></path>
          </svg>
        }
        heading={"Lightning fast screen recording"}
        paragraph={
          "Easily record your screen and camera. Record on any device using Loom’s Chrome extension, desktop app or mobile app."
        }
        button={"Download Now"}
      />
    </>
  );
}

export default Features;
