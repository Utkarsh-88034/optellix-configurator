import React, { useState } from "react";
import { Vector3 } from "three";

const FloatingMenuItem = ({
  menuIcon,
  title,
  campos,
  setCamPos,
  setSelectedMenu,
  selectedMenu,
  type,
  collapse,
  setCollapse,
}) => {
  return (
    <div
      className={`sm:h-24 sm:w-24  rounded-2xl border-[#666666]  shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-1 backdrop-blur-sm ${
        selectedMenu == title
          ? "scale-110 bg-[#d6d6d6a4]"
          : "scale-1 bg-[#d6d6d6a4]"
      } ${type == "checkout" && "z-10 bg-[#d6d6d6]"}`}
      onClick={() => {
        if (type == "checkout") {
          setCollapse(!collapse);

          return;
        }
        if (selectedMenu == title) {
          setSelectedMenu("none");
          setCamPos(new Vector3(0, 2.63, 13.27));
        } else {
          setSelectedMenu(title);
          setCamPos(campos);
        }
      }}
    >
      <img
        src={menuIcon}
        className={`h-10 aspect-square object-contain transition-all duration-300 ${
          collapse && "rotate-180"
        }`}
      />
      <p className="text-[#1C1C1C] text-sm text-center font-semibold">
        {collapse ? "Back" : title}
      </p>
    </div>
  );
};

export default FloatingMenuItem;
