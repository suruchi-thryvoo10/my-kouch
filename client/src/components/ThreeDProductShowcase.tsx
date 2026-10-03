import { Suspense, useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, Html, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function ShowcaseModel({ url, color }: { url: string; color: string }) {
  const { scene } = useGLTF(url) as any;
  // Clone the scene so multiple components can use the same cached GLTF
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const ref = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child: any) => {
        if (child.isMesh && child.material) {
           const materials = Array.isArray(child.material) ? child.material : [child.material];
           materials.forEach((mat: any) => {
             if (mat.name && (mat.name.toLowerCase().includes("fabric") || mat.name.toLowerCase().includes("leather") || mat.name.toLowerCase().includes("sheen") || mat.name.toLowerCase().includes("cushion") || mat.name.toLowerCase().includes("wood"))) {
               const newMat = mat.clone();
               newMat.color = new THREE.Color(color);
               newMat.needsUpdate = true;
               if (Array.isArray(child.material)) {
                 child.material = child.material.map((m: any) => m === mat ? newMat : m);
               } else {
                 child.material = newMat;
               }
             }
           });
        }
      });
    }
  }, [clonedScene, color]);

  useFrame((state) => {
    if (ref.current) {
      // Gentle auto-rotation
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

export default function ThreeDProductShowcase() {
  const [activeColor, setActiveColor] = useState("#dcd4c6"); // Default Cream

  return (
    <section id="collection" className="py-24 px-4 md:px-8 bg-[#fbf9f4] text-[#2b211b] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left side: details */}
        <div className="lg:w-1/3 space-y-8">
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-[#8c5a35] font-bold mb-2">Explore Our Collection</h3>
            <h2 className="text-5xl font-serif text-[#2b211b]">The Signature Sectional</h2>
            <p className="mt-4 text-[#594d45] leading-relaxed">
              Experience a completely different level of luxury. 
              Drag to rotate, zoom to explore the premium fabric and leather details of our 3-seater sectional.
            </p>
          </div>
          
          <div>
            <p className="text-sm uppercase tracking-widest mb-4 text-[#8c5a35] font-bold">Select Material</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveColor("#dcd4c6")} 
                className={`w-10 h-10 rounded-full bg-[#dcd4c6] border transition-all ${activeColor === '#dcd4c6' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-gray-200 hover:scale-105'}`} 
                aria-label="Cream Fabric"
              />
              <button 
                onClick={() => setActiveColor("#c2b3a3")} 
                className={`w-10 h-10 rounded-full bg-[#c2b3a3] border transition-all ${activeColor === '#c2b3a3' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-transparent hover:scale-105'}`} 
                aria-label="Beige Fabric"
              />
              <button 
                onClick={() => setActiveColor("#6e5548")} 
                className={`w-10 h-10 rounded-full bg-[#6e5548] border transition-all ${activeColor === '#6e5548' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-transparent hover:scale-105'}`} 
                aria-label="Brown Fabric"
              />
              <button 
                onClick={() => setActiveColor("#787c80")} 
                className={`w-10 h-10 rounded-full bg-[#787c80] border transition-all ${activeColor === '#787c80' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-transparent hover:scale-105'}`} 
                aria-label="Grey Fabric"
              />
            </div>
          </div>
        </div>
        
        {/* Right side: 3D Canvas */}
        <div className="lg:w-2/3 w-full h-[600px] bg-transparent relative cursor-grab active:cursor-grabbing pointer-events-auto">
          <Canvas shadows camera={{ position: [0, 1.5, 4.5], fov: 40 }} gl={{ alpha: true }}>
            <fog attach="fog" args={["#fbf9f4", 10, 20]} />
            <Suspense fallback={null}>
              
              <ambientLight intensity={0.6} color="#fffcf5" />
              <directionalLight position={[5, 8, 3]} intensity={0.8} castShadow shadow-mapSize={1024} shadow-bias={-0.0005} />
              <spotLight position={[-5, 5, -5]} intensity={0.4} color="#ffd4a8" penumbra={1} />
              
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              maxPolarAngle={Math.PI / 2 + 0.1}
              minPolarAngle={0}
              autoRotate={true}
              autoRotateSpeed={2.5}
              makeDefault
            />
            <group position={[0, -0.5, 0]}>
              <Stage environment="apartment" intensity={0.3} adjustCamera={1.2} shadows={false}>
                <ShowcaseModel url="/sofa.glb" color={activeColor} />
              </Stage>
              {/* Manual transparent contact shadow to prevent any grey floor rendering */}
              <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={5} blur={2.5} far={4} color="#3d3129" />
            </group>
          </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
