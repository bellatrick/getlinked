import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        metrix: "url(/images/metrix.png)",
        purple_blur: "url(/images/blur_image_back.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.2"},
          "50%": { opacity: "0.5"},
          "100%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(-32px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        topSlide: {
          "0%": { transform: "translateY(-32px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        downSlide: {
          "0%": { transform: "translateY(32px)", opacity: "1" },
          "100%": { transform: "translateY(0px)", opacity: "0" },
        },
      },
      animation: {
        slide: "slide .4s ease-in-out",
        topslide: "topSlide .4s ease-in-out",
        downslide: "downSlide .4s ease-in-out",
        blink: "blink 2s ease-in-out infinite",
      },
      colors: {
        body: "#150E28",
        themepurple: "#D434FE",
        themepink: "#FF26B9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
