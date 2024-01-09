import React from "react";

function ListCard(props) {
  const { list, list2 } = props;
  return (
    <>
      <div className="flex justify-center gap-[3rem] mobile:flex-col">
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#E9EAF9] rounded-full h-[35px] w-[37px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className=" text-[#7B72E0] h-lg pt-[7px] inline-block ml-sm mr-sm text-thd-color-violet-50 my-auto h-[25px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-lg">{list}</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#E9EAF9] rounded-full h-[35px] w-[37px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className=" text-[#7B72E0] h-lg pt-[7px] inline-block ml-sm mr-sm text-thd-color-violet-50 my-auto h-[25px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-lg">{list2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;
