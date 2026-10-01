import { motion } from "framer-motion";
import { Icon } from "./SharedUI";

export function ProductCard({ product, onOpen, index = 0 }: { product: any; onOpen: () => void; index?: number }) {
  return (
    <motion.article 
      className="product-card group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onOpen}
    >
      <div className="product-image overflow-hidden relative rounded-sm" aria-label={`View ${product.name}`}>
        <motion.img 
          src={product.image} 
          alt={`Product view for ${product.name}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="catalogue-number absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase bg-white/80 px-2 py-1">{String(index + 1).padStart(2, "0")}</span>
        <span className="image-action absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" /></span>
      </div>
      <div className="product-copy mt-4">
        <span className="text-xs tracking-widest uppercase text-gray-500">{product.category}</span>
        <h3 className="text-2xl font-serif mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <button className="mt-4 text-sm font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity">
          View Details <Icon name="arrow" size={16} />
        </button>
      </div>
    </motion.article>
  );
}
