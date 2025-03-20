'use client'
import BBall from "@/components/BBall";
import Textures from "@/components/Textures";
import { AccumulativeShadows, CameraControls, ContactShadows, Environment, RandomizedLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { useState } from "react";

const BBallPage = () => {

  const [texture, setTexture] = useState({});

  return <div className="h-screen bg-slate-800 text-slate-600 grid grid-cols-1 grid-rows-[0.2fr_1fr_0.2fr]">
    <Link href={'/'}>
      <h2 className="p-2 text-center uppercase rounded-lg bg-slate-300">Home Page</h2>
    </Link>
    <Textures setTexture={setTexture}/>
    <div className="h-full landscape:max-h-[360px] landscape:lg:max-h-[800px] row-start-2">
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }} className="h-full bg-transparent">
      <ambientLight intensity={2 * Math.PI} color={"orange"}/>
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} decay={0} intensity={Math.PI} color={"white"}/>
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <BBall rotatiton={[Math.PI / 2, 0, 0]} texture={texture}/>
      <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
        <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <CameraControls />
      {/* <ContactShadows position={[0, -2.4, 0]} opacity={0.75} scale={10} blur={3} far={8} /> */}
      <Environment preset="warehouse" />
      {/* <Environment preset="studio" /> */}
    </Canvas>
    </div>
  </div>
}

export default BBallPage;