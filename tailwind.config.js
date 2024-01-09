/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: " url('../public/assets/background.webp')",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        mobile: { min: "320px", max: "767px" },
        tablet: { min: "768px", max: "1024px" },
      },
      fontFamily: {
        custom: ["circular", "sans-serif"],
      },
    },
  },
  plugins: [],
});
