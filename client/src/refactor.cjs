const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const pagesDir = path.join(__dirname, 'pages');

if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

// 1. Shared UI (Icons, Button, Logo, Eyebrow, Field, etc)
const sharedUI = `
import { ReactNode } from "react";
import logo from "../assets/kouch/logo.jpg";
import { motion } from "framer-motion";

export type IconName = "arrow" | "check" | "chevron" | "close" | "edit" | "image" | "menu" | "phone" | "plus" | "trash" | "upload" | "whatsapp" | "location";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 15-5-5L5 20" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    trash: <><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="m19 6-1 14H6L5 6" /></>,
    upload: <><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M5 20h14" /></>,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.3 7.8c.3 3.1 2.8 5.6 5.9 5.9" /></>,
    location: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></>
  };

  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "logo-crop logo-crop--compact" : "logo-crop"} aria-label="Kouch — Comfort that feels like home">
      <img src={logo} alt="Kouch Logo" />
    </div>
  );
}

export function Button({
  children, variant = "primary", icon, onClick, type = "button", disabled, className = "", href
}: {
  children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "text" | "icon"; icon?: IconName; onClick?: () => void; type?: "button" | "submit"; disabled?: boolean; className?: string; href?: string;
}) {
  const inner = <>{children}{icon && <Icon name={icon} />}</>;
  const cls = \`btn btn--\${variant} \${className}\`;
  
  if (href) return <motion.a href={href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={cls}>{inner}</motion.a>;
  
  return (
    <motion.button className={cls} onClick={onClick} type={type} disabled={disabled} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {inner}
    </motion.button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="eyebrow">{children}</motion.p>;
}

export function Field({
  label, name, type = "text", required, error,
}: { label: string; name: string; type?: string; required?: boolean; error?: string; }) {
  return (
    <label className={error ? "field field--error" : "field"}>
      <span>{label}{required && <em>Required</em>}</span>
      <input name={name} type={type} aria-invalid={!!error} />
      {error && <small>{error}</small>}
    </label>
  );
}
\`;

fs.writeFileSync(path.join(componentsDir, 'SharedUI.tsx'), sharedUI);

// 2. Navbar
const navbar = \`
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Page } from "../App";
import { Logo, Button, Icon } from "./SharedUI";
import { getWhatsAppLink } from "../utils/whatsapp";
import { brandInfo } from "../constants/data";

export default function Header({ page, go }: { page: Page; go: (page: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = (next: Page) => { setMenuOpen(false); go(next); };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="site-header sticky top-0 z-40 bg-white/90 backdrop-blur-md"
      >
        <button className="logo-button" onClick={() => nav("home")} aria-label="Go to home">
          <Logo compact />
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => nav("home")}>Home</button>
          <button className={page === "products" || page === "product" ? "nav-link active" : "nav-link"} onClick={() => nav("products")}>Collections</button>
          <button className="nav-link" onClick={() => nav("products")}>About</button>
          <button className={page === "contact" ? "nav-link active" : "nav-link"} onClick={() => nav("contact")}>Contact</button>
        </nav>
        <div className="header-actions">
          <Button variant="secondary" className="desktop-only" href={getWhatsAppLink()}><Icon name="whatsapp" /> Enquire Now</Button>
          <button className="round-action mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Icon name="menu" size={24} /></button>
        </div>
      </motion.header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="menu-layer fixed inset-0 z-50 bg-white" role="dialog">
            <div className="menu-head p-6 flex justify-between items-center border-b border-gray-100">
              <Logo compact />
              <button className="round-action" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="close" size={24} /></button>
            </div>
            <nav className="mobile-nav p-6 flex flex-col gap-4 text-xl">
              {["Home", "Collections", "About", "Contact"].map((item) => (
                <button key={item} className="flex justify-between items-center py-2 border-b border-gray-50" onClick={() => nav(item === "Home" ? "home" : item === "Contact" ? "contact" : "products")}>
                  <span>{item}</span><Icon name="arrow" />
                </button>
              ))}
            </nav>
            <div className="menu-contact p-6 flex flex-col gap-4 mt-auto">
              <Button href={getWhatsAppLink()}><Icon name="whatsapp" /> Message on WhatsApp</Button>
              <Button variant="secondary" href={\`tel:\${brandInfo.phone}\`}><Icon name="phone" /> Call Kouch</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
\`;

fs.writeFileSync(path.join(componentsDir, 'Header.tsx'), navbar);

// 3. Footer
const footer = \`
import { Page } from "../App";
import { Logo, Eyebrow, Icon } from "./SharedUI";
import { brandInfo } from "../constants/data";

export default function Footer({ go }: { go: (page: Page) => void }) {
  return (
    <footer className="site-footer bg-[#1a1412] text-white">
      <div className="footer-main py-16 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="footer-brand flex flex-col gap-6">
          <Logo />
          <p className="text-[#a99a8e] leading-relaxed">{brandInfo.shortStatement}</p>
        </div>
        <div className="flex flex-col gap-4">
          <Eyebrow>Quick Links</Eyebrow>
          <button className="text-left text-[#d8cec2] hover:text-white transition-colors" onClick={() => go("home")}>Home</button>
          <button className="text-left text-[#d8cec2] hover:text-white transition-colors" onClick={() => go("products")}>Collections</button>
          <button className="text-left text-[#d8cec2] hover:text-white transition-colors" onClick={() => go("products")}>About</button>
          <button className="text-left text-[#d8cec2] hover:text-white transition-colors" onClick={() => go("contact")}>Contact</button>
        </div>
        <div className="flex flex-col gap-4">
          <Eyebrow>Contact Us</Eyebrow>
          <a href={\`tel:\${brandInfo.phone}\`} className="text-[#d8cec2] hover:text-white flex items-center gap-2"><Icon name="phone" size={16}/> {brandInfo.phone}</a>
          <a href={\`mailto:\${brandInfo.email}\`} className="text-[#d8cec2] hover:text-white">{brandInfo.email}</a>
          <a href={\`http://\${brandInfo.website}\`} target="_blank" rel="noreferrer" className="text-[#d8cec2] hover:text-white">{brandInfo.website}</a>
        </div>
        <div className="flex flex-col gap-4">
          <Eyebrow>Follow Us</Eyebrow>
          <div className="flex flex-col gap-2">
            {brandInfo.socials.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-[#d8cec2] hover:text-white">{s.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom border-t border-[#3a302a] py-6 px-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#a99a8e]">
        <span>© {new Date().getFullYear()} Kouch. All Rights Reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button onClick={() => go("system")}>Design system</button>
          <button onClick={() => go("admin")}>Admin</button>
        </div>
      </div>
    </footer>
  );
}
\`;

fs.writeFileSync(path.join(componentsDir, 'Footer.tsx'), footer);

// 4. Product Card
const productCard = \`
import { motion } from "framer-motion";
import { Icon } from "./SharedUI";

export function ProductCard({ product, onOpen, index = 0 }: { product: any; onOpen: () => void; index?: number }) {
  return (
    <motion.article 
      className="product-card group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onOpen}
    >
      <div className="product-image overflow-hidden relative rounded-sm" aria-label={\`View \${product.name}\`}>
        <motion.img 
          src={product.image} 
          alt={\`Product view for \${product.name}\`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="catalogue-number absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase bg-white/80 px-2 py-1">{String(index + 1).padStart(2, "0")}</span>
        <span className="image-action absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" /></span>
      </div>
      <div className="product-copy mt-4">
        <span className="text-xs tracking-widest uppercase text-gray-500">{product.category}</span>
        <h3 className="text-2xl font-serif mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <button className="mt-4 text-sm font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity">
          View Details <Icon name="arrow" size={16} />
        </button>
      </div>
    </motion.article>
  );
}
\`;

fs.writeFileSync(path.join(componentsDir, 'ProductCard.tsx'), productCard);

// 5. Location Card
const locationCard = \`
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
        <Button variant="secondary" icon="arrow" href={\`https://maps.google.com/?q=\${encodeURIComponent(address.lines.join(", "))}\`}>Get Directions</Button>
        <Button variant="ghost" icon="phone" href={\`tel:\${brandInfo.phone}\`}>Call</Button>
      </div>
    </motion.div>
  );
}
\`;

fs.writeFileSync(path.join(componentsDir, 'LocationCard.tsx'), locationCard);

// 6. Home Page
const homePage = \`
import { Page } from "../App";
import { motion } from "framer-motion";
import { Button, Eyebrow, Icon } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { categories, products, brandInfo } from "../constants/data";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function Home({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="hero editorial-hero h-[90vh] min-h-[600px] relative overflow-hidden flex items-center justify-center">
        <motion.div className="hero-image absolute inset-0 z-0" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <img src={products[0].image} alt="Kouch sofa collection visual" className="w-full h-full object-cover brightness-[0.85]" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center text-white mt-12">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <span className="text-sm tracking-[0.2em] uppercase mb-4 block opacity-90">Premium Furniture</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6">
              Comfort that <br/><i className="font-light italic">feels like home</i>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90 mb-10 font-light">
              {brandInfo.shortStatement}
            </p>
          </motion.div>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <Button variant="primary" className="!bg-white !text-black hover:!bg-gray-100" onClick={() => go("products")}>Explore Collection</Button>
            <Button variant="ghost" className="!text-white !border-white hover:!bg-white/10" href={getWhatsAppLink()}>Enquire Now</Button>
          </motion.div>
        </div>
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
        <div className="category-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.button 
              key={category.name} 
              className="category-card group relative aspect-[4/5] overflow-hidden text-left" 
              onClick={() => go("products")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={category.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <span className="category-number absolute top-4 left-4 text-white/80 text-xs tracking-widest font-semibold">0{index + 1}</span>
              <span className="category-name absolute bottom-4 left-4 text-white text-lg font-medium pr-10">{category.name}</span>
              <span className="category-arrow absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300"><Icon name="arrow" /></span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="collection-section py-24 px-4 md:px-8 bg-[#f7f3eb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <Eyebrow>The Kouch edit</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-serif mt-2">A catalogue with room to linger.</h2>
            </div>
            <Button variant="text" icon="arrow" onClick={() => go("products")}>View all products</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.slice(0, 6).map((product, index) => <ProductCard key={product.id} product={product} index={index} onOpen={() => openProduct(index)} />)}
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
\`;

fs.writeFileSync(path.join(pagesDir, 'Home.tsx'), homePage);

// 7. Product Detail Page
const productDetail = \`
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
            <motion.div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative" layoutId={\`product-image-\${product.id}\`}>
              <img src={gallery[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={\`aspect-square overflow-hidden border-2 transition-colors \${activeImage === i ? 'border-[#2b211b]' : 'border-transparent'}\`}>
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
\`;

fs.writeFileSync(path.join(pagesDir, 'ProductDetail.tsx'), productDetail);

// 8. Contact Page
const contactPage = \`
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
                <a href={\`tel:\${brandInfo.phone}\`} className="flex items-center gap-6 p-6 bg-white border border-gray-200 hover:border-[#2b211b] hover:shadow-lg transition-all group rounded-sm">
                  <div className="bg-gray-50 text-gray-700 p-4 rounded-full group-hover:bg-[#2b211b] group-hover:text-white transition-colors"><Icon name="phone" size={32} /></div>
                  <div><h3 className="text-xl font-medium mb-1">Call Us</h3><p className="text-gray-500">{brandInfo.phone}</p></div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" /></div>
                </a>
                <a href={\`mailto:\${brandInfo.email}\`} className="flex items-center gap-6 p-6 bg-white border border-gray-200 hover:border-[#2b211b] hover:shadow-lg transition-all group rounded-sm">
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
\`;

fs.writeFileSync(path.join(pagesDir, 'Contact.tsx'), contactPage);

// 9. Listing Page (Collections)
const listingPage = \`
import { useState } from "react";
import { Page } from "../App";
import { motion } from "framer-motion";
import { Eyebrow } from "../components/SharedUI";
import { ProductCard } from "../components/ProductCard";
import { products } from "../constants/data";

export default function Listing({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  const [active, setActive] = useState("All");
  const filters = ["All", "Sofas", "L-shape sofas", "Recliners", "Sofa Cum Bed"];
  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-[#f7f3eb] py-24 px-4 md:px-8 text-center">
        <Eyebrow>Product Catalogue</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6">Collections</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our curated collections of premium furniture, meticulously crafted for modern living.</p>
      </section>
      
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActive(f)}
              className={\`px-6 py-2 rounded-full text-sm tracking-wider uppercase transition-colors \${active === f ? 'bg-[#2b211b] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}\`}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} onOpen={() => openProduct(products.findIndex(p => p.id === product.id))} />
          ))}
        </div>
      </section>
    </motion.main>
  );
}
\`;

fs.writeFileSync(path.join(pagesDir, 'Listing.tsx'), listingPage);

console.log("All component files created.");
