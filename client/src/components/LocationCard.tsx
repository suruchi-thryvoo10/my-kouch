import { motion } from "framer-motion";
import { Icon, Button } from "./SharedUI";
import { brandInfo } from "../constants/data";

export function LocationCard({ address, delay = 0 }: { address: any; delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
      className="bg-[#f7f3eb] p-8 md:p-12 flex flex-col h-full rounded-sm"
    >
      <div className="flex items-center gap-4 mb-6 text-[#2b211b]">
        <Icon name="location" size={28} />
        <h3 className="text-2xl font-serif">{address.title}</h3>
      </div>
      <div className="flex-1 text-[#6e625a] space-y-1 mb-8 text-lg">
        {address.lines.map((line: string, i: number) => <p key={i}>{line}</p>)}
      </div>
      <div className="flex flex-wrap gap-4 mt-auto">
        <Button variant="secondary" icon="arrow" href={`https://maps.google.com/?q=${encodeURIComponent(address.lines.join(", "))}`}>Get Directions</Button>
        <Button variant="ghost" icon="phone" href={`tel:${brandInfo.phone}`}>Call</Button>
      </div>
    </motion.div>
  );
}
