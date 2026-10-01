import { Page } from "../App";
import { motion } from "framer-motion";
import { Eyebrow, Button, Icon, Field } from "../components/SharedUI";
import { LocationCard } from "../components/LocationCard";
import { brandInfo } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function Contact() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-[#2b211b] text-[#f7f3eb] py-24 md:py-32 px-4 text-center">
        <Eyebrow>Speak with us</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6">Contact Kouch</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">Tell us what you're looking for, or visit our locations in Bhubaneswar. We're here to help you find the perfect comfort.</p>
      </section>
      
      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col gap-12">
            <div>
              <Eyebrow>Quick Contact</Eyebrow>
              <h2 className="text-3xl font-serif mt-2 mb-8">Reach out instantly</h2>
              <div className="flex flex-col gap-6">
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-white border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group rounded-sm">
                  <div className="bg-green-50 text-green-600 p-4 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors"><Icon name="whatsapp" size={32} /></div>
                  <div><h3 className="text-xl font-medium mb-1">WhatsApp</h3><p className="text-gray-500">Fastest response for enquiries</p></div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" /></div>
                </a>
                <a href={`tel:${brandInfo.phone}`} className="flex items-center gap-6 p-6 bg-white border border-gray-200 hover:border-[#2b211b] hover:shadow-lg transition-all group rounded-sm">
                  <div className="bg-gray-50 text-gray-700 p-4 rounded-full group-hover:bg-[#2b211b] group-hover:text-white transition-colors"><Icon name="phone" size={32} /></div>
                  <div><h3 className="text-xl font-medium mb-1">Call Us</h3><p className="text-gray-500">{brandInfo.phone}</p></div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" /></div>
                </a>
                <a href={`mailto:${brandInfo.email}`} className="flex items-center gap-6 p-6 bg-white border border-gray-200 hover:border-[#2b211b] hover:shadow-lg transition-all group rounded-sm">
                  <div className="bg-gray-50 text-gray-700 p-4 rounded-full group-hover:bg-[#2b211b] group-hover:text-white transition-colors"><Icon name="image" size={32} /></div>
                  <div><h3 className="text-xl font-medium mb-1">Email</h3><p className="text-gray-500">{brandInfo.email}</p></div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" /></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-[#fcecec] p-8 md:p-12 rounded-sm border border-[#e8d5d5]">
            <Eyebrow>Send a message</Eyebrow>
            <h2 className="text-3xl font-serif mt-2 mb-8">Drop us a line</h2>
            <form className="flex flex-col gap-6" onSubmit={e => { e.preventDefault(); alert("Thanks! But please use WhatsApp for a faster response."); }}>
              <Field label="Full Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <label className="field">
                <span>Message</span>
                <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent focus:outline-none py-2"></textarea>
              </label>
              <Button type="submit" icon="arrow" className="mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>Our Locations</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-serif mt-2">Visit Kouch in Bhubaneswar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LocationCard address={brandInfo.addresses[0]} delay={0.1} />
            <LocationCard address={brandInfo.addresses[1]} delay={0.2} />
          </div>
        </div>
      </section>
    </motion.main>
  );
}
