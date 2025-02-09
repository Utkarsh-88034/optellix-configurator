/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\Stage.glb -T 
Files: .\Stage.glb [2.33MB] > D:\optellix-configurator\public\Stage-transformed.glb [60.6KB] (97%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { FrontSide } from 'three';

export function Stage_Props(props) {
  const { nodes, materials } = useGLTF("/Stage-transformed.glb");
  console.log(materials);
  materials.White.side = FrontSide;
  materials.Emission.side = FrontSide;
  console.log(window.innerWidth);
  return (
    <group {...props} dispose={null} scale={window.innerWidth < 1000 ? 2 : 1}>
      <mesh geometry={nodes.stage_1.geometry} material={materials.Emission} />
      <mesh geometry={nodes.stage_2.geometry} material={materials.White} />
    </group>
  )
}

useGLTF.preload('/Stage-transformed.glb')
