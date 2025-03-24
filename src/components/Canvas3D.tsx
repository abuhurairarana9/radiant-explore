
import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  Float, 
  Text,
  Icosahedron
} from "@react-three/drei";
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
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

// Particles Group
const ParticlesGroup = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12
    ],
    color: i % 3 === 0 
      ? "#4361ee" 
      : i % 3 === 1 
        ? "#3a0ca3" 
        : "#7209b7",
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
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      position={[0, 0, 0]}
    >
      <Text
        font="/fonts/Inter-Bold.woff"
        fontSize={1.5}
        position={[0, 0, 0]}
        letterSpacing={-0.05}
        color={dark ? "#ffffff" : "#000000"}
        textAlign="center"
      >
        Abu Huraira
        <meshStandardMaterial 
          roughness={0.1} 
          metalness={0.9} 
          color={dark ? "#ffffff" : "#000000"} 
          emissive={dark ? "#333333" : "#cccccc"}
          emissiveIntensity={0.5}
        />
      </Text>
      <Text
        font="/fonts/Inter-Light.woff"
        fontSize={0.5}
        position={[0, -1.2, 0]}
        letterSpacing={0.05}
        color={dark ? "#a1a1aa" : "#71717a"}
        textAlign="center"
      >
        CTO & Blockchain Developer
        <meshStandardMaterial 
          roughness={0.3} 
          metalness={0.5} 
          color={dark ? "#a1a1aa" : "#71717a"}
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
    <mesh
      ref={sphere}
      position={[3, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#4cc9f0"
        roughness={0.1}
        metalness={0.9}
        emissive="#4361ee"
        emissiveIntensity={0.2}
      />
    </mesh>
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
      <color attach="background" args={[dark ? '#030712' : '#f8fafc']} />
      <fog attach="fog" args={[dark ? '#030712' : '#f8fafc', 5, 20]} />
      <ambientLight intensity={dark ? 0.3 : 0.5} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={dark ? 0.5 : 0.8} 
        castShadow
      />
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.2}
        dampingFactor={0.05}
        enableDamping
      />
      <Environment preset={dark ? "night" : "sunset"} />
      {children}
    </>
  );
};

// Main Component
const Canvas3D = ({ dark }) => {
  return (
    <Canvas 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      shadows
    >
      <Suspense fallback={null}>
        <SceneSetup dark={dark}>
          <ParticlesGroup />
          <FloatingText dark={dark} />
          <AnimatedSphere />
        </SceneSetup>
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
