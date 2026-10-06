import { motion } from "framer-motion";

export default function ThreeDProductShowcase() {
  return (
    <section id="collection" className="py-16 md:py-32 px-4 md:px-8 bg-[#f7f3eb] text-[#2b211b] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        {/* Left side: details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 space-y-6 md:space-y-8 z-10"
        >
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-[#8c5a35] font-bold mb-4">Comfort & Connection</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2b211b] leading-[1.1]">Where Memories Are Made</h2>
            <p className="mt-6 text-[#594d45] leading-relaxed text-lg max-w-lg">
              Experience a completely different level of luxury. Our meticulously crafted sofas bring families together, blending premium comfort with timeless modern elegance. Transform your living space into a sanctuary of warmth and connection.
            </p>
          </div>
          
          <div className="pt-4 flex gap-4">
            <button 
              className="px-10 py-4 !bg-[#2b211b] hover:!bg-[#b66635] !text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Discover The Collection
            </button>
          </div>
        </motion.div>
        
        {/* Right side: Premium Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 w-full h-[400px] md:h-[600px] relative rounded-sm overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src="/Drawing Room 1 (15).jpeg" 
            alt="Premium modern sofa in a luxurious living space" 
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
