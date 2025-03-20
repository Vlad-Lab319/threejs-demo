'use client';
import Image from "next/image";

const Textures = ({setTexture}) => {
  const leather = {
    type: "leather",
    props: {

      map: '/textures/FabricLeatherCowhide001_COL_VAR1_2K.jpg',
      url: '/textures/FabricLeatherCowhide001_Fabric.png',
      normalMap: '/textures/FabricLeatherCowhide001_NRM_2K.jpg',
      roughnessMap: '/textures/FabricLeatherCowhide001_BUMP_2K.jpg',
      bumpMap: '/textures/FabricLeatherCowhide001_BUMP_2K.jpg',
      aoMap: '/textures/FabricLeatherCowhide001_AO_2K.jpg',
      emissiveMap: '/textures/FabricLeatherCowhide001_GLOSS_2K.jpg',
      metalnessMap: '/textures/FabricLeatherCowhide001_REFL_2K.jpg',
    }
  }
  
  const steel = {
    type: "steel",
    props: {

      map: '/textures/Poliigon_MetalRust_7642_BaseColor.jpg',
      url: '/textures/Poliigon_MetalRust_7642_Preview1.png',
      normalMap: '/textures/Poliigon_MetalRust_7642_Normal.png',
      roughnessMap: '/textures/Poliigon_MetalRust_7642_Roughness.jpg',
      metalnessMap: '/textures/Poliigon_MetalRust_7642_Metallic.jpg',
    }
  }

  const fabric = {
    type: "fabric",
    props: {
      
      map: '/textures/Poliigon_BoucleFabricBubbly_7827_BaseColor.jpg',
      url: '/textures/Poliigon_BoucleFabricBubbly_7827_Preview1.png',
      normalMap: '/textures/Poliigon_BoucleFabricBubbly_7827_Normal.png',
      roughnessMap: '/textures/Poliigon_BoucleFabricBubbly_7827_Roughness.jpg',
      // bumpMap: '/textures/FabricLeatherCowhide001_BUMP_2K.jpg',
      aoMap: '/textures/Poliigon_BoucleFabricBubbly_7827_AmbientOcclusion.jpg',
      // emissiveMap: '/textures/FabricLeatherCowhide001_GLOSS_2K.jpg',
      metalnessMap: '/textures/Poliigon_BoucleFabricBubbly_7827_Metallic.jpg',
    }
  }
  
  const textures = [
    leather, 
    steel,
    fabric,
  ]

  return <div className="w-full flex gap-4 justify-center items-center ">
      {textures.map((texture,index) => <div 
      key={index} 
      onClick={() => setTexture(texture)} 
      className={`h-16 w-16`} 
      >
        
        <Image 
          src={`${texture.props.url}`}
          alt=""
          width={200}
          height={200}
        />

      </div>)}
      </div>
}

export default Textures;