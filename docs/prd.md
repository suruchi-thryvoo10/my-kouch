# Product Requirements Document (PRD)

## 1. Document Information
| Field | Description |
|-------|-------------|
| **Product Name** | Kouch (MyKouch) Website |
| **Document Name** | Kouch Product Requirements Document (PRD) |
| **Version** | 0.1 |
| **Status** | Draft |
| **Created Date** | 2026-10-01 |
| **Last Updated** | 2026-10-01 |
| **Owner** | Suruchi Kumari |
| **Related Documents** | `docs/PROJECT-MASTER.md`, `docs/BRD.md` |

---

## 2. Product Overview
Kouch (MyKouch) is a premium digital product offering primarily sofas, L-shape couches, sofa combos, and recliners. 
The digital product is a web-based catalog that serves to present the brand and products professionally. Instead of a standard e-commerce flow, Kouch uses an enquiry-based sales model. 

Customers currently interact with the business through enquiries, followed by manual contact by a salesperson. The website functions as the top of the funnel to facilitate product discovery, educate customers on available furniture configurations, and smoothly channel their intent into structured leads via an enquiry form, WhatsApp, or phone. The website is critical for digitizing the initial product discovery phase while retaining the high-touch, consultative sales process offline.

---

## 3. Product Goals
- **Goal:** Enable digital product discovery.
  - **Why it matters:** Customers need a reliable platform to explore sofa dimensions and options before enquiring.
  - **Expected product outcome:** A well-structured digital catalog showcasing all products with high-quality images.
  - **Success indicator:** Customers viewing multiple products (TBD page views per session).
  
- **Goal:** Drive qualified enquiries.
  - **Why it matters:** The business depends on converting leads via the sales team.
  - **Expected product outcome:** Intuitive "Enquire" CTAs and simple contact mechanisms on all product pages.
  - **Success indicator:** Increase in enquiries submitted via the website (TBD enquiry volume).
  
- **Goal:** Standardize the lead information captured.
  - **Why it matters:** Salespeople need context (chosen product, configuration) to provide a fast and accurate quote.
  - **Expected product outcome:** A structured enquiry form that automatically maps the enquired product and configuration.
  - **Success indicator:** 100% of form-based enquiries include the product context.

---

## 4. Target Users

### Customer
- **Description:** Individuals or businesses looking to purchase premium sofas and furniture.
- **Goals:** Find high-quality furniture, understand dimensions/options, and get pricing.
- **Needs:** Clear product images, specification details, and an easy way to request a quote.
- **Problems/pain points:** Lack of clarity on available configurations, hidden pricing, and friction in contacting the seller.
- **Expected interaction:** Browse catalog, view product details, select configuration, and submit an enquiry.

### Salesperson
- **Description:** Representatives responsible for closing the sale.
- **Goals:** Quickly receive qualified leads with full context and follow up efficiently.
- **Needs:** Customer contact details, preferred communication method, and exactly which product/configuration they want.
- **Problems/pain points:** Receiving vague enquiries ("how much is a sofa?") without knowing what the customer wants.
- **Expected interaction:** Receive enquiry notifications (via email or TBD system) and contact the customer.

### Admin / Business Owner
- **Description:** Managers of the product catalog and website content.
- **Goals:** Keep the product catalog up to date and monitor business performance.
- **Needs:** Simple content management for products, images, and categories.
- **Problems/pain points:** Complex website management tools.
- **Expected interaction:** Add/edit products, manage images, and review leads.

---

## 5. User Personas

### Persona 1: Sarah the Homeowner
- **User type:** Customer
- **Background:** Moving into a new apartment, seeking a premium L-shape sofa.
- **Goals:** Find a sofa that fits her exact living room dimensions and aesthetic.
- **Pain points:** Frustrated when dimensions or color options are not clearly listed on websites.
- **Motivation:** Wants "comfort that feels like home" without a high-pressure sales pitch.
- **Product needs:** High-resolution images, clear configuration options, and a simple way to ask for a quote via WhatsApp.

### Persona 2: Mark the Sales Rep
- **User type:** Salesperson
- **Background:** Handles inbound leads for Kouch.
- **Goals:** Provide fast quotations to close sales.
- **Pain points:** Wasting time going back and forth just to find out which sofa the customer was looking at.
- **Motivation:** Higher conversion rates and faster sales cycles.
- **Product needs:** Enquiries that clearly attach the product ID and selected configuration.

