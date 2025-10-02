'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null)
  const { viewport } = useThree()
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    const colors = new Float32Array(5000 * 3)
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * viewport.width * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Neon colors
      const color = new THREE.Color()
      const colors_array = [
        new THREE.Color('#00ffff'), // cyan
        new THREE.Color('#8b5cf6'), // violet  
        new THREE.Color('#ff00ff'), // magenta
        new THREE.Color('#0066ff'), // blue
      ]
      const randomColor = colors_array[Math.floor(Math.random() * colors_array.length)]
      colors[i * 3] = randomColor.r
      colors[i * 3 + 1] = randomColor.g
      colors[i * 3 + 2] = randomColor.b
    }
    
    return [positions, colors]
  }, [viewport])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} frustumCulled={false} {...props}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            count={positions.length / 3} 
            array={positions} 
            itemSize={3} 
          />
          <bufferAttribute 
            attach="attributes-color" 
            count={colors.length / 3} 
            array={colors} 
            itemSize={3} 
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          vertexColors
          size={2}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 2
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[4, 0, -5]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00ffff"
        transparent
        opacity={0.6}
        wireframe
        emissive="#00ffff"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={[-6, 2, -8]}>
      <torusGeometry args={[2, 0.5, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.4}
        wireframe
        emissive="#8b5cf6"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#00ffff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.8} />
        <Stars />
        <FloatingGeometry />
        <FloatingTorus />
      </Canvas>
    </div>
  )
}