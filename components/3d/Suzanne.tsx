import { useGLTF } from "@react-three/drei/native"
import { useFrame } from "@react-three/fiber/native"
import { Asset } from 'expo-asset'
import { useRef } from "react"
import { Mesh } from "three"


type GLTFResult = {
  nodes: {
    Suzanne: Mesh
  }
  materials: {
    [key: string]: any
  }
}


export function Suzanne() {
  // Use Expo Asset to resolve the URI for the GLB file
  const modelUri = Asset.fromModule(require("../../assets/suz.glb")).uri
  const { nodes } = useGLTF(modelUri) as unknown as GLTFResult

  // Create a ref to access the mesh
  const meshRef = useRef<Mesh>(null)

  // Animate rotation around the Y axis
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta // delta is the time between frames
    }
  })

  return (
    <group dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.189, -0.043]}
      >
        <meshStandardMaterial
          metalness={1}
          roughness={0.3}
          color="silver"
        />
      </mesh>
    </group>
  )
}

/*
  material={nodes.Suzanne.material}
  <meshStandardMaterial
    metalness={1}
    roughness={0.3}
    color="silver"
  />
*/

useGLTF.preload('/Suzanne.gltf')