import React from "react";

const FloatingMenuItem = ({
  menuIcon,
  title,
  campos,
  setCamPos,
  setSelectedMenu,
}) => {
  return (
    <div
      className="h-28 w-28 bg-[#bdbdbdce] rounded-2xl border-[#666666]  shadow-2xl cursor-pointer hover:scale-110 transition-all duration-100 flex flex-col items-center justify-center gap-2 p-1"
      onClick={() => {
        setCamPos(campos);
        setSelectedMenu(title);
      }}
    >
      <img src={menuIcon} className="h-12 aspect-square object-contain" />
      <p className="text-[#1C1C1C] text-lg text-center font-semibold">
        {title}
      </p>
    </div>
  );
};

export default FloatingMenuItem;