---

## 6. User Journeys

### 1. Product Discovery to Enquiry Journey
- **Starting point:** User lands on the homepage or a product category page.
- **Steps:**
  - Explores categories (e.g., L-Shape Sofas).
  - Clicks on a specific sofa to view details.
  - Reviews images, description, and available configurations.
  - Selects a specific configuration (if applicable).
  - Clicks "Enquire Now".
  - Fills out the enquiry form (Name, Contact, Message).
  - Submits form.
- **Decision points:** Choosing to enquire via form vs. direct WhatsApp click.
- **End state:** Customer sees a success message; Business receives the structured lead.
- **Possible errors:** Missing required form fields, network failure on submission.

### 2. Direct Contact Journey
- **Starting point:** User is on any page.
- **Steps:**
  - Navigates to the global "Contact Us" or clicks the WhatsApp floating icon/header link.
  - Initiates a direct message or phone call.
- **Decision points:** Choosing phone call vs. WhatsApp.
- **End state:** Customer is connected directly with the sales team.
- **Possible errors:** Invalid WhatsApp link/number.

---

## 7. Information Architecture

- **Home:** Purpose is to introduce the brand, show featured categories, and build trust. Accessed by all users. Main action: Navigate to categories.
- **Products (Category Pages):** List of sofas filtered by type (L-Shape, Combos, Recliners). Accessed by all users. Important info: Product thumbnails and names.
- **Product Details:** Detailed view of a single product. Accessed by all users. Important info: Images, specifications, configurations. Main action: Enquire.
- **Offers (TBD):** Current promotions.
- **Become a Dealer (TBD):** Form/info for B2B partnerships.
- **Contact Us:** Global contact information and general enquiry form.
- **Admin Dashboard (TBD):** Backend for catalog management. Accessed only by Admins.

---

## 8. Feature Requirements

### Product Catalog Listing
**Purpose:** Allow users to browse available furniture.
**User:** Customer.
**Description:** A grid view of products categorized by type.
**Functional Requirements:**
- PRD-FR-001: The system shall display a list of products based on the selected category.
- PRD-FR-002: Each product card shall display a primary image and product name.
**User Interaction:** User scrolls through products and clicks to view details.
**Acceptance Criteria:**
- Given a user is on a category page, when the page loads, then a grid of active product cards is displayed.

### Product Detail View
**Purpose:** Provide full context on a specific sofa.
**User:** Customer.
**Description:** A dedicated page for a single product showing images and specs.
**Functional Requirements:**
- PRD-FR-003: The system shall display multiple product images.
- PRD-FR-004: The system shall display available configurations for the user to select.
- PRD-FR-005: The system shall include an "Enquire" CTA linking to the form.
**Acceptance Criteria:**
- Given a user is on a product page, when they view the page, then they see the name, images, configurations (if any), and an Enquire button.

### Product Specific Enquiry
**Purpose:** Capture lead intent for a specific product.
**User:** Customer.
**Description:** A form that captures user details while retaining the context of the viewed product.
**Functional Requirements:**
- PRD-FR-006: The enquiry form shall automatically attach the currently selected product and configuration to the submission payload.
- PRD-FR-007: The system shall require Name, Email/Phone to submit.
**Acceptance Criteria:**
- Given a user clicks Enquire on Product X (Config Y), when they submit the form, then the backend receives the enquiry mapped explicitly to Product X (Config Y).

---

## 9. Product Catalogue / Sofa Browsing
- **Product discovery:** Users navigate via top navigation (Sofas -> L-Shape, etc.).
- **Product cards:** Must show an image, product name, and optionally a brief subtitle.
- **Categories:** Sofas, L-Shape Sofas, Sofa Combos, Recliners.
- **Available variants/options:** TBD based on client confirmation.
- **Pricing:** TBD (whether to show actual prices or "Price on Request").
- **Search/filter/sort:** TBD (Out of scope for initial MVP unless client confirms necessity).

---

## 10. Product Detail Requirements
Customers should see:
- Product name
- High-quality Images (gallery/carousel)
- Available Configurations (e.g., 3-seater, left-aligned L-shape)
- Enquiry CTA (Sticky or prominent)
- Contact options (WhatsApp integration)

