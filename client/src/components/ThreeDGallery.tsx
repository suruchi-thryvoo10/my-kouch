import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ThreeDGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Subtle scale effect for that "3D" feel
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="w-full h-screen bg-[#1a1412] relative overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 w-full h-full origin-top"
        style={{ y, scale }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src="/Drawing Room 1 (5).png" 
          alt="My Kouch Luxury Interior" 
          className="w-full h-full object-cover object-center"
        />
        {/* Elegant gradient overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h1 
          className="text-[#f7f3eb] text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 drop-shadow-2xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          Crafted for Comfort.<br />Designed for Life.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-12 h-[1px] bg-[#f7f3eb]/50 mb-6"></div>
          <p className="text-[#f7f3eb]/90 tracking-[0.3em] uppercase text-sm md:text-base font-medium drop-shadow-md">
            Welcome to My Kouch
          </p>
        </motion.div>
      </div>
    </div>
  );
}
