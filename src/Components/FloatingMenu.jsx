import React from "react";
import FloatingMenuItem from "./FloatingMenuItem";
import exhaust from "../assets/exhaust.png";
import paint from "../assets/paint.png";
import handle from "../assets/handle.png";
import mudguard from "../assets/mudguard.png";
import seat from "../assets/seat.png";
import windshield from "../assets/windshield.png";
import { Vector3 } from "three";

const FloatingMenu = ({ setCamPos, setSelectedMenu }) => {
  return (
    <div className="absolute bottom-[10%] left-[50%] w-max translate-x-[-50%] h-32 flex items-center justify-evenly gap-10">
      <FloatingMenuItem
        menuIcon={exhaust}
        title={"Exhaust"}
        campos={new Vector3(1.68, 0.12, -1.66)}
        setCamPos={setCamPos}
        setSelectedMenu={setSelectedMenu}
      />
      <FloatingMenuItem
        menuIcon={paint}
        title={"Paint"}
        campos={new Vector3(1.68, 0.12, -1.66)}
        setCamPos={setCamPos}
        setSelectedMenu={setSelectedMenu}
      />
      <FloatingMenuItem
        menuIcon={windshield}
        title={"Wind Shield"}
        campos={new Vector3(0, 0.6, 1)}
        setCamPos={setCamPos}
        setSelectedMenu={setSelectedMenu}
      />
      <FloatingMenuItem
        menuIcon={seat}
        title={"Seat"}
        campos={new Vector3(0.6, 0.95, -0.86)}
        setCamPos={setCamPos}
        setSelectedMenu={setSelectedMenu}
      />
      <FloatingMenuItem
        menuIcon={mudguard}
        title={"Mud Guard"}
        campos={new Vector3(-0.71, 0.27, 1.06)}
        setCamPos={setCamPos}
        setSelectedMenu={setSelectedMenu}
      />
      <FloatingMenuItem
        menuIcon={handle}
        title={"Handle Bar"}
        campos={new Vector3(0.38, 0.69, 0.93)}
        setCamPos={setCamPos}
        setSelectedMenu={setSelectedMenu}
      />
    </div>
  );
};

export default FloatingMenu;
