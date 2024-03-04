/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scroll-sm::-webkit-scrollbar": {
          width: "8px",
        },
        ".scroll-sm::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        ".scroll-sm::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.8)",
        },
        ".writingVertical": {
          "-webkit-writing-mode": "vertical-lr",
          "-ms-writing-mode": "vertical-lr",
          "writing-mode": "vertical-lr",
          transform: "rotate(-180deg)",
        },
      });
    },
  ],
};
