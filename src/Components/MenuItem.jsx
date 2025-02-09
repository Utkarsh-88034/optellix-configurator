import React, { useContext, useEffect, useState } from "react";
import { configContext } from "../Store/ConfigContext";

const MenuItem = ({
  options,
  title,
  setCamPos,
  campos,
  type,
  selectedMenu,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const { config, setConfig, cost, setCost } = useContext(configContext);

  useEffect(() => {
    const defaultVal = config[title];
    const defaultOption = options.filter((option) => {
      return option.name === defaultVal;
    });

    setSelectedOptions(defaultOption[0]);
  }, [config]);

  return (
    <div>
      <div
        className="h-max w-full flex cursor-pointer p-4 text-black flex-col py-4 mb-3 bg-gray-50"
        onClick={() => {
          setOpenOptions(!openOptions);
        }}
      >
        <p className={`text-2xl text-black`}>{title}</p>

        <div
          className={`h-max flex justify-center gap-2 items-center mt-4 ${
            type == "icon" ? "flex-row" : (type = "card" && "flex-col")
          }`}
        >
          {options.map((option, id) => (
            <>
              {type == "icon" ? (
                <div
                  className={`h-[80px] w-[80px] flex justify-center items-center rounded-[15px] ${
                    !(selectedOptions?.name === option.name) &&
                    "hover:border-[1px] hover:border-black/50 transition-all duration-75"
                  } ${
                    selectedOptions?.name === option.name &&
                    "border-black border-[3px] hover:border-[3px]"
                  }`}
                  onClick={() => {
                    setSelectedOptions(option);
                    setConfig({ ...config, [title]: option.name });
                    setCost({ ...cost, [title]: option.price });
                    setCamPos(campos);
                  }}
                >
                  <div
                    className={`border  h-[60px] w-[60px] rounded-full flex justify-end items-center`}
                  >
                    <img src={option?.icon} className="h-full w-full" />
                  </div>
                </div>
              ) : (
                (type = "card" && (
                  <div
                    className={`h-40 w-[100%] border rounded-[12px] p-4 flex items-center justify-between transition-all gap-3 duration-75 ${
                      !(selectedOptions?.name === option.name) &&
                      "hover:border-[1px] hover:border-black/50 transition-all duration-75"
                    } ${
                      selectedOptions?.name === option.name &&
                      "border-black border-[3px] hover:border-[3px]"
                    }`}
                    onClick={() => {
                      setSelectedOptions(option);
                      setConfig({ ...config, [title]: option.name });
                      setCost({ ...cost, [title]: option.price });

                      setCamPos(campos);
                    }}
                  >
                    <div className="h-full relative">
                      <p className="text-lg font-semibold mb-1">
                        {option.name}
                      </p>
                      <p className=" text-sm font-extralight">
                        {option.description}
                      </p>
                      <p className="absolute bottom-0 w-max text-sm font-light">
                        {option.included ? "Included" : "Not Included"}
                      </p>
                    </div>
                    <div className="min-w-[40px]">
                      <p className="text-lg font-light text-right">
                        ${option.price}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </>
          ))}
        </div>
        {type === "icon" && (
          <>
            <div className="text-center flex gap-2 justify-center items-center mt-2">
              <p className="font-semibold text-sm">
                {selectedOptions?.description}
              </p>
              <p className="font-light text-sm">
                {selectedOptions?.included && "Included"}
              </p>
            </div>
            <div className="text-center flex gap-1 justify-center items-center mt-2">
              <p className="text-md">{selectedOptions?.name}</p>
              <p className="text-md font-light">${selectedOptions?.price}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
