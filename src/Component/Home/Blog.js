import React from "react";

function Blog() {
  return (
    <>
      <div className="bg-[#2B1C50] w-[93%] m-auto rounded-3xl py-12 ">
        <h6 className="text-xs font-bold text-white pt-10 pb-5">
          FROM OUR BLOG
        </h6>
        <h1 className="text-5xl font-semibold text-white px-16 leading-">
          How to use async video messaging to improve communication
        </h1>
        <div className="my-10 py-10 grid grid-cols-2 mobile:grid-cols-1 px-32 gap-[5rem] cursor-pointer">
          <div
            className="bg-[#3D2E7C] rounded-3xl flex flex-col gap-5 py-16 px-8 
          text-start transition-transform transform hover:scale-105  
          hover:shadow-2xl hover:shadow-white "
          >
            <h3 className="text-[white] text-2xl">
              When to Choose Synchronous Vs. Asynchronous Communication
            </h3>
            <p className="text-[#9DABE7] text-sm">
              This guide explores the intricacies of sync vs. async
              communication, helps you decide which is the best for your
              workflow, and introduces how screen recording like Loom bridges
              the gap between these communication styles.
            </p>
            <div className="flex items-center">
              <p className="text-[#9DABE7] text-sm">Read the article</p>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[20px] w-[30px] text-[#ffff]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 12a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 12l-5.293-5.293a1 1 0 010-1.414z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div
            className="bg-[#3D2E7C] rounded-3xl flex flex-col gap-5 py-16 px-8
          text-start transition-transform transform hover:scale-105  
          hover:shadow-xl hover:shadow-white  "
          >
            <h3 className="text-[white] text-2xl">
              7 Tips for Overcoming Camera Anxiety
            </h3>
            <p className="text-[#9DABE7] text-sm">
              It can feel vulnerable to record a video message — almost like
              public speaking — especially if you’re not getting feedback from
              another person in real life. Here are 7 tips for overcoming camera
              anxiety, so you can communicate with greater clarity, and build
              stronger relationships at work.
            </p>
            <div className="flex items-center">
              <p className="text-[#9DABE7] text-sm">Read the article</p>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[20px] w-[30px] text-[#ffff]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 12a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 12l-5.293-5.293a1 1 0 010-1.414z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <button className="btn mx-auto h-10 border-[#3D2E7C]">
          Explore Our Blog
        </button>
      </div>
    </>
  );
}

export default Blog;
