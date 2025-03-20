'use client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF, useTexture } from '@react-three/drei'

function BBall({texture}) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (hovered && (ref.current.rotation.z -= delta/4)))
  // Return the view, these are regular Threejs elements expressed in JSX

  const { nodes, materials } = useGLTF('/bball.glb')
  // console.log("Nodes: ", nodes);

  const textureProps = useTexture({...texture.props})

  // Apply tiling (repeat) for all textures
  texture.type == "fabric" && 
  Object.values(textureProps).forEach((tex) => {
    if (tex) {
      tex.wrapS = tex.wrapT = "repeat"; 
      tex.repeat.set(6, 6); // Set tiling to 4x4
    }
  });

  return (
    <>
    <group>
      <mesh
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerEnter={() => hover(!hovered)}
        geometry={nodes.Cube001.geometry}
        rotation={ [Math.PI/2, 0, 0 ]}
        >
        <meshStandardMaterial 
          {...textureProps}
          
        />
      </mesh>
    </group>
    {/* <Html >
      <div className='text-slate-600'>
        {`Z=${(ref.current?.rotation.z)}`}
      </div>
    </Html> */}
    </>
  )
}

export default BBall;