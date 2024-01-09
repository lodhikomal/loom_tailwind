import React from "react";

function getLink() {
  return (
    <>
      <div
        className=" flex justify-between my-10 py-10 px-6 w-[90%] shadow-2xl mx-auto
       rounded-[4rem] items-center mobile:flex-col mobile:gap-[20px]"
      >
        <h1 className="text-5xl font-bold mobile:text-3xl">
          Loom works wherever you do.
        </h1>
        <div className="flex flex-col items-start gap-4 pl-5 pr-5">
          <button className="btn w-[13rem] h-10 mobile:flex ">
            <span>
              <svg viewBox="0 0 24 24" className="h-[20px] text-white pr-2">
                <path
                  d="M18.22 21H5.78A2.77 2.77 0 013 18.22v-3.55a1 1 0 012 0v3.55a.76.76 0 00.23.55.75.75 0 00.55.23h12.44a.79.79 0 00.78-.78v-3.55a1 1 0 012 0v3.55A2.77 2.77 0 0118.22 21zM12 15.67a1 1 0 01-.35-.08.83.83 0 01-.34-.22l-4.46-4.44a1 1 0 01-.29-.71 1 1 0 01.29-.7 1 1 0 011.41 0L11 12.25V4a1 1 0 012 0v8.25l2.74-2.73a1 1 0 011.41 0 1 1 0 01.29.7 1 1 0 01-.29.71l-4.44 4.44a1 1 0 01-.33.22 1.05 1.05 0 01-.36.08z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Get Loom For free
          </button>
          <p className="text-[#753EAA] text-xs">
            For Mac, Windows, iOS, and Android
          </p>
        </div>
      </div>
    </>
  );
}

export default getLink;
