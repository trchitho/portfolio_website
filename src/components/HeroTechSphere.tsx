import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import javascriptIcon from '@/assets/icons/javascript.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';
import reactIcon from '@/assets/icons/react.svg';
import pythonIcon from '@/assets/icons/python.svg';
import javaIcon from '@/assets/icons/java.svg';
import cplusplusIcon from '@/assets/icons/cplusplus.svg';
import html5Icon from '@/assets/icons/html5.svg';
import css3Icon from '@/assets/icons/css3.svg';
import nodejsIcon from '@/assets/icons/nodejs.svg';
import vuejsIcon from '@/assets/icons/vuejs.svg';
import angularIcon from '@/assets/icons/angular.svg';
import phpIcon from '@/assets/icons/php.svg';
const heroLanguages = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Vue.js', icon: vuejsIcon },
  { name: 'Angular', icon: angularIcon },
];

interface LanguageIconProps {
  position: [number, number, number];
  language: typeof heroLanguages[0];
  index: number;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ position, language, index }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Rotate icons to always face the camera
      ref.current.lookAt(state.camera.position);
      // Add subtle floating animation
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.05;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Html
        center
        transform
        sprite
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '8px',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          backdropFilter: 'blur(4px)',
          padding: '4px',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        <img 
          src={language.icon} 
          alt={language.name}
          style={{
            width: '20px',
            height: '20px',
            objectFit: 'contain',
          }}
        />
      </Html>
    </group>
  );
};

const HeroSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Group>(null);
  
  // Generate positions on smaller sphere
  const iconPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 2;
    
    heroLanguages.forEach((_, index) => {
      // Use golden spiral distribution for even spacing
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (index / (heroLanguages.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * index;
      
      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;
      const scaledY = y * radius;
      
      positions.push([x, scaledY, z]);
    });
    
    return positions;
  }, []);

  useFrame((state) => {
    if (sphereRef.current) {
      // Slow rotation
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={sphereRef}>
      {/* Invisible sphere for structure */}
      <Sphere args={[2, 32, 32]} visible={false} />
      
      {/* Wireframe sphere */}
      <Sphere args={[2, 12, 12]}>
        <meshBasicMaterial
          color="hsl(250, 84%, 60%)"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
      
      {/* Language icons */}
      {heroLanguages.map((language, index) => (
        <LanguageIcon
          key={language.name}
          position={iconPositions[index]}
          language={language}
          index={index}
        />
      ))}
    </group>
  );
};

const HeroTechSphere: React.FC = () => {
  return (
    <div className="w-[500px] h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <HeroSphere />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={4}
          maxDistance={7}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default HeroTechSphere;
