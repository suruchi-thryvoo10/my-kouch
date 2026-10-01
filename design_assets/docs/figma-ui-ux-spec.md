# Kouch (MyKouch) — Figma UI/UX Design Blueprint

**Document type:** Figma design specification, not an implementation specification  
**Version:** 1.0  
**Prepared from:** Project Master, BRD v0.1, PRD v0.1, User Flows v0.1, supplied logo/navigation reference, and supplied product imagery  
**Product model:** Public premium furniture catalogue with enquiry-led sales  
**Design status:** Ready for Figma production, subject to the TBD decisions in Section 21

---

## 0. Source alignment and scope controls

### 0.1 Confirmed product understanding

Kouch/MyKouch primarily sells sofas and couches, including L-shape sofas, sofa combinations, and recliners. The website is a visual catalogue and lead-generation surface, not a conventional transactional store.

The confirmed customer journey is:

`Discover category → Browse sofas → View product → Select configuration when available → Enquire by form, WhatsApp, or phone → Salesperson follows up → Quotation and payment occur outside the confirmed website flow`

The main users are:

1. **Customer:** discovers and evaluates sofas, chooses a configuration, and initiates contact.
2. **Admin/business owner:** securely maintains products, product images, categories, and configurations.
3. **Salesperson:** receives structured enquiry details by email in the confirmed MVP and follows up outside the website.

### 0.2 MVP boundaries

**Confirmed for design**

- Public home page.
- Category-led product catalogue.
- Product details with multiple images.
- Zero or more selectable product configurations.
- Product-specific enquiry form retaining product/configuration context.
- General contact experience.
- WhatsApp and click-to-call actions.
- Enquiry validation, submission, failure, and success states.
- Admin authentication.
- Basic product, image, category, and configuration management.
- Responsive desktop, tablet, and mobile behavior.
- Product/category empty, loading, and unavailable states.

**Explicitly excluded from the MVP**

- Shopping cart and checkout.
- Website payment.
- Customer accounts.
- Wishlist.
- Product comparison.
- Customer order tracking.
- Reviews and ratings.
- Advanced visual sofa configurator.
- Search, filters, and sorting until confirmed.

**Not to be designed as committed functionality**

- Offers page or offer CMS.
- Become a Dealer flow.
- Customer testimonials.
- About/brand story page.
- Related products.
- Product pricing, availability, materials, dimensions, colours, SKU, or customization controls.
- Admin enquiry tracking/status management.
- Analytics dashboards.

Each item above may appear only on a clearly separated future-concept page after approval. It must not appear in the MVP prototype.

### 0.3 Documentation conflict rule

The Project Master mentions admin enquiry viewing and status updates, while the later BRD/PRD and User Flows mark the enquiry backend as TBD and confirm email receipt for MVP. Therefore, the Figma MVP must show **email-routed enquiries only** and must not include enquiry management screens.

### 0.4 Supplied visual assets

- A white-background MyKouch logo uses a burnt-orange wordmark accent, deep brown lettering, a furniture/lamp symbol inside the “o,” and the line “Comfort that feels like home.”
- A supplied header reference uses an ivory background, dark text, compact uppercase navigation, and a burnt-orange Enquire CTA.
- Eighteen supplied furniture photographs show full-room sofa arrangements in warm, residential interiors. The range includes individual sofas, L-shape sofas, and sofa combinations in varied colours. Product names, exact categories, materials, and configurations remain unconfirmed.

**Asset direction**

- Use the supplied JPEG as the working logo asset for the current design phase.
- Remove the excessive white canvas with a non-destructive Figma image crop: trim to the visible wordmark and tagline, then retain only a small, even breathing area around the artwork. Do not crop into the letterforms, furniture/lamp symbol, or tagline.
- Preserve the proportions of the cropped artwork; never redraw, recolour, stretch, or place it over a visually busy image.
- Because the working asset is an opaque white JPEG, place it only on white or visually matching light surfaces. Do not simulate transparency with a blend mode.
- Create a `Brand/Logo/Full Lockup` component from the cropped asset and retain the uncropped JPEG on the asset-reference page as the source.
- A transparent/vector logo may replace the JPEG later, but it is not required for the current Figma phase.
- Use the supplied room imagery as product-led editorial material, but do not infer product names, dimensions, materials, configurations, prices, or availability from appearance.
- Several images appear highly polished or generated and one includes visible room text. Confirm usage rights, product accuracy, and removal of unintended text/artifacts before publishing.
- Product-listing crops should use a consistent `4:3` frame; product-detail hero images may use `4:3` or `3:2`. Keep the full sofa visible and do not crop critical arms, chaise sections, or seats.

---

# 1. Product design direction

## 1.1 Experience statement

Kouch should feel like a vintage furniture atelier, an editorial design magazine, and a warm contemporary Indian home brought together in one modern digital catalogue. The personality is nostalgic, tactile, artistic, and human without reproducing the usability or visual limitations of an old website. Product imagery leads, information reassures, and enquiry actions remain clear without making the interface feel sales-heavy.

## 1.2 Visual direction

- **Vintage in language, modern in UX:** draw on print catalogues, atelier ephemera, framed photography, double rules, folio numbers, and editorial captions while retaining responsive, accessible interaction patterns.
- **Premium, warm, and residential:** parchment and cream canvases, deep-brown structure, and restrained burnt-orange accents taken from the supplied logo.
- **Editorial rather than marketplace-like:** asymmetric image fields, typographic hierarchy, deliberate overlaps, minimal badges, no price-led promotional patterns, and no dense card chrome.
- **Tactile restraint:** use thin decorative rules, framed images, subtle arches, controlled imperfection, and warm tonal shifts instead of rounded card systems, glass effects, large shadows, or excessive gradients.
- **Modern sophistication:** oversized editorial serif typography paired with a highly legible sans-serif for navigation, forms, and product facts.
- **Calm conversion:** one dominant action per decision point; WhatsApp and phone remain visible as alternatives rather than competing equally with every CTA.
- **Image-first:** layouts must accommodate varied room scenes while preserving the sofa as the focal point.
- **Asymmetry with order:** section numbers, offsets, varied image scales, and uneven catalogue rhythms create identity while the underlying grid preserves usability.

## 1.3 Content hierarchy

`Product → Visual quality → Trust → Information → Enquiry`

On product details, the hierarchy becomes:

1. What is the product?
2. What does it look like?
3. Which confirmed configuration can I select?
4. What confirmed details are available?
5. How can I enquire?
6. What happens after I enquire?

## 1.4 Imagery art direction

- Use warm, natural colour correction; avoid heavy filters.
- Prefer front or three-quarter angles showing the complete sofa.
- Keep product cards free from text baked into images.
- Avoid mixing isolated cut-out products and full-room photography within one grid unless the system intentionally labels the image types.
- Recommended source minimums: `1600 × 1200 px` for listing and `2400 px` on the long edge for detail galleries.
- Figma image-fill focal points must be documented per asset.
- Every image requires meaningful admin-authored alt text. Example pattern: `[Product name] [configuration], shown from [view] in [colour if confirmed]`.
- Frame key photography with fine rules or warm mats inspired by printed furniture catalogues. Arch treatments may be used sparingly for category imagery, never for every image.
- Prefer varied editorial scale over uniform card repetition: one dominant image, secondary entries, and smaller supporting entries.
- Never invent craftsmanship, origin, material, or brand-history claims to support the atelier aesthetic.

---

# 2. UX principles

