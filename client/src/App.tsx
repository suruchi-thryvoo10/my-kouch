import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import { products } from "./constants/data";

export type Page = "home" | "products" | "product" | "contact" | "offers" | "notfound" | "system" | "admin";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState(0);

  const [listingCategory, setListingCategory] = useState<string>("All");
  const [listingSearchQuery, setListingSearchQuery] = useState<string>("");

  const go = (next: Page, params?: { category?: string, searchQuery?: string }) => {
    if (params?.category) {
      setListingCategory(params.category);
    } else if (next === "products" && page !== "products") {
      setListingCategory("All");
    }
    
    if (params?.searchQuery !== undefined) {
      setListingSearchQuery(params.searchQuery);
    } else if (next === "products" && page !== "products" && !params?.category) {
      setListingSearchQuery("");
    }
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const openProduct = (index: number) => {
    setSelectedProduct(index);
    go("product");
  };

  return (
    <div className="app min-h-screen flex flex-col font-sans text-[#2b211b] bg-white">
      {page !== "admin" && <Header page={page} go={go} />}
      
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {page === "home" && <Home key="home" go={go} openProduct={openProduct} />}
          {page === "products" && <Listing key="products" go={go} openProduct={openProduct} category={listingCategory} searchQuery={listingSearchQuery} />}
          {page === "product" && <ProductDetail key="product" product={products[selectedProduct]} go={go} onEnquire={() => {}} openProduct={openProduct} />}
          {page === "contact" && <Contact key="contact" />}
          {page === "offers" && <Offers key="offers" go={go} />}
          
          {page === "notfound" && (
            <main key="notfound" className="py-32 text-center max-w-lg mx-auto">
              <h1 className="text-4xl font-serif mb-4">Page not found</h1>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <button className="btn btn--primary" onClick={() => go("home")}>Return Home</button>
            </main>
          )}
          
          {page === "system" && (
            <main key="system" className="py-32 text-center max-w-lg mx-auto">
              <h1 className="text-4xl font-serif mb-4">Design System</h1>
              <p className="text-gray-600 mb-8">System preview available in development.</p>
              <button className="btn btn--primary" onClick={() => go("home")}>Return Home</button>
            </main>
          )}
          
          {page === "admin" && (
            <main key="admin" className="py-32 text-center max-w-lg mx-auto">
              <h1 className="text-4xl font-serif mb-4">Admin Dashboard</h1>
              <p className="text-gray-600 mb-8">Admin interface coming soon.</p>
              <button className="btn btn--primary" onClick={() => go("home")}>Return Home</button>
            </main>
          )}
        </AnimatePresence>
      </div>
      
      {page !== "admin" && <Footer go={go} />}
      
      <WhatsAppButton />
    </div>
  );
}
