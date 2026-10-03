import { Page } from "../App";
import { motion } from "framer-motion";
import { Eyebrow, Button } from "../components/SharedUI";

export default function Offers({ go }: { go: (page: Page, params?: { category?: string }) => void }) {
  const offers = [
    {
      title: "Festive Sale",
      description: "Up to 30% off on all L-Shape Sofas. Transform your living room this festive season with our premium collection.",
      code: "FESTIVE30",
      category: "L-shape sofas"
    },
    {
      title: "Combo Delight",
      description: "Upgrade your space with a Sofa Combo and get a premium center table at 50% off.",
      code: "COMBO50",
      category: "Sofa combos"
    }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 min-h-[80vh]">
      <section className="bg-white py-16 px-6 md:px-12 text-center">
        <Eyebrow>Exclusive Deals</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6 text-[#2b211b]">Special Offers</h1>
        <p className="text-lg text-[#594d45] max-w-2xl mx-auto mb-16">
          Elevate your home with our limited-time exclusive offers on premium Kouch furniture.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#fbf9f4] p-8 md:p-12 border border-[#e8d5d5]/50 shadow-sm rounded-sm flex flex-col group hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-serif text-[#2b211b] mb-4">{offer.title}</h3>
              <p className="text-[#594d45] mb-8 flex-1 leading-relaxed">{offer.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#e8d5d5]/30">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Use Code</span>
                  <span className="font-mono bg-white px-3 py-1.5 rounded text-sm text-[#8c5a35] font-bold border border-[#e8d5d5]/50">{offer.code}</span>
                </div>
                <Button variant="text" icon="arrow" onClick={() => go("products", { category: offer.category })}>
                  Shop Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
