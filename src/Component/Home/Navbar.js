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
              <>
                <div>
                  <FontAwesomeIcon icon={faChevronDown} onClick={showItems} />
                </div>
              </>
            ) : (
              <div>
                <FontAwesomeIcon icon={faChevronUp} onClick={showItems} />
                <div className="absolute top-[78px] left-[0] flex flex-col gap-[20px] h-[300px] w-[100%] bg-[#FFFFFF] ">
                  <div className="flex items-center gap-3  pl-[58px] mt-[20px] ">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 text-[#E38746]"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.251 15.07a4.273 4.273 0 013.022-1.252h6.545a4.273 4.273 0 014.273 4.273v1.636a1 1 0 01-2 0v-1.636a2.273 2.273 0 00-2.273-2.273H6.273A2.273 2.273 0 004 18.091v1.636a1 1 0 11-2 0v-1.636c0-1.133.45-2.22 1.251-3.021zM9.545 6a2.273 2.273 0 100 4.545 2.273 2.273 0 000-4.545zM5.273 8.273a4.273 4.273 0 118.545 0 4.273 4.273 0 01-8.545 0zM17.577 14.674a1 1 0 011.218-.718A4.272 4.272 0 0122 18.09v1.637a1 1 0 01-2 0v-1.636a2.273 2.273 0 00-1.705-2.198 1 1 0 01-.718-1.219zM14.304 4.858a1 1 0 011.216-.72 4.272 4.272 0 010 8.278 1 1 0 01-.496-1.937 2.273 2.273 0 000-4.404 1 1 0 01-.72-1.217z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="text-sm">Team Alignment</span>
                  </div>
                  <div className="flex items-center gap-3 pl-[58px] ">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 text-[#20BD88]"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.833 2.833a.833.833 0 00-1.666 0v2.5h-1.25a3.75 3.75 0 100 7.5h1.25V17H7a.833.833 0 100 1.667h4.167v2.5a.833.833 0 001.666 0v-2.5h1.25a3.75 3.75 0 100-7.5h-1.25V7h3.334a.833.833 0 100-1.667h-3.334v-2.5zM11.167 7h-1.25a2.083 2.083 0 100 4.167h1.25V7zm1.666 5.833V17h1.25a2.083 2.083 0 000-4.167h-1.25z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="text-sm">sales</span>
                  </div>
                  <div className="flex items-center gap-3 pl-[58px] ">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none "
                      className="h-4 text-[#719BFF]"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.70711 6.29289C10.0976 6.68342 10.0976 7.31658 9.70711 7.70711L5.41421 12L9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L8.29289 6.29289C8.68342 5.90237 9.31658 5.90237 9.70711 6.29289Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.2929 6.29289C14.6834 5.90237 15.3166 5.90237 15.7071 6.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L15.7071 17.7071C15.3166 18.0976 14.6834 18.0976 14.2929 17.7071C13.9024 17.3166 13.9024 16.6834 14.2929 16.2929L18.5858 12L14.2929 7.70711C13.9024 7.31658 13.9024 6.68342 14.2929 6.29289Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="text-sm">Engineering</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
