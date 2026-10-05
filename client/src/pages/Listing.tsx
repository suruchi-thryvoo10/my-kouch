import { useState, useEffect } from "react";
import { Page } from "../App";
import { motion } from "framer-motion";
import { Icon } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { products } from "../constants/data";

export default function Listing({ go, openProduct, category = "All", searchQuery = "" }: { go: (page: Page) => void; openProduct: (index: number) => void; category?: string; searchQuery?: string }) {
  const [active, setActive] = useState(category);
  const [activeSeating, setActiveSeating] = useState<number[]>([]);
  const [activeSetTypes, setActiveSetTypes] = useState<string[]>([]);
  const [activeSofaTypes, setActiveSofaTypes] = useState<string[]>([]);
  const [activeMaterials, setActiveMaterials] = useState<string[]>([]);
  
  // Use a sensible default max price or compute it
  const maxProductPrice = Math.max(...products.map(p => p.price || 0), 100000);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxProductPrice]);
  
  useEffect(() => {
    setActive(category);
  }, [category]);

  const filters = ["All", "Drawing Room", "Sofas", "L-shape sofas", "Sofa combos", "Recliners", "Sofa Cum Bed"];
  const seatingFilters = [1, 2, 3, 4, 5, 6];
  const setTypeFilters = ["Corner", "Curved", "Love Seat", "Regular", "Sectional", "Storage"];
  const sofaTypeFilters = ["Motion", "Sofa Cum Beds", "Standard"];
  const materialFilters = ["Fabric", "Leatherette"];
  
  let filtered = active === "All" ? products : products.filter(p => p.category === active);
  
  if (activeSeating.length > 0) {
    filtered = filtered.filter(p => p.seatingCapacity && activeSeating.includes(p.seatingCapacity));
  }
  
  if (activeSetTypes.length > 0) {
    filtered = filtered.filter(p => p.setType && activeSetTypes.includes(p.setType));
  }
  
  if (activeSofaTypes.length > 0) {
    filtered = filtered.filter(p => p.sofaType && activeSofaTypes.includes(p.sofaType));
  }
  
  if (activeMaterials.length > 0) {
    filtered = filtered.filter(p => p.upholsteryMaterial && activeMaterials.includes(p.upholsteryMaterial));
  }

  filtered = filtered.filter(p => {
    const price = p.price || 0;
    return price >= priceRange[0] && price <= priceRange[1];
  });

  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );
  }

  const toggleFilter = (item: any, list: any[], setList: React.Dispatch<React.SetStateAction<any[]>>) => {
    setList(prev => prev.includes(item) ? prev.filter(s => s !== item) : [...prev, item]);
  };

  const resetFilters = () => {
    setActive("All");
    setActiveSeating([]);
    setActiveSetTypes([]);
    setActiveSofaTypes([]);
    setActiveMaterials([]);
    setPriceRange([0, maxProductPrice]);
  };

  const renderCheckbox = (label: string, isChecked: boolean, onChange: () => void) => (
    <label key={label} className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${isChecked ? 'bg-[#2b211b] border-[#2b211b]' : 'border-gray-300 group-hover:border-[#b66635]'}`}>
        {isChecked && <Icon name="check" size={12} className="text-white" />}
      </div>
      <input 
        type="checkbox" 
        className="hidden" 
        checked={isChecked}
        onChange={onChange}
      />
      <span className={`text-sm transition-colors ${isChecked ? 'text-[#2b211b] font-semibold' : 'text-gray-600 group-hover:text-[#2b211b]'}`}>
        {label}
      </span>
    </label>
  );

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-gray-50/30 min-h-screen">
      <section className="bg-[#f7f3eb] py-12 px-4 md:px-8 text-center border-b border-[#e8d5d5]/30">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#2b211b]">Sofa Collections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated collections of premium furniture, meticulously crafted for modern living.</p>
      </section>
      
      <section className="max-w-[1440px] mx-auto py-10 px-4 md:px-8 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Sidebar Filters */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="md:sticky md:top-24 bg-white p-6 rounded-md shadow-sm border border-gray-100 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-[#2b211b]">Filters</h2>
              <button onClick={resetFilters} className="text-xs text-[#b66635] font-semibold hover:underline uppercase tracking-wider">Reset</button>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-4 text-[#2b211b]">Price Range</h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3 font-medium">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={maxProductPrice} 
                step="500"
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#b66635]"
              />
            </div>

            {/* Seating Capacity Filter */}
            <div className="mb-8 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold mb-4 text-[#2b211b]">Seating Capacity</h3>
              <div className="flex flex-col gap-3">
                {seatingFilters.map(sf => renderCheckbox(`${sf} Seater`, activeSeating.includes(sf), () => toggleFilter(sf, activeSeating, setActiveSeating)))}
              </div>
            </div>

            {/* Set Type Filter */}
            <div className="mb-8 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold mb-4 text-[#2b211b]">Set Type</h3>
              <div className="flex flex-col gap-3">
                {setTypeFilters.map(st => renderCheckbox(st, activeSetTypes.includes(st), () => toggleFilter(st, activeSetTypes, setActiveSetTypes)))}
              </div>
            </div>

            {/* Sofa Type Filter */}
            <div className="mb-8 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold mb-4 text-[#2b211b]">Sofa Type</h3>
              <div className="flex flex-col gap-3">
                {sofaTypeFilters.map(st => renderCheckbox(st, activeSofaTypes.includes(st), () => toggleFilter(st, activeSofaTypes, setActiveSofaTypes)))}
              </div>
            </div>

            {/* Upholstery Material Filter */}
            <div className="mb-2 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold mb-4 text-[#2b211b]">Upholstery Material</h3>
              <div className="flex flex-col gap-3">
                {materialFilters.map(m => renderCheckbox(m, activeMaterials.includes(m), () => toggleFilter(m, activeMaterials, setActiveMaterials)))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <div className="flex-1 min-w-0">
          
          {/* Top Categories Navigation */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-3 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filters.map(f => (
              <button 
                key={f} 
                onClick={() => setActive(f)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-sm text-sm tracking-wider transition-all border ${active === f ? 'bg-[#2b211b] !text-white border-[#2b211b] shadow-md font-bold' : 'bg-white text-[#594d45] border-gray-200 hover:border-[#b66635] hover:text-[#b66635] font-medium'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-2xl font-serif text-[#2b211b]">{active === "All" ? "All Sofa Sets" : active} <span className="text-sm font-sans text-gray-500 font-normal ml-2">({filtered.length} Products Available)</span></h2>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} onOpen={() => openProduct(products.findIndex(p => p.id === product.id))} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center bg-white rounded-md border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-serif text-[#2b211b] mb-3">No products found</h3>
              <p className="text-gray-500 mb-8">Try adjusting your filters to see more results.</p>
              <button onClick={resetFilters} className="px-8 py-3 bg-[#b66635] hover:bg-[#8c5a35] !text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors">Clear All Filters</button>
            </div>
          )}
        </div>
      </section>
    </motion.main>
  );
}
