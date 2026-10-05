import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Page } from "../App";
import { Logo, Button, Icon } from "./SharedUI";
import { getWhatsAppLink } from "../utils/whatsapp";
import { brandInfo } from "../constants/data";

export default function Header({ page, go }: { page: Page; go: (page: Page, params?: { category?: string }) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sofasDropdown, setSofasDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      nav("products", { searchQuery: searchQuery.trim() });
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = (next: Page, params?: { category?: string; searchQuery?: string }) => { 
    setMenuOpen(false); 
    setSearchOpen(false);
    go(next, params); 
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`site-header fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-[#f7f3eb]/95 backdrop-blur-md border-b border-[#e8d5d5]/30 shadow-sm py-0' : 'bg-transparent border-transparent py-2'}`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-[80px]">
          {/* Logo */}
          <button className="flex-shrink-0 mr-8" onClick={() => nav("home")} aria-label="Go to home">
            <Logo compact />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-[#3d3129] flex-1 justify-center" aria-label="Primary navigation">
            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("home")}>Home</button>
            
            {/* Dropdown for Sofas */}
            <div className="relative" onMouseEnter={() => setSofasDropdown(true)} onMouseLeave={() => setSofasDropdown(false)}>
              <button className="flex items-center gap-1 hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("products")}>
                Sofas <Icon name="chevron" size={14} />
              </button>
              {sofasDropdown && (
                <div className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-sm p-4 min-w-[200px] flex flex-col gap-4 border border-gray-100">
                  <button className="text-left text-xs tracking-widest text-gray-700 hover:text-amber-800" onClick={() => nav("products")}>All Sofas</button>
                  <button className="text-left text-xs tracking-widest text-gray-700 hover:text-amber-800" onClick={() => nav("products")}>Premium Collection</button>
                </div>
              )}
            </div>

            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("products", { category: "L-shape sofas" })}>L-Shape Sofas</button>
            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("products", { category: "Sofa combos" })}>Sofa Combos</button>
            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("products", { category: "Recliners" })}>Recliner</button>
            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("offers")}>Offers</button>
            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("contact")}>Become a Dealer</button>
            <button className="hover:text-amber-800 transition-colors uppercase whitespace-nowrap" onClick={() => nav("contact")}>Contact Us</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6 ml-8">
            <button className="hidden lg:flex text-[#3d3129] hover:text-[#8c5a35] transition-colors" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <Icon name="search" size={20} />
            </button>
            
            <button 
              onClick={() => window.open(getWhatsAppLink(), '_blank')}
              className="hidden lg:flex items-center gap-2 bg-[#2b211b] !text-white px-7 py-3 rounded-sm text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#4a3a30] shadow-sm transition-all whitespace-nowrap"
            >
              <Icon name="message" size={16} /> Enquire
            </button>

            <button className="lg:hidden text-[#3d3129]" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Icon name="menu" size={28} />
            </button>
          </div>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: "auto", opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="bg-white border-t border-[#e8d5d5]/30 overflow-hidden shadow-md absolute w-full left-0 top-full"
            >
              <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-4">
                <form onSubmit={handleSearch} className="flex items-center gap-4">
                  <Icon name="search" size={20} className="text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search for sofas, recliners, materials..." 
                    className="flex-1 bg-transparent outline-none text-lg text-[#2b211b] placeholder-gray-400 py-2 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button type="button" onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-[#2b211b]">
                    <Icon name="close" size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 z-50 bg-[#f7f3eb]" role="dialog">
            <div className="p-6 flex justify-between items-center border-b border-[#e8d5d5]/30">
              <Logo compact />
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="close" size={28} /></button>
            </div>
            <nav className="p-6 flex flex-col gap-6 text-sm font-bold tracking-[0.15em] text-[#3d3129] uppercase">
              {["Home", "Sofas", "L-Shape Sofas", "Sofa Combos", "Recliner", "Offers", "Become a Dealer", "Contact Us"].map((item) => {
                let category: string | undefined;
                if (item === "L-Shape Sofas") category = "L-shape sofas";
                if (item === "Sofa Combos") category = "Sofa combos";
                if (item === "Recliner") category = "Recliners";
                
                return (
                  <button key={item} className="flex justify-between items-center py-2 border-b border-[#e8d5d5]/20" onClick={() => nav(item === "Home" ? "home" : item === "Offers" ? "offers" : item.includes("Contact") || item.includes("Dealer") ? "contact" : "products", { category })}>
                    <span>{item}</span><Icon name="arrow" size={16} />
                  </button>
                );
              })}
            </nav>
            <div className="p-6 flex flex-col gap-4 mt-auto">
              <button onClick={() => window.open(getWhatsAppLink(), '_blank')} className="flex items-center justify-center gap-2 bg-[#b66635] !text-white p-4 rounded-sm font-bold tracking-widest uppercase text-xs w-full">
                <Icon name="message" size={18} /> Enquire Now
              </button>
              <a href={`tel:${brandInfo.phone}`} className="flex items-center justify-center gap-2 border-2 border-[#b66635] text-[#b66635] p-4 rounded-sm font-bold tracking-widest uppercase text-xs w-full">
                <Icon name="phone" size={18} /> Call Kouch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
