import React from "react";

function ListCard(props) {
  const { list, list2 } = props;
  return (
    <>
      <div className="grid grid-cols-2 gap-[30px] ">
        <div className="flex items-center gap-[20px]">
          <div className="bg-[#EFF0FF] h-10 w-10 flex items-center justify-center rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 text-[#8C84E9] inline-block ml-sm mr-sm text-thd-color-violet-50 my-auto "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1>{list}</h1>
        </div>

        <div>
          <div className="flex items-center gap-[20px]">
            <div className="bg-[#EFF0FF] h-10 w-10 flex items-center justify-center rounded-full">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 text-[#8C84E9] inline-block ml-sm mr-sm text-thd-color-violet-50 my-auto "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1>{list2}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;
