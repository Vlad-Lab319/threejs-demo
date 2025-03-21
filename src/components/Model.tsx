'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Resize, useAnimations, useGLTF, useTexture } from '@react-three/drei'

const Model = ({...props}) => {
  const model = useRef()
  // const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const { scene, animations } = useGLTF('/BAQIR-animated.glb')
  const {actions} = useAnimations(animations, model)

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play the first animation by default
      actions[Object.keys(actions)[0]]?.play();
      return () => actions[Object.keys(actions)[0]]?.stop();
    }
  }, [actions])
  
  
  return (
    <>
    <group ref={model} {...props}>
      <primitive object={scene} scale={3} />
    </group>
    </>
  )
}

export default Model;
