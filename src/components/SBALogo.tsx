'use client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF, useTexture } from '@react-three/drei'

function SBALogo(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.z -= delta/4))
  // Return the view, these are regular Threejs elements expressed in JSX

  // const { nodes, materials } = useGLTF('/shoe.gltf')
  const { nodes, materials } = useGLTF('/SBA_logo_3D.glb')
  console.log("nodes:", nodes);
  // materials.SBAlogo.roughness = 0.15
  // materials.SBAlogo.metalness = 1

  // const textureProps = useTexture({
  //   map: 'FabricLeatherCowhide001_COL_VAR1_2K.jpg',
  //   // displacementMap: 'FabricLeatherCowhide001_DISP_2K.jpg',
  //   normalMap: 'FabricLeatherCowhide001_NRM_2K.jpg',
  //   // roughnessMap: 'FabricLeatherCowhide001_BUMP_2K.jpg',
  //   bumpMap: 'FabricLeatherCowhide001_BUMP_2K.jpg',
  //   aoMap: 'FabricLeatherCowhide001_AO_2K.jpg',
  //   emissiveMap: 'FabricLeatherCowhide001_GLOSS_2K.jpg',
  //   metalnessMap: 'FabricLeatherCowhide001_REFL_2K.jpg',
  // })

  const textureProps = useTexture({
    map: '/textures/Poliigon_MetalRust_7642_BaseColor.jpg',
    // displacementMap: 'Poliigon_MetalRust_7642_Displacement.tiff',
    normalMap: '/textures/Poliigon_MetalRust_7642_Normal.png',
    roughnessMap: '/textures/Poliigon_MetalRust_7642_Roughness.jpg',
    metalnessMap: '/textures/Poliigon_MetalRust_7642_Metallic.jpg',
  })

  return (
    <>
    <group>
      <mesh
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        geometry={nodes.BézierCurve001.geometry}
        // rotation={ [Math.PI/2, 0, -(2.25*Math.PI) ]}
        rotation={ [Math.PI/2, 0, 0 ]}
        // material={materials.SBAlogo}
        >
        <meshStandardMaterial 
          // displacementScale={0.1}
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

export default SBALogo;