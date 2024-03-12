import { Effects, OrbitControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { ACESFilmicToneMapping } from "three";

const CameraControl = ({ position }) => {
  const { scene, camera, gl } = useThree();
  const orbitRef = useRef();
  const [updateCam, setUpdateCam] = useState(true);
  const [pos, setPos] = useState(position);

  useEffect(() => {
    setPos(position);
  }, [position]);
  useFrame(() => {
    if (pos && updateCam) {
      camera.position.lerp(pos, 0.05);
    }
  });

  gl.toneMapping = ACESFilmicToneMapping;
  gl.toneMappingExposure = 1.2;
  gl.outputColorSpace = "srgb";
  camera.fov = 12;

  return (
    <>
      <OrbitControls
        // minPolarAngle={Math.PI / 6} // Limits the lowest vertical angle
        maxPolarAngle={Math.PI / 2} // Limits the highest vertical angle
        // enableZoom={false}
        makeDefault
        enableZoom={false}
        enablePan={false}
        ena
        ref={orbitRef}
        onStart={() => {
          setUpdateCam(false);
        }}
        onEnd={() => {
          setUpdateCam(true);

          setPos(orbitRef.current.object.position);
        }}
      />
    </>
  );
};

export default CameraControl;