1. **Lead with the sofa.** Product imagery occupies the largest visual area on discovery and evaluation screens.
2. **Make the next step unambiguous.** Every page has one primary next action: browse a category, view a product, or enquire.
3. **Preserve context.** Product and selected configuration remain visible when the enquiry form opens and are attached to submission.
4. **Show what is known.** Never use fabricated product facts. Unknown factual content is `[Content TBD]`; unresolved product fields are omitted from customer layouts until confirmed.
5. **Offer human routes.** WhatsApp and phone are accessible globally and beside the product enquiry action.
6. **Reduce form anxiety.** Explain why contact information is requested, retain entered values after errors, and avoid promising a response time before an SLA exists.
7. **Design mobile intentionally.** Use a menu sheet, stacked product detail layout, touch-sized controls, and a sticky product enquiry action.
8. **Provide graceful dead ends.** Empty categories and unavailable products always offer a route back to active products.
9. **Keep commerce language accurate.** Use “Enquire,” “Request product details,” or “Speak with us”—never “Buy now,” “Add to cart,” or “Checkout.”
10. **Build trust without unsupported claims.** Do not add warranty, delivery, craftsmanship, sustainability, years-in-business, or testimonial claims until supplied.

---

# 3. Figma file structure

Create the Figma file with the following pages and naming:

| Page | Contents |
|---|---|
| `00 — Cover` | Project name, version, status, owner, last updated date, cover image, link to this blueprint |
| `01 — Direction & Principles` | Product model, audience, mood direction, supplied asset board, UX principles, scope guardrails |
| `02 — Foundations` | Variables, colors, typography, spacing, grids, breakpoints, radius, shadows, icon rules, imagery rules |
| `03 — Components` | Customer and admin component sets, variants, interactive states, usage notes |
| `04 — Desktop Screens` | 1440 px customer and admin frames, plus critical desktop state frames |
| `05 — Tablet Screens` | 834 px responsive reference frames for all major templates |
| `06 — Mobile Screens` | 390 px customer and admin frames, mobile navigation, sticky actions, critical states |
| `07 — User Flows` | Flow maps with requirement IDs and entry/exit states |
| `08 — Prototype` | Clean prototype-only duplicate frames and connection map |
| `09 — Annotations & Handoff` | Behavior notes, content requirements, accessibility notes, image focal points, TBD register, QA |

### Figma naming conventions

- Frames: `C01/Home/Desktop/Default`, `C03/Product Detail/Mobile/Config Selected`.
- Components: `Customer/Button`, `Customer/Product Card`, `Admin/Product Row`.
- Variants: `Type=Primary, State=Default, Size=Large`.
- Variables: use the token names in Section 18.
- Prefix documentation-only annotation layers with `_note/`.
- Prefix prototype hotspots with `_hotspot/`.
- Use Auto Layout for all components and page sections.
- Use component properties for text, leading icon, trailing icon, image, badge visibility, and optional metadata.

---

# 4. Color system

The supplied logo establishes orange and brown as the visual brand references, but an opaque JPEG is not an authoritative source for exact official digital values. Use the visible logo colours to guide the visual direction and leave the exact brand HEX values unresolved rather than inventing them.

> **TBD — Design decision required:** Confirm the official orange and brown HEX values. Until then, Figma brand swatches must be labelled `Reference only — sampled visually from supplied JPEG`, and must not be documented as official values.

## 4.1 Core palette

| Role/token | Value/status | Use |
|---|---:|---|
| `color.primary` | `TBD — logo brown reference` | Primary buttons, strong links, active controls |
| `color.primary.hover` | `TBD — derived after primary approval` | Hover/pressed emphasis |
| `color.secondary` | `TBD — logo orange reference` | Brand accent, selected details, restrained highlights |
| `color.secondary.hover` | `TBD — derived after secondary approval` | Accent hover |
| `color.background` | `#F7F3EB` | Main warm ivory canvas |
| `color.surface` | `#FFFDFA` | Cards, form surfaces, modal |
| `color.surface.subtle` | `#EFE8DD` | Quiet bands, skeletons, image placeholders |
| `color.text.primary` | `#2B211B` | Primary text |
| `color.text.secondary` | `#6E625A` | Supporting text |
| `color.text.inverse` | `#FFFDF9` | Text on primary fills |
| `color.border` | `#D8CEC2` | Dividers and fields |
| `color.border.strong` | `#A99A8E` | High-emphasis dividers |
| `color.accent` | `Alias: color.secondary` | Selected state and brand punctuation |
| `color.focus` | `#146B8C` | Accessible focus ring distinct from brand colors |
| `color.success` | `#28643B` | Success message/icon |
| `color.success.surface` | `#EAF4EC` | Success background |
| `color.warning` | `#8B5A00` | Warning text/icon |
| `color.warning.surface` | `#FFF4D8` | Warning background |
| `color.error` | `#A93232` | Error message/border |
| `color.error.surface` | `#FCECEC` | Error background |
| `color.overlay` | `rgba(30, 22, 17, 0.56)` | Modal/sheet backdrop |

The remaining neutral and functional colours are proposed interface-system decisions, not claimed MyKouch brand colours.

## 4.2 Usage and contrast rules

- Primary text appears on background/surface only.
- White text may be used on `color.primary` only after the working sampled swatch passes WCAG AA contrast checks; this does not make the sampled value an official brand HEX.
- Burnt orange is not the default body-text color. Use it for accents, icons, and large/bold interactive text only after contrast validation.
- Do not rely on orange, green, or red alone to express state; pair colour with iconography and text.
- Limit any section to one filled brand action to preserve a premium hierarchy.
- Do not use gradients in the core system.

---

# 5. Typography

## 5.1 Font selection

- **Display/brand editorial:** `Cormorant Garamond`
- **UI, body, and product information:** `Manrope`
- Both are proposed public typefaces. They are not confirmed brand fonts.

> **TBD — Design decision required:** Confirm official brand fonts and logo licensing. If unavailable, approve Cormorant Garamond + Manrope.

Use a maximum of these two families. Never typeset the logo name manually as a replacement for the supplied mark.

## 5.2 Desktop type styles

| Token | Family | Weight | Size | Line height | Letter spacing |
|---|---|---:|---:|---:|---:|
| `text.display` | Cormorant Garamond | 500 | 72 px | 76 px | `-0.02em` |
| `text.heading1` | Cormorant Garamond | 500 | 56 px | 62 px | `-0.018em` |
| `text.heading2` | Cormorant Garamond | 500 | 42 px | 48 px | `-0.012em` |
| `text.heading3` | Manrope | 600 | 26 px | 34 px | `-0.01em` |
| `text.body.large` | Manrope | 400 | 18 px | 30 px | `0` |
| `text.body` | Manrope | 400 | 16 px | 26 px | `0` |
| `text.small` | Manrope | 500 | 14 px | 21 px | `0.005em` |
| `text.caption` | Manrope | 600 | 12 px | 18 px | `0.06em` |
| `text.button` | Manrope | 650 | 14 px | 20 px | `0.04em` |

## 5.3 Mobile type styles

