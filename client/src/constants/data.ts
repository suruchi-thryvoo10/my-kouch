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
const drawingRoomProducts = drawingRoomImages.map((image, index) => {
  const cats = ["Drawing Room", "Sofas", "L-shape sofas", "Sofa combos", "Recliners", "Sofa Cum Bed"];
  const assignedCategory = cats[index % cats.length];
  
  return {
    id: `drawing-room-${index + 1}`,
    image,
    hoverImage: drawingRoomImages[(index + 1) % drawingRoomImages.length],
    name: `Premium ${assignedCategory} 0${index + 1}`,
    category: assignedCategory,
    badge: index % 4 === 0 ? "Featured" : "",
    colors: ["#dcd4c6", "#6e5548"],
    seatingCapacity: (index % 3) + 2,
    setType: ["Corner", "Curved", "Love Seat", "Regular", "Sectional", "Storage"][index % 6],
    sofaType: ["Motion", "Sofa Cum Beds", "Standard"][index % 3],
    upholsteryMaterial: ["Fabric", "Leatherette"][index % 2],
    price: 15000 + (index * 2000),
    originalPrice: 20000 + (index * 2500),
    dimensions: `85W x 38D x 34H (inches)`,
    material: "Premium Velvet",
    description: `Exquisite ${assignedCategory.toLowerCase()} seating meticulously crafted for premium living spaces. Designed with comfort and a bespoke aesthetic in mind.`,
    specifications: [
      "Premium high-density foam seating",
      "Solid kiln-dried wood frame",
      "Stain-resistant luxury fabric",
      "Customizable dimensions available"
    ]
  };
});

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

const defaultProducts = images.map((image, index) => {
  const isNew = index % 5 === 0;
  const isBestseller = index % 7 === 0;
  let badge = "";
  if (isNew) badge = "New Arrival";
  else if (isBestseller) badge = "Bestseller";

  return {
    id: `product-${index + 1}`,
    image,
    hoverImage: images[(index + 1) % images.length],
    name: realisticNames[index] || `Premium Sofa ${index + 1}`,
    category: realisticCategories[index] || "Sofas",
    badge,
    colors: ["#dcd4c6", "#6e5548", "#787c80"],
    seatingCapacity: (index % 3) + 2, // 2, 3, or 4 seater
    setType: ["Corner", "Curved", "Love Seat", "Regular", "Sectional", "Storage"][index % 6],
    sofaType: ["Motion", "Sofa Cum Beds", "Standard"][index % 3],
    upholsteryMaterial: ["Fabric", "Leatherette"][index % 2],
    price: 25000 + (index * 1500),
    originalPrice: 32000 + (index * 2000),
    dimensions: `${80 + (index * 5)}W x 38D x 34H (inches)`,
    material: "Premium Linen Blend",
    description: "Experience unparalleled comfort with our meticulously crafted premium sofa, featuring high-resilience foam and durable, luxurious fabrics designed to elevate any living space.",
    specifications: [
      "Premium high-density foam seating",
      "Solid kiln-dried wood frame",
      "Stain-resistant luxury fabric",
      "Customizable dimensions available"
    ]
  };
});

const additionalProducts = Array.from({ length: 120 }).map((_, i) => {
  const targetCats = ["Drawing Room", "Sofas", "L-shape sofas", "Sofa combos", "Recliners", "Sofa Cum Bed"];
  const cat = targetCats[i % targetCats.length];
  const allImages = [...drawingRoomImages, ...images];
  const imgIndex = (i * 7) % allImages.length; // pseudo-random distribution
  
  return {
    id: `extra-product-${i}`,
    image: allImages[imgIndex],
    hoverImage: allImages[(imgIndex + 1) % allImages.length],
    name: `Signature ${cat} 0${i + 1}`,
    category: cat,
    badge: i % 7 === 0 ? "Just Added" : i % 11 === 0 ? "Popular" : "",
    colors: ["#dcd4c6", "#6e5548", "#2c3e50"],
    seatingCapacity: (i % 3) + 2,
    setType: ["Corner", "Curved", "Love Seat", "Regular", "Sectional", "Storage"][i % 6],
    sofaType: ["Motion", "Sofa Cum Beds", "Standard"][i % 3],
    upholsteryMaterial: ["Fabric", "Leatherette"][i % 2],
    price: 22000 + (i * 400),
    originalPrice: 28000 + (i * 500),
    dimensions: `${80 + (i % 10)}W x 38D x 34H (inches)`,
    material: i % 2 === 0 ? "Premium Italian Leather" : "Luxury Velvet Blend",
    description: `Elevate your space with our latest ${cat} collection piece. Experience unparalleled comfort with meticulously crafted premium seating, featuring high-resilience foam and durable fabrics.`,
    specifications: [
      "Premium high-density foam seating",
      "Solid kiln-dried wood frame",
      "Stain-resistant luxury fabric",
      "10-year frame warranty"
    ]
  };
});

export const products = [...drawingRoomProducts, ...defaultProducts, ...additionalProducts];

export const categories = [
  { name: "Drawing Room", image: drawingRoomImages[0] },
  { name: "L-shape sofas", image: sofa03 },
  { name: "Sofa combos", image: sofa07 },
  { name: "Recliners", image: sofa02 },
  { name: "Sofa Cum Bed", image: sofa06 },
];
