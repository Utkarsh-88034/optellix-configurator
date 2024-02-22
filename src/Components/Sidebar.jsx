import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { Vector3 } from "three";
import paint1 from "../assets/paint-red.png";
import paint2 from "../assets/paint-silver.png";

const Sidebar = ({ parentClass, setCamPos }) => {
  const windShieldOptions = [
    {
      name: "No Windshield",
      price: "$0",
      description: "Open front, with no protection against wind and light",
      included: true,
      // icon: paint1,
    },
    {
      name: "Long Windshiled",
      price: "$1000",
      description:
        "Tinted windshiled to protect from wind and clear view of the instrument cluster",
      included: false,
      // icon: paint1,
    },
  ];
  const seatOptions = [
    {
      name: "Driver Only",
      price: "$0",
      description:
        "Only driver seat with fiber panel on the rear. Gives sporty look.",
      included: true,
      // icon: paint1,
    },
    {
      name: "Passenger Seat",
      price: "$3000",
      description: "Passenger seat made of premium vegan leather.",
      included: false,
      // icon: paint1,
    },
  ];

  const mudGaurdOptions = [
    {
      name: "Small Mud Guard",
      price: "$0",
      description: "Shorter guard gives sportier look.",
      included: true,
      icon: paint1,
    },
    {
      name: "Long Mud Guard",
      price: "$3000",
      description: "Longer guard for more protection.",
      included: false,
      icon: paint2,
    },
  ];

  const exhaustOptions = [
    {
      name: "Single Side Dual Exhaust System",
      price: "$0",
      description: "Textured exhaust sound peaking at 70db",
      included: true,
      // icon: paint1,
    },
    {
      name: "Both Side Dual Exhaust System",
      price: "$1200",
      description: "Deep muffled exhaust sound peaking at 90db",
      included: false,
      // icon: paint1,
    },
  ];
  const handleBarOptions = [
    {
      name: "Normal Height",
      price: "$0",
      description: "Standard height included in the design.",
      included: true,
    },
    {
      name: "High Bar",
      price: "$1000",
      description:
        "Longer handlebar height. More comfortable for people with shorter arms",
      included: false,
    },
  ];

  const paintOptions = [
    {
      name: "Metallic Red",
      price: "$0",
      description: "",
      included: true,
      icon: paint1,
    },
    {
      name: "LA Silver",
      price: "$1000",
      description: "",
      included: false,
      icon: paint2,
    },
  ];
  return (
    <div className="w-[30%] h-screen bg-white overflow-y-scroll hidescrollbar">
      <div className=" h-[250px] bg-black w-full flex flex-col justify-between p-2">
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
        title="Windshield"
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
    </div>
  );
};

export default Sidebar;
