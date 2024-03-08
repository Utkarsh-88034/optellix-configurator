import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

const CameraControl = ({ position }) => {
  const { camera } = useThree();
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

  return (
    <OrbitControls
      // minPolarAngle={Math.PI / 6} // Limits the lowest vertical angle
      maxPolarAngle={Math.PI / 2} // Limits the highest vertical angle
      minDistance={1} // Minimum zoom distance
      maxDistance={3} // Maximum zoom distance
      makeDefault
      ref={orbitRef}
      onStart={() => {
        setUpdateCam(false);
      }}
      onEnd={() => {
        setUpdateCam(true);

        setPos(orbitRef.current.object.position);
      }}
    />
  );
};

export default CameraControl;
