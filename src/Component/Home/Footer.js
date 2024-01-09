import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#EFF0FF] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full px-4 sm:px-8 md:px-16">
        <div className="flex flex-col items-start justify  py-32 cursor-pointer">
          <h4 className="text-xs font-semibold text-[#5F317C] py-6">Product</h4>
          <ul className="flex items-start flex-col text-sm text-[#5F317C] gap-6">
            <li>Pricing</li>
            <li>loomSdk</li>
            <li>ScreenRecoder</li>
            <li>Chrome Screen Recoder</li>
            <li>Mac Screen Recoder</li>
            <li>Window Screen Recoder</li>
            <li>ios Screen Recoder</li>
            <li>Android Screen Recoder</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify  py-32 cursor-pointer">
          <h4 className="text-xs font-semibold text-[#5F317C] py-6">
            use case
          </h4>
          <ul className="flex items-start flex-col text-sm text-[#5F317C] gap-6">
            <li>Team Alignment</li>
            <li>Sales</li>
            <li>Enginering</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Product Manager</li>
            <li>Support</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify  py-32 cursor-pointer mobile:py-8">
          <h4 className="text-xs font-semibold text-[#5F317C] py-6">
            For Bussiness
          </h4>
          <ul className="flex items-start flex-col text-sm  text-[#5F317C] gap-6">
            <li>Loom AI</li>
            <li>Enterprise</li>
            <li>Loom HQ</li>
            <li>Customer</li>
            <li> Sequrity</li>
            <li>Video Hosting</li>
            <li>Video Library</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify  py-32 cursor-pointer mobile:py-8">
          <h4 className="text-xs font-semibold text-[#5F317C] py-6">
            Download
          </h4>
          <ul className="flex items-start flex-col text-sm text-[#5F317C] gap-6">
            <li>Desktop App</li>
            <li>Chrome Extension</li>
            <li>Mobile Apps</li>
            <li>Chrome Screen Recoder</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify  py-32 cursor-pointer mobile:py-8">
          <h4 className="text-xs font-semibold text-[#5F317C] py-6">
            Resourses
          </h4>
          <ul className="flex items-start flex-col text-sm text-[#5F317C] gap-6">
            <li>Blog</li>
            <li>Help & Support</li>
            <li>Community</li>
            <li>eBook</li>
            <li>status</li>
            <li>What`s New</li>
            <li>WebCam Mic Test</li>
            <li>Webcam Recoder</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify  py-32 cursor-pointer mobile:py-8">
          <h4 className="text-xs font-semibold text-[#5F317C] py-6">Company</h4>
          <ul className="flex items-start flex-col text-sm text-[#5F317C] gap-6">
            <li>About Us</li>
            <li>Diversity,Equity & inclusion</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Media Kit</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="flex py-10 px-12 items-center justify-between mobile:flex-col">
        <div className="flex gap-10 cursor-pointer items-center mobile:flex-col">
          <div className="flex gap-[20px]">
            <span
              className="bg-[#EFF0FF] h-[44px] w-[44px] rounded-full 
            flex items-center justify-center "
            >
              <svg
                height="1em"
                viewBox="0 0 512 512"
                width="1em"
                aria-label="Loom on Twitter"
                className="h-[20px] fill-[#4B42AD] "
              >
                <path d="M512 113.2c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5C412 76.7 384.7 64 354.5 64c-58 0-105 47-105 105 0 8.2.9 16.2 2.7 23.9-87.3-4.4-164.7-46.2-216.5-109.8-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-.5-33.4-5.3-47.6-13.1v1.3c0 50.9 36.2 93.4 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 73-36 28.2-81.2 45-130.5 45-8.5 0-16.8-.5-25.1-1.5C46.5 462.7 101.7 480 161 480c193.2 0 298.9-160.1 298.9-298.9 0-4.6-.1-9.1-.3-13.6 20.5-14.7 38.3-33.2 52.4-54.3z"></path>
              </svg>
            </span>
            <span
              className="bg-[#EFF0FF] h-[40px] w-[40px] rounded-full 
            flex items-center justify-center"
            >
              <svg
                height="1em"
                viewBox="0 30 512 512"
                width="1em"
                aria-label="Loom on LinkedIn"
                className="h-[20px] fill-[#4B42AD] "
              >
                <path d="M192 192h88.553v45.391h1.266C294.139 215.294 324.298 192 369.24 192 462.713 192 480 250.188 480 325.867V480h-92.305V343.361c0-32.592-.667-74.513-48.014-74.513-48.074 0-55.41 35.493-55.41 72.146V480H192zM32 192h96v288H32zM128 112c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"></path>
              </svg>
            </span>
            <span
              className="bg-[#EFF0FF] h-[40px] w-[40px] rounded-full 
            flex items-center justify-center"
            >
              <svg
                height="1em"
                viewBox="0 0 32 32"
                width="1em"
                aria-label="Loom on YouTube"
                className="h-[20px] fill-[#4B42AD] "
              >
                <path d="M31.681 9.6s-.313-2.206-1.275-3.175C29.187 5.15 27.825 5.144 27.2 5.069c-4.475-.325-11.194-.325-11.194-.325h-.012s-6.719 0-11.194.325c-.625.075-1.987.081-3.206 1.356C.631 7.394.325 9.6.325 9.6s-.319 2.588-.319 5.181v2.425c0 2.587.319 5.181.319 5.181s.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563.244 10.881.319 10.881.319s6.725-.012 11.2-.331c.625-.075 1.988-.081 3.206-1.356.962-.969 1.275-3.175 1.275-3.175s.319-2.587.319-5.181v-2.425c-.006-2.588-.325-5.181-.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
              </svg>
            </span>
            <span
              className="bg-[#EFF0FF] h-[40px] w-[40px] rounded-full 
            flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                aria-label="Loom on Instagram"
                className="h-[20px] fill-[#4B42AD] "
              >
                <g clip-path="url(#ig_svg__a)">
                  <path d="M10 2.784c2.67 0 2.986.01 4.041.058.975.045 1.504.208 1.857.345.435.16.828.415 1.151.748.332.323.588.716.748 1.151.137.352.3.882.345 1.857.047 1.055.058 1.37.058 4.04 0 2.671-.01 2.987-.058 4.042-.045.975-.208 1.504-.345 1.857A3.315 3.315 0 0115.9 18.78c-.352.137-.881.3-1.856.344-1.055.048-1.371.058-4.041.058-2.67 0-2.987-.01-4.041-.058-.975-.045-1.505-.207-1.857-.344a3.096 3.096 0 01-1.151-.749 3.096 3.096 0 01-.749-1.15c-.137-.353-.3-.883-.344-1.858-.048-1.054-.058-1.37-.058-4.04 0-2.671.01-2.987.058-4.042.045-.975.207-1.504.344-1.857.16-.434.416-.828.749-1.15a3.096 3.096 0 011.15-.749c.353-.137.883-.3 1.858-.344 1.054-.048 1.37-.059 4.04-.059L10 2.784zm.002-1.803c-2.716 0-3.057.011-4.124.06-1.066.049-1.793.22-2.428.466a4.91 4.91 0 00-1.772 1.154A4.91 4.91 0 00.525 4.433C.278 5.068.109 5.796.06 6.86.012 7.924 0 8.266 0 10.982s.012 3.057.06 4.123c.05 1.067.218 1.792.465 2.427a4.909 4.909 0 001.153 1.771c.5.51 1.105.903 1.772 1.154.635.247 1.363.416 2.428.465 1.064.048 1.407.06 4.123.06s3.056-.011 4.123-.06c1.066-.049 1.79-.218 2.426-.465a5.111 5.111 0 002.925-2.925c.247-.635.416-1.363.465-2.427.048-1.065.06-1.408.06-4.123 0-2.716-.012-3.057-.06-4.124-.05-1.066-.218-1.79-.465-2.425a4.903 4.903 0 00-1.153-1.772 4.91 4.91 0 00-1.772-1.154c-.635-.247-1.363-.416-2.428-.464C13.058.994 12.716.983 10 .983l.002-.002z"></path>
                  <path d="M10 5.847a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.47a3.335 3.335 0 110-6.67 3.335 3.335 0 010 6.67zm5.338-7.473a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"></path>
                </g>
                <defs>
                  <clipPath id="ig_svg__a">
                    <path
                      fill="#fff"
                      transform="translate(0 .982)"
                      d="M0 0h20v20H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span
              className="bg-[#EFF0FF] h-[40px] w-[40px] rounded-full 
            flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 18"
                aria-label="Loom on TikTok"
                className="h-[20px] fill-[#4B42AD] "
              >
                <path d="M5.326 17.982c2.94 0 5.325-2.312 5.325-5.165V5.83a4.629 4.629 0 001.69 1.507 4.795 4.795 0 002.657.524H15v-2.83c-2.258-.159-4.073-1.865-4.31-4.049H8.18l-.027 11.869c0 1.456-1.326 2.603-2.827 2.603-1.502 0-2.718-1.18-2.718-2.636 0-1.455 1.217-2.635 2.718-2.635.112 0 .22.02.329.032V7.669c-.11-.007-.218-.017-.33-.017C2.386 7.652 0 9.965 0 12.817c0 2.853 2.384 5.165 5.326 5.165z"></path>
              </svg>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-[0.700rem]">Privacy for Human</span>
            <span className="text-[0.700rem]">Privacy Policy</span>
            <span className="text-[0.700rem]">Terms for Service</span>
          </div>
        </div>
        <div className="mobile:my-10">
          <h3 className="text-[0.700rem]">
            © 2024, Loom, Inc. All Rights Reserved.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
