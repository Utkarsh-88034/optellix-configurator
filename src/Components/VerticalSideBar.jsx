import React, { useState } from "react";

const VerticalSideBar = ({ setParentClass }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div class="w-[7%] h-screen bg-[#141518] flex flex-col justify-between ">
      <p
        class={`transform  text-3xl text-gray-700 whitespace-no-wrap h-full flex justify-center items-center writingVertical cursor-pointer ${
          selectedOption == 0 && "text-white"
        }`}
        onClick={() => {
          setSelectedOption(0);
          setParentClass("style");
        }}
      >
        Style
      </p>
      <p
        class={`transform  text-3xl text-gray-700 whitespace-no-wrap h-full flex justify-center items-center writingVertical cursor-pointer ${
          selectedOption == 1 && "text-white"
        }`}
        onClick={() => {
          setSelectedOption(1);
          setParentClass("comfort");
        }}
      >
        Comfort
      </p>
      <p
        class={`transform  text-3xl text-gray-700 whitespace-no-wrap h-full flex justify-center items-center writingVertical cursor-pointer ${
          selectedOption == 2 && "text-white"
        }`}
        onClick={() => {
          setSelectedOption(2);
          setParentClass("protection");
        }}
      >
        Protection
      </p>
    </div>
  );
};

export default VerticalSideBar;