| Token | Family | Weight | Size | Line height | Letter spacing |
|---|---|---:|---:|---:|---:|
| `text.display.mobile` | Cormorant Garamond | 500 | 46 px | 49 px | `-0.018em` |
| `text.heading1.mobile` | Cormorant Garamond | 500 | 40 px | 44 px | `-0.015em` |
| `text.heading2.mobile` | Cormorant Garamond | 500 | 32 px | 38 px | `-0.01em` |
| `text.heading3.mobile` | Manrope | 600 | 22 px | 29 px | `-0.008em` |
| `text.body.large.mobile` | Manrope | 400 | 17 px | 27 px | `0` |
| `text.body.mobile` | Manrope | 400 | 16 px | 25 px | `0` |
| `text.small.mobile` | Manrope | 500 | 14 px | 21 px | `0.005em` |
| `text.caption.mobile` | Manrope | 600 | 12 px | 18 px | `0.055em` |

### Typography rules

- Keep body lines between approximately 55 and 75 characters on desktop.
- Use sentence case for headings and actions. Uppercase is reserved for short captions/eyebrows and must not exceed approximately 24 characters.
- Product names may wrap to two lines in cards; do not truncate essential differentiators without a full accessible label.
- Do not place important copy directly over detailed imagery unless a tested scrim makes contrast reliable.

---

# 6. Spacing, sizing, radius, shadows, and icons

## 6.1 Spacing scale

| Token | Value |
|---|---:|
| `spacing.0` | 0 px |
| `spacing.2xs` | 4 px |
| `spacing.xs` | 8 px |
| `spacing.sm` | 12 px |
| `spacing.md` | 16 px |
| `spacing.lg` | 24 px |
| `spacing.xl` | 32 px |
| `spacing.2xl` | 48 px |
| `spacing.3xl` | 64 px |
| `spacing.4xl` | 80 px |
| `spacing.5xl` | 96 px |
| `spacing.6xl` | 128 px |

Typical desktop section padding is `80–128 px`; tablet is `64–80 px`; mobile is `48–64 px`.

## 6.2 Radius

| Token | Value | Use |
|---|---:|---|
| `radius.none` | 0 px | Editorial image edges where intentional |
| `radius.sm` | 4 px | Chips and small controls |
| `radius.md` | 8 px | Fields and buttons |
| `radius.lg` | 12 px | Cards and alerts |
| `radius.xl` | 20 px | Modal/sheet |
| `radius.full` | 999 px | Status dots only; avoid pill overuse |

## 6.3 Shadows

| Token | Value | Use |
|---|---|---|
| `shadow.sm` | `0 1px 2px rgba(43,33,27,.08)` | Raised controls |
| `shadow.md` | `0 10px 30px rgba(43,33,27,.10)` | Hovered product card or sticky bar |
| `shadow.lg` | `0 24px 64px rgba(43,33,27,.18)` | Modal |

Use borders and spacing before shadows. Product cards have no default drop shadow.

## 6.4 Core sizing

- Desktop customer header: 88 px high.
- Mobile customer header: 64 px high.
- Admin top bar: 64 px high.
- Desktop button heights: 48 px default, 56 px large.
- Mobile button height: minimum 52 px.
- All touch targets: minimum `44 × 44 px`.
- Form controls: 52 px desktop; 56 px mobile; textarea minimum 128 px.
- Desktop enquiry modal: max width 720 px.
- Desktop content max width: 1280 px.

## 6.5 Iconography

- Use one outline icon set with 1.75–2 px stroke, rounded joins, and simple geometry.
- Required icons only: menu, close, chevron, arrow, phone, WhatsApp, mail, location if confirmed, image navigation, check, alert, info, loading spinner, upload, edit, delete, visibility, sign out.
- Use the official WhatsApp brand icon according to its brand guidance.
- Do not use emoji as interface icons.

---

# 7. Grid system and breakpoints

## 7.1 Figma reference frames

| Mode | Reference frame | Content width | Columns | Gutter | Outer margin |
|---|---:|---:|---:|---:|---:|
| Mobile | 390 px | 358 px | 4 | 16 px | 16 px |
| Tablet | 834 px | 770 px | 8 | 20 px | 32 px |
| Desktop | 1440 px | 1280 px | 12 | 24 px | 80 px |
| Large desktop | 1600 px | 1360 px max | 12 | 24 px | 120 px minimum |

Product imagery may intentionally bleed beyond the content grid in home hero/editorial sections, but interactive controls and copy remain aligned to the grid.

## 7.2 Design breakpoints

| Breakpoint | Range | Primary behavior |
|---|---|---|
| `mobile` | 0–599 px | 4-column grid; stacked layouts; mobile menu; sticky enquiry bar |
| `tablet` | 600–1023 px | 8-column grid; compact header/menu as needed; 2-column product grid |
| `desktop` | 1024–1439 px | 12-column grid; full header; split product detail; 3-column product grid |
| `large` | 1440 px and above | Content max-width retained; larger whitespace; 3 or 4 cards only if card minimum width remains 280 px |

Do not shrink a 1440 px frame proportionally. Components reflow according to their content and rules below.

---

# 8. Component library

Only the components required by confirmed MVP requirements are included.

## 8.1 Global customer navigation

### `Customer/Header`

**Desktop anatomy:** logo; links for Home and Sofas; category navigation for L-Shape Sofas, Sofa Combos, and Recliners; Contact Us; phone icon/link; WhatsApp action; Enquire action only when a product context is available.

**Important scope rule:** Search, Offers, and Become a Dealer appear in the supplied header image but remain excluded/TBD in product requirements. Do not include them in the MVP header.

Variants:

- `Viewport=Desktop, State=Default`
- `Viewport=Desktop, State=Scrolled` — surface background with subtle bottom border
- `Viewport=Mobile, State=Default` — logo, phone/WhatsApp shortcut, menu button
- `Viewport=Mobile, State=MenuOpen`

Behavior:

- Header remains visually quiet; sticky behavior is permitted if it does not compete with the mobile product CTA.
- Current page is indicated by weight and underline, not colour alone.
- Dropdown, if used for “Sofas,” opens on click and keyboard activation; never hover-only.

### `Customer/Mobile Menu`

Full-height modal sheet with close control, category links, Contact Us, WhatsApp, and phone. Lock background scroll; focus stays in the sheet; Escape closes on keyboard devices.

### `Customer/Footer`

Logo, short non-factual brand line using the supplied tagline, category links, Contact Us, phone and WhatsApp, and legal links only when legal content is supplied. Social links and physical address remain hidden until confirmed.

## 8.2 Buttons and links

### `Customer/Button`

Properties:

- `Type=Primary | Secondary | Ghost | Text | Icon`
- `Size=Small | Medium | Large`
- `State=Default | Hover | Focus | Active | Disabled | Loading`
- `Width=Hug | Fill`
- `Icon=None | Leading | Trailing | Only`

State rules:

- **Primary:** deep brown fill, inverse text.
- **Secondary:** transparent/ivory fill, strong brown border.
- **Ghost:** no border; subtle surface on hover.
- **Text:** underlined or arrow-supported; never colour-only.
- **Focus:** 2 px focus ring plus 2 px offset.
- **Disabled:** reduced contrast but readable; no hover shadow.
- **Loading:** preserve button width, show spinner, label “Sending…” where appropriate, block repeat action.

Recommended labels: “Explore sofas,” “View sofa,” “Enquire now,” “Send enquiry,” “Try again,” “Browse all sofas,” “Contact us.”

## 8.3 Category tile

`Customer/Category Tile`

- Large `4:3` image, category name, optional directional arrow.
- Entire tile is one link with a single accessible name.
- Variants: `Default`, `Hover`, `Focus`, `ImageLoading`.
- No promotional badge or product count unless real data is available and approved.

## 8.4 Product card

`Customer/Product Card`

Anatomy:

