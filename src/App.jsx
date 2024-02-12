import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Environment, Html } from "@react-three/drei";
import { Model } from "./Test-bike";
import Sidebar from "./Components/Sidebar";
import VerticalSideBar from "./Components/VerticalSideBar";
import { Ducati } from "./Ducati";
import { Ducati2 } from "./Ducati2";
import { Base } from "./Base";
import CameraControl from "./Components/CameraControl";

function App() {
  const [parentClass, setParentClass] = useState("style");
  const [camPos, setCamPos] = useState();
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
              <Ducati2 />
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
