import React, { useContext, useEffect, useMemo, useState } from "react";
import { configContext } from "../Store/ConfigContext";
import paint1 from "../assets/paint-red.png";
import paint2 from "../assets/paint-silver.png";
import exhaust from "../assets/exhaust.png";
import paint from "../assets/paint.png";
import handle from "../assets/handle.png";
import mudguard from "../assets/mudguard.png";
import seat from "../assets/seat.png";
import windshield from "../assets/windshield.png";

const FloatingWindow = ({ selectedMenu }) => {
  const [selectedOptions, setSelectedOptions] = useState();
  const { config, setConfig, cost, setCost } = useContext(configContext);

  const availableCustomizations = {
    "Wind Shield": [
      {
        name: "No Windshield",
        price: "0",
        description: "Open front, with no protection against wind and light",
        included: true,
        // icon: paint1,
      },
      {
        name: "Long Windshield",
        price: "1000",
        description:
          "Tinted windshiled to protect from wind and clear view of the instrument cluster",
        included: false,
        // icon: paint1,
      },
    ],
    Seat: [
      {
        name: "Driver Only",
        price: "0",
        description:
          "Only driver seat with fiber panel on the rear. Gives sporty look.",
        included: true,
        // icon: paint1,
      },
      {
        name: "Passenger Seat",
        price: "3000",
        description: "Passenger seat made of premium vegan leather.",
        included: false,
        // icon: paint1,
      },
    ],
    "Mud Guard": [
      {
        name: "Small Mud Guard",
        price: "0",
        description: "Shorter guard gives sportier look.",
        included: true,
        icon: paint1,
      },
      {
        name: "Long Mud Guard",
        price: "3000",
        description: "Longer guard for more protection.",
        included: false,
        icon: paint2,
      },
    ],
    Exhaust: [
      {
        name: "Single Side Dual Exhaust System",
        price: "0",
        description: "Textured exhaust sound peaking at 70db",
        included: true,
        // icon: paint1,
      },
      {
        name: "Both Side Dual Exhaust System",
        price: "1200",
        description: "Deep muffled exhaust sound peaking at 90db",
        included: false,
        // icon: paint1,
      },
    ],
    "Handle Bar": [
      {
        name: "Normal Height",
        price: "0",
        description: "Standard height included in the design.",
        included: true,
      },
      {
        name: "High Bar",
        price: "1000",
        description:
          "Longer handlebar height. More comfortable for people with shorter arms",
        included: false,
      },
    ],
    Paint: [
      {
        name: "Metallic Red",
        price: "0",
        description: "",
        included: true,
        icon: paint1,
      },
      {
        name: "LA Silver",
        price: "1000",
        description: "",
        included: false,
        icon: paint2,
      },
    ],
  };

  const iconMap = {
    "Wind Shield": windshield,
    Seat: seat,
    Paint: paint,
    "Handle Bar": handle,
    Exhaust: exhaust,
    "Mud Guard": mudguard,
  };

  const options = useMemo(() => {
    return availableCustomizations[selectedMenu];
  }, [selectedMenu]);
  useEffect(() => {
    if (selectedMenu !== "none") {
      const defaultVal = config[selectedMenu];
      const defaultOption = options.filter((option) => {
        return option.name === defaultVal;
      });
      console.log(defaultOption[0]);

      setSelectedOptions(defaultOption[0]);
    }
  }, [options]);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const boundingRect = event.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const newX = event.clientX - dragOffset.x;
    const newY = event.clientY - dragOffset.y;
    event.currentTarget.style.left = `${newX}px`;
    event.currentTarget.style.top = `${newY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {selectedMenu !== "none" && (
        <div
          className="absolute w-[320px] max-h-[400px] bg-white right-[50px] top-[50%] translate-y-[-50%] rounded-2xl text-black p-3 flex flex-col items-center gap-5 h-max shadow-2xl"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            position: "absolute",
          }}
        >
          <div className="w-full flex items-center gap-2">
            <img src={iconMap[selectedMenu]} alt="" className="h-6" />
            <p className="text-xl ">{selectedMenu}</p>
          </div>
          {options.map((option) => (
            <div
              className={`h-40 w-[100%] border rounded-[12px] p-2 flex items-center justify-between transition-all gap-3 duration-75 cursor-pointer ${
                !(selectedOptions?.name === option.name) &&
                "hover:border-[1px] hover:border-black/50 transition-all duration-75"
              } ${
                selectedOptions?.name === option.name &&
                "border-black border-[3px] hover:border-[3px]"
              }`}
              onClick={() => {
                setSelectedOptions(option);
                setConfig({ ...config, [selectedMenu]: option.name });
                setCost({ ...cost, [selectedMenu]: option.price });
              }}
            >
              <div className="h-full relative">
                <p className="text-md font-semibold mb-1">{option.name}</p>
                <p className=" text-sm font-extralight">{option.description}</p>
                <p className="absolute bottom-0 w-max text-sm font-light">
                  {option.included ? "Included" : "Not Included"}
                </p>
              </div>
              <div className="min-w-[40px]">
                <p className="text-lg font-light text-right">${option.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FloatingWindow;
