import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
function Recorder() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  useEffect(() => {
    // Add event listener for time updates
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Remove event listener on component unmount
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);
  return (
    <div className="flex flex-col gap-[3rem] ">
      <div>
        <h1 className="text-[3rem] text-[#2B1C50] font-medium text-center">
          The easiest screen recorder you’ll ever use
        </h1>
        <p className="text-[1.5rem] text-[#3D2E7C] font-lighter text-center my-3">
          Record in a few clicks. Share anywhere. Collaborate better.
        </p>
      </div>
      <div
        className="relative  flex mobile:flex-col justify-center gap-[5rem] 
      bg-[#EFF0FF] px-28 py-24 w-[93%] mx-auto rounded-[2rem] mobile:px-6 mobile:py-6 tablet:px-4"
      >
        <div className="w-1/2 py-10 mobile:w-full relative">
          <svg
            className="rounded-3xl RecordScreenSchedule_isRemoving__enEx8 aspect-square font-medium object-cover text-18 w-full"
            viewBox="0 0 713 713"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#2B1C50" height="713" width="713" y="0.5"></rect>
            <path
              d="M34,60.5c2.4,0,3.9-1.3,3.9-3c0-1.3-0.9-2.2-2-2.6c1-0.4,1.7-1.3,1.7-2.4c0-1.8-1.6-3-3.6-3  c-2.1,0-3.6,1.2-3.6,3c0,1.1,0.7,2.1,1.7,2.4c-1.1,0.4-2,1.4-2,2.6C30.1,59.2,31.6,60.5,34,60.5z M34,54.1c-1.1,0-1.8-0.7-1.8-1.7  c0-0.9,0.7-1.6,1.8-1.6c1.1,0,1.8,0.7,1.8,1.6C35.9,53.4,35.1,54.1,34,54.1z M34,59c-1.3,0-2.1-0.8-2.1-1.7c0-0.9,0.8-1.7,2.1-1.7  c1.3,0,2.1,0.8,2.1,1.7C36.1,58.2,35.4,59,34,59z M46.6,60.3h2l-4.1-10.6h-2.1l-4.1,10.6h1.9l1-2.7h4.5L46.6,60.3z M43.4,51.6  l1.6,4.3h-3.2L43.4,51.6z M61.4,60.3V49.6h-2.4l-3.4,8.1l-3.5-8.1h-2.4v10.6h1.8v-7.8l3.3,7.8h1.6l3.3-7.8v7.8H61.4z"
              fill="#493C69"
            ></path>
            <path
              d="M36.1,153.6c0,1.3-1,2.1-2.2,2.1c-1.2,0-2.1-0.8-2.1-2.1c0-1.3,1-2.1,2.1-2.1C35,151.5,36.1,152.4,36.1,153.6z  M30.3,160.5c0.5,0.3,1.6,0.6,2.5,0.6c3.6,0,5.4-2.3,5.4-6.2c0-3.4-2-4.9-4.2-4.9c-2.1,0-3.9,1.5-3.9,3.7c0,2.3,1.8,3.6,3.7,3.6  c1.3,0,2.3-0.6,2.7-1.3c-0.1,2-1.2,3.5-3.6,3.5c-0.7,0-1.5-0.2-1.9-0.5L30.3,160.5z M46.6,160.8h2l-4.1-10.6h-2.1l-4.1,10.6h1.9  l1-2.7h4.5L46.6,160.8z M43.4,152.2l1.6,4.4h-3.2L43.4,152.2z M61.4,160.8v-10.6h-2.4l-3.4,8.1l-3.5-8.1h-2.4v10.6h1.8V153l3.3,7.8  h1.6l3.3-7.8v7.8H61.4z"
              fill="#493C69"
            ></path>
            <path
              d="M28.1,261.4v-10.6h-1.6c-0.2,1.1-1.3,1.9-2.8,2v1.2h2.6v7.4H28.1z M29.5,256.1c0,1.4,0.2,2.8,0.9,3.8  c0.7,1.1,1.8,1.7,3.3,1.7c1.6,0,2.6-0.7,3.3-1.7c0.7-1,0.9-2.4,0.9-3.8c0-1.4-0.2-2.8-0.9-3.8c-0.7-1-1.8-1.7-3.3-1.7  c-1.5,0-2.6,0.7-3.3,1.7C29.7,253.3,29.5,254.7,29.5,256.1z M31.2,256.1c0-1.5,0.3-2.6,0.8-3.2c0.4-0.4,0.9-0.8,1.7-0.8  s1.3,0.3,1.7,0.8c0.6,0.7,0.8,1.7,0.8,3.2c0,1.5-0.3,2.6-0.8,3.2c-0.4,0.4-0.9,0.8-1.7,0.8s-1.3-0.3-1.7-0.8  C31.5,258.7,31.2,257.6,31.2,256.1z M46.6,261.4h2l-4.1-10.6h-2.1l-4.1,10.6h1.9l1-2.7h4.5L46.6,261.4z M43.4,252.7l1.6,4.4h-3.2  L43.4,252.7z M61.4,261.4v-10.6h-2.4l-3.4,8.1l-3.5-8.1h-2.4v10.6h1.8v-7.8l3.3,7.8h1.6l3.3-7.8v7.8H61.4z"
              fill="#493C69"
            ></path>
            <path
              d="M32.1,362v-10.6h-1.6c-0.2,1.1-1.3,2-2.8,2v1.2h2.6v7.4H32.1z M37.4,362v-10.6h-1.6c-0.2,1.1-1.3,2-2.8,2v1.2  h2.6v7.4H37.4z M46.6,362h2l-4.1-10.6h-2.1L38.2,362h1.9l1-2.7h4.5L46.6,362z M43.4,353.3l1.6,4.4h-3.2L43.4,353.3z M61.4,362v-10.6  h-2.4l-3.4,8.1l-3.5-8.1h-2.4V362h1.8v-7.8l3.3,7.8h1.6l3.3-7.8v7.8H61.4z"
              fill="#493C69"
            ></path>
            <path
              d="M36.7,462.6v-10.6h-1.8v7.5l-4.8-7.5h-2.3v10.6h1.8v-8.1l5.2,8.1H36.7z M41.8,461.2c-1.1,0-2-0.8-2-2.3  c0-1.5,1-2.3,2-2.3c1.1,0,2,0.8,2,2.3C43.8,460.4,42.9,461.2,41.8,461.2z M41.8,455c-2.2,0-3.8,1.6-3.8,3.9c0,2.2,1.6,3.9,3.8,3.9  c2.2,0,3.8-1.6,3.8-3.9C45.6,456.7,44,455,41.8,455z M50.2,461.2c-1.1,0-2-0.8-2-2.3c0-1.5,1-2.3,2-2.3c1.1,0,2,0.8,2,2.3  C52.2,460.4,51.2,461.2,50.2,461.2z M50.2,455c-2.2,0-3.8,1.6-3.8,3.9c0,2.2,1.6,3.9,3.8,3.9c2.2,0,3.8-1.6,3.8-3.9  C54,456.7,52.4,455,50.2,455z M56.9,458.4c0-1,0.5-1.7,1.5-1.7c1.1,0,1.5,0.7,1.5,1.6v4.3h1.7V458c0-1.6-0.9-2.9-2.6-2.9  c-0.8,0-1.7,0.3-2.2,1.2v-1h-1.7v7.3h1.7V458.4z"
              fill="#493C69"
            ></path>
            <path
              d="M39.1,563.2v-10.6h-1.6c-0.2,1.1-1.3,2-2.8,2v1.2h2.6v7.4H39.1z M42.8,557.4v-3.3h1.9c1.1,0,1.8,0.6,1.8,1.7  c0,1-0.7,1.6-1.8,1.6H42.8z M45,559c2,0,3.4-1.4,3.4-3.2c0-1.9-1.3-3.2-3.4-3.2H41v10.6h1.8V559H45z M61.4,563.2v-10.6h-2.4  l-3.4,8.1l-3.5-8.1h-2.4v10.6h1.8v-7.8l3.3,7.8h1.6l3.3-7.8v7.8H61.4z"
              fill="#493C69"
            ></path>
            <path
              d="M33.8,657c0-0.2,0-0.4,0-0.5c0-1.1,0.6-2.1,1.9-2.1c1.3,0,1.9,0.8,1.9,1.8c0,0.8-0.4,1.5-1.4,2.1l-1.8,1.1  c-1.8,1.2-2.5,2.5-2.5,4.3h7.5v-1.6h-5.3c0.2-0.6,0.6-1,1.2-1.3l2.1-1.3c1.2-0.8,2-1.9,2-3.3c0-1.8-1.3-3.3-3.6-3.3  c-2.4,0-3.7,1.6-3.7,3.5c0,0.2,0,0.4,0,0.5L33.8,657z M42.8,658v-3.3h1.9c1.1,0,1.8,0.6,1.8,1.7c0,1-0.7,1.6-1.8,1.6H42.8z  M45,659.6c2,0,3.4-1.4,3.4-3.2c0-1.9-1.3-3.2-3.4-3.2H41v10.6h1.8v-4.2H45z M61.4,663.7v-10.6h-2.4l-3.4,8.1l-3.5-8.1h-2.4v10.6  h1.8v-7.8l3.3,7.8h1.6l3.3-7.8v7.8H61.4z"
              fill="#493C69"
            ></path>
            <line
              stroke="#3b2d5e"
              x1="71.2"
              x2="690.3"
              y1="54.8"
              y2="54.8"
            ></line>
            <line
              stroke="#3b2d5e"
              x1="71.2"
              x2="690.3"
              y1="155.3"
              y2="155.3"
            ></line>
            <line
              stroke="#3b2d5e"
              x1="71.2"
              x2="690.3"
              y1="255.9"
              y2="255.9"
            ></line>
            <line
              stroke="#3b2d5e"
              x1="71.2"
              x2="690.3"
              y1="356.5"
              y2="356.5"
            ></line>
            <line
              stroke="#3b2d5e"
              x1="71.2"
              x2="690.3"
              y1="557.7"
              y2="557.7"
            ></line>
            <path
              d="M77.2,362h597.1c3.3,0,6,2.7,6,6v35.1c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6V368C71.2,364.7,73.9,362,77.2,362  z"
              fill="#3b2d5e"
            ></path>
            <path
              d="M71.2,368c0-3.3,2.7-6,6-6h0.4v47.1h-0.4c-3.3,0-6-2.7-6-6V368z"
              fill="#b1acbf"
            ></path>
            <text fill="#b1acbf" x="85" y="391">
              1:1 with Dereje
            </text>
            <path
              d="M77.2,563.2h597.1c3.3,0,6,2.7,6,6v35.1c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6v-35.1  C71.2,565.8,73.9,563.2,77.2,563.2z"
              fill="#3b2d5e"
            ></path>
            <path
              d="M71.2,569.2c0-3.3,2.7-6,6-6h0.4v47.1h-0.4c-3.3,0-6-2.7-6-6V569.2z"
              fill="#b1acbf"
            ></path>
            <text fill="#b1acbf" x="85" y="593">
              1:1 with Sonya
            </text>
            <path
              d="M77.2,160.8h597.1c3.3,0,6,2.7,6,6v78.6c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6v-78.6  C71.2,163.5,73.9,160.8,77.2,160.8z"
              fill="#3b2d5e"
            ></path>
            <path
              d="M71.2,166.8c0-3.3,2.7-6,6-6h0.4v90.6h-0.4c-3.3,0-6-2.7-6-6V166.8z"
              fill="#b1acbf"
            ></path>
            <text fill="#b1acbf" x="85" y="190">
              Focus Work
            </text>
            <g className="RecordScreenSchedule_remove5__7ZG7t animate-fade">
              <line
                stroke="#3b2d5e"
                x1="71.2"
                x2="690.3"
                y1="658.2"
                y2="658.2"
              ></line>
              <path
                d="M77.2,615.3h597.1c3.3,0,6,2.7,6,6v74.9c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6v-74.9   C71.2,618,73.9,615.3,77.2,615.3z"
                fill="#3b2d5e"
              ></path>
              <path
                d="M71.2,621.3c0-3.3,2.7-6,6-6h0.4v86.9h-0.4c-3.3,0-6-2.7-6-6V621.3z"
                fill="#b1acbf"
              ></path>
              <text fill="#b1acbf" x="85" y="645">
                Quarterly Budget Meeting
              </text>
            </g>
            <g
              class="RecordScreenSchedule_remove4__joiks"
              className="animate-fade"
            >
              <path
                d="M77.2,506h597.1c3.3,0,6,2.7,6,6v35.1c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6V512   C71.2,508.7,73.9,506,77.2,506z"
                fill="#3b2d5e"
              ></path>
              <path
                d="M71.2,512c0-3.3,2.7-6,6-6h0.4v47.1h-0.4c-3.3,0-6-2.7-6-6V512z"
                fill="#b1acbf"
              ></path>
              <text fill="#b1acbf" x="85" y="535">
                Project Review
              </text>
            </g>
            <g
              class="RecordScreenSchedule_remove3__mtjf_"
              className="animate-fade"
            >
              <line
                stroke="#3b2d5e"
                x1="71.2"
                x2="690.3"
                y1="457.1"
                y2="457.1"
              ></line>
              <path
                d="M77.2,414.1h597.1c3.3,0,6,2.7,6,6V495c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6v-74.9   C71.2,416.8,73.9,414.1,77.2,414.1z"
                fill="#3b2d5e"
              ></path>
              <path
                d="M71.2,420.1c0-3.3,2.7-6,6-6h0.4V501h-0.4c-3.3,0-6-2.7-6-6V420.1z"
                fill="#b1acbf"
              ></path>
              <text fill="#b1acbf" x="85" y="444">
                Q4 Campaign Results
              </text>
            </g>
            <g
              class="RecordScreenSchedule_remove2__MgGdt"
              className="animate-fade"
            >
              <path
                d="M77.2,261.4h597.1c3.3,0,6,2.7,6,6V346c0,3.3-2.7,6-6,6H77.2c-3.3,0-6-2.7-6-6v-78.6   C71.2,264.1,73.9,261.4,77.2,261.4z"
                fill="#3b2d5e"
              ></path>
              <path
                d="M71.2,267.4c0-3.3,2.7-6,6-6h0.4V352h-0.4c-3.3,0-6-2.7-6-6V267.4z"
                fill="#b1acbf"
              ></path>
              <text fill="#b1acbf" x="85" y="291">
                Results Report
              </text>
            </g>
          </svg>
          <div
            className="absolute top-[10.5rem] left-[10rem] mobile:top-[5.5rem]
           mobile:left-[5rem] tablet:top-[4.5rem] tablet:left-[5rem]"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsinline
              className="RecordScreenAnimation_cam__ivFyG size-44 object-cover
              relative rounded-full mx-auto z-[1] mobile:size-28"
            >
              <source
                src="https://cdn.loom.com/assets/marketing/bubbs/angelina.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="bg-white  flex items-center justify-center rounded-[40px] 
            h-14 w-[12rem] left-[-10px] mobile:left-[-36px] 
            bottom-[-3.2rem] gap-[15px] border-[5px] border-[#807796] absolute "
            >
              <button
                className="h-4 w-4 bg-red-500 rounded-sm cursor-pointer"
                onClick={togglePlayPause}
              ></button>
              <span>{currentTime.toFixed(2)}</span>

              <FontAwesomeIcon
                icon={faPause}
                className="cursor-pointer"
                onClick={togglePlayPause}
              />

              <FontAwesomeIcon icon={faTrash} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div
          className="w-1/2 mobile:w-full py-10 flex flex-col items-start gap-10
         justify-center"
        >
          <div className="flex gap-4  ">
            <span
              className="mt-2 animate-pulse h-[30px] w-[3rem] bg-[#eb7267]
             border-[#FFEDEC] border-8 rounded-full"
            >
              {" "}
            </span>
            <div className="flex flex-col gap-6 pr-28 tablet:pr-0 mobile:pr-0">
              <h1 className="text-3xl text-start text-[#43204F]">
                Lightning fast screen recording
              </h1>
              <p className="text-md leading-loose text-start text-[#43204F]">
                Easily{" "}
                <span
                  className="border-b-[1px] border-[#43204F] pb-0 hover:border-b-0 
                cursor-pointer  leading-3"
                >
                  record your screen
                </span>{" "}
                and camera. Record on any device using Loom’s{" "}
                <span
                  className="border-b-[1px] border-[#43204F] pb-0 hover:border-b-0 
                cursor-pointer  leading-3"
                >
                  Chrome extension
                </span>
                ,
                <span
                  className="border-b-[1px] border-[#43204F] pb-0 hover:border-b-0 
                cursor-pointer  leading-3"
                >
                  desktop
                </span>{" "}
                app or mobile app.
              </p>
              <button className="btn h-10 cursor-pointer">Download now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recorder;
