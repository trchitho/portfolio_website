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
import goIcon from '@/assets/icons/go.svg';
import rustIcon from '@/assets/icons/rust.svg';
import swiftIcon from '@/assets/icons/swift.svg';
import kotlinIcon from '@/assets/icons/kotlin.svg';
const programmingLanguages = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'C++', icon: cplusplusIcon },
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Vue.js', icon: vuejsIcon },
  { name: 'Angular', icon: angularIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Go', icon: goIcon },
  { name: 'Rust', icon: rustIcon },
  { name: 'Swift', icon: swiftIcon },
  { name: 'Kotlin', icon: kotlinIcon },
];

interface LanguageIconProps {
  position: [number, number, number];
  language: typeof programmingLanguages[0];
  index: number;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ position, language, index }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.lookAt(state.camera.position);
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Html
        center
        transform
        sprite
        style={{
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '12px',
          border: '2px solid rgba(139, 92, 246, 0.5)',
          backdropFilter: 'blur(8px)',
          padding: '8px',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        <img 
          src={language.icon} 
          alt={language.name}
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
          }}
        />
      </Html>
    </group>
  );
};

const RotatingSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Group>(null);
  const iconPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 3;
    
    programmingLanguages.forEach((_, index) => {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (index / (programmingLanguages.length - 1)) * 2;
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
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={sphereRef}>
      <Sphere args={[3, 32, 32]} visible={false} />
      <Sphere args={[3, 16, 16]}>
        <meshBasicMaterial
          color="hsl(250, 84%, 60%)"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      {programmingLanguages.map((language, index) => (
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

const TechSphere: React.FC = () => {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingSphere />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default TechSphere;
