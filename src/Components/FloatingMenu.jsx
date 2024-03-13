import React, { useEffect, useState } from "react";
import FloatingMenuItem from "./FloatingMenuItem";
import exhaust from "../assets/exhaust.png";
import paint from "../assets/paint.png";
import handle from "../assets/handle.png";
import mudguard from "../assets/mudguard.png";
import seat from "../assets/seat.png";
import windshield from "../assets/windshield.png";
import rightarrow from "../assets/right-arrow.svg";
import { Vector3 } from "three";

const FloatingMenu = ({
  setCamPos,
  setSelectedMenu,
  selectedMenu,
  setOpenPanel,
}) => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (collapse) {
      setOpenPanel(true);
    } else {
      setOpenPanel(false);
    }
  }, [collapse]);
  return (
    <div
      className={`invisible lg:visible translate-y-[-50%] sm:flex-row flex-col absolute bottom-[0px] left-[50%] w-max translate-x-[-50%] h-32 flex items-center justify-evenly transition-all duration-150 gap-10 `}
    >
      {!collapse && (
        <>
          <FloatingMenuItem
            menuIcon={exhaust}
            title={"Exhaust"}
            campos={
              new Vector3(
                0.167310051946499,
                0.936413131368594,
                -12.16999867784573
              )
            }
            setCamPos={setCamPos}
            setSelectedMenu={setSelectedMenu}
            selectedMenu={selectedMenu}
            collapse={collapse}
          />
          <FloatingMenuItem
            menuIcon={paint}
            title={"Paint"}
            campos={new Vector3(12.203219056537483, 0, 0)}
            setCamPos={setCamPos}
            setSelectedMenu={setSelectedMenu}
            collapse={collapse}
            selectedMenu={selectedMenu}
          />
          <FloatingMenuItem
            menuIcon={windshield}
            title={"Wind Shield"}
            campos={new Vector3(0, 1.1661567707676392, 7.509757074533057)}
            setCamPos={setCamPos}
            setSelectedMenu={setSelectedMenu}
            collapse={collapse}
            selectedMenu={selectedMenu}
          />
          <FloatingMenuItem
            menuIcon={seat}
            title={"Seat"}
            campos={
              new Vector3(
                -7.393263974489687,
                5.566945347617387,
                -7.208289834124356
              )
            }
            setCamPos={setCamPos}
            setSelectedMenu={setSelectedMenu}
            collapse={collapse}
            selectedMenu={selectedMenu}
          />
          <FloatingMenuItem
            menuIcon={mudguard}
            title={"Mud Guard"}
            campos={
              new Vector3(
                -6.310193726699199,
                2.767059094724038,
                7.61028495548916
              )
            }
            setCamPos={setCamPos}
            setSelectedMenu={setSelectedMenu}
            collapse={collapse}
            selectedMenu={selectedMenu}
          />
          <FloatingMenuItem
            menuIcon={handle}
            title={"Handle Bar"}
            campos={
              new Vector3(
                7.826272919337238,
                4.567090799826222,
                4.825219519509125
              )
            }
            setCamPos={setCamPos}
            setSelectedMenu={setSelectedMenu}
            collapse={collapse}
            selectedMenu={selectedMenu}
          />
        </>
      )}
      <FloatingMenuItem
        menuIcon={rightarrow}
        title={"Checkout"}
        type="checkout"
        collapse={collapse}
        setCollapse={setCollapse}
      />
    </div>
  );
};

export default FloatingMenu;
