import React, { useContext, useState } from "react";
import { configContext } from "../Store/ConfigContext";

const MenuItem = ({ options, title, setCamPos, campos }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(0);
  const { config, setConfig } = useContext(configContext);
  return (
    <div
      onClick={() => {
        if (setCamPos && campos && !openOptions) setCamPos(campos);
      }}
    >
      <div
        className="h-40 w-full flex justify-between items-center px-5 cursor-pointer border-b border-b-white/20"
        onClick={() => {
          setOpenOptions(!openOptions);
        }}
      >
        <p
          className={`text-xl ${
            openOptions ? "text-white/100" : "text-white/55"
          }`}
        >
          {title}
        </p>
        <svg
          className={`transition-all duration-300 ${
            openOptions && "rotate-180"
          }`}
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </div>
      {openOptions && (
        <div className="w-full">
          {options.map((name, id) => (
            <div
              className={`h-40 w-full flex justify-center items-center px-5 cursor-pointer transition-all duration-300 ${
                selectedOptions == id && "bg-white/20"
              }`}
              onClick={() => {
                setConfig({...config,[title]:name})
                setSelectedOptions(id);
              }}
            >
              <p
                className={`text-2xl ${
                  selectedOptions == id ? "text-white/100" : "text-white/55"
                }`}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
