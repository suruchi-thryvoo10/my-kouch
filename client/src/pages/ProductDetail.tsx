import { useState, useEffect } from "react";
import { Page } from "../App";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Eyebrow, Icon } from "../components/SharedUI";
import { products, images } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";
import { ProductCard } from "../components/ProductCard";

export default function ProductDetail({
  product, go, openProduct
}: { product: any; go: (page: Page) => void; openProduct?: (index: number) => void; }) {
  const productIndex = products.findIndex((item) => item.id === product.id);
  const gallery = [product.image, images[(productIndex + 1) % images.length], images[(productIndex + 2) % images.length], images[(productIndex + 3) % images.length]];
  const [activeImage, setActiveImage] = useState(0);
  const [pincode, setPincode] = useState("751024");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const similarProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (similarProducts.length < 4) {
    similarProducts.push(...products.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - similarProducts.length));
  }

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#fcfbf9] min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-medium">
          <button onClick={() => go("home")} className="hover:text-[#b66635] transition-colors">Home</button>
          <Icon name="chevron" size={12} />
          <button onClick={() => go("products")} className="hover:text-[#b66635] transition-colors">Collections</button>
          <Icon name="chevron" size={12} />
          <span className="text-[#2b211b] truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </div>
      </div>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column - Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-28">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-24 flex-shrink-0 hide-scrollbar">
              {gallery.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)} 
                  className={`aspect-square w-20 md:w-full overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === i ? 'border-[#b66635] opacity-100' : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <motion.div 
              className="w-full aspect-[4/3] bg-[#f0ebe1] overflow-hidden relative group cursor-zoom-in flex-1" 
              layoutId={`product-image-${product.id}`}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={gallery[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply" 
                />
              </AnimatePresence>
              
              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#2b211b] text-white px-3 py-1.5 shadow-md inline-block">
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#b66635] text-white px-3 py-1.5 shadow-md inline-block">
                    {discount}% Off
                  </span>
                )}
              </div>
              
              {/* Expand Icon */}
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2b211b] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Icon name="plus" size={18} />
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Product Info */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Title & Rating */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <Eyebrow>{product.category}</Eyebrow>
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-sm mt-[-14px]">
                  <Icon name="star" size={12} className="text-[#b66635]" />
                  <span className="font-bold text-[#2b211b]">4.8</span>
                  <span>(124 Reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif text-[#2b211b] leading-tight mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500">{product.description.split('.')[0]}.</p>
            </div>
            
            {/* Pricing Area */}
            <div className="mb-8">
              {product.price && (
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-4xl font-serif font-bold text-[#2b211b]">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through mb-1.5">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              )}
              <p className="text-xs text-gray-500 font-medium tracking-wide">Inclusive of all taxes</p>
            </div>

            {/* Offers Box */}
            <div className="bg-orange-50/50 border border-orange-100 rounded-sm p-4 mb-8 flex items-start gap-3">
              <div className="mt-1 text-[#b66635]"><Icon name="credit-card" size={20} /></div>
              <div>
                <h4 className="text-sm font-bold text-[#2b211b] mb-1">Available Offers</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• No Cost EMI available on major credit cards.</li>
                  <li>• Extra 5% off on HDFC Bank Cards.</li>
                </ul>
              </div>
            </div>

            {/* Config: Colors */}
            {product.colors && (
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-sm font-bold text-[#2b211b] uppercase tracking-wider">Select Color</h3>
                  <span className="text-xs text-gray-500">2 Options</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((c: string, i: number) => (
                    <button 
                      key={c} 
                      className={`w-12 h-12 rounded-full border-2 p-0.5 transition-all ${i === 0 ? 'border-[#b66635]' : 'border-transparent hover:border-gray-300'}`}
                      title="Available Color"
                    >
                      <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: c }} />
                    </button>
                  ))}
                </div>
              </div>
            )}



            {/* Quick Specs Highlight */}
            <div className="grid grid-cols-3 gap-3 mb-8 border-t border-gray-200 pt-8">
              <div className="text-center p-3 bg-white border border-gray-100 shadow-sm rounded-sm">
                <Icon name="shield" size={20} className="mx-auto mb-2 text-[#b66635]" />
                <span className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Warranty</span>
                <span className="block text-xs font-bold text-[#2b211b]">3 Years</span>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100 shadow-sm rounded-sm">
                <Icon name="image" size={20} className="mx-auto mb-2 text-[#b66635]" />
                <span className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Seating</span>
                <span className="block text-xs font-bold text-[#2b211b]">{product.seatingCapacity} Seater</span>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100 shadow-sm rounded-sm">
                <Icon name="check" size={20} className="mx-auto mb-2 text-[#b66635]" />
                <span className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Material</span>
                <span className="block text-xs font-bold text-[#2b211b] truncate" title={product.upholsteryMaterial || "Fabric"}>{product.upholsteryMaterial || "Fabric"}</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 text-sm font-bold tracking-widest py-4" icon="whatsapp" onClick={() => window.open(getWhatsAppLink(product.name), '_blank')}>
                  Enquire on WhatsApp
                </Button>
                <Button variant="secondary" className="flex-1 text-sm font-bold tracking-widest py-4" icon="phone" onClick={() => window.open('tel:+918093376990', '_self')}>
                  Call Us
                </Button>
              </div>
              <p className="text-[11px] text-center text-gray-500">Need help? <a href="tel:+918093376990" className="text-[#b66635] font-bold hover:underline">Speak directly with our team</a></p>
            </div>
            
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
            {['description', 'specifications', 'dimensions', 'care'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#2b211b]' : 'text-gray-400 hover:text-[#2b211b]'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b66635]" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[200px] text-gray-700 leading-relaxed text-sm">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div key="description" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <p className="mb-4 text-base max-w-4xl">{product.description}</p>
                  <p className="max-w-4xl">Designed for the modern home, this piece seamlessly blends aesthetic appeal with functional comfort. The premium materials ensure durability while the carefully considered proportions provide optimal support for extended lounging.</p>
                </motion.div>
              )}
              {activeTab === 'specifications' && (
                <motion.div key="specifications" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-bold text-gray-500">Frame Material</span>
                      <span className="text-right text-[#2b211b] font-medium">Solid Kiln-Dried Wood</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-bold text-gray-500">Upholstery</span>
                      <span className="text-right text-[#2b211b] font-medium">{product.material || "Premium Blend"}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-bold text-gray-500">Seating Fill</span>
                      <span className="text-right text-[#2b211b] font-medium">High-Density HR Foam</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-bold text-gray-500">Sofa Type</span>
                      <span className="text-right text-[#2b211b] font-medium">{product.sofaType || "Standard"}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-bold text-gray-500">Set Type</span>
                      <span className="text-right text-[#2b211b] font-medium">{product.setType || "Regular"}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-bold text-gray-500">Ground Clearance</span>
                      <span className="text-right text-[#2b211b] font-medium">150 mm</span>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === 'dimensions' && (
                <motion.div key="dimensions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="max-w-4xl">
                    <p className="mb-6">Overall Dimensions: <strong className="text-[#2b211b]">{product.dimensions}</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 border border-gray-200 rounded-sm text-center">
                        <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Width</span>
                        <span className="text-2xl font-serif text-[#2b211b]">{product.dimensions.split('x')[0] || '85W'}</span>
                      </div>
                      <div className="bg-white p-6 border border-gray-200 rounded-sm text-center">
                        <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Depth</span>
                        <span className="text-2xl font-serif text-[#2b211b]">{product.dimensions.split('x')[1] || '38D'}</span>
                      </div>
                      <div className="bg-white p-6 border border-gray-200 rounded-sm text-center">
                        <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Height</span>
                        <span className="text-2xl font-serif text-[#2b211b]">{product.dimensions.split('x')[2]?.split('(')[0] || '34H'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === 'care' && (
                <motion.div key="care" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <ul className="space-y-4 max-w-4xl list-disc pl-5">
                    <li>Vacuum regularly on a low setting to remove dust and dirt.</li>
                    <li>For spills, immediately blot with a clean, dry, white cloth. Do not rub.</li>
                    <li>Avoid direct sunlight to prevent fading of the upholstery.</li>
                    <li>Professional dry cleaning is recommended for tough stains.</li>
                    <li>Plump and rotate cushions regularly to maintain their shape.</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-24 border-t border-[#e8d5d5]/50 pt-16">
          <Eyebrow>You May Also Like</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-10">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {similarProducts.map((p, index) => {
               const idx = products.findIndex(item => item.id === p.id);
               return <ProductCard key={p.id} product={p} index={index} onOpen={() => openProduct && openProduct(idx)} />;
            })}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
