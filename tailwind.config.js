/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hidescrollbar::-webkit-scrollbar": {
          width: "0.4em",
        },
        ".hidescrollbar::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        ".hidescrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
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
