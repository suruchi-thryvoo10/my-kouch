import { motion } from "framer-motion";
import { Icon } from "./SharedUI";

export function ProductCard({ product, onOpen, index = 0 }: { product: any; onOpen: () => void; index?: number }) {
  return (
    <motion.article 
      className="product-card group cursor-pointer flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      onClick={onOpen}
    >
      <div className="product-image overflow-hidden relative rounded-md shadow-sm group-hover:shadow-2xl transition-all duration-700 ease-out" aria-label={`View ${product.name}`}>
        <img 
          src={product.image} 
          alt={`Product view for ${product.name}`} 
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
        
        <span className="catalogue-number absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 text-[#2b211b]">
          {String(index + 1).padStart(2, "0")}
        </span>
        
        <span className="absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl text-[#8c5a35] flex items-center justify-center">
          <Icon name="arrow" />
        </span>
      </div>
      
      <div className="product-copy mt-6 flex flex-col flex-1">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8c5a35] font-bold transition-colors duration-300">
          {product.category}
        </span>
        
        <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-3 text-[#2b211b] transition-colors duration-300 group-hover:text-[#8c5a35]">
          {product.name}
        </h3>
        
        <p className="text-sm text-[#594d45] line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>
        
        <div className="mt-5 text-xs tracking-widest uppercase font-bold flex items-center gap-2 text-[#2b211b] transition-all duration-300 group-hover:text-[#8c5a35]">
          <span className="border-b border-transparent group-hover:border-[#8c5a35] pb-1 transition-colors duration-300">View Details</span> 
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
            <Icon name="arrow" size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
