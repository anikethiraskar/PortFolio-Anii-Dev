// src/components/ParticleBackground.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function Particles({ count = 200, mousePosition, isDarkMode }) {
  const meshRef = useRef(null);
  const linesRef = useRef(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const isCyan = Math.random() > 0.5;
      if (isDarkMode) {
        cols[i * 3] = isCyan ? 0 : 0.55;
        cols[i * 3 + 1] = isCyan ? 0.83 : 0.36;
        cols[i * 3 + 2] = isCyan ? 1 : 0.96;
      } else {
        cols[i * 3] = isCyan ? 0.03 : 0.49;
        cols[i * 3 + 1] = isCyan ? 0.57 : 0.13;
        cols[i * 3 + 2] = isCyan ? 0.7 : 0.81;
      }
    }
    return cols;
  }, [count, isDarkMode]);
  
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * count * 6);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count]);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Mouse influence
    const mouseX = (mousePosition.current.x - 0.5) * 15;
    const mouseY = -(mousePosition.current.y - 0.5) * 15;
    
    // Update particle positions
    const particlePositions = meshRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      
      // Gentle floating motion
      particlePositions[idx] = positions[idx] + Math.sin(time * 0.3 + i * 0.1) * 0.5;
      particlePositions[idx + 1] = positions[idx + 1] + Math.cos(time * 0.2 + i * 0.1) * 0.5;
      particlePositions[idx + 2] = positions[idx + 2] + Math.sin(time * 0.1 + i * 0.05) * 0.3;
      
      // Mouse attraction (very subtle)
      const dx = mouseX - particlePositions[idx];
      const dy = mouseY - particlePositions[idx + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 8) {
        particlePositions[idx] += dx * 0.002;
        particlePositions[idx + 1] += dy * 0.002;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
    
    // Update connection lines
    if (linesRef.current) {
      const linePositions = lineGeometry.attributes.position.array;
      let lineIdx = 0;
      const maxConnections = 2;
      const connectionDistance = 3;
      
      for (let i = 0; i < count && lineIdx < count * maxConnections * 6; i++) {
        let connections = 0;
        for (let j = i + 1; j < count && connections < maxConnections; j++) {
          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < connectionDistance) {
            linePositions[lineIdx++] = particlePositions[i * 3];
            linePositions[lineIdx++] = particlePositions[i * 3 + 1];
            linePositions[lineIdx++] = particlePositions[i * 3 + 2];
            linePositions[lineIdx++] = particlePositions[j * 3];
            linePositions[lineIdx++] = particlePositions[j * 3 + 1];
            linePositions[lineIdx++] = particlePositions[j * 3 + 2];
            connections++;
          }
        }
      }
      
      for (let i = lineIdx; i < count * maxConnections * 6; i++) {
        linePositions[i] = 0;
      }
      
      lineGeometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <>
      <points ref={meshRef} geometry={geometry}>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color={isDarkMode ? "#22d3ee" : "#0891b2"} transparent opacity={0.1} blending={isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending} />
      </lineSegments>
    </>
  );
}

export default function ParticleBackground({ className }) {
  const { isDarkMode } = useTheme();
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  
  const handleMouseMove = (e) => {
    mousePosition.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  };
  
  return (
    <div 
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles mousePosition={mousePosition} count={150} isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
}
