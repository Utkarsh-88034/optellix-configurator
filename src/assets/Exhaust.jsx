/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\Exhaust.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Exhaust(props) {
  const { nodes, materials } = useGLTF('/Exhaust.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh geometry={nodes.Object_36003.geometry} material={materials['Exhaust.002']} />
        <mesh geometry={nodes.Object_36003_1.geometry} material={materials['Black.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Exhaust.glb')
