import { Page } from "../App";
import { Logo, Icon } from "./SharedUI";
import { brandInfo } from "../constants/data";

export default function Footer({ go }: { go: (page: Page) => void }) {
  return (
    <footer className="site-footer bg-[#e4d0b8] text-[#3d3129] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-[#3d3129] text-sm leading-relaxed max-w-xs">{brandInfo.shortStatement}</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-[#b66635] text-xs font-bold tracking-widest uppercase mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#3d3129] hover:text-[#b66635] p-2 bg-[#d3c0a8] rounded-full transition-colors" aria-label="Instagram">
              <Icon name="instagram" size={20}/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#3d3129] hover:text-[#b66635] p-2 bg-[#d3c0a8] rounded-full transition-colors" aria-label="Facebook">
              <Icon name="facebook" size={20}/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#3d3129] hover:text-[#b66635] p-2 bg-[#d3c0a8] rounded-full transition-colors" aria-label="YouTube">
              <Icon name="youtube" size={20}/>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#b66635] text-xs font-bold tracking-widest uppercase mb-2">Quick Links</h4>
          <button className="text-left text-[#3d3129] hover:text-[#b66635] text-sm" onClick={() => go("home")}>Home</button>
          <button className="text-left text-[#3d3129] hover:text-[#b66635] text-sm" onClick={() => go("products")}>Collections</button>
          <button className="text-left text-[#3d3129] hover:text-[#b66635] text-sm" onClick={() => go("products")}>About</button>
          <button className="text-left text-[#3d3129] hover:text-[#b66635] text-sm" onClick={() => go("contact")}>Contact</button>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-[#b66635] text-xs font-bold tracking-widest uppercase mb-2">Contact Us</h4>
          <a href={`tel:${brandInfo.phone}`} className="text-[#3d3129] hover:text-[#b66635] text-sm flex items-center gap-2">
            <Icon name="phone" size={16}/> {brandInfo.phone}
          </a>
          <a href={`mailto:${brandInfo.email}`} className="text-[#3d3129] hover:text-[#b66635] text-sm">{brandInfo.email}</a>
          <a href={`http://${brandInfo.website}`} target="_blank" rel="noreferrer" className="text-[#3d3129] hover:text-[#b66635] text-sm mb-2">{brandInfo.website}</a>
          
          <div className="text-[#3d3129] text-sm leading-relaxed mt-2">
            <strong>Shop & Office:</strong><br/>
            {brandInfo.addresses[0].lines.join(", ")}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 border-t border-[#d3c0a8] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#3d3129]/80">
        <span>© {new Date().getFullYear()} Kouch. All Rights Reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button onClick={() => go("system")} className="hover:text-[#b66635]">Design system</button>
          <button onClick={() => go("admin")} className="hover:text-[#b66635]">Admin</button>
        </div>
      </div>
    </footer>
  );
}
