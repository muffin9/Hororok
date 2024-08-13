import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // "gray-100": "#E5E5E54D",
      "gray-200": "rgba(229, 229, 229, 0.5)",
      "gray-300": "rgba(229, 229, 229, 0.4)",
      "gray-400": "#CCCCCC",
      "gray-500": "#B3B3B3",
      "gray-600": "#999999",
      "gray-650": "#7D7D7D",
      "gray-700": "#878787",
      "gray-800": "#4A4A4A",
      silver: "#E5E5E5",
      bluegray: "#EFF0F3",
      "bluegray-200": "#EFF0F31A",
      "bluegray-300": "#EFF0F333",
      "primary-300": "#F95832",
      subcolor: "#FFF4EE",
      sub_color: "#EEE8A9",
      star: "#FFD600",
      black: "#000000",
      white: "#FFFFFF",
      kakao: "#FDE401",
      naver: "#2BC622",
    },
    boxShadow: {
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      default: "0px 8px 8px rgba(0, 0, 0, 0.2)",
    },
    extend: {
      backgroundImage: {
        sampleImage: "url('/assets/Images/sample.jpeg')",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(30%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(30%)", opacity: "0" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-30%)", opacity: "0" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(30%)", opacity: "0" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s forwards",
        "slide-right": "slideRight 0.5s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
