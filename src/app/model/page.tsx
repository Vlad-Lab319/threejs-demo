'use client';
import Model from "@/components/Model";
import { CameraControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

const ModelPage = () => {

  return <div className="h-screen bg-slate-800 text-slate-600 grid grid-cols-1 grid-rows-[0.2fr_1fr_0.2fr]">
    <Link href={'/'}>
      <h2 className="p-2 text-center uppercase rounded-lg bg-slate-300">Home Page</h2>
    </Link>
    <div className="h-full landscape:max-h-[360px] landscape:lg:max-h-[800px] row-start-2">
      <Canvas camera={{ position: [-5, 0, 10], fov: 45 }} className="h-full">
        <ambientLight intensity={0.75} color={"white"}/>
        <Model position={[0,-1,0]} />
        <CameraControls />
        <Environment preset="night" />
      </Canvas>
    </div>
    </div>
}

export default ModelPage;