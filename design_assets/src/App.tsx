import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import logo from "./assets/kouch/logo.jpg";
import sofa01 from "./assets/kouch/sofa-01.jpg";
import sofa02 from "./assets/kouch/sofa-02.jpg";
import sofa03 from "./assets/kouch/sofa-03.jpg";
import sofa04 from "./assets/kouch/sofa-04.jpg";
import sofa05 from "./assets/kouch/sofa-05.jpg";
import sofa06 from "./assets/kouch/sofa-06.jpg";
import sofa07 from "./assets/kouch/sofa-07.jpg";
import sofa08 from "./assets/kouch/sofa-08.jpg";
import sofa09 from "./assets/kouch/sofa-09.jpg";
import sofa10 from "./assets/kouch/sofa-10.jpg";
import sofa11 from "./assets/kouch/sofa-11.jpg";
import sofa12 from "./assets/kouch/sofa-12.jpg";
import sofa13 from "./assets/kouch/sofa-13.jpg";
import sofa14 from "./assets/kouch/sofa-14.jpg";
import sofa15 from "./assets/kouch/sofa-15.jpg";
import sofa16 from "./assets/kouch/sofa-16.jpg";
import sofa17 from "./assets/kouch/sofa-17.png";
import sofa18 from "./assets/kouch/sofa-18.png";

type Page = "home" | "products" | "product" | "contact" | "notfound" | "system" | "admin";
type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "close"
  | "edit"
  | "image"
  | "menu"
  | "phone"
  | "plus"
  | "trash"
  | "upload"
  | "whatsapp";

const images = [
  sofa01,
  sofa02,
  sofa03,
  sofa04,
  sofa05,
  sofa06,
  sofa07,
  sofa08,
  sofa09,
  sofa10,
  sofa11,
  sofa12,
  sofa13,
  sofa14,
  sofa15,
  sofa16,
  sofa17,
  sofa18,
];

const products = images.map((image, index) => ({
  id: `product-${index + 1}`,
  image,
  name: `Product ${String(index + 1).padStart(2, "0")} — name TBD`,
  category: "Category assignment TBD",
}));

