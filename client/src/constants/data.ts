import sofa01 from "../assets/kouch/sofa-01.jpg";
import sofa02 from "../assets/kouch/sofa-02.jpg";
import sofa03 from "../assets/kouch/sofa-03.jpg";
import sofa04 from "../assets/kouch/sofa-04.jpg";
import sofa05 from "../assets/kouch/sofa-05.jpg";
import sofa06 from "../assets/kouch/sofa-06.jpg";
import sofa07 from "../assets/kouch/sofa-07.jpg";
import sofa08 from "../assets/kouch/sofa-08.jpg";
import sofa09 from "../assets/kouch/sofa-09.jpg";
import sofa10 from "../assets/kouch/sofa-10.jpg";
import sofa11 from "../assets/kouch/sofa-11.jpg";
import sofa12 from "../assets/kouch/sofa-12.jpg";
import sofa13 from "../assets/kouch/sofa-13.jpg";
import sofa14 from "../assets/kouch/sofa-14.jpg";
import sofa15 from "../assets/kouch/sofa-15.jpg";
import sofa16 from "../assets/kouch/sofa-16.jpg";
import sofa17 from "../assets/kouch/sofa-17.png";
import sofa18 from "../assets/kouch/sofa-18.png";

export const brandInfo = {
  name: "Kouch",
  tagline: "Comfort that feels like home",
  shortStatement: "Explore premium sofas for the spaces you live in, designed with comfort, quality craftsmanship, and modern aesthetics.",
  phone: "+91 80933 76990",
  email: "mykouchteam@gmail.com",
  website: "www.mykouch.in",
  whatsappMessage: "Hello Kouch Team, I would like to know more about your premium furniture collection.",
  addresses: [
    {
      title: "Shop & Office",
      lines: [
        "MB Maaarketing",
        "AM42, Bhimatangi",
        "Near Amabus Stop, Bhubaneswar",
        "Pin - 751002"
      ],
      link: "#"
    },
    {
      title: "Factory",
      lines: [
        "MB Maaarketing",
        "Jagannath Bihar, Plot No- 401",
        "Sunderipada, Near Champati Petrol Pump",
        "Bhubaneswar, Dist - Khordha",
        "Pin - 751002"
      ],
      link: "#"
    }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com/mykouch" },
    { name: "Facebook", url: "https://facebook.com/mykouch" },
    { name: "YouTube", url: "https://youtube.com/mykouch" },
  ]
};

export const images = [
  sofa01, sofa02, sofa03, sofa04, sofa05, sofa06,
  sofa07, sofa08, sofa09, sofa10, sofa11, sofa12,
  sofa13, sofa14, sofa15, sofa16, sofa17, sofa18,
];

const drawingRoomImages = Array.from({ length: 41 }, (_, i) => `/Drawing Room 1 (${i + 1}).jpeg`);

// Generate drawing room products
const drawingRoomProducts = drawingRoomImages.map((image, index) => ({
  id: `drawing-room-${index + 1}`,
  image,
  name: `Drawing Room Collection 0${index + 1}`,
  category: "Drawing Room",
  description: "Exquisite drawing room seating meticulously crafted for premium living spaces. Designed with comfort and a bespoke aesthetic in mind.",
  specifications: [
    "Premium high-density foam seating",
    "Solid kiln-dried wood frame",
    "Stain-resistant luxury fabric",
    "Customizable dimensions available"
  ]
}));

const realisticNames = [
  "The Cloud Sectional", "Aura Loveseat", "Oasis L-Shape", "Haven Recliner",
  "Luxe Velvet Sofa", "Zenith Sleeper", "Harmony Combo", "Noble Leather Sofa",
  "Lumina Corner Sofa", "Serenity Sofa Bed", "Prestige Lounge", "Majestic Chesterfield",
  "Crescent Modular", "Eclipse Accent Chair", "Horizon Sectional", "Vanguard Sofa",
  "Classic English Roll Arm", "Modern Tuxedo Sofa"
];

const realisticCategories = [
  "L-shape sofas", "Living Room", "L-shape sofas", "Recliners",
  "Sofas", "Sofa Cum Bed", "Sofa combos", "Sofas",
  "L-shape sofas", "Sofa Cum Bed", "Living Room", "Sofas",
  "Custom Furniture", "Living Room", "L-shape sofas", "Sofas",
  "Sofas", "Sofas"
];

const defaultProducts = images.map((image, index) => ({
  id: `product-${index + 1}`,
  image,
  name: realisticNames[index] || `Premium Sofa ${index + 1}`,
  category: realisticCategories[index] || "Sofas",
  description: "Experience unparalleled comfort with our meticulously crafted premium sofa, featuring high-resilience foam and durable, luxurious fabrics designed to elevate any living space.",
  specifications: [
    "Premium high-density foam seating",
    "Solid kiln-dried wood frame",
    "Stain-resistant luxury fabric",
    "Customizable dimensions available"
  ]
}));

export const products = [...drawingRoomProducts, ...defaultProducts];

export const categories = [
  { name: "Drawing Room", image: drawingRoomImages[0] },
  { name: "L-shape sofas", image: sofa03 },
  { name: "Sofa combos", image: sofa07 },
  { name: "Recliners", image: sofa02 },
  { name: "Sofa Cum Bed", image: sofa06 },
];
