import { Suzanne } from "@/components/3d/Suzanne";
import { ThemedView } from "@/components/ThemedView";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function TabFourScreen() {

    const renderCanvas = () => {
        return (
            <Canvas
                shadows
                camera={{ position: [0, 2, 10], fov: 50 }}
            >
                <directionalLight
                    position={[5, 10, 15]}
                    intensity={Math.PI * 2}
                    castShadow
                />
                <directionalLight
                    position={[-10, 10, 15]}
                    intensity={Math.PI * 2}
                />
                <directionalLight
                    position={[10, 10, 15]}
                    intensity={Math.PI * 2}
                />
                <Suspense fallback={null}>
                    <Suzanne />
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -1, 0]}
                    >
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial opacity={0.5} />
                    </mesh>
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        );
    };
  
    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safe}>
                {renderCanvas()}
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  safe:{
    flex: 1,
    width:'100%',
  }
});