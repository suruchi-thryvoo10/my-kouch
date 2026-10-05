import { Page } from "../App";
import { motion } from "framer-motion";
import { Eyebrow, Button } from "../components/SharedUI";
import { images } from "../constants/data";

export default function Offers({ go }: { go: (page: Page, params?: { category?: string }) => void }) {
  const offers = [
    {
      title: "Festive Mega Sale",
      discount: "40% OFF",
      description: "Get flat 40% off on our most premium L-Shape Sofas. Transform your living room this season with unmatched comfort.",
      code: "FESTIVE40",
      category: "L-shape sofas",
      image: images[5],
      bgColor: "bg-[#2b211b]",
      textColor: "text-white",
      accentColor: "text-[#dcd4c6]"
    },
    {
      title: "Sofa Combo Upgrade",
      discount: "25% OFF",
      description: "Upgrade your entire space with a complete Sofa Combo and get a massive 25% discount. Perfect for large families.",
      code: "COMBO25",
      category: "Sofa combos",
      image: images[1],
      bgColor: "bg-[#f7f3eb]",
      textColor: "text-[#2b211b]",
      accentColor: "text-[#8c5a35]"
    },
    {
      title: "Recliner Relaxation",
      discount: "30% OFF",
      description: "Experience ultimate comfort with our premium recliners. Enjoy 30% off on single and double seaters for limited time.",
      code: "RELAX30",
      category: "Recliners",
      image: images[8],
      bgColor: "bg-[#e8d5d5]",
      textColor: "text-[#2b211b]",
      accentColor: "text-[#a93232]"
    },
    {
      title: "Drawing Room Essentials",
      discount: "FLAT 15% OFF",
      description: "Curated collections for your formal drawing room. Use the exclusive code to avail flat discounts on all sets.",
      code: "DRAWING15",
      category: "Drawing Room",
      image: images[10],
      bgColor: "bg-white",
      textColor: "text-[#2b211b]",
      accentColor: "text-[#8c5a35]"
    }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 min-h-screen bg-[#fcfbf9]">
      <section className="pb-16 pt-0 px-4 md:px-8 text-center max-w-[1440px] mx-auto">
        <Eyebrow>Ongoing Offers</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6 text-[#2b211b]">Exclusive Deals</h1>
        <p className="text-lg text-[#594d45] max-w-2xl mx-auto mb-16">
          Elevate your home with our limited-time exclusive offers on premium Kouch furniture. Apply the codes at checkout or mention them to our sales team.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 text-left">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row h-auto sm:h-[340px] ${offer.bgColor}`}
            >
              {/* Image Section */}
              <div className="w-full sm:w-2/5 h-[240px] sm:h-full relative overflow-hidden shrink-0">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Content Section */}
              <div className={`w-full sm:w-3/5 p-8 md:p-10 flex flex-col ${offer.textColor}`}>
                <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-2 tracking-tight ${offer.accentColor}`}>
                  {offer.discount}
                </h2>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-3 opacity-90">{offer.title}</h3>
                <p className="mb-8 opacity-80 leading-relaxed text-sm flex-1">{offer.description}</p>
                
                <div className="flex flex-wrap items-end justify-between mt-auto gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold mb-1">Use Code</span>
                    <span className="font-mono bg-white/20 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-bold border border-white/30 tracking-wider">
                      {offer.code}
                    </span>
                  </div>
                  <Button 
                    variant={offer.bgColor === 'bg-[#2b211b]' ? 'primary' : 'secondary'} 
                    className={offer.bgColor === 'bg-[#2b211b]' ? '!bg-white !text-black !border-white' : ''}
                    onClick={() => go("products", { category: offer.category })}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer Banner */}
      <section className="bg-[#b66635] text-white py-24 px-6 mt-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Eyebrow><span className="text-white/80">Corporate & Bulk</span></Eyebrow>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Looking for something specific?</h2>
          <p className="text-lg opacity-90 mb-10 leading-relaxed">
            We also offer custom discounts on bulk orders and complete home furnishing packages. Speak directly with our design experts to negotiate a premium package.
          </p>
          <Button variant="primary" className="!bg-white !text-[#b66635] !px-12 !py-4 text-sm font-bold tracking-widest shadow-lg" onClick={() => go("contact")}>
            Contact Sales Team
          </Button>
        </div>
      </section>
    </motion.main>
  );
}