1. `4:3` primary product image.
2. Product name.
3. Optional confirmed short subtitle only.
4. Text action “View sofa.”

Variants:

- `State=Default`
- `State=Hover` — image scale up no more than 1.02, subtle border/shadow change, 180–220 ms
- `State=Focus`
- `State=Loading`
- `State=Unavailable` — only when status data is confirmed; no enquiry CTA

Rules:

- The MVP card does not show price, ratings, sale labels, colours, availability, or a wishlist icon.
- Treat cards as catalogue entries rather than commerce tiles: framed image, folio number, small category label, serif product name, one confirmed descriptive line when available, and a restrained text action.
- Product cards may use different image scales within an intentional editorial composition; repeated entries still share component anatomy and accessible interaction.
- Use fine borders and typography instead of default card containers, rounded shells, or drop shadows.
- On touch devices, all information is visible without hover.

## 8.5 Product gallery

`Customer/Product Gallery`

- Desktop: large primary image plus vertical or horizontal thumbnails.
- Mobile: large swipeable image, position indicator, and accessible previous/next controls.
- Variants: `SingleImage`, `MultipleImages`, `ImageLoading`, `ImageError`, `Fullscreen`.
- Thumbnail selection uses border plus semantic selected state.
- Fullscreen gallery must include close, next/previous, image count, alt text, focus trap, and zoom only if usability is verified. Zoom is optional, not an MVP requirement.

## 8.6 Configuration selector

`Customer/Configuration Selector`

- Use radio cards because one configuration is selected at a time.
- Variants: `Default`, `Hover`, `Focus`, `Selected`, `Disabled`, `Error`.
- Label uses client-provided configuration name only.
- If product has zero configurations, omit the entire selector and retain the product context.
- If a selection is required for that product, the Enquire action validates selection and moves focus to the error.

> **TBD — Design decision required:** Confirm configuration types, labels, selection requirement, and whether unavailable configurations exist.

## 8.7 Enquiry entry components

### `Customer/Enquiry CTA Group`

- Primary: “Enquire now.”
- Secondary: “WhatsApp us.”
- Tertiary: click-to-call phone number or “Call us” until number is supplied.
- Desktop appears in product summary; mobile uses a bottom sticky action bar.

### `Customer/Mobile Sticky Enquiry Bar`

- Fixed above safe area; primary action fills available width.
- Optional WhatsApp icon button remains secondary.
- Must not obscure content; add bottom page padding equal to bar height.
- Hide while the enquiry sheet is open.

## 8.8 Forms

### Required primitives

- `Form/Label`
- `Form/Text Input`
- `Form/Phone Input`
- `Form/Email Input`
- `Form/Textarea`
- `Form/Radio`
- `Form/Checkbox` only for any approved consent/privacy acknowledgement
- `Form/Field Message`
- `Form/Form Alert`

Shared states:

- `Default`
- `Hover`
- `Focus`
- `Filled`
- `Error`
- `Disabled`
- `ReadOnly`
- `Loading`
- `Success` where useful

Form rules:

- Persistent visible labels; placeholders provide examples, not labels.
- Required status appears in label text and is explained once at form start.
- Errors appear below the field and in a form summary after failed submission.
- Values persist after validation or network errors.
- Product and configuration context are read-only visible values in the form, not only hidden fields.
- Full name requires at least 2 characters.
- Message maximum is 500 characters with a live character count.
- Use input purpose/autocomplete annotations in handoff.

> **TBD — Design decision required:** The PRD conflicts between collecting both phone/email and requiring at least one. The final required/optional rule must be confirmed. Design both variants and mark one “pending approval.”

## 8.9 Enquiry modal/sheet

`Customer/Enquiry Dialog`

- Desktop/tablet: centred modal up to 720 px, with visible product summary.
- Mobile: full-screen sheet, not a cramped modal.
- Variants: `Form`, `ValidationError`, `Submitting`, `NetworkError`, `Success`.
- Close button is always available except during the exact in-flight request if closing could create ambiguity.
- Clicking backdrop/Escape may close the unsubmitted form only after an optional confirmation if user-entered values would be lost.
- Success requires an explicit close action; no automatic close is defined.

## 8.10 Feedback and system components

- `Feedback/Inline Alert`: info, warning, error, success.
- `Feedback/Toast`: admin save confirmation and non-blocking errors; not the sole container for form errors.
- `Feedback/Skeleton`: product cards, detail gallery, title/config block.
- `Feedback/Empty State`: category empty and admin product list empty.
- `Feedback/Error State`: failed catalogue load and product image failure.
- `Feedback/Spinner`: button-level only; skeleton preferred for page loading.

## 8.11 Breadcrumbs

- Desktop/tablet: `Home / Sofas / Category / Product`.
- Mobile: use a single “Back to [category]” link to avoid cramped wrapping.
- Current item is text, not a link.

## 8.12 Admin components

- `Admin/Sidebar`: Products, Categories, Sign out. Do not include Enquiries until confirmed.
- `Admin/Top Bar`: page title, admin identity if available, primary page action.
- `Admin/Data Table`: image thumbnail, product name, category, configuration count, visibility/state if supported by the product model, edit action, delete action.
- `Admin/Product Form`: name, category, images with alt text, and configuration repeater. Additional product fields remain hidden until approved.
- `Admin/Image Uploader`: drag/drop plus browse, progress, success, failure, reorder, remove, alt-text input.
- `Admin/Configuration Row`: name, reorder, remove.
- `Admin/Confirm Dialog`: destructive delete confirmation naming the product.
- `Admin/Toast`: saved, upload failed, delete failed.
- `Admin/Pagination`: only if product volume requires it. The exact method is TBD; do not add infinite scroll to admin tables.

---

# 9. Component state matrix

| Component | Default | Hover | Focus | Active/selected | Disabled | Loading | Error | Empty/success |
|---|---|---|---|---|---|---|---|---|
| Button | Required | Required | Required | Required | Required | Required | N/A | N/A |
| Product card | Required | Required | Required | N/A | N/A | Required | Image error | Unavailable only if supported |
| Category tile | Required | Required | Required | Current category | N/A | Required | Image error | N/A |
| Input/textarea | Required | Required | Required | Filled | Supported | N/A | Required | Optional success |
| Radio card/config | Required | Required | Required | Required | Supported if data exists | N/A | Required | N/A |
| Gallery | Required | Controls | Controls | Selected image | N/A | Required | Required | Single-image variant |
| Enquiry dialog | Form | N/A | Focus trap | N/A | Submit disabled only when necessary | Submitting | Validation/network | Success |
| Product listing | Populated | N/A | Card-level | Current category | N/A | Skeleton | Load failure | Empty category |
| Admin table | Populated | Row action | Row action | N/A | Action-level | Skeleton | Load failure | No products |
| Upload | Drop zone | Required | Required | File added | Required | Progress | Upload failure | Upload success |

---

# 10. Screen inventory

The blueprint identifies **13 primary screen/overlay templates** and **12 critical state frames**. Desktop, tablet, and mobile layouts are required for all customer templates and core admin tasks.

## 10.1 Primary templates