**TBD Fields (Pending Client Confirmation):**
- Product description text
- Exact Dimensions
- Material and Colour/fabric options
- Pricing
- Features & Customization options
- Availability status

---

## 11. Enquiry System

### Customer side
- **Start:** User clicks "Enquire" on a product page.
- **Information requested:** Name, Phone Number, Email, Message/Questions.
- **Required fields:** Name, Phone Number (or Email), Context (Product/Config - hidden field).
- **Confirmation:** A clear success message on the screen ("Thank you, our sales team will contact you shortly").
- **Follow-up expectations:** Not communicated explicitly on the site until SLA is confirmed (TBD).

### Business side
- **Receipt:** Enquiry details sent via Email to the sales team (or TBD admin backend).
- **Information available:** Customer contact details, exactly which product and configuration they enquired about, and their message.
- **Follow-up process:** Manual contact by salesperson (offline).
- **Status tracking:** TBD (whether tracked in website backend or external CRM).

---

## 12. Forms & Data Collection

| Field | Required? | Purpose | Validation |
|-------|-----------|---------|------------|
| Full Name | Yes | Identify customer | Minimum 2 characters |
| Phone Number | Yes* | Sales follow-up | Valid phone format |
| Email Address | Yes* | Alternative follow-up | Standard email regex |
| Product ID | Yes (Hidden) | Provide product context | Must exist in DB |
| Configuration | Optional (Hidden) | Provide config context | Must match product |
| Message | No | Customer specific questions | Max 500 chars |

*\*At least one contact method (Phone or Email) must be required. TBD exact rule.*

---

## 13. Notifications & Communication

- **Admin Notification:** 
  - **Required:** An email sent to the sales team whenever a new enquiry form is submitted.
- **Customer Confirmation:**
  - **Optional/TBD:** Auto-reply email thanking them for the enquiry.
- **WhatsApp Integration:**
  - **Required:** Direct link to open WhatsApp with a pre-filled message (e.g., "Hi, I am interested in [Product Name]").
- **Phone:**
  - **Required:** Click-to-call links in the header/footer.

---

## 14. Admin / Business Requirements

**Confirmed Requirements:**
- **Product Management:** Admin must be able to Create, Read, Update, and Delete (CRUD) products and their associated images.
- **Configuration Management:** Admin must be able to define which configurations belong to which products.

**TBD Requirements:**
- Enquiry management dashboard (viewing leads in the backend vs just receiving emails).
- Enquiry status tracking (New → Contacted).
- Content management (updating banners, offers page).

---

## 15. Authentication & User Accounts
- **Customer Accounts:** NOT REQUIRED. The site is a public catalog for lead generation.
- **Admin Account:** REQUIRED. Only authorized admins can log into the backend to manage products.
- **Roles:** Single Admin role (TBD if multiple roles like 'Sales' vs 'SuperAdmin' are needed).

---

## 16. Search, Filter & Discovery
**TBD**
The BRD marks Search, Filtering, and Advanced Sorting as "Future / Client Confirmation Required". Therefore, complex search and filters are excluded from the initial product scope until confirmed. Users will discover products primarily via the Category navigation.

---

## 17. Responsive & Accessibility Requirements
- **Responsive layouts:** The application must be fully functional on Mobile, Tablet, and Desktop.
- **Navigation:** A mobile-friendly hamburger menu is required for smaller screens.
- **Images:** High-resolution but optimized for fast mobile loading.
- **Buttons/CTAs:** Must have a minimum touch target size of 44x44px on mobile devices.
- **Accessibility:** 
  - Ensure sufficient color contrast.
  - All form fields must have associated labels.
  - Image alt text is required for product images.

---

## 18. SEO & Content Requirements
- **Page titles:** Dynamic titles for product pages (e.g., "[Product Name] - Premium Sofas | MyKouch").
- **Meta descriptions:** Auto-generated or manually entered descriptions for products.
- **Image alt text:** Admin must be able to provide alt text for product images.
- **URLs:** SEO-friendly URLs (e.g., `/sofas/l-shape/product-name`).

---

## 19. Analytics & Product Metrics
**TBD**
Basic analytics (e.g., Google Analytics) should be installed to track:
- Page views (Products viewed).
- Form submission events (Enquiries generated).
- WhatsApp / Phone click events.

