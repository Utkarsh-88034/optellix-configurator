/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 LongMudguard.glb -T 
Files: LongMudguard.glb [74.86MB] > C:\Users\User\Desktop\public\LongMudguard-transformed.glb [1.66MB] (98%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LongMudguard(props) {
  const { nodes, materials } = useGLTF("/LongMudguard-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.longMudGuard.geometry}
        material={materials["Plastics.002"]}
      />
    </group>
  );
}

useGLTF.preload("/LongMudguard-transformed.glb");
