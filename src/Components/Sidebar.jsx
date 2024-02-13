import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { Vector3 } from "three";

const Sidebar = ({ parentClass, setCamPos }) => {
  const colorOptions = ["Blue", "Black", "Red", "Green", "Yellow"];
  const sizeOptions = ["Large", "Small", "Medium"];

  const windShieldOptions = ["No Windshield", "Long Windshield"];
  const seatOptions = ["No Passenger Seat", "Passenger Seat"];

  const mudGaurdOptions = ["Small Mud Guard", "Long Mud Guard"];

  const exhaustOptions = ["Single Exhaust", "Double Exhuast"];
  const handleBarOptions = ["Normal Height", "High Bar"];
  return (
    <div className="w-[20%] h-screen bg-black overflow-y-scroll hidescrollbar">
      {parentClass == "style" ? (
        <>
          <MenuItem options={colorOptions} title="COLORS" />
          <MenuItem options={sizeOptions} title="SIZE" />
        </>
      ) : parentClass == "comfort" ? (
        <>
          <MenuItem
            options={windShieldOptions}
            title="WINDSHIELD"
            setCamPos={setCamPos}
            campos={new Vector3(0, 0.6, 1)}
          />

          <MenuItem
            options={seatOptions}
            title="SEAT"
            setCamPos={setCamPos}
            campos={new Vector3(0.6, 0.95, -0.86)}
          />

          <MenuItem
            options={handleBarOptions}
            title="HANDLE BAR"
            setCamPos={setCamPos}
            campos={new Vector3(0.38, 0.69, 0.93)}
          />
        </>
      ) : (
        parentClass == "protection" && (
          <>
            <MenuItem
              options={mudGaurdOptions}
              title="MUD GAURD"
              setCamPos={setCamPos}
              campos={new Vector3(-1.12, 0.47, 2.19)}
            />

            <MenuItem
              options={exhaustOptions}
              title="EXHAUST"
              setCamPos={setCamPos}
              campos={new Vector3(1.68, 0.12, -1.66)}
            />
          </>
        )
      )}
    </div>
  );
};

export default Sidebar;
