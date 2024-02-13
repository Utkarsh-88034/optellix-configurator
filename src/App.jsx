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
              {<Base/>}
              {config.WINDSHIELD != "No Windshield" && <WindShield/>}
              {config.SEAT == "No Passenger Seat" && <NoSeat/>}
              {config.SEAT != "No Passenger Seat" && <Seat/>}
              {config["HANDLE BAR"] == "Normal Height" && <Handlebar_Normal /> }
              {config["EXHAUST"] != "Single Exhaust"  &&  <Exhaust/>}
              {config["MUD GAURD"] == "Small Mud Guard" && <SmallMudguard/>}
              {config["MUD GAURD"] == "Long Mud Guard" && <LongMudguard/>}
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
