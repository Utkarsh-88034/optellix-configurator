import { Environment, Lightformer, Loader, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext, useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";

import CameraControl from "./Components/CameraControl";
import FloatingMenu from "./Components/FloatingMenu";
import FloatingWindow from "./Components/FloatingWindow";
import { configContext } from "./Store/ConfigContext";
import { Base } from "./assets/Base";
import { Base_grey } from "./assets/Base_grey";
import { Engine_Guard } from "./assets/Engine_Guard";
import { Exhaust } from "./assets/Exhaust";
import { Handlebar_Long } from "./assets/Handlebar_Long";
import { Handlebar_Normal } from "./assets/Handlebar_Normal";
import { Lights } from "./assets/Lights";
import { LongMudguard } from "./assets/LongMudguard";
import { LongMudguard_grey } from "./assets/LongMudguard_grey";
import { Seat } from "./assets/Seat";
import { SmallMudguard } from "./assets/SmallMudguard";
import { SmallMudguard_grey } from "./assets/SmallMudguard_grey";
import { Stage_Props } from "./assets/Stage";
import { WindShield } from "./assets/WindShield";

function App() {
  const [camPos, setCamPos] = useState();
  const [close, setClose] = useState(true);
  const { config, setConfig } = useContext(configContext);
  const [selectedOption, setSelectedOption] = useState("none");
  const [openPanel, setOpenPanel] = useState(false);

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
          className="absolute right-2 lg:hidden cursor-pointer z-10"
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
          <Suspense>
            {/* <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshLambertMaterial color={"red"} />
              </mesh> */}
            <Stage_Props position={[0, -0.8, 0]} />

            <Stage shadows="contact" environment={null} center={Base}>
              <Environment
                background={false}
                files="interior.exr"
                path="/"
                frames={Infinity}
              ></Environment>
              {/* <Engine_Guard /> */}
              {config.Paint == "Metallic Red" && <Base />}
              {config.Paint == "LA Silver" && <Base_grey></Base_grey>}
              {config["Wind Shield"] != "No Windshield" && <WindShield />}
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

        <Loader />
        <FloatingMenu
          setCamPos={setCamPos}
          setSelectedMenu={setSelectedOption}
          selectedMenu={selectedOption}
          setOpenPanel={setOpenPanel}
        />
        <Sidebar close={openPanel} setCamPos={setCamPos} />
        {!openPanel && <FloatingWindow selectedMenu={selectedOption} />}
      </div>
    </>
  );
}

export default App;
