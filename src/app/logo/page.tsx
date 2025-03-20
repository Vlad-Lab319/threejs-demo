'use client'
import SBALogo from "@/components/SBALogo";
import TestBox from "@/components/TestBox";
import { AccumulativeShadows, CameraControls, Environment, RandomizedLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

const LogoPage = () => {

  return <div className="h-screen bg-slate-800 text-slate-600 grid grid-cols-1 grid-rows-[0.2fr_1fr_0.2fr]">
    <h1>Logo Page</h1>
    <Link href={'/'}>
      <h2>Home Page</h2>
    </Link>
    <div className="h-full  landscape:max-h-[360px] landscape:lg:max-h-[800px] row-start-2">
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }} className="h-full bg-transparent">
      <ambientLight intensity={2 * Math.PI} color={"orange"}/>
      {/* <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} decay={0} intensity={Math.PI} color={"blue"}/> */}
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} decay={0} intensity={Math.PI} color={"blue"}/>
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <TestBox position={[-1.2, 0, 0]}/> */}
      {/* <TestBox position={[1.2, 0, 0]} /> */}
      <SBALogo position={[0, 0, 0]} rotatiton={[Math.PI / 2, 0, 0]}/>
      <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
        <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <CameraControls />
      <Environment preset="warehouse" />
    </Canvas>
    </div>
  </div>
}

export default LogoPage;