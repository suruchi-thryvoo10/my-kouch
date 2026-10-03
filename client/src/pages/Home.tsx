import { Page } from "../App";
import { motion } from "framer-motion";
import { Button, Eyebrow, Icon } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { categories, products, brandInfo } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";
import ThreeDShowroom from "../components/ThreeDShowroom";
import ThreeDProductShowcase from "../components/ThreeDProductShowcase";

export default function Home({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <ThreeDShowroom />

      {/* Categories Horizontal Scroll */}
      <section className="section-shell py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>The Collection</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-4">Designed for the way you live.</h2>
            <p className="text-gray-600 text-lg">Move through the collection by furniture type. Discover bespoke comfort crafted for your unique spaces.</p>
          </div>
        </div>
        <div className="category-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              className="category-card group relative aspect-[4/5] overflow-hidden text-left"
              onClick={() => go("products")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={category.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <span className="category-number absolute top-4 left-4 text-white/80 text-xs tracking-widest font-semibold">0{index + 1}</span>
              <span className="category-name absolute bottom-4 left-4 text-white text-lg font-medium pr-10">{category.name}</span>
              <span className="category-arrow absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300"><Icon name="arrow" /></span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* 3D Virtual Showroom / Product Showcase */}
      <ThreeDProductShowcase />

      {/* Featured Products */}
      <section className="collection-section py-24 px-6 md:px-12 bg-[#f7f3eb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <Eyebrow>The Kouch edit</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-serif mt-2">A catalogue with room to linger.</h2>
            </div>
            <Button variant="text" icon="arrow" onClick={() => go("products")}>View all products</Button>
          </div>
          {/* Increased gap-y significantly for mobile so text isn't confused with next image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-28 md:gap-y-20">
            {products.slice(0, 6).map((product, index) => <ProductCard key={product.id} product={product} index={index} onOpen={() => openProduct(index)} />)}
          </div>
        </div>
      </section>

      {/* Contact Band */}
      <section className="contact-band py-32 px-8 text-center bg-[#2b211b] text-[#f7f3eb]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Eyebrow>An invitation to talk</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-8">Perhaps your Kouch starts with a conversation.</h2>
          <p className="text-lg opacity-80 mb-10">Tell us which sofa interests you, or ask the team for help exploring the collection.</p>
          <div className="flex gap-4">
            <Button variant="primary" className="!bg-white !text-black" onClick={() => go("contact")}>Write to Kouch</Button>
            <Button variant="ghost" className="!border-white/30" href={getWhatsAppLink()}><Icon name="whatsapp" /> Enquire</Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
