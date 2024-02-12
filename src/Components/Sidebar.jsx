import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { Vector3 } from "three";

const Sidebar = ({ parentClass, setCamPos }) => {
  const colorOptions = ["Blue", "Black", "Red", "Green", "Yellow"];
  const sizeOptions = ["Large", "Small", "Medium"];

  const windShieldOptions = ["No Windshield", "Long Windshield"];
  const seatOptions = ["No Passenger Seat", "Passenger Seat"];

  const engineGuardOptions = ["Gray Engine Guard", "Gold Engine Guard"];

  const sumpGuardOptions = ["Gray Sump Guard", "Black Sump Guard"];
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
              options={engineGuardOptions}
              title="ENGINE GUARD"
              setCamPos={setCamPos}
              campos={new Vector3(-1.14, 0.24, 0.01)}
            />

            <MenuItem
              options={sumpGuardOptions}
              title="SUMP GUARD"
              setCamPos={setCamPos}
              campos={new Vector3(0.66, -0.61, 0.73)}
            />
          </>
        )
      )}
    </div>
  );
};

export default Sidebar;
