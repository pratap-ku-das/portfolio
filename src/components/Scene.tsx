import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, MeshTransmissionMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type Variant = 'workspace' | 'timeline' | 'lab'

function Workspace() {
  const group = useRef<THREE.Group>(null)
  useFrame(({ pointer }, delta) => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * .18, 3, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * .1, 3, delta)
  })
  return (
    <group ref={group} rotation={[-.12, -.35, 0]}>
      <mesh position={[0, -.7, 0]} rotation={[-.15, 0, 0]}>
        <boxGeometry args={[4.5, .16, 2.7]} />
        <meshStandardMaterial color="#111920" metalness={.7} roughness={.25} />
      </mesh>
      <mesh position={[0, .7, -.4]}>
        <boxGeometry args={[3.7, 2.2, .16]} />
        <meshStandardMaterial color="#0b1115" metalness={.65} roughness={.2} />
      </mesh>
      <mesh position={[0, .7, -.29]}>
        <planeGeometry args={[3.3, 1.82]} />
        <meshBasicMaterial color="#0b2726" />
      </mesh>
      {[.9, .5, .1, -.3].map((y, i) => (
        <mesh key={y} position={[-.7 + (i % 2) * .35, y, -.275]}>
          <planeGeometry args={[1.45 - i * .12, .025]} />
          <meshBasicMaterial color={i === 0 ? '#91f5d6' : '#3c7e74'} />
        </mesh>
      ))}
      <mesh position={[0, -.5, -.1]}><boxGeometry args={[1.15, .06, .45]} /><meshStandardMaterial color="#263137" /></mesh>
      <Float speed={1.3} rotationIntensity={.25} floatIntensity={.35}>
        <mesh position={[2.55, .75, .25]} rotation={[0, .4, .2]}>
          <icosahedronGeometry args={[.45, 1]} />
          <meshStandardMaterial color="#75dabb" wireframe />
        </mesh>
      </Float>
    </group>
  )
}

function Timeline() {
  const points = useMemo(() => [new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(-.7, 1.5, 0), new THREE.Vector3(.65, .5, 0), new THREE.Vector3(-.5, -.5, 0), new THREE.Vector3(.7, -1.5, 0), new THREE.Vector3(0, -2.5, 0)], [])
  const ref = useRef<THREE.Group>(null)
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * .12 })
  return <group ref={ref}>
    <Line points={points} color="#376d65" lineWidth={1} />
    {points.map((p, i) => <Float key={i} speed={1 + i * .1} floatIntensity={.2}>
      <mesh position={p}><sphereGeometry args={[i === 5 ? .22 : .12, 16, 16]} /><meshStandardMaterial color={i === 5 ? '#e8ff87' : '#88ebcb'} emissive="#1b594a" emissiveIntensity={1.2} /></mesh>
    </Float>)}
  </group>
}

function Lab() {
  const core = useRef<THREE.Mesh>(null)
  useFrame((_, d) => { if (core.current) { core.current.rotation.x += d * .16; core.current.rotation.y += d * .25 } })
  const nodes = [[0, 2.2, 0], [2.2, .7, 0], [1.4, -1.9, 0], [-1.4, -1.9, 0], [-2.2, .7, 0]] as [number, number, number][]
  return <group rotation={[.1, 0, 0]}>
    <mesh ref={core}><octahedronGeometry args={[.7, 0]} /><MeshTransmissionMaterial color="#7ce5c2" transmission={.75} thickness={1.2} roughness={.12} /></mesh>
    {nodes.map((p, i) => <group key={i}>
      <Line points={[[0, 0, 0], p]} color="#27544e" lineWidth={1} />
      <Float speed={1.1 + i * .1} floatIntensity={.25}><mesh position={p}><dodecahedronGeometry args={[.28, 0]} /><meshStandardMaterial color={i === 0 ? '#e8ff87' : '#5cae9b'} wireframe /></mesh></Float>
    </group>)}
    <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.45, .012, 8, 80]} /><meshBasicMaterial color="#4d8d81" /></mesh>
  </group>
}

export default function Scene({ variant }: { variant: Variant }) {
  return <Canvas camera={{ position: [0, 0, variant === 'workspace' ? 7 : 6], fov: 43 }} dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}>
    <ambientLight intensity={.8} />
    <directionalLight position={[3, 4, 5]} intensity={2.2} color="#cffff0" />
    <pointLight position={[-3, -2, 3]} color="#4365ff" intensity={12} />
    {variant === 'workspace' ? <Workspace /> : variant === 'timeline' ? <Timeline /> : <Lab />}
  </Canvas>
}
