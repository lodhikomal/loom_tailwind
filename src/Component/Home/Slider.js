import React from "react";
import img1 from "../../assets/slider1.svg";
import alex from "../../assets/alex.jpg";

function Slider() {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-[70%] mx-auto my-10 py-16"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-3xl md:h-96 bg-[#EFF0FF]">
          <div
            className="absolute w-[70%] top-[25%] left-[16%] mx-auto duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="flex flex-col">
              <img src={img1} className="h-6 mb-4" alt="..." />
              <p className="px-4 font-medium text-2xl text-[#2B1C50]">
                Loom has been the light of my life since you showed me it.’ – I
                never tire of hearing this from folks. Not even an investor...
                yet.
              </p>
              <div className="flex items-center justify-center my-4 gap-6">
                <img src={alex} alt="" className="h-16 rounded-full"></img>
                <div className="flex flex-col items-start">
                  <p className="text-[#2B1C50] text-sm">Alexis Ohanian</p>

                  <p className="text-[#2B1C50] text-sm">
                    Founder, SevenSevenSix{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute w-[70%] top-[25%] left-[16%] mx-auto duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="flex flex-col">
              <img src={img1} className="h-6 mb-4" alt="..." />
              <p className="px-4 font-medium text-2xl text-[#2B1C50]">
                Loom has been the light of my life since you showed me it.’ – I
                never tire of hearing this from folks. Not even an investor...
                yet.
              </p>
              <div className="flex items-center justify-center my-4 gap-6">
                <img src={alex} alt="" className="h-16 rounded-full"></img>
                <div className="flex flex-col items-start">
                  <p className="text-[#2B1C50] text-sm">Alexis Ohanian</p>

                  <p className="text-[#2B1C50] text-sm">
                    Founder, SevenSevenSix{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute w-[70%] top-[25%] left-[16%] mx-auto duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="flex flex-col">
              <img src={img1} className="h-6 mb-4" alt="..." />
              <p className="px-4 font-medium text-2xl text-[#2B1C50]">
                Loom has been the light of my life since you showed me it.’ – I
                never tire of hearing this from folks. Not even an investor...
                yet.
              </p>
              <div className="flex items-center justify-center my-4 gap-6">
                <img src={alex} alt="" className="h-16 rounded-full"></img>
                <div className="flex flex-col items-start">
                  <p className="text-[#2B1C50] text-sm">Alexis Ohanian</p>

                  <p className="text-[#2B1C50] text-sm">
                    Founder, SevenSevenSix{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute w-[70%] top-[25%] left-[16%] mx-auto duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="flex flex-col">
              <img src={img1} className="h-6 mb-4" alt="..." />
              <p className="px-4 font-medium text-2xl text-[#2B1C50]">
                Loom has been the light of my life since you showed me it.’ – I
                never tire of hearing this from folks. Not even an investor...
                yet.
              </p>
              <div className="flex items-center justify-center my-4 gap-6">
                <img src={alex} alt="" className="h-16 rounded-full"></img>
                <div className="flex flex-col items-start">
                  <p className="text-[#2B1C50] text-sm">Alexis Ohanian</p>

                  <p className="text-[#2B1C50] text-sm">
                    Founder, SevenSevenSix{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default Slider;
