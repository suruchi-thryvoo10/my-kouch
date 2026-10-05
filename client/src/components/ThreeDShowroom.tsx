import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "../utils/whatsapp";

function SofaModel({ color }: { color: string }) {
  // Using actual_sofa.glb as a placeholder. (I cannot generate a .glb from images!)
  const { scene } = useGLTF("/actual_sofa.glb") as any;
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Very subtle idle movement for realism
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(state.clock.elapsedTime * 0.5) * 0.01, 0.1);
    }
  });

  // Apply color to the main fabric material dynamically
  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((mat: any) => {
            if (mat.name && (mat.name.toLowerCase().includes("fabric") || mat.name.toLowerCase().includes("leather") || mat.name.toLowerCase().includes("sheen") || mat.name.toLowerCase().includes("cushion") || mat.name.toLowerCase().includes("wood") || mat.name.toLowerCase().includes("sofa"))) {
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

  return (
    <group ref={group} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/actual_sofa.glb");

export default function ThreeDShowroom() {
  const [color, setColor] = useState("#dcd4c6");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="w-full min-h-[100vh] bg-[#f7f3eb] relative overflow-hidden flex flex-col md:block pt-0 md:pt-0">
      
      {/* 3D Canvas - Stacked on top for mobile, absolute right for desktop */}
      <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-[60%] lg:w-[65%] h-[38vh] md:h-full z-0 cursor-grab active:cursor-grabbing pointer-events-auto shrink-0">
        <Canvas shadows camera={{ position: [0, 1.5, 6], fov: 40 }} gl={{ alpha: true }}>
          <fog attach="fog" args={["#f7f3eb", 10, 20]} />
          
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
              autoRotateSpeed={5.0}
              makeDefault
            />
            
            <group position={isMobile ? [0, 0.2, 0] : [0, -0.5, 0]} scale={isMobile ? 0.8 : 1}>
              <Stage environment="apartment" intensity={0.3} adjustCamera={1.2} shadows={false}>
                <SofaModel color={color} />
              </Stage>
              <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={5} blur={2.5} far={4} color="#3d3129" />
            </group>
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content (Text & Actions) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex-1 md:h-full flex flex-col justify-start md:justify-center pointer-events-none pb-12 md:pb-0 pt-0 md:pt-[90px]">
        <div className="w-full md:w-1/2 pointer-events-none">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="text-[#8c5a35] tracking-[0.25em] uppercase text-xs font-bold mb-4 md:mb-6 block">
              Crafted for Comfort
            </span>
            <h1 className="text-[#2b211b] font-serif font-light mb-4 md:mb-6 leading-[1.1] text-[clamp(3rem,8vw,5.5rem)]">
              Comfort That<br />Feels Like Home
            </h1>
            <p className="text-[#594d45] text-sm md:text-lg mb-8 max-w-md leading-relaxed hidden sm:block">
              Explore our premium collection of modern sofas designed to elevate your living space with unparalleled comfort and timeless aesthetics.
            </p>
            
            <div className="flex items-center gap-3 w-full md:w-auto pointer-events-auto">
              <button 
                onClick={() => {
                  const el = document.getElementById("collection");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#2b211b] text-white border border-[#2b211b] px-4 sm:px-8 py-3.5 sm:py-4 rounded-sm text-[10px] sm:text-sm font-bold tracking-widest uppercase hover:bg-[#4a3a30] hover:border-[#4a3a30] transition-all hover:-translate-y-1 shadow-md cursor-pointer flex items-center justify-center flex-1 md:flex-none whitespace-nowrap min-w-0"
              >
                <span className="text-white opacity-100 relative z-10">Explore Sofas</span>
              </button>
              <button 
                onClick={() => window.open(getWhatsAppLink(), '_blank')}
                className="bg-transparent border border-[#2b211b]/30 text-[#2b211b] px-4 sm:px-8 py-3.5 sm:py-4 rounded-sm text-[10px] sm:text-sm font-bold tracking-widest uppercase hover:bg-[#2b211b]/5 hover:border-[#2b211b]/50 transition-all hover:-translate-y-1 shadow-sm cursor-pointer flex items-center justify-center flex-1 md:flex-none whitespace-nowrap min-w-0"
              >
                Enquire Now
              </button>
            </div>
            
            <div className="mt-8 md:mt-12 pointer-events-auto">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#8c5a35] font-bold mb-3 md:mb-4">Select Material</p>
              <div className="flex gap-3 md:gap-4">
                <button onClick={() => setColor("#dcd4c6")} className={`w-8 h-8 md:w-8 md:h-8 rounded-full bg-[#dcd4c6] shadow-md border transition-all cursor-pointer ${color === '#dcd4c6' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-[#dcd4c6]/50 hover:scale-105'}`} aria-label="Cream" />
                <button onClick={() => setColor("#c2b3a3")} className={`w-8 h-8 md:w-8 md:h-8 rounded-full bg-[#c2b3a3] shadow-md border transition-all cursor-pointer ${color === '#c2b3a3' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-[#c2b3a3]/50 hover:scale-105'}`} aria-label="Beige" />
                <button onClick={() => setColor("#6e5548")} className={`w-8 h-8 md:w-8 md:h-8 rounded-full bg-[#6e5548] shadow-md border transition-all cursor-pointer ${color === '#6e5548' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-[#6e5548]/50 hover:scale-105'}`} aria-label="Brown" />
                <button onClick={() => setColor("#787c80")} className={`w-8 h-8 md:w-8 md:h-8 rounded-full bg-[#787c80] shadow-md border transition-all cursor-pointer ${color === '#787c80' ? 'ring-2 ring-[#2b211b] ring-offset-2 scale-110' : 'border-[#787c80]/50 hover:scale-105'}`} aria-label="Grey" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