| ID | Screen/template | User | MVP status | Primary action |
|---|---|---|---|---|
| C01 | Home | Customer | Confirmed | Explore a sofa category |
| C02 | Category product listing | Customer | Confirmed | View a sofa |
| C03 | Product details | Customer | Confirmed | Enquire for selected product/configuration |
| C04 | Contact Us | Customer | Confirmed | WhatsApp, call, or send general enquiry |
| C05 | Product unavailable / 404 | Customer | Confirmed edge case | Browse all sofas |
| O01 | Mobile navigation sheet | Customer | Confirmed | Navigate to category/contact |
| O02 | Product enquiry form dialog/sheet | Customer | Confirmed | Send enquiry |
| O03 | Enquiry success dialog/sheet | Customer | Confirmed | Close or continue browsing |
| A01 | Admin login | Admin | Confirmed | Sign in |
| A02 | Admin home | Admin | Confirmed shell | Manage products |
| A03 | Admin product list | Admin | Confirmed | Add or edit product |
| A04 | Admin create product | Admin | Confirmed | Save product |
| A05 | Admin edit product | Admin | Confirmed | Save changes |

## 10.2 Critical state frames

1. Home/category imagery loading.
2. Category listing loading.
3. Category listing empty.
4. Category listing load error.
5. Product detail loading.
6. Product gallery image error.
7. Enquiry validation errors.
8. Enquiry submitting.
9. Enquiry network failure.
10. Admin login error.
11. Admin product list empty/loading.
12. Admin product save/upload/delete error and success feedback.

Offers, Dealer, About, testimonials, and enquiry-management screens are not part of this inventory.

---

# 11. Desktop screen requirements

## C01 — Home

**Purpose:** Introduce the brand, enable immediate category discovery, show representative sofas, and route to contact.

**Required sections in order**

1. **Header:** logo, confirmed navigation, phone/WhatsApp routes.
2. **Editorial hero:** one dominant full-width supplied product image with the sofa unobstructed; layered collection label, folio detail, oversized serif tagline, restrained supporting note, and text-led collection action. The composition is asymmetric and resembles a luxury catalogue opening rather than a conventional image/text split.
3. **Category discovery:** L-Shape Sofas, Sofa Combos, Recliners, and general Sofas only if it represents a real distinct category rather than “all.”
4. **Featured sofas:** include only if a featured set can be managed or explicitly supplied. Otherwise use “Explore the collection” with a small selection of active products.
5. **Enquiry process:** three concise steps—choose a sofa, send an enquiry, speak with the team. Do not promise timing or quote method.
6. **Contact CTA band:** WhatsApp, phone, and Contact Us.
7. **Footer.**

**Do not include:** testimonials, statistics, delivery/warranty claims, offers, dealer recruitment, newsletter, or invented craftsmanship claims.

**Desktop composition:** full-bleed editorial hero, asymmetric category image composition, hierarchical catalogue layout with featured and supporting products, numbered sections, framed photography, and 96–144 px vertical rhythm.

## C02 — Category product listing

**Purpose:** Let customers scan active products in one category.

**Content**

- Breadcrumbs.
- Category title and optional `[Content TBD]` introduction.
- Category navigation tabs/links.
- Product count only if data is reliable.
- Editorial catalogue composition at 1440 px: dominant 7-column entries paired with 5-column entries, followed by 4-column supporting entries. Preserve consistent component anatomy even when image scale changes.
- Footer/contact route.

**Excluded:** search, filter, sort, quick add, wishlist, price filters, and infinite scroll.

**Pagination:** product volume is unknown. The initial design should show one continuous page with a documented slot for pagination, not implement a pattern without volume data.

> **TBD — Design decision required:** Confirm catalogue size and choose no pagination, numbered pagination, or “Load more.”

## C03 — Product details

**Purpose:** Give enough confirmed product context for an informed enquiry.

**Desktop composition**

- Breadcrumbs.
- Left `7 columns`: dominant image gallery.
- Right `5 columns`: product name, optional confirmed category/subtitle, configuration selector, visible pricing treatment only after policy confirmation, enquiry CTA group, and short “What happens next” note.
- Below the fold: description/specification regions only for approved fields. Do not show empty accordions.
- Contact band and footer.

**Information rules**

- Product name and images are mandatory.
- Show configurations when available.
- Keep core facts visible rather than hiding everything in accordions.
- If dimensions/materials/description become confirmed, use a scannable definition list and one description block.
- “Price on request” is not shown until pricing policy is confirmed; the absence of price must not be replaced with invented wording.

## C04 — Contact Us

**Purpose:** Provide a direct non-product-specific route to the business.

**Content**

- H1 “Contact Kouch.”
- Short copy: “Tell us what you’re looking for, or contact the team directly.”
- WhatsApp and phone action cards using supplied details when available.
- General enquiry form with name, at least one confirmed contact method, and optional message.
- Official business email/address/hours only after supplied.
- Explanation that product-specific enquiries are best started from a product page.

**Do not include:** unsupported response SLA, map, showroom location, delivery area, or social accounts.

## C05 — Product unavailable / 404

**Purpose:** Recover from deleted or invalid product URLs.

**Content**

- “This sofa is no longer available.”
- “The link may be out of date. Explore the current collection or contact us for help.”
- Primary “Browse all sofas.”
- Secondary “Contact us.”
- One calm image or neutral surface; do not display a broken product card.

## O02/O03 — Enquiry form and success

**Form content**

- Visible product thumbnail/name.
- Visible selected configuration or “No configuration selected” when optional.
- Full Name.
- Phone Number.
- Email Address.
- Message / Questions, optional, max 500.
- Submit “Send enquiry.”
- Secondary WhatsApp option.
- Privacy/consent copy: `[Content TBD]`.

**Success content**

- Heading: “Thank you for your enquiry.”
- Body: “Your product details have been sent to the Kouch team. A salesperson will contact you using the details provided.”
- Do not state a response time.
- Primary “Close.”
- Optional secondary “Continue browsing.”

## A01 — Admin login

- Compact, practical surface separate from consumer branding.
- Logo, email/username field according to authentication model, password, show/hide password, Sign in.
- Error: “We couldn’t sign you in. Check your details and try again.”
- Password reset is not included unless the authentication requirements confirm it.

## A02 — Admin home

- Practical navigation shell.
- Introductory panel and direct actions: “View products” and “Add product.”
- Do not fabricate revenue, enquiry, conversion, or traffic metrics.
- If simple product counts are technically available, they may be shown only after data confirmation.

## A03 — Admin product list

- Page title and “Add product.”
- Table of product image, name, category, number of configurations, and actions.
- Search within admin is not assumed; add only if product volume makes it necessary and the requirement is approved.
- Delete requires confirmation and explains effect on public links.

## A04/A05 — Admin product editor

- Create and edit share one component/template with different titles and initial values.
- Sections: Basic information, Category, Images and alt text, Configurations.
- Name, at least one category, and product context required.
- Image requirements and validation are visible before upload.
- Reorder images; identify primary image.
- Save action remains visible without obscuring content.
- Warn before leaving with unsaved changes.
- TBD product fields must not be silently included in the MVP form.

---

# 12. Tablet and mobile requirements

## 12.1 Cross-screen responsive rules

| Pattern | Desktop | Tablet | Mobile |
|---|---|---|---|
| Navigation | Full links | Compact links or menu based on fit | Menu sheet |
| Hero | Split 7/5 or full-bleed editorial | Balanced split or stacked | Stacked image and copy |
| Product grid | 3 columns | 2 columns | 1 column by default; 2 only if image/name remain legible |
| Product detail | Gallery + sticky summary | 7/5 or stacked based on width | Fully stacked |
| Enquiry | Centred modal | Centred modal | Full-screen sheet |
| Product CTA | In summary | In summary/sticky when needed | Sticky bottom action |
| Breadcrumb | Full trail | Full/short trail | Back link |
| Form | Optional 2-field row | Single or 2-field row | Single column |
| Admin table | Full table | Reduced columns | Card/list rows |

