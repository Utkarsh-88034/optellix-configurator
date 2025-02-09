/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 test-bike.glb -T 
Files: test-bike.glb [15.42MB] > C:\Users\User\Desktop\configurator\src\assets\test-bike-transformed.glb [1.2MB] (92%)
Author: nouter2077 (https://sketchfab.com/nouter2077)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/suzuki-gsx-750-bike-3d-model-23a81cec59b24849bcc96027fd2871a7
Title: suzuki gsx 750 Bike 3D model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/test-bike-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.534, -0.052]}
        rotation={[1.555, 0, 0]}
        scale={1.028}
      />
    </group>
  );
}

useGLTF.preload("/test-bike-transformed.glb");
