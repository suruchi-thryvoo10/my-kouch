import { Page } from "../App";
import { motion } from "framer-motion";
import { Button, Eyebrow, Icon } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { categories, products, brandInfo } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function Home({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="hero editorial-hero h-[90vh] min-h-[600px] relative overflow-hidden flex items-center justify-center">
        <motion.div className="hero-image absolute inset-0 z-0" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <img src={products[0].image} alt="Kouch sofa collection visual" className="w-full h-full object-cover brightness-[0.85]" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center justify-center text-center text-white mt-12">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="flex flex-col items-center">
            <span className="text-sm tracking-[0.2em] uppercase mb-4 block opacity-90">Premium Furniture</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6">
              Comfort that <br /><i className="font-light italic">feels like home</i>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl mb-10 font-medium !text-[#e6dfd8] tracking-wide drop-shadow-lg leading-relaxed">
              {brandInfo.shortStatement}
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 drop-shadow-lg" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <Button variant="primary" className="!bg-white !text-black hover:!bg-gray-100" onClick={() => go("products")}>Explore Collection</Button>
            <Button variant="primary" className="!bg-[#b66635] !text-white hover:!bg-[#96522a] !border-none" href={getWhatsAppLink()}>Enquire Now</Button>
          </motion.div>
        </div>
      </section>

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

      {/* Featured Products */}
      <section className="collection-section py-24 px-4 md:px-8 bg-[#f7f3eb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <Eyebrow>The Kouch edit</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-serif mt-2">A catalogue with room to linger.</h2>
            </div>
            <Button variant="text" icon="arrow" onClick={() => go("products")}>View all products</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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
