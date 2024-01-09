import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const showItems = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="fixed top-0 -left-5 -right-5 shadow-2xl placeholder-opacity-100 z-[5] bg-white flex justify-between items-center py-5 px-12 mx-5  mobile:px-0 ">
        <div className="flex justify-center items-center gap-2 ">
          <img src={logoImg} alt="" className="max-h-12 mobile:h-10 "></img>
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <button className="flex cursor-pointer font-normal mobile:hidden font-custom">
            Sign In
          </button>
          <button className="btn max-h-[3rem] font-custom">
            Get Loom For Free
          </button>
          <button
            className="mobile:hidden flex items-center w-fit bg-[#EFF0FF] max-h-[3rem] rounded-[60px] py-[1.5rem] px-[1rem] 
          text-[#565ADD] text-sm  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Contact Sales
          </button>

          {!open ? (
            <div
              className="py-3 px-3 bg-[#EFF0FF] text-[#565ADD] rounded-full"
              onClick={handleClick}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12.333a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 17.667a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          ) : (
            <div
              className="py-3 px-3 text-white bg-[#565ADD] rounded-full"
              onClick={handleClick}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.21 12l4.54-4.54c.33-.33.33-.88 0-1.21a.863.863 0 00-1.21 0L12 10.79 7.46 6.25a.863.863 0 00-1.21 0c-.33.33-.33.88 0 1.21L10.79 12l-4.54 4.54c-.33.33-.33.88 0 1.21.33.33.88.33 1.21 0L12 13.21l4.54 4.54c.33.33.88.33 1.21 0 .33-.33.33-.88 0-1.21L13.21 12z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          )}
        </div>
        {open && (
          <div
            className="bg-white absolute flex items-center justify-between px-16 
          top-[96px] w-full left-[0] py-10  border-b border-gray-500"
          >
            <h3 className="text-2xl ">Use Cases</h3>
            {!show ? (
              <span>
                <FontAwesomeIcon icon={faChevronDown} onClick={showItems} />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faChevronUp} onClick={showItems} />
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}