## 12.2 Mobile screen specifics

### Home

- Logo remains legible but compact; do not include the full tagline in the header if it reduces readability.
- Hero image appears before or after headline based on crop quality; CTA stays above the first scroll threshold where practical.
- Categories stack as large image links.
- Featured products use one column unless testing proves two columns maintain a premium image and readable names.

### Category listing

- Sticky category selector is optional; avoid horizontal scroll unless intentionally implemented as a labelled, keyboard-accessible tab strip.
- Preferred design is a “Categories” disclosure or wrapped category links.
- Product cards expose “View sofa” without hover.

### Product detail

- Order: back link → name → gallery → configuration → enquiry actions → confirmed details.
- Sticky bottom “Enquire now” is required by User Flows.
- Respect iOS/Android safe areas.
- Gallery swipe must also have accessible buttons and image count.
- Contact alternatives are visible near the main CTA, not repeated after every section.

### Enquiry sheet

- Use a full-screen sheet with 16 px side padding and 24 px section gaps.
- Keep the close control at least 44 px and reachable.
- Inputs use appropriate mobile keyboards.
- Submit action remains visible only if it does not hide active fields; otherwise place it naturally at form end and scroll the first error into view.
- Prevent background scroll and horizontal overflow.

### Contact

- Phone and WhatsApp actions are full-width 52 px buttons.
- General enquiry form is single-column.

### Admin

- Admin is responsive because product management may occur on tablet/mobile, but desktop is the preferred heavy-management surface.
- Product table becomes stacked rows/cards.
- Image upload and reorder must remain touch-accessible.
- Editor sections stack; save bar remains above safe area.

## 12.3 Mobile interaction standards

- Minimum touch target: `44 × 44 px`; preferred primary action height: 52–56 px.
- Minimum side margin: 16 px.
- No essential hover-only information.
- No page-level horizontal scrolling.
- Ensure the sticky CTA does not cover footer controls, validation messages, or focused inputs.
- Use 16 px or larger form text to avoid browser zoom.

---

# 13. Screen annotations for Figma

Every major frame must include numbered annotation pins linked to an annotation panel. Use this minimum set:

| Annotation | Required note |
|---|---|
| `A — Purpose` | User goal and primary action |
| `B — Data` | Required/optional fields and source; mark unknown factual content `[Content TBD]` |
| `C — Interaction` | Click/tap/keyboard behavior and destination |
| `D — State` | Loading, empty, error, success, disabled, selected |
| `E — Responsive` | Reflow, hide/show, order, and sticky behavior by breakpoint |
| `F — Business rule` | Product/configuration context and enquiry association |
| `G — Accessibility` | Heading level, accessible name, focus order, alt text, live region |
| `H — Analytics TBD` | Potential event name only if analytics approval is pending; do not present as confirmed |

### Key frame annotations

- **Product card:** image focal point; entire-card link behavior; no price until approved.
- **Configuration:** single-select behavior; required/optional rule; selected value passed to enquiry.
- **Enquiry dialog:** visible and hidden product IDs; contact-method validation; field value persistence; close behavior.
- **Success:** confirmation appears only after server success; email delivery to business is a backend event, not a visual promise.
- **WhatsApp:** pre-filled product-aware message; handoff to app/web; website flow ends after deep link.
- **Product editor:** required fields; image format/size rules; primary image; alt-text requirement; destructive actions.

---

# 14. User-flow mapping

The blueprint contains **5 major flows**.

## Flow 1 — Product discovery

`C01 Home → Category tile/navigation → C02 Category listing → Product card → C03 Product details`

- Requirements: BR-001–005, PRD-FR-001–005.
- Alternative: user switches category and remains in C02.
- Recovery: empty category → Browse all sofas.

## Flow 2 — Product enquiry

`C03 Product details → Select configuration if present → O02 Enquiry form → Validation → Submitting → O03 Success`

- Requirements: BR-006–010, PRD-FR-006–007.
- Validation loop: invalid field → inline error → correction → resubmit.
- Failure loop: network error → values retained → Try again.
- Abandonment: close dialog/sheet → return to same product and selected configuration.

## Flow 3 — Direct contact

`Any customer screen → WhatsApp or phone → OS/app handoff`

Alternative:

`Any customer screen → C04 Contact Us → General enquiry → Success`

- WhatsApp pre-filled product name/configuration when entered from C03.
- General contact does not fabricate a product context.

## Flow 4 — Mobile discovery and enquiry

`C01 Mobile → O01 Mobile menu → C02 Mobile category → C03 Mobile product → Sticky Enquire → O02 Full-screen sheet → O03 Success`

- This is a separate prototype path to verify menu, gallery, sticky CTA, keyboard, and safe-area behavior.

## Flow 5 — Admin product management

`A01 Login → A02 Admin home → A03 Products → A04 Create or A05 Edit → Save success → A03 Products`

- Requirements: PRD Sections 14, 15, 22, and acceptance criteria.
- Error paths: invalid login, upload failure, save failure, delete confirmation.
- Enquiry management is excluded pending confirmation.

---

# 15. Prototype requirements

Create separate desktop and mobile prototype starting points. Prototype only confirmed interactions.

## 15.1 Prototype connections

1. **Desktop discovery:** Home primary CTA/category → Category listing → Product detail.
2. **Desktop enquiry:** Product configuration → Enquire → form validation → loading → success → close.
3. **Desktop contact:** Header/footer/product contact action → Contact or external handoff confirmation.
4. **Mobile core journey:** Home → menu open/close → category → product → sticky enquiry → sheet → success.
5. **Admin CRUD:** Login success/error → product list → create/edit → upload/save success/error.

## 15.2 Interaction specification

- Page transitions: dissolve or smart animate, 180–240 ms, ease out.
- Mobile menu: slide from right, 220 ms.
- Enquiry sheet: move in from bottom, 240 ms.
- Dialog backdrop: fade, 160 ms.
- Product image hover: scale maximum 1.02, 200 ms.
- Field errors: no shaking; focus and scroll to first error.
- Success: subtle check reveal, under 250 ms; no confetti.
- Honour reduced-motion preference by substituting instant/fade transitions.

## 15.3 Prototype notes

- External WhatsApp/phone links should use a labelled prototype destination frame explaining app handoff rather than falsely simulating WhatsApp.
- Do not prototype checkout, payment, offers, dealer, search, filters, or customer login.
- Use realistic but clearly fictional contact data in prototype forms.

---

# 16. Accessibility requirements

## 16.1 Visual

- Target WCAG 2.2 AA contrast for text and controls.
- Body text remains at least 16 px.
- Focus indicators are visible against all surfaces and are not removed.
- Selected configuration uses border, icon, and text—not colour alone.
- Error, success, and warning states use icon plus message.
- Text over images requires a contrast-safe solid/scrim treatment or must move outside the image.

## 16.2 Structure and navigation

- One H1 per page; subsequent headings follow a logical hierarchy.
- Provide a “Skip to main content” link.
- Header, main, navigation, and footer landmarks are annotated.
- Keyboard order follows visual order.
- Modal/sheet focus is trapped; focus returns to the trigger on close.
- Escape closes dialogs where safe.
- Do not create keyboard traps in galleries or menus.

## 16.3 Forms

