import React, { useContext, useEffect, useMemo, useState } from "react";
import MenuItem from "./MenuItem";
import { Vector3 } from "three";
import paint1 from "../assets/paint-red.png";
import paint2 from "../assets/paint-silver.png";
import { configContext } from "../Store/ConfigContext";

const Sidebar = ({ setCamPos, close }) => {
  const [openPanel, setOpenPanel] = useState(false);
  const windShieldOptions = [
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
  ];
  const seatOptions = [
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
  ];

  const mudGaurdOptions = [
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
  ];

  const exhaustOptions = [
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
  ];
  const handleBarOptions = [
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
  ];

  const paintOptions = [
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
  ];

  const { cost, setCost } = useContext(configContext);

  const subtotal = useMemo(() => {
    return Object.values(cost).reduce(
      (acc, val) => acc + (val ? parseFloat(val) : 0),
      0
    );
  }, [cost]);

  const taxes = useMemo(() => {
    return (subtotal * 31) / 100;
  }, [cost]);

  return (
    <div
      className={` sm:w-[55%]  absolute w-full sm:max-w-[400px] min-w-[320px] h-screen scroll-sm bg-white overflow-y-scroll  transition-all duration-150 ${
        close ? "right-0" : "-right-full"
      } `}
    >
      <div className=" h-[250px] bg-black w-full flex flex-col justify-between p-4">
        <div className="flex text-white items-center gap-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <p>Deliver to: 110020</p>
        </div>
        <div>
          <p className="text-4xl">Ducati Monster 1200</p>
          <p>Playe around with paint, parts and more</p>
        </div>
      </div>
      <MenuItem options={paintOptions} title="Paint" type={"icon"} />
      <MenuItem
        options={exhaustOptions}
        title="Exhaust"
        setCamPos={setCamPos}
        campos={new Vector3(1.68, 0.12, -1.66)}
        type="card"
      />
      <MenuItem
        options={windShieldOptions}
        title="Wind Shield"
        setCamPos={setCamPos}
        campos={new Vector3(0, 0.6, 1)}
      />
      <MenuItem
        options={seatOptions}
        title="Seat"
        setCamPos={setCamPos}
        campos={new Vector3(0.6, 0.95, -0.86)}
      />
      <MenuItem
        options={handleBarOptions}
        title="Handle Bar"
        setCamPos={setCamPos}
        campos={new Vector3(0.38, 0.69, 0.93)}
      />
      <MenuItem
        options={mudGaurdOptions}
        title="Mud Guard"
        setCamPos={setCamPos}
        campos={new Vector3(-0.71, 0.27, 1.06)}
      />
      <div
        className={`h-max bg-black w-full sticky  text-white flex items-center p-4 justify-between flex-col gap-10 transition-all duration-300 ${
          openPanel ? "bottom-0" : "bottom-[-370px]"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-semibold">
              $
              {Object.values(cost).reduce(
                (acc, val) => acc + (val ? parseFloat(val) : 0),
                0
              )}
            </p>
            <p>(Taxes not inclued)</p>
          </div>
          <svg
            fill="#ffffff"
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.735 511.735"
            xml:space="preserve"
            stroke="#ffffff"
            className={`${
              openPanel && "rotate-180"
            } cursor-pointer transition-all duration-300`}
            onClick={() => {
              setOpenPanel(!openPanel);
            }}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-1">
            {Object.keys(cost).map((key) => (
              <div className="flex justify-between mb-1">
                <p>{key}</p>
                <p>${cost[key]}</p>
              </div>
            ))}

            <div className="flex justify-between">
              <p>Tax (31%)</p>
              <p>${taxes}</p>
            </div>

            <div className="flex justify-between border-t border-gray-500 pt-2 text-lg">
              <p>Subtotal (exluding taxes)</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between border-t border-gray-500 pt-2 text-2xl font-semibold">
              <p>Total</p>
              <p>${subtotal + taxes}</p>
            </div>
            {/* You can add more details like shipping, discounts, etc., in a similar manner */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
