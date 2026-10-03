import { Page } from "../App";
import { Logo, Icon } from "./SharedUI";
import { brandInfo } from "../constants/data";

export default function Footer({ go }: { go: (page: Page) => void }) {
  return (
    <footer className="site-footer bg-[#f7f3eb] text-[#3d3129] pt-24 pb-12 px-6 md:px-12 border-t border-[#e8d5d5]/50">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          {/* Brand & Socials Column */}
          <div className="flex flex-col gap-8 lg:w-1/3">
            <div className="flex flex-col gap-4">
              <Logo />
              <p className="text-[#6e625a] text-sm leading-relaxed max-w-sm">
                {brandInfo.shortStatement}
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[#b66635] text-[10px] font-bold tracking-[0.2em] uppercase">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#8c827a] hover:text-[#b66635] hover:bg-[#f0e6d8] p-3 rounded-full transition-all duration-300" aria-label="Instagram">
                  <Icon name="instagram" size={20}/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#8c827a] hover:text-[#b66635] hover:bg-[#f0e6d8] p-3 rounded-full transition-all duration-300" aria-label="Facebook">
                  <Icon name="facebook" size={20}/>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#8c827a] hover:text-[#b66635] hover:bg-[#f0e6d8] p-3 rounded-full transition-all duration-300" aria-label="YouTube">
                  <Icon name="youtube" size={20}/>
                </a>
              </div>
            </div>
          </div>

          {/* Links & Contact Columns */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:w-2/3 lg:justify-end">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#b66635] text-[10px] font-bold tracking-[0.2em] uppercase">Quick Links</h4>
              <nav className="flex flex-col gap-4">
                {["Home", "Collections", "About", "Contact"].map(link => (
                  <button 
                    key={link} 
                    className="text-left text-[#6e625a] hover:text-[#b66635] text-sm font-medium transition-colors w-fit" 
                    onClick={() => go(link.toLowerCase() === "collections" || link.toLowerCase() === "about" ? "products" : link.toLowerCase() as Page)}
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 max-w-[280px]">
              <h4 className="text-[#b66635] text-[10px] font-bold tracking-[0.2em] uppercase">Visit & Contact</h4>
              
              <div className="flex flex-col gap-2">
                <p className="text-[#3d3129] text-sm font-semibold">Shop & Office</p>
                <p className="text-[#6e625a] text-sm leading-relaxed">
                  {brandInfo.addresses[0].lines.join(", ")}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a href={`tel:${brandInfo.phone}`} className="flex items-center gap-3 text-[#6e625a] hover:text-[#b66635] text-sm font-medium transition-colors group">
                  <span className="p-2 bg-white rounded-full group-hover:bg-[#f0e6d8] transition-colors"><Icon name="phone" size={16}/></span> 
                  {brandInfo.phone}
                </a>
                <a href={`mailto:${brandInfo.email}`} className="flex items-center gap-3 text-[#6e625a] hover:text-[#b66635] text-sm font-medium transition-colors group">
                  <span className="p-2 bg-white rounded-full group-hover:bg-[#f0e6d8] transition-colors"><Icon name="message" size={16}/></span> 
                  {brandInfo.email}
                </a>
              </div>
            </div>

          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#e8d5d5] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8c827a] text-xs tracking-wider">
            © {new Date().getFullYear()} Kouch Furniture. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => go("system")} className="text-[#8c827a] hover:text-[#b66635] text-xs font-semibold tracking-wider uppercase transition-colors">Design System</button>
            <button onClick={() => go("admin")} className="text-[#8c827a] hover:text-[#b66635] text-xs font-semibold tracking-wider uppercase transition-colors">Admin</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
