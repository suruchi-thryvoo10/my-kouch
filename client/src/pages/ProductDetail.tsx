import { useState } from "react";
import { Page } from "../App";
import { motion } from "framer-motion";
import { Button, Eyebrow, Icon, Field } from "../components/SharedUI";
import { products, images } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function ProductDetail({
  product, go, onEnquire,
}: { product: any; go: (page: Page) => void; onEnquire: (configuration: string) => void; }) {
  const productIndex = products.findIndex((item) => item.id === product.id);
  const gallery = [product.image, images[(productIndex + 1) % images.length], images[(productIndex + 2) % images.length]];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="product-detail max-w-7xl mx-auto py-12 px-4 md:px-8">
        <button className="breadcrumb text-sm tracking-wider uppercase flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity" onClick={() => go("products")}>
          <Icon name="arrow" size={16} /> Back to collections
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative" layoutId={`product-image-${product.id}`}>
              <img src={gallery[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`aspect-square overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-[#2b211b]' : 'border-transparent'}`}>
                  <img src={img} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col">
            <Eyebrow>{product.category}</Eyebrow>
            <h1 className="text-4xl md:text-5xl font-serif mt-2 mb-6">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Specifications</h3>
              <ul className="space-y-2">
                {product.specifications.map((spec: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Icon name="check" size={16} /> <span className="mt-[-2px]">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#fcecec] p-6 rounded-sm mb-10 text-sm text-[#a93232]">
              <strong>Customization Available</strong> — Contact us to explore fabric options, dimensions, and configurations for this piece.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button className="flex-1" icon="whatsapp" href={getWhatsAppLink(product.name)}>Enquire on WhatsApp</Button>
              <Button variant="secondary" className="flex-1" icon="phone" href="tel:+918093376990">Call Us</Button>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">Fast response from our Bhubaneswar team.</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
