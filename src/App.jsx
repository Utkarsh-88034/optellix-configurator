import { Suspense, useContext, useRef, useState } from "react";
import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PivotControls,
  Stage,
} from "@react-three/drei";
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
import { Handlebar_Long } from "./assets/Handlebar_Long";
import { Stage_Props } from "./assets/Stage";
import { Engine_Guard } from "./assets/Engine_Guard";

function App() {
  const [parentClass, setParentClass] = useState("style");
  const [camPos, setCamPos] = useState();
  const [close, setClose] = useState(true);
  const { config, setConfig } = useContext(configContext);
  const controls = useRef("");
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className="absolute right-2 sm:hidden cursor-pointer z-10"
          onClick={() => {
            setClose(!close);
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
            <path
              d="M20 7L4 7"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M20 12L4 12"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M20 17L4 17"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        <Canvas className="h-full w-[75%]" shadows="soft">
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
            <Environment
              background={false}
              // can be true, false or "only" (which only sets the background) (default: false)
              files="studio_small_01_1k.exr"
              path="/"
            />

            {/* <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshLambertMaterial color={"red"} />
              </mesh> */}

            <Stage_Props position={[0, -0.58, 0]} />

            <Stage environment={null}>
              <Engine_Guard />
              {config.Paint == "Metallic Red" && <Base />}
              {config.Paint == "LA Silver" && <Base_grey />}
              {config.Windshield != "No Windshield" && <WindShield />}

              {config.Seat == "Driver Only" && <NoSeat />}
              {config.Seat == "Passenger Seat" && <Seat />}
              {config["Handle Bar"] == "Normal Height" && <Handlebar_Normal />}
              {config["Handle Bar"] == "High Bar" && <Handlebar_Long />}
              {config["Exhaust"] != "Single Side Dual Exhaust System" && (
                <Exhaust />
              )}
              {config["Mud Guard"] == "Small Mud Guard" &&
                config.Paint == "Metallic Red" && <SmallMudguard />}
              {config["Mud Guard"] == "Small Mud Guard" &&
                config.Paint == "LA Silver" && <SmallMudguard_grey />}
              {config["Mud Guard"] == "Long Mud Guard" &&
                config.Paint == "Metallic Red" && <LongMudguard />}
              {config["Mud Guard"] == "Long Mud Guard" &&
                config.Paint == "LA Silver" && <LongMudguard_grey />}
            </Stage>
            <CameraControl position={camPos} />
          </Suspense>
        </Canvas>
        {/* <VerticalSideBar setParentClass={setParentClass} /> */}
        <Sidebar
          parentClass={parentClass}
          setCamPos={setCamPos}
          close={close}
        />
      </div>
    </>
  );
}

export default App;