- Every field has a persistent visible label.
- Required fields and format expectations are stated before submission.
- Errors are specific and associated with fields.
- After invalid submission, focus moves to an error summary, with links to fields where feasible.
- Submission status uses an appropriate live region.
- Never clear entered values after network failure.
- Error copy does not blame the user.

## 16.4 Images and motion

- Product images require specific alt text; decorative images use empty alt treatment.
- Multiple gallery images should distinguish views without repetitive marketing copy.
- Auto-rotating carousels are not permitted.
- All motion is brief, functional, and reducible.

## 16.5 Touch and screen size

- Touch targets are at least 44 px.
- Content supports 200% zoom without loss of function.
- No horizontal overflow at 320 px minimum viewport.
- Sticky actions account for browser UI and device safe areas.

---

# 17. UX copy library

All factual product details not supplied must use `[Content TBD]` in design files, not invented marketing claims.

## 17.1 Home and discovery

| Context | Copy |
|---|---|
| Hero eyebrow | `Kouch sofa collection` |
| Hero heading | `Comfort that feels like home` |
| Hero supporting copy | `Explore sofas for the spaces you live in, then speak with our team about the option that interests you.` |
| Primary CTA | `Explore sofas` |
| Category heading | `Find your kind of comfort` |
| Collection heading | `Explore the collection` |
| Process heading | `From discovery to enquiry` |
| Step 1 | `Choose a sofa` |
| Step 2 | `Share your interest` |
| Step 3 | `Speak with the team` |

## 17.2 Product listing

| Context | Copy |
|---|---|
| H1 pattern | `[Category name]` |
| Card action | `View sofa` |
| Empty heading | `New pieces are coming soon` |
| Empty body | `There are no products in this category right now. Explore the complete sofa collection instead.` |
| Empty CTA | `Browse all sofas` |
| Load error heading | `We couldn’t load this collection` |
| Load error body | `Please try again. If the problem continues, contact the Kouch team.` |
| Retry | `Try again` |

## 17.3 Product details

| Context | Copy |
|---|---|
| Configuration legend | `Choose a configuration` |
| Primary CTA | `Enquire now` |
| WhatsApp CTA | `Ask on WhatsApp` |
| Phone CTA | `Call us` |
| Next-step heading | `What happens next` |
| Next-step body | `Send the product and configuration you’re interested in. The Kouch team will contact you to discuss the details and quotation.` |
| Missing required configuration | `Choose a configuration before continuing.` |
| Image error | `This image is unavailable.` |

## 17.4 Enquiry

| Context | Copy |
|---|---|
| Dialog title | `Enquire about this sofa` |
| Intro | `Share your contact details and any questions. Your selected product details will be included automatically.` |
| Name label | `Full name` |
| Phone label | `Phone number` |
| Email label | `Email address` |
| Message label | `Message or questions (optional)` |
| Message helper | `Up to 500 characters` |
| Submit | `Send enquiry` |
| Loading | `Sending…` |
| Name error | `Enter your full name using at least 2 characters.` |
| Phone error | `Enter a valid phone number.` |
| Email error | `Enter a valid email address.` |
| Contact rule error | `Enter at least one way for us to contact you.` |
| Message error | `Keep your message to 500 characters or fewer.` |
| Network error | `Your enquiry wasn’t sent. Check your connection and try again. Your details have been kept.` |
| Success heading | `Thank you for your enquiry` |
| Success body | `Your product details have been sent to the Kouch team. A salesperson will contact you using the details provided.` |

## 17.5 Contact and unavailable

| Context | Copy |
|---|---|
| Contact H1 | `Contact Kouch` |
| Contact intro | `Tell us what you’re looking for, or contact the team directly.` |
| WhatsApp | `Message on WhatsApp` |
| Phone | `Call Kouch` |
| General submit | `Send message` |
| 404 heading | `This sofa is no longer available` |
| 404 body | `The link may be out of date. Explore the current collection or contact us for help.` |
| 404 primary | `Browse all sofas` |

## 17.6 Admin

| Context | Copy |
|---|---|
| Login heading | `Sign in to manage Kouch` |
| Login error | `We couldn’t sign you in. Check your details and try again.` |
| Product list heading | `Products` |
| Add action | `Add product` |
| Save create | `Publish product` |
| Save edit | `Save changes` |
| Empty products | `No products have been added yet.` |
| Upload error | `This image couldn’t be uploaded. Check the file and try again.` |
| Save error | `Your changes weren’t saved. Review the form and try again.` |
| Save success | `Product saved.` |
| Delete title | `Delete [product name]?` |
| Delete body | `This removes the product from the catalogue and may make existing links unavailable.` |

---

# 18. Design tokens

Create Figma variables in collections for `Primitive`, `Semantic`, and `Mode`. Use Light mode only for MVP; do not design dark mode without a requirement.

## 18.1 Semantic tokens

```text
color.primary
color.primary.hover
color.secondary
color.secondary.hover
color.background
color.surface
color.surface.subtle
color.text.primary
color.text.secondary
color.text.inverse
color.border
color.border.strong
color.accent
color.focus
color.success
color.success.surface
color.warning
color.warning.surface
color.error
color.error.surface
color.overlay

text.display
text.heading1
text.heading2
text.heading3
text.body.large
text.body
text.small
text.caption
text.button

spacing.2xs
spacing.xs
spacing.sm
spacing.md
spacing.lg
spacing.xl
spacing.2xl
spacing.3xl
spacing.4xl
spacing.5xl
spacing.6xl

radius.none
radius.sm
radius.md
radius.lg
radius.xl
radius.full

shadow.sm
shadow.md
shadow.lg

size.touch.minimum
size.button.medium
size.button.large
size.header.desktop
size.header.mobile
size.content.maximum
```

## 18.2 Component tokens

Alias semantic variables rather than using raw values:

```text
button.primary.background.default = color.primary
button.primary.background.hover = color.primary.hover
button.primary.text = color.text.inverse
field.background = color.surface
field.border.default = color.border
field.border.focus = color.focus
field.border.error = color.error
card.product.background = color.surface
dialog.background = color.surface
stickyBar.background = color.surface
```

---

# 19. Figma production and handoff checklist

## 19.1 Design production sequence

1. Build variables and text styles.
2. Import the supplied logo JPEG, preserve the original on the asset-reference page, and create the tightly cropped `Brand/Logo/Full Lockup` component.
3. Establish image crops and focal points.
4. Build primitive components and states.
5. Build composed customer components.
6. Build admin components.
7. Design desktop core journey.
8. Design mobile core journey independently.
9. Add tablet references.
10. Add all critical states.
11. Connect prototypes.
12. Add annotations and requirement traceability.
13. Run design QA and accessibility review.

## 19.2 Developer-facing handoff notes

Although this is not a code specification, each handoff frame must include:

- Component name and variant.
- Content/data dependency.
- Responsive rule.
- Interaction and state transition.
- Focus order and accessible name.
- Image aspect ratio and focal point.
- Error/success behavior.
- Business-rule reference.
- Any unresolved item explicitly marked `TBD — Design decision required`.

---

# 20. Design QA checklist

## 20.1 UX

