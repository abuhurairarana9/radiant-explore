
import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  useGLTF, 
  PerspectiveCamera, 
  Environment, 
  Float, 
  Text3D, 
  Text, 
  MeshDistortMaterial,
  Icosahedron
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import * as THREE from "three";

// Floating Particle Component
const FloatingParticle = ({ position, color, size, speed, axis }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    switch(axis) {
      case 'x':
        mesh.current.position.x = position[0] + Math.sin(t) * 0.5;
        break;
      case 'y':
        mesh.current.position.y = position[1] + Math.sin(t) * 0.5;
        break;
      case 'z':
        mesh.current.position.z = position[2] + Math.sin(t) * 0.5;
        break;
      default:
        mesh.current.position.y = position[1] + Math.sin(t) * 0.5;
    }
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <MeshDistortMaterial
        color={color}
        speed={0.5}
        distort={0.3}
        radius={1}
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
};

// Particles Group
const ParticlesGroup = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ],
    color: i % 2 === 0 ? "#ffffff" : "#888888",
    size: Math.random() * 0.3 + 0.1,
    speed: Math.random() * 0.5 + 0.5,
    axis: ['x', 'y', 'z'][Math.floor(Math.random() * 3)]
  }));

  return (
    <group>
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}
    </group>
  );
};

// Floating Text
const FloatingText = ({ dark }) => {
  return (
    <Float
      speed={3}
      rotationIntensity={0.5}
      floatIntensity={1}
      position={[0, 0, 0]}
    >
      <Text
        font="/fonts/Inter-Bold.woff"
        fontSize={1.2}
        position={[0, 0, 0]}
        letterSpacing={-0.05}
        color={dark ? "#ffffff" : "#000000"}
      >
        Abu Huraira
        <meshStandardMaterial 
          roughness={0.3} 
          metalness={0.8} 
          color={dark ? "#ffffff" : "#000000"} 
        />
      </Text>
      <Text
        font="/fonts/Inter-Light.woff"
        fontSize={0.5}
        position={[0, -0.8, 0]}
        letterSpacing={0.05}
        color={dark ? "#888888" : "#555555"}
      >
        CTO & Blockchain Developer
        <meshStandardMaterial 
          roughness={0.5} 
          metalness={0.2} 
          color={dark ? "#888888" : "#555555"} 
        />
      </Text>
    </Float>
  );
};

// Animated Sphere
const AnimatedSphere = () => {
  const sphere = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sphere.current.position.y = Math.sin(t * 0.5) * 0.2;
    sphere.current.rotation.y += 0.01;
  });

  return (
    <motion.mesh
      ref={sphere}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      position={[3, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#1e88e5"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </motion.mesh>
  );
};

// Scene Setup with Camera Controls
const SceneSetup = ({ children, dark }) => {
  const { camera } = useThree();
  const controlsRef = useRef(null);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.3}
      />
      <Environment preset={dark ? "night" : "studio"} />
      {children}
    </>
  );
};

// Main Component
const Canvas3D = ({ dark }) => {
  return (
    <MotionConfig transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Suspense fallback={null}>
          <SceneSetup dark={dark}>
            <ParticlesGroup />
            <FloatingText dark={dark} />
            <AnimatedSphere />
          </SceneSetup>
        </Suspense>
      </Canvas>
    </MotionConfig>
  );
};

export default Canvas3D;