const categories = [
  { name: "L-shape sofas", image: sofa03 },
  { name: "Sofa combos", image: sofa07 },
  { name: "Recliners", image: sofa02 },
];

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
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
  };

  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "logo-crop logo-crop--compact" : "logo-crop"} aria-label="MyKouch — Comfort that feels like home">
      <img src={logo} alt="MyKouch — Comfort that feels like home" />
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
  disabled,
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "text" | "icon";
  icon?: IconName;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button className={`btn btn--${variant} ${className}`} onClick={onClick} type={type} disabled={disabled}>
      {children}
      {icon && <Icon name={icon} />}
    </button>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Header({ page, go }: { page: Page; go: (page: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = (next: Page) => {
    setMenuOpen(false);
    go(next);
  };

  return (
    <>
      <header className="site-header">
        <button className="logo-button" onClick={() => nav("home")} aria-label="Go to home">
          <Logo compact />
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => nav("home")}>Home</button>
          <button className={page === "products" || page === "product" ? "nav-link active" : "nav-link"} onClick={() => nav("products")}>Sofas</button>
          <button className="nav-link" onClick={() => nav("products")}>L-shape sofas</button>
          <button className="nav-link" onClick={() => nav("products")}>Sofa combos</button>
          <button className="nav-link" onClick={() => nav("products")}>Recliners</button>
          <button className={page === "contact" ? "nav-link active" : "nav-link"} onClick={() => nav("contact")}>Contact</button>
        </nav>
        <div className="header-actions">
          <button className="round-action desktop-only" aria-label="Call MyKouch"><Icon name="phone" /></button>
          <Button variant="secondary" className="desktop-only"><Icon name="whatsapp" /> WhatsApp</Button>
          <button className="round-action mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Icon name="menu" size={24} /></button>
        </div>
      </header>
      {menuOpen && (
        <div className="menu-layer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="menu-head">
            <Logo compact />
            <button className="round-action" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="close" size={24} /></button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {["Home", "Sofas", "L-shape sofas", "Sofa combos", "Recliners", "Contact"].map((item) => (
              <button key={item} onClick={() => nav(item === "Home" ? "home" : item === "Contact" ? "contact" : "products")}>
                <span>{item}</span><Icon name="arrow" />
              </button>
            ))}
          </nav>
          <div className="menu-contact">
            <Button><Icon name="whatsapp" /> Message on WhatsApp</Button>
            <Button variant="secondary"><Icon name="phone" /> Call Kouch</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Footer({ go }: { go: (page: Page) => void }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Explore sofas for the spaces you live in, then speak with our team about the option that interests you.</p>
        </div>
        <div>
          <Eyebrow>Collection</Eyebrow>
          <button onClick={() => go("products")}>All sofas</button>
          <button onClick={() => go("products")}>L-shape sofas</button>
          <button onClick={() => go("products")}>Sofa combos</button>
          <button onClick={() => go("products")}>Recliners</button>
        </div>
        <div>
          <Eyebrow>Speak with us</Eyebrow>
          <button onClick={() => go("contact")}>Contact Kouch</button>
          <button>Message on WhatsApp</button>
          <button>Call Kouch</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© MyKouch. Legal content TBD.</span>
        <button onClick={() => go("system")}>Design system preview</button>
        <button onClick={() => go("notfound")}>404 preview</button>
        <button onClick={() => go("admin")}>Admin preview</button>
      </div>
    </footer>
  );
}

function ProductCard({ product, onOpen, index = 0 }: { product: (typeof products)[number]; onOpen: () => void; index?: number }) {
  return (
    <article className="product-card">
      <button className="product-image" onClick={onOpen} aria-label={`View ${product.name}`}>
        <img src={product.image} alt={`Product view for ${product.name}`} />
        <span className="catalogue-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="image-action"><Icon name="arrow" /></span>
      </button>
      <div className="product-copy">
        <span>{product.category} / The Kouch edit</span>
        <h3>{product.name}</h3>
        <p>Catalogue description pending confirmed product content.</p>
        <button onClick={onOpen}>Open catalogue entry <Icon name="arrow" size={18} /></button>
      </div>
    </article>
  );
}

function Home({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  return (
    <main>
      <section className="hero editorial-hero">
        <div className="hero-image">
          <img src={sofa17} alt="MyKouch sofa collection visual" />
        </div>
        <div className="hero-frame" aria-hidden="true" />
        <div className="hero-label"><span>Vol. 01</span><span>The Kouch collection</span></div>
        <div className="hero-copy">
          <h1>Comfort that<br /><em>feels like home</em></h1>
          <div className="hero-note">
            <span className="ornament" aria-hidden="true" />
            <p>A considered catalogue of sofas for homes made around conversation, rest, and everyday life.</p>
            <Button variant="text" icon="arrow" onClick={() => go("products")}>Enter the collection</Button>
          </div>
        </div>
        <div className="hero-folio"><span>MyKouch</span><span>2026 / Catalogue preview</span></div>
      </section>

      <section className="section-shell">
        <div className="section-heading split-heading">
          <div className="numbered-title"><span>01</span><div><Eyebrow>The collection</Eyebrow><h2>Designed for the way you live.</h2></div></div>
          <p>Move through the collection by sofa type. Product details and category assignments remain subject to final catalogue content.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <button className="category-card" key={category.name} onClick={() => go("products")}>
              <img src={category.image} alt="" />
              <span className="category-number">0{index + 1}</span>
              <span className="category-name">{category.name}</span>
              <span className="category-arrow"><Icon name="arrow" /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="collection-section">
        <div className="section-shell">
          <div className="section-heading inline-heading">
            <div className="numbered-title"><span>02</span><div><Eyebrow>The Kouch edit</Eyebrow><h2>A catalogue with room to linger.</h2></div></div>
            <Button variant="text" icon="arrow" onClick={() => go("products")}>View all sofas</Button>
          </div>
          <div className="product-grid product-grid--featured">
            {products.slice(0, 5).map((product, index) => <ProductCard key={product.id} product={product} index={index} onOpen={() => openProduct(index)} />)}
          </div>
        </div>
      </section>

      <section className="process-section section-shell">
        <div className="process-intro">
          <span className="section-figure">03</span>
          <Eyebrow>A personal process</Eyebrow>
          <h2>Browse slowly.<br /><em>Enquire simply.</em></h2>
          <p>Kouch is an enquiry-led catalogue. Explore the collection online, then continue the conversation with the sales team.</p>
        </div>
        <div className="process-list">
          {[
            ["01", "Choose a sofa", "Browse the collection and open the products that suit your space."],
            ["02", "Share your interest", "Select an available configuration and send the product context with your enquiry."],
            ["03", "Speak with the team", "A salesperson continues the conversation and provides quotation details offline."],
          ].map(([number, title, copy]) => (
            <div className="process-row" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand go={go} />
    </main>
  );
}

function ContactBand({ go }: { go: (page: Page) => void }) {
  return (
    <section className="contact-band">
      <span className="contact-monogram" aria-hidden="true">K</span>
      <div className="contact-band-title">
        <Eyebrow>An invitation to talk</Eyebrow>
        <h2>Perhaps your Kouch<br />starts with a conversation.</h2>
      </div>
      <div className="contact-band-note">
        <p>Tell us which sofa interests you, or ask the team for help exploring the collection.</p>
        <Button variant="text" icon="arrow" onClick={() => go("contact")}>Write to Kouch</Button>
      </div>
    </section>
  );
}

function Listing({ go, openProduct }: { go: (page: Page) => void; openProduct: (index: number) => void }) {
  const [active, setActive] = useState("All sofas");
  return (
    <main>
      <section className="page-hero">
        <div>
          <button className="breadcrumb" onClick={() => go("home")}>Home <span>/</span> Sofas</button>
          <Eyebrow>Product catalogue</Eyebrow>
          <h1>Sofas</h1>
        </div>
        <p>Explore the current visual catalogue. Product names, category assignments, and detailed specifications remain content TBD.</p>
      </section>
      <section className="section-shell listing-shell">
        <div className="category-tabs" role="tablist" aria-label="Sofa categories">
          {["All sofas", "L-shape sofas", "Sofa combos", "Recliners"].map((category) => (
            <button role="tab" aria-selected={active === category} key={category} onClick={() => setActive(category)}>{category}</button>
          ))}
        </div>
        <div className="listing-meta"><span>{products.length} representative products</span><span>Category assignments TBD</span></div>
        <div className="product-grid">
          {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} onOpen={() => openProduct(index)} />)}
        </div>
      </section>
      <ContactBand go={go} />
    </main>
  );
}

function ProductDetail({
  product,
  go,
  onEnquire,
}: {
  product: (typeof products)[number];
  go: (page: Page) => void;
  onEnquire: (configuration: string) => void;
}) {
  const productIndex = products.findIndex((item) => item.id === product.id);
  const gallery = [product.image, images[(productIndex + 1) % images.length], images[(productIndex + 2) % images.length]];
  const [activeImage, setActiveImage] = useState(0);
  const [configuration, setConfiguration] = useState("");
  const [configError, setConfigError] = useState(false);
  const enquire = () => {
    if (!configuration) {
      setConfigError(true);
      return;
    }
    onEnquire(configuration);
  };

  return (
    <main>
      <section className="product-detail section-shell">
        <button className="breadcrumb product-back" onClick={() => go("products")}>← Back to sofas</button>
        <div className="detail-grid">
          <div className="gallery">
            <div className="gallery-main"><img src={gallery[activeImage]} alt={`${product.name}, view ${activeImage + 1}`} /><span>{activeImage + 1} / {gallery.length}</span></div>
            <div className="gallery-thumbs">
              {gallery.map((image, index) => (
                <button className={index === activeImage ? "selected" : ""} key={image} onClick={() => setActiveImage(index)} aria-label={`Show image ${index + 1}`}>
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div className="detail-summary">
            <div className="detail-kicker"><span>{String(productIndex + 1).padStart(2, "0")}</span><Eyebrow>The sofa / {product.category}</Eyebrow></div>
            <h1>{product.name}</h1>
            <p className="detail-lede">Product description and confirmed specifications will appear here when catalogue content is supplied.</p>
            <div className="tbd-note">Content TBD — price, materials, dimensions and availability</div>
            <fieldset className={configError ? "config-field error" : "config-field"}>
              <legend>Choose a configuration <span>Required for prototype</span></legend>
              {["Configuration option A — TBD", "Configuration option B — TBD"].map((option) => (
                <label key={option} className={configuration === option ? "config-option selected" : "config-option"}>
                  <input type="radio" name="configuration" value={option} checked={configuration === option} onChange={() => { setConfiguration(option); setConfigError(false); }} />
                  <span>{option}</span><span className="radio-mark"><Icon name="check" size={16} /></span>
                </label>
              ))}
              {configError && <p className="field-error">Choose a configuration before continuing.</p>}
            </fieldset>
            <div className="detail-actions">
              <Button icon="arrow" onClick={enquire}>Enquire now</Button>
              <Button variant="secondary"><Icon name="whatsapp" /> Ask on WhatsApp</Button>
            </div>
            <div className="next-step">
              <h3>What happens next</h3>
              <p>Send the product and configuration you’re interested in. The Kouch team will contact you to discuss the details and quotation.</p>
            </div>
          </div>
        </div>
        <div className="detail-information">
          <div className="numbered-title"><span>02</span><div><Eyebrow>Catalogue notes</Eyebrow><h2>Details that support your decision</h2></div></div>
          <div className="info-list">
            {["Description", "Dimensions", "Materials", "Colour options"].map((item) => <div key={item}><span>{item}</span><strong>[Content TBD]</strong></div>)}
          </div>
        </div>
      </section>
      <div className="sticky-enquire"><Button icon="arrow" onClick={enquire}>Enquire now</Button></div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className={error ? "field field--error" : "field"}>
      <span>{label}{required && <em>Required</em>}</span>
      <input name={name} type={type} aria-invalid={!!error} />
      {error && <small>{error}</small>}
    </label>
  );
}

function EnquiryDialog({
  product,
  configuration,
  onClose,
}: {
  product: (typeof products)[number];
  configuration: string;
  onClose: () => void;
}) {
  const [state, setState] = useState<"form" | "loading" | "success">("form");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};
    if (String(data.get("name") || "").trim().length < 2) nextErrors.name = "Enter your full name using at least 2 characters.";
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!phone && !email) nextErrors.contact = "Enter at least one way for us to contact you.";
    if (email && !email.includes("@")) nextErrors.email = "Enter a valid email address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setState("loading");
    window.setTimeout(() => setState("success"), 800);
  };

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" tabIndex={-1} ref={dialogRef}>
        <div className="dialog-head">
          <div><Eyebrow>Product enquiry / personal assistance</Eyebrow><h2 id="enquiry-title">{state === "success" ? "Thank you for your enquiry" : "Let’s find your Kouch"}</h2></div>
          <button className="round-action" onClick={onClose} aria-label="Close enquiry"><Icon name="close" /></button>
        </div>
        {state === "success" ? (
          <div className="success-state">
            <div className="success-mark"><Icon name="check" size={32} /></div>
            <p>Your product details have been sent to the Kouch team. A salesperson will contact you using the details provided.</p>
            <div className="product-context compact">
              <img src={product.image} alt="" />
              <div><strong>{product.name}</strong><span>{configuration}</span></div>
            </div>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="product-context">
              <img src={product.image} alt="" />
              <div><span>Enquiring about</span><strong>{product.name}</strong><small>{configuration}</small></div>
            </div>
            <p className="form-intro">Share your contact details and any questions. Your selected product details will be included automatically.</p>
            {errors.contact && <div className="form-alert">{errors.contact}</div>}
            <div className="field-grid">
              <Field label="Full name" name="name" required error={errors.name} />
              <Field label="Phone number" name="phone" type="tel" error={errors.phone} />
              <Field label="Email address" name="email" type="email" error={errors.email} />
              <label className="field field--wide"><span>Message or questions <em>Optional</em></span><textarea name="message" maxLength={500} /><small>Up to 500 characters</small></label>
            </div>
            <p className="privacy-note">Privacy and consent wording: [Content TBD]</p>
            <div className="dialog-actions">
              <Button type="submit" icon={state === "loading" ? undefined : "arrow"} disabled={state === "loading"}>{state === "loading" ? "Sending…" : "Send enquiry"}</Button>
              <Button variant="text"><Icon name="whatsapp" /> Ask on WhatsApp instead</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="contact-page">
      <section className="page-hero page-hero--contact">
        <div><Eyebrow>Speak with us</Eyebrow><h1>Contact Kouch</h1></div>
        <p>Tell us what you’re looking for, or contact the team directly. Official contact details remain content TBD.</p>
      </section>
      <section className="contact-layout section-shell">
        <div className="contact-options">
          <div className="contact-option"><Icon name="whatsapp" size={28} /><div><span>WhatsApp</span><h3>Message the Kouch team</h3><p>Continue the conversation in WhatsApp.</p></div><Icon name="arrow" /></div>
          <div className="contact-option"><Icon name="phone" size={28} /><div><span>Phone</span><h3>Call Kouch</h3><p>Official phone number: [Content TBD]</p></div><Icon name="arrow" /></div>
        </div>
        <div className="contact-form-card">
          {sent ? (
            <div className="success-state"><div className="success-mark"><Icon name="check" size={32} /></div><h2>Thank you for your message</h2><p>Your message has been sent to the Kouch team.</p><Button onClick={() => setSent(false)}>Send another message</Button></div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <Eyebrow>General enquiry</Eyebrow><h2>How can we help?</h2>
              <Field label="Full name" name="contact-name" required />
              <Field label="Phone number" name="contact-phone" type="tel" />
              <Field label="Email address" name="contact-email" type="email" />
              <label className="field"><span>Message <em>Optional</em></span><textarea maxLength={500} /></label>
              <Button type="submit" icon="arrow">Send message</Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

function NotFound({ go }: { go: (page: Page) => void }) {
  return (
    <main className="not-found">
      <div className="not-found-visual">
        <img src={sofa05} alt="" />
        <span>404</span>
      </div>
      <div className="not-found-copy">
        <Eyebrow>Product unavailable</Eyebrow>
        <h1>This sofa is no longer available</h1>
        <p>The link may be out of date. Explore the current collection or contact us for help.</p>
        <div className="button-row">
          <Button icon="arrow" onClick={() => go("products")}>Browse all sofas</Button>
          <Button variant="text" onClick={() => go("contact")}>Contact us</Button>
        </div>
      </div>
    </main>
  );
}

function DesignSystem() {
  return (
    <main className="system-page">
      <section className="system-hero">
        <Eyebrow>MyKouch design system · v1.0</Eyebrow>
        <h1>Warm, considered, product-first.</h1>
        <p>A working reference for foundations, interface states, and reusable components. Orange and brown are sampled visual references from the supplied JPEG, not official brand HEX values.</p>
      </section>
      <section className="system-section">
        <div className="system-title"><span>01</span><div><Eyebrow>Foundations</Eyebrow><h2>Colour</h2></div></div>
        <div className="swatch-grid">
          <div className="swatch swatch--brown"><span>Primary</span><strong>Logo brown reference</strong><small>Official HEX · TBD</small></div>
          <div className="swatch swatch--orange"><span>Accent</span><strong>Logo orange reference</strong><small>Official HEX · TBD</small></div>
          <div className="swatch swatch--ivory"><span>Background</span><strong>Warm ivory</strong><small>Interface neutral</small></div>
          <div className="swatch swatch--ink"><span>Text</span><strong>Warm ink</strong><small>Interface neutral</small></div>
        </div>
      </section>
      <section className="system-section">
        <div className="system-title"><span>02</span><div><Eyebrow>Foundations</Eyebrow><h2>Typography</h2></div></div>
        <div className="type-specimen">
          <div><span>Display / Cormorant Garamond</span><p>Comfort that feels like home</p></div>
          <div><span>Heading / Cormorant Garamond</span><h2>Find your kind of comfort</h2></div>
          <div><span>Body / Manrope</span><p>Explore sofas for the spaces you live in, then speak with our team about the option that interests you.</p></div>
        </div>
      </section>
      <section className="system-section">
        <div className="system-title"><span>03</span><div><Eyebrow>Components</Eyebrow><h2>Actions and fields</h2></div></div>
        <div className="component-board">
          <div className="component-row">
            <Button>Primary action</Button><Button variant="secondary">Secondary action</Button><Button variant="ghost">Ghost action</Button><Button variant="text" icon="arrow">Text action</Button><Button disabled>Disabled</Button>
          </div>
          <div className="component-fields">
            <Field label="Default field" name="sample-1" />
            <Field label="Error field" name="sample-2" error="Review this field and try again." />
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="system-title"><span>04</span><div><Eyebrow>Components</Eyebrow><h2>Product card</h2></div></div>
        <div className="system-card-demo"><ProductCard product={products[0]} onOpen={() => undefined} /></div>
      </section>
      <section className="system-section">
        <div className="system-title"><span>05</span><div><Eyebrow>System states</Eyebrow><h2>Loading, empty and error</h2></div></div>
        <div className="state-grid">
          <div className="state-card">
            <div className="skeleton skeleton--image" />
            <div className="skeleton skeleton--line" />
            <div className="skeleton skeleton--line short" />
            <strong>Product loading</strong>
            <span>Use skeletons without blocking the full catalogue.</span>
          </div>
          <div className="state-card state-card--center">
            <Icon name="image" size={32} />
            <strong>New pieces are coming soon</strong>
            <span>There are no products in this category right now.</span>
            <Button variant="secondary">Browse all sofas</Button>
          </div>
          <div className="state-card state-card--center error-state">
            <span className="error-symbol">!</span>
            <strong>We couldn’t load this collection</strong>
            <span>Please try again. If the problem continues, contact the Kouch team.</span>
            <Button variant="secondary">Try again</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function AdminPreview() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [editing, setEditing] = useState(false);
  if (!loggedIn) {
    return (
      <main className="admin-login">
        <div className="admin-login-card">
          <Logo />
          <Eyebrow>Catalogue administration</Eyebrow>
          <h1>Sign in to manage Kouch</h1>
          <p>This prototype uses a single confirmed admin role.</p>
          <form onSubmit={(event) => { event.preventDefault(); setLoggedIn(true); }}>
            <Field label="Email address" name="admin-email" type="email" required />
            <Field label="Password" name="admin-password" type="password" required />
            <Button type="submit">Sign in</Button>
          </form>
        </div>
      </main>
    );
  }
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><Logo compact /><nav><button className="active"><Icon name="image" /> Products</button><button>Categories</button></nav><button onClick={() => setLoggedIn(false)}>Sign out</button></aside>
      <section className="admin-content">
        <div className="admin-head"><div><Eyebrow>Catalogue</Eyebrow><h1>{editing ? "Add product" : "Products"}</h1></div><Button icon={editing ? undefined : "plus"} onClick={() => setEditing(!editing)}>{editing ? "Back to products" : "Add product"}</Button></div>
        {editing ? (
          <form className="editor-form" onSubmit={(event) => { event.preventDefault(); setEditing(false); }}>
            <div className="editor-section"><h2>Basic information</h2><Field label="Product name" name="product-name" required /><label className="field"><span>Category <em>Required</em></span><select defaultValue=""><option value="" disabled>Select category</option><option>L-shape sofas</option><option>Sofa combos</option><option>Recliners</option></select></label></div>
            <div className="editor-section"><h2>Product images</h2><div className="upload-zone"><Icon name="upload" size={28} /><strong>Upload product images</strong><span>Image requirements and limits: TBD</span><Button variant="secondary">Browse files</Button></div></div>
            <div className="editor-section"><h2>Configurations</h2><div className="configuration-row"><Field label="Configuration name" name="config-name" /><button aria-label="Delete configuration"><Icon name="trash" /></button></div><Button variant="secondary" icon="plus">Add configuration</Button></div>
            <div className="editor-actions"><Button variant="secondary" onClick={() => setEditing(false)}>Cancel</Button><Button type="submit">Publish product</Button></div>
          </form>
        ) : (
          <div className="admin-table">
            <div className="table-row table-header"><span>Product</span><span>Category</span><span>Configurations</span><span>Actions</span></div>
            {products.slice(0, 6).map((product, index) => <div className="table-row" key={product.id}><span className="table-product"><img src={product.image} alt="" /><strong>{product.name}</strong></span><span>{product.category}</span><span>{index % 3}</span><span className="table-actions"><button onClick={() => setEditing(true)} aria-label="Edit product"><Icon name="edit" /></button><button aria-label="Delete product"><Icon name="trash" /></button></span></div>)}
          </div>
        )}
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [enquiry, setEnquiry] = useState<{ open: boolean; configuration: string }>({ open: false, configuration: "" });

  const go = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openProduct = (index: number) => {
    setSelectedProduct(index);
    go("product");
  };

  return (
    <div className="app">
      {page !== "admin" && <Header page={page} go={go} />}
      {page === "home" && <Home go={go} openProduct={openProduct} />}
      {page === "products" && <Listing go={go} openProduct={openProduct} />}
      {page === "product" && <ProductDetail product={products[selectedProduct]} go={go} onEnquire={(configuration) => setEnquiry({ open: true, configuration })} />}
      {page === "contact" && <Contact />}
      {page === "notfound" && <NotFound go={go} />}
      {page === "system" && <DesignSystem />}
      {page === "admin" && <AdminPreview />}
      {page !== "admin" && <Footer go={go} />}
      {enquiry.open && <EnquiryDialog product={products[selectedProduct]} configuration={enquiry.configuration} onClose={() => setEnquiry({ open: false, configuration: "" })} />}
    </div>
  );
}
