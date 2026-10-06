import { Page } from "../App";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Eyebrow, Icon, Logo } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { categories, products, brandInfo, images } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";
import ThreeDProductShowcase from "../components/ThreeDProductShowcase";
import { useRef } from "react";

export default function Home({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[100svh] overflow-hidden bg-[#2b211b]">
        {/* Desktop Background with Parallax */}
        <motion.div 
          className="absolute inset-0 hidden md:block w-full h-[120%] -top-[10%]"
          style={{ y: y1 }}
        >
          <img 
            src={images[6] || images[0]} 
            alt="Premium Kouch Sofa Collection" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle vignette/overlay to ensure text readability without hiding the sofa */}
          <div className="absolute inset-0 bg-white/40 md:bg-white/10 pointer-events-none" />
        </motion.div>

        {/* Mobile Background with Parallax */}
        <motion.div 
          className="absolute inset-0 md:hidden w-full h-[120%] -top-[10%]"
          style={{ y: y1 }}
        >
          <img 
            src="/mobile-hero-sec.png" 
            alt="Premium Kouch Sofa Collection" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center px-6 text-center z-10 text-[#2b211b] pb-32 md:pb-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-3xl"
          >
            {/* Logo Treatment (optional: can use Logo component but ensuring it is white/transparent) */}
            <h1 className="text-sm tracking-[0.3em] uppercase mb-6 text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Kouch Collection
            </h1>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] !text-white">
              Comfort That Feels Like Home.
            </h2>
            

            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                onClick={() => go("products")}
                className="!bg-[#2b211b] !text-white hover:!bg-[#4a3a30] !px-10 !py-4 text-sm tracking-widest min-w-[200px] shadow-lg"
              >
                Explore Sofas
              </Button>
              <Button 
                variant="ghost"
                onClick={() => go("products")}
                className="!bg-white !border-[#2b211b]/20 !text-[#2b211b] hover:!bg-gray-50 !px-10 !py-4 text-sm tracking-widest min-w-[200px] shadow-sm"
              >
                Find Your Sofa
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 text-[#2b211b]/80 hidden md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Icon name="arrow" size={16} className="transform rotate-90" />
          </motion.div>
        </motion.div>
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
        <div className="flex overflow-x-auto snap-x snap-mandatory md:category-grid md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto hide-scrollbar pb-8 -mx-4 px-4 md:mx-auto md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              className="category-card group relative aspect-[4/5] overflow-hidden text-left flex-shrink-0 w-[75vw] sm:w-[45vw] snap-center md:w-auto md:flex-shrink rounded-md shadow-sm"
              onClick={() => go("products", { category: category.name })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={category.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <span className="category-arrow absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300"><Icon name="arrow" /></span>
            </motion.button>
          ))}
          {/* Spacer to prevent right clipping on mobile scroll */}
          <div className="w-1 flex-shrink-0 md:hidden"></div>
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
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-28 md:gap-y-20 hide-scrollbar pb-12 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {products.slice(0, 6).map((product, index) => (
              <div key={product.id} className="w-[85vw] sm:w-[60vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink md:snap-align-none">
                <ProductCard product={product} index={index} onOpen={() => openProduct(index)} />
              </div>
            ))}
            {/* Spacer to prevent right clipping on mobile scroll */}
            <div className="w-1 flex-shrink-0 md:hidden"></div>
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
