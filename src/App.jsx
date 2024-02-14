import { Suspense, useContext, useState } from "react";
import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Sidebar from "./Components/Sidebar";
import VerticalSideBar from "./Components/VerticalSideBar";

import CameraControl from "./Components/CameraControl";
import { configContext } from "./Store/ConfigContext";
import { WindShield } from "./assets/WindShield";
import { Base } from "./assets/Base";
import { NoSeat } from "./assets/NoSeat";
import { Seat } from "./assets/Seat";
import { Handlebar_Normal } from "./assets/Handlebar_Normal";
import { Exhaust } from "./assets/Exhaust";
import { SmallMudguard } from "./assets/SmallMudguard";
import { LongMudguard } from "./assets/LongMudguard";
import { Base_grey } from "./assets/Base_grey";
import { SmallMudguard_grey } from "./assets/SmallMudguard_grey";
import { LongMudguard_grey } from "./assets/LongMudguard_grey";

function App() {
  const [parentClass, setParentClass] = useState("style");
  const [camPos, setCamPos] = useState();
  const { config, setConfig } = useContext(configContext);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex">
        <VerticalSideBar setParentClass={setParentClass} />
        <Sidebar parentClass={parentClass} setCamPos={setCamPos} />
        <Canvas className="h-full w-[73%]" shadows="soft">
          {/* <pointLight
            position={[-1.1, 1, 0.16]}
            intensity={3}
            castShadow={true}
          />
          <pointLight position={[0.16, 1, 0.76]} intensity={3} castShadow />
          <pointLight position={[-0.16, 1, 0.76]} intensity={3} castShadow />

          <pointLight position={[0, 0.88, -1.53]} intensity={3} castShadow />
          <spotLight position={[0, 10, 0]} intensity={3} castShadow /> */}
          {/* <directionalLight position={(1, 4, 0)} intensity={10} /> */}

          <Suspense>
            {/* <Environment
              background={true}
              // can be true, false or "only" (which only sets the background) (default: false)
              files="bg2.hdr"
              path="/"
            /> */}

            {/* <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshLambertMaterial color={"red"} />
              </mesh> */}
            <Stage shadows="contact">
              {config.COLORS == "Red" && <Base />}
              {config.COLORS == "Silver" && <Base_grey/>}
              {config.WINDSHIELD != "No Windshield" && <WindShield />}

              {config.SEAT == "No Passenger Seat" && <NoSeat />}
              {config.SEAT != "No Passenger Seat" && <Seat />}
              {config["HANDLE BAR"] == "Normal Height" && <Handlebar_Normal />}
              {config["HANDLE BAR"] == "High Bar" && <Handlebar_Normal />}

              {config["EXHAUST"] != "Single Exhaust" && <Exhaust />}
              {config["MUD GAURD"] == "Small Mud Guard" && config.COLORS == "Red" && <SmallMudguard />}
              {config["MUD GAURD"] == "Small Mud Guard" && config.COLORS == "Silver" && <SmallMudguard_grey />}
              {config["MUD GAURD"] == "Long Mud Guard" && config.COLORS == "Red" && <LongMudguard />}
              {config["MUD GAURD"] == "Long Mud Guard" && config.COLORS == "Silver" && <LongMudguard_grey />}
            </Stage>
            {/* <Base /> */}
            <CameraControl position={camPos} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