- [ ] Home provides clear routes to categories without unsupported sections.
- [ ] All confirmed categories are reachable from desktop and mobile navigation.
- [ ] Product cards show image and name and lead to details.
- [ ] Product detail makes images and configurations easy to understand.
- [ ] Product/configuration context remains visible in the enquiry experience.
- [ ] Form, WhatsApp, and phone routes are clear but not visually competing.
- [ ] Enquiry validation retains values and points to the exact problem.
- [ ] Submission success appears only after confirmed success.
- [ ] Network failure permits retry without data loss.
- [ ] Empty category and unavailable product routes recover gracefully.
- [ ] Admin can sign in and create/edit products, images, and configurations.
- [ ] No unconfirmed checkout, account, search, filter, offer, dealer, review, or enquiry-dashboard functionality appears.

## 20.2 UI

- [ ] Colours use semantic variables rather than raw values.
- [ ] Orange and brown visually reference the supplied logo and are labelled as non-official until exact HEX values are approved.
- [ ] The working JPEG logo is tightly and non-destructively cropped with no excessive white canvas.
- [ ] Typography uses no more than two families.
- [ ] Spacing follows the documented scale.
- [ ] Images follow consistent crop rules and preserve full product visibility.
- [ ] Cards avoid unnecessary borders, badges, shadows, and metadata.
- [ ] Button, field, selector, dialog, upload, and feedback states are complete.
- [ ] Customer and admin visual languages are related but appropriately distinct.
- [ ] Product facts use real supplied content or `[Content TBD]`.

## 20.3 Responsive

- [ ] Desktop frames exist at 1440 px.
- [ ] Tablet references exist at 834 px.
- [ ] Mobile frames exist at 390 px and are checked at 320 px.
- [ ] Mobile navigation is fully represented.
- [ ] Product detail intentionally stacks on mobile.
- [ ] Mobile enquiry uses a full-screen sheet.
- [ ] Sticky CTA respects safe areas and does not cover content.
- [ ] Product and admin lists remain usable without horizontal page scrolling.
- [ ] No essential content depends on hover.

## 20.4 Accessibility

- [ ] Text/control contrast meets WCAG 2.2 AA.
- [ ] All touch targets are at least 44 px.
- [ ] Focus state is visible for every interactive component.
- [ ] Heading hierarchy is logical.
- [ ] Modal focus trap and return focus are annotated.
- [ ] Form labels, instructions, error summary, and inline errors are present.
- [ ] Product image alt-text requirements are annotated.
- [ ] State is never communicated by colour alone.
- [ ] Reduced-motion behavior is documented.
- [ ] Zoom/reflow is checked without loss of content.

## 20.5 Product consistency

- [ ] Every designed function maps to a confirmed requirement.
- [ ] The enquiry model is used consistently instead of transaction language.
- [ ] Sales follow-up and quotation are represented as offline/manual.
- [ ] No response SLA, pricing, warranty, delivery, return, or material claim is invented.
- [ ] Project Master conflicts are resolved according to Section 0.3.
- [ ] All open decisions are present in the TBD register.

---

# 21. TBD design decisions

All items below must carry the exact label **“TBD — Design decision required”** in Figma where they affect a frame or component.

| ID | Decision required | Current design treatment | Affected areas |
|---|---|---|---|
| TBD-01 | Official orange and brown HEX values | Use the supplied JPEG colours as visual references; label any sampled Figma swatches “Reference only,” with no invented official HEX values | Foundations, all screens |
| TBD-02 | Official brand fonts and future vector/transparent logo | Use proposed fonts and the tightly cropped JPEG for the current phase; replace the asset later if an approved vector/transparent file is supplied | Foundations, header/footer |
| TBD-03 | Final product categories | Use confirmed Sofas, L-Shape, Combos, Recliners; validate hierarchy | Navigation, home, listing |
| TBD-04 | Product names and factual content | Use `[Content TBD]`; never infer from images | All product screens |
| TBD-05 | Required product details: description, dimensions, material, colour, seating, SKU, features | Omit unconfirmed sections; prepare optional component slots | Product detail/editor |
| TBD-06 | Pricing policy | Do not display price or “Price on request” until approved | Cards, detail, enquiry |
| TBD-07 | Availability model | Do not show availability/unavailable badge except 404 case | Cards, detail, admin |
| TBD-08 | Exact configurations and whether selection is mandatory | Use generic single-select radio-card pattern | Detail, enquiry, admin |
| TBD-09 | Custom sofa requests | General contact message only; do not advertise customization | Contact, product detail |
| TBD-10 | Contact requirement: both phone/email or at least one | Design both validation variants; pending approval | Enquiry/contact |
| TBD-11 | Preferred contact method field | Omit until confirmed | Enquiry form |
| TBD-12 | CAPTCHA/spam prevention | No visible CAPTCHA in base frame; reserve error/verification state if selected | Enquiry form |
| TBD-13 | Consent/privacy wording and legal pages | Use `[Content TBD]` | Forms, footer |
| TBD-14 | Sales follow-up SLA | Do not promise timing | Form helper/success/contact |
| TBD-15 | Official WhatsApp number, phone, email, address, hours, social links | Use labelled placeholders in Figma | Header, contact, footer |
| TBD-16 | WhatsApp pre-filled message wording | Use neutral product/configuration template for review | Product detail/contact |
| TBD-17 | Catalogue size and listing pagination | Show continuous grid with annotated pagination slot | Category listing |
| TBD-18 | Featured-product selection method | Use only if business can supply/manage featured products | Home |
| TBD-19 | Offers | Exclude from MVP | Navigation and future scope |
| TBD-20 | Become a Dealer | Exclude from MVP | Navigation and future scope |
| TBD-21 | About/brand story and craftsmanship facts | Exclude dedicated page and factual claims | Home/future page |
| TBD-22 | Reviews/testimonials | Exclude | Home/product detail |
| TBD-23 | Delivery locations, fees, installation, warranty, returns, lead time | Exclude claims and modules | Product detail/contact |
| TBD-24 | Enquiry storage/admin management | MVP uses email routing; no admin enquiry screens | Admin/flow |
| TBD-25 | Admin roles beyond single Admin | Use single-role shell | Admin |
| TBD-26 | Admin authentication identifier and password recovery | Show generic sign-in; omit reset until confirmed | Admin login |
| TBD-27 | Product publishing/visibility state | Do not add workflow/status controls until data model is confirmed | Admin list/editor |
| TBD-28 | Analytics events and platform | Annotate candidate actions only; no committed tracking spec | Handoff/prototype |
| TBD-29 | Product image ownership, accuracy, and visible artifact cleanup | Treat supplied images as provisional | Asset library/all product screens |
| TBD-30 | Success-dialog close behavior | Require explicit close in the blueprint; confirm before final prototype | Enquiry success |
| TBD-31 | Quotation and payment process | End digital flow at successful enquiry; do not design payment | Success/flows |
| TBD-32 | Exact number of products and category assignment | Use representative repeated components, not invented inventory | Listings/admin |

---

# 22. Blueprint completion summary

- **Primary screens/overlays identified:** 13.
- **Critical state frames identified:** 12.
- **Major user flows:** 5—product discovery, product enquiry, direct contact, mobile discovery/enquiry, and admin product management.
- **Main component groups:** navigation, buttons, category tiles, product cards, gallery, configuration selector, enquiry CTA/sticky bar, forms, enquiry dialog, feedback/states, breadcrumbs, footer, and admin catalogue/editor components.
- **Responsive coverage:** desktop at 1440 px, tablet at 834 px, mobile at 390 px, with large-desktop and 320 px boundary rules.
- **Unresolved design decisions:** 32 tracked items, led by official brand values/assets, product data, pricing, configuration rules, contact validation, business contact details, pagination, admin enquiry handling, and image approval.
