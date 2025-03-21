'use client'
import * as THREE from 'three'

import CurvedPlane from "@/components/CurvedPlane"
import { AccumulativeShadows, CameraControls, Center, Environment, RandomizedLight, useVideoTexture } from "@react-three/drei"
import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Link from 'next/link'

const { DEG2RAD } = THREE.MathUtils


const films = {
  Sintel: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'Big Buck Bunny': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'Elephant Dream': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'For Bigger Blazes': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'For Bigger Joy Rides': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  McDonalds: `/video/2024_monopoly_at_mcdonald's_canada_–_app_experience (1080p).mp4`,
  McDonalds2: `/video/wcdonald's_microsite (1080p).mp4`,
}



function Scene() {
  const [url, setUrl] = useState(films['McDonalds'])

  const ref = useRef(null)
  useFrame((state, delta) => (ref.current.rotation.y -= delta/4))

  return (
    <>
    <group ref={ref}>
      <group rotation-y={DEG2RAD * 0}>
        <Screen src={url} />
      </group>

      <group rotation-y={DEG2RAD * 90}>
        <Screen src={url} />
      </group>

      <group rotation-y={DEG2RAD * 180}>
        <Screen src={url} />
      </group>

      <group rotation-y={DEG2RAD * -90}>
        <Screen src={url} />
      </group>

    </group>
    </>
  )
}

function Screen({ src }) {
  const [video, setVideo] = useState()

  const ratio = 16 / 9
  const width = 5
  const radius = 4
  const z = 4

  const r = useMemo(() => (video ? video.videoWidth / video.videoHeight : ratio), [video, ratio])

  return (
    <Center top position-z={z}>
      <CurvedPlane width={width} height={width / r} radius={radius}>
        <Suspense fallback={<meshStandardMaterial side={THREE.DoubleSide} wireframe />}>
          <VideoMaterial src={src} setVideo={setVideo} />
        </Suspense>
      </CurvedPlane>
    </Center>
  )
}

function VideoMaterial({ src, setVideo }) {
  const texture = useVideoTexture(src)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.x = -1
  texture.offset.x = 1

  return <meshStandardMaterial 
  side={THREE.DoubleSide} 
  map={texture} 
  toneMapped={false} 
  transparent opacity={0.9} 
  />
}


const VideoRoom = () => {


  return (
    <div className="h-screen w-full bg-slate-800 text-slate-600 grid grid-cols-1 grid-rows-[0.2fr_1fr_0.2fr]">
      <Link href={'/'}>
        <h2 className="p-2 text-center uppercase rounded-lg bg-slate-300">Home Page</h2>
      </Link>
      <div className='row-start-2'>
      <Canvas shadows camera={{ position: [4, 3, 12], fov: 30 }}>
        <Scene />
        <AccumulativeShadows frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
        </AccumulativeShadows>
        <CameraControls />
        <Environment preset="city" />
      </Canvas>
      </div>
    </div>
  )
}

export default VideoRoom;