*Specific metric tracking requirements await business confirmation.*

---

## 20. Non-Functional Product Requirements

### Performance
- Fast page loading: Initial contentful paint under 2 seconds on standard connections.
- Images must be compressed/optimized automatically on upload.

### Reliability
- Form submissions must fail gracefully and not lose user data on network errors.

### Security
- Admin portal must require a secure login.
- Website must run over HTTPS.
- Basic rate-limiting on the enquiry form to prevent spam.

### Maintainability
- The product catalog data structure must allow for easy future expansion (e.g., adding a price field if it becomes required later).

---

## 21. Edge Cases & Error States

| Situation | Expected Behavior | User Message/Action |
|-----------|-------------------|---------------------|
| Invalid form data | Prevent submission | Highlight fields in red, show "Invalid email/phone" |
| Network failure on form | Prevent form reset | "Submission failed. Please check your connection and try again." |
| No products in category | Show empty state | "Check back soon for new arrivals." |
| Product link broken/deleted | Redirect to 404/Category | "The product you are looking for is no longer available." |

---

## 22. MVP Scope

### Must Have
- Product catalog structure (Categories).
- Product details page (Images, Name, Configurations).
- Functional Enquiry form linked to a specific product.
- WhatsApp & Phone contact links.
- Basic Admin panel to manage products.

### Should Have
- Mobile responsiveness and basic SEO tags.

### Could Have / TBD
- Displaying product descriptions, dimensions, and prices.
- Admin dashboard to track enquiries (vs just email routing).

### Out of Scope (Future)
- E-commerce checkout, payment gateways, shopping carts, customer login portals, wishlists.

---

## 23. Future Enhancements (TBD)
- **E-Commerce Conversion:** Adding pricing, carts, and an online payment gateway.
- **Advanced Product Configurator:** Visual interactive customization (choosing fabric types and seeing the image update).
- **Search & Filter:** Allowing users to filter sofas by material, color, and price.

---

## 24. Dependencies & Assumptions

### Confirmed Dependencies
- Client must provide initial product images and names to launch the catalog.
- Client must provide the WhatsApp number and receiving Email address for enquiries.

### Assumptions
- Assume all products belong to at least one category (e.g., Sofas, L-Shape).
- Assume products may have zero or more configurations.

### TBD Decisions
- Are prices displayed publicly?
- What exact product details (dimensions, materials) must be on the product page?
- Will enquiries be tracked in a DB or just sent via email?

---

## 25. Acceptance Criteria
- [ ] Users can navigate the site on mobile and desktop without layout breaking.
- [ ] Users can view product categories and click into a specific product.
- [ ] The product page displays the image, name, and configurations.
- [ ] A user can submit an enquiry for a product.
- [ ] The submitted enquiry successfully reaches the business with the correct product context.
- [ ] An Admin can log in, create a new product, and have it immediately visible on the public site.

---

## 26. Traceability Matrix

| BRD Requirement | PRD Requirement | Feature | Status |
|-----------------|-----------------|---------|--------|
| BR-001 | PRD-FR-001 | Product Catalog Listing | Confirmed |
| BR-002 | PRD-FR-001 | Product Catalog Listing | Confirmed |
| BR-003, BR-004, BR-005 | PRD-FR-003, 004, 005 | Product Detail View | Confirmed |
| BR-006, BR-007 | PRD-FR-006 | Product Specific Enquiry | Confirmed |
| BR-008 | PRD-FR-008 | Contact/WhatsApp Links | Confirmed |
| BR-009, BR-010 | Admin Notification | Notifications | Confirmed |
| BR-011 | TBD | Offers Section | TBD |
| BR-012 | TBD | Dealer Form | TBD |

---

## 27. Open Questions

| Question | Why It Matters | Decision Needed From | Status |
|----------|----------------|----------------------|--------|
| Will product prices be displayed? | Changes the UI design and data structure. | Business Owner | Open |
| Do enquiries need to be saved in a database, or just emailed? | Impacts backend development effort. | Business Owner | Open |
| What exact specifications are required for products? | Determines the required fields in the Admin panel. | Business Owner | Open |
| Does the "Offers" section require a separate CMS system? | Impacts MVP scope and development time. | Business Owner | Open |
