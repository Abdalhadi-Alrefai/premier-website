'use client';

import React, {
  Suspense,
  useState,
  useEffect,
  useMemo,
  useRef,
  Component,
  ErrorInfo,
  ReactNode,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { Rotate3d } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SceneErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('3D Scene catch error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Realistic Ivory Ceramic Dental Material
 * Simulates high-translucency monolithic dental ceramic / multi-layered zirconia.
 */
function createIvoryCeramicMaterial(): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FAF8F2'), // Crisp, natural warm dental ivory ceramic
    roughness: 0.2, // Satin-smooth laboratory ceramic glaze
    metalness: 0.0, // Pure dielectric ceramic
    clearcoat: 0.85, // Enamel gloss surface layer
    clearcoatRoughness: 0.08, // Liquid smooth gloss reflection
    transmission: 0.12, // Subtle porcelain translucency
    ior: 1.52, // Dental ceramic refractive index
    reflectivity: 0.6,
    sheen: 0.2, // Delicate edge sheen without washing out the ivory ceramic
    sheenColor: new THREE.Color('#22A6BF'), // Premier brand petrol-cyan rim highlight
    specularColor: new THREE.Color('#FFFFFF'),
    side: THREE.DoubleSide,
  });
}

/**
 * Renders the integrated dental crown GLB model.
 */
function CrownMesh({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  const processedScene = useMemo(() => {
    const cloned = scene.clone(true);
    const material = createIvoryCeramicMaterial();

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.geometry) {
          // Compute smooth vertex normals for procedural geometry
          mesh.geometry.computeVertexNormals();
          // Center local geometry coordinates
          mesh.geometry.center();
        }

        mesh.material = material;
      }
    });

    // Auto-center and normalize bounding box scale
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);

    if (maxDim > 0) {
      // Scale prominently within viewport units
      const targetScale = 1.65 / maxDim;
      cloned.scale.setScalar(targetScale);
    }

    const center = new THREE.Vector3();
    box.getCenter(center);
    cloned.position.x = -center.x * cloned.scale.x;
    cloned.position.y = -center.y * cloned.scale.y;
    cloned.position.z = -center.z * cloned.scale.z;

    return cloned;
  }, [scene]);

  return (
    // Orientation:
    // In the GLB model, Z is height (cervical base at 0, occlusal apex at 11).
    // Rotating around X by (-Math.PI / 2 + 0.18) orients the base down, apex up,
    // with a gentle 10° forward tilt towards the camera.
    // Y rotation by 0.2 presents an aesthetic 3/4 perspective.
    <group rotation={[-Math.PI / 2 + 0.18, 0.2, 0]}>
      <primitive object={processedScene} />
    </group>
  );
}

// Preload the crown model for instantaneous client rendering
useGLTF.preload('/models/dental-crown.glb');

/**
 * Studio Lighting Setup
 * Premium dental laboratory photography illumination with Premier brand accents.
 */
function StudioLighting() {
  return (
    <>
      {/* Ambient Fill: Subtle baseline fill to keep shadows soft */}
      <ambientLight intensity={0.4} color="#0B2B38" />

      {/* Primary Key Light: Bright crisp 5500K dental daylight */}
      <directionalLight position={[4.0, 4.5, 3.5]} intensity={2.6} color="#FFFFFF" castShadow />

      {/* Front Fill: Clean white fill to keep the ivory bright and readable */}
      <directionalLight position={[-2.5, 2.0, 3.0]} intensity={1.1} color="#FFFFFF" />

      {/* Premier Rim Light: Grazing the rear-left edge */}
      <directionalLight position={[-4.5, 0.5, -3.5]} intensity={1.3} color="#22A6BF" />

      {/* Overhead Inspection Rim */}
      <directionalLight position={[0, 4.5, -1.0]} intensity={0.5} color="#22A6BF" />

      {/* Base Reflector Bounce */}
      <directionalLight position={[0, -3.5, 1.5]} intensity={0.3} color="#042330" />
    </>
  );
}

/**
 * Fallback stage in the unlikely event the GLB fails to load
 */
function FallbackCrownStage() {
  return (
    <mesh>
      <octahedronGeometry args={[0.7, 0]} />
      <meshPhysicalMaterial
        color="#FAF8F2"
        roughness={0.2}
        clearcoat={0.8}
        transmission={0.15}
        ior={1.52}
      />
    </mesh>
  );
}

interface DentalCrownCanvasProps {
  isRtl?: boolean;
  rotateHint?: string;
}

export default function DentalCrownCanvas({ isRtl = false, rotateHint }: DentalCrownCanvasProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(media.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] sm:min-h-[440px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0.1, 3.6], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        className="cursor-grab active:cursor-grabbing w-full h-full select-none"
      >
        <StudioLighting />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4.5}
          maxPolarAngle={Math.PI / 1.6}
          dampingFactor={0.05}
          autoRotate={!prefersReducedMotion}
          autoRotateSpeed={0.8}
          rotateSpeed={0.7}
        />

        <SceneErrorBoundary fallback={<FallbackCrownStage />}>
          <Suspense fallback={null}>
            <Float
              speed={prefersReducedMotion ? 0 : 1.2}
              rotationIntensity={0.12}
              floatIntensity={0.16}
            >
              <CrownMesh url="/models/dental-crown.glb" />
            </Float>

            {/* Grounded contact shadow */}
            <ContactShadows
              position={[0, -1.05, 0]}
              opacity={0.4}
              scale={3.6}
              blur={2.0}
              color="#02161E"
            />
          </Suspense>
        </SceneErrorBoundary>
      </Canvas>

      {/* Clean Interaction Hint */}
      <div className="absolute bottom-2.5 start-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-surface/85 border border-brand-border/70 text-[10px] text-brand-muted backdrop-blur-md shadow-md whitespace-nowrap select-none">
        <Rotate3d
          className="w-3 h-3 text-brand-petrol-accent animate-spin"
          style={{ animationDuration: '8s' }}
        />
        <span>
          {rotateHint || (isRtl ? 'اسحب للتدوير باللمس' : 'Drag to rotate • Touch interactive')}
        </span>
      </div>
    </div>
  );
}
