/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\LongMudguard_grey.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LongMudguard_grey(props) {
  const { nodes, materials } = useGLTF('/LongMudguard_grey.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.longMudGuard_grey.geometry} material={materials['Plastics.001']} />
    </group>
  )
}

useGLTF.preload('/LongMudguard_grey.glb')
