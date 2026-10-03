import { useState } from "react";
import { Page } from "../App";
import { motion } from "framer-motion";
import { Eyebrow } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { products } from "../constants/data";

export default function Listing({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  const [active, setActive] = useState("All");
  const filters = ["All", "Drawing Room", "Sofas", "L-shape sofas", "Recliners", "Sofa Cum Bed"];
  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-[#f7f3eb] py-24 px-4 md:px-8 text-center">
        <Eyebrow>Product Catalogue</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6">Collections</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our curated collections of premium furniture, meticulously crafted for modern living.</p>
      </section>
      
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActive(f)}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all ${active === f ? 'bg-[#2b211b] !text-white shadow-md' : 'bg-gray-200/50 text-[#594d45] hover:bg-gray-200'}`}
            >
              <span className={active === f ? "!text-white" : ""}>{f}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} onOpen={() => openProduct(products.findIndex(p => p.id === product.id))} />
          ))}
        </div>
      </section>
    </motion.main>
  );
}
