/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\stage.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stage_Props(props) {
  const { nodes, materials } = useGLTF('/stage.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.stage_1.geometry} material={materials.Emission} />
      <mesh geometry={nodes.stage_2.geometry} material={materials.White} />
    </group>
  )
}

useGLTF.preload('/stage.glb')
