

const products = [
 

  {
    id: 1,
    name: "Silver Chain",
    price: 1899,
    discount: 21.06,
    category: "bracelets",
    soldOut: false,
    gender: "male",
    description: "Sleek and minimal silver chain designed for everyday sophistication. Crafted from high-quality sterling silver with a modern oval-link pattern.",
    detailedDescription: "This elegant silver chain blends timeless design with contemporary style. Meticulously crafted from 777 silver, the chain features polished oval links and a secure lobster clasp, making it perfect for both casual wear and formal occasions. Its unisex design ensures it complements any outfit, for any gender.",
    specifications: {
      "Material": "Silver",
      "Length": "18 inches (adjustable)",
    
      "Clasp": "Secure lobster clasp",
      "Care": "Avoid water and perfume contact"
    },
      images: 
    [ "assets/generated-image-1.png",
      "assets/generated-image-2.png"
     ]

  },

  {
    id: 2,
    name: "Silver male bracelets",
    price: 2999,
    discount: 16.67,
    category: "bracelets",
    soldOut: false,
    gender: "male",
    description: "Distinctive silver chain featuring twisted rope-style links for a bold and intricate look. Made from silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Silver",
      "Length": "8 inches (adjustable)",
      "Clasp": "Secure lobster clasp",
      "Care": "Avoid water and perfume contact"
    },
    images: [
      "assets/generated-image-3.png",
      "assets/generated-image-4.png"
    ]
  },

  {
    id: 3,
    name: "Silver bracelets bling diamond",
    price: 1999,
    discount: 25.01,
    category: "bracelets",
    soldOut: false,
    gender: "female",
    description: "A refined silver bracelet adorned with brilliant-cut diamonds set in square links. Crafted for elegant evenings and timeless sophistication.",
    detailedDescription: "Elevate your jewelry collection with this stunning silver bracelet featuring five dazzling square-shaped links, each encrusted with radiant-cut diamonds. Meticulously set in sterling silver, the bracelet strikes a perfect balance between contemporary design and classic luxury. Its adjustable length and secure clasp offer both comfort and beauty, ideal for formal occasions or as a statement accessory.",
    specifications: {
      "Material": "Sterling Silver with Diamond Simulants",
      "Length": "7 inches + 1-inch extender",
      "Clasp": "Lobster clasp with extender chain",
      "Care": "Store separately in a jewelry pouch. Avoid exposure to moisture and chemicals."
    },
    images: [
      "assets/generated-image-5.png",
      "assets/generated-image-6.png"
    ]
  },

  {
    id: 4,
    name: "Elegant Pink Sapphire Marquise Bracelet",
    price: 1799,
    discount: 27.79,
    category: "bracelets",
    soldOut: false,
    gender: "female",
    description: "A delicate silver bracelet featuring alternating marquise links and vibrant pink sapphires. Designed to embody grace and romantic charm.",
    detailedDescription: "Grace your wrist with this enchanting silver bracelet, beautifully set with luminous pink sapphire stones alternated between sparkling pavé marquise-shaped links. Crafted in high-quality sterling silver, each gemstone is precision-set to maximize brilliance and elegance. With a secure lobster clasp and adjustable chain, this bracelet is perfect for both everyday sophistication and special evening moments.",
    specifications: {
      "Material": "Silver with Pink Sapphire Simulants and CZ Accents",
      "Length": "7 inches + 1-inch extender",
      "Clasp": "Lobster clasp with extender chain",
      "Care": "Store in a soft pouch. Keep away from water, perfumes, and cleaning agents."
    },
    images: [
      "assets/generated-image-7.png",
      "assets/generated-image-8.png"
    ]
  },

  {
    id: 5,
    name: "Lustrous Marquise-Link Diamond Bracelet",
    price: 2499 ,
    discount: 36.01,
    category: "bracelets",
    soldOut: false,
    gender: "female",
    description: "A luminous silver bracelet featuring a continuous design of diamond-studded marquise links. Pure elegance with a modern silhouette.",
    detailedDescription: "Radiating refined sophistication, this sterling silver bracelet showcases an elegant chain of open marquise-shaped links, each delicately encrusted with sparkling cubic zirconia. The design flows gracefully across the wrist, offering timeless charm with a hint of modern luxury. Its adjustable extension and secure lobster clasp ensure a flawless fit for any occasion—from casual elegance to formal glamour.",
    specifications: {
      "Material": "Sterling Silver with Cubic Zirconia",
      "Length": "7 inches + 1-inch extender",
      "Clasp": "Lobster clasp with extender chain",
      "Care": "Keep in a soft-lined box. Avoid direct contact with water, perfumes, and chemicals."
    },
    images: [
      "assets/generated-image-9.png",
      "assets/generated-image-10.png"
    ]
  },

  {
    id: 6,
    name: "Om(ॐ) Diamond-Bar Spiritual Bracelet",
    price: 2999,
    discount: 33.34,
    category: "bracelets",
    soldOut: false,
    gender: "female",
    description: "A bold and spiritual bracelet featuring an 'Om' symbol at the center of a shimmering pavé diamond bar. Perfect harmony of style and meaning.",
    detailedDescription: "Channel spiritual energy and sophisticated style with this refined bracelet featuring a sleek bar design paved with rows of dazzling cubic zirconia. At the center lies a black enamel 'Om' symbol, symbolizing peace, protection, and cosmic power. The polished sterling silver frame is matched with an adjustable drawstring chain, ensuring comfort and a secure fit. A meaningful accessory that blends tradition with contemporary fashion—ideal for personal wear or a thoughtful gift.",
    specifications: {
      "Material": "Sterling Silver with Black Enamel and Cubic Zirconia",
      "Length": "Adjustable – fits most wrist sizes",
      "Clasp": "Adjustable sliding clasp with bead ends",
      "Care": "Polish with a soft cloth. Avoid water and chemicals to maintain finish and shine."
    },
    images: [
      "assets/generated-image-11.png",
      "assets/generated-image-12.png"
    ]
  },


  {
    id: 7,
    name: "Titan Classic Curb Chain Bracelet",
    price: 1999,
    discount: 30.02,
    category: "bracelets",
    soldOut: false,
    gender: "male",
    description: "A timeless silver curb chain bracelet that speaks of strength and subtle style. A staple accessory for the modern man.",
    detailedDescription: "Engineered for everyday elegance, this masculine bracelet features a bold, polished curb chain crafted from durable stainless steel. The sleek interlocking links provide a strong yet flexible feel, while the triangular-end clasp detail adds a distinctive modern touch. Whether worn solo or layered with a watch, the Titan Classic bracelet is a statement in simplicity and style—perfect for casual and formal ensembles alike.",
    specifications: {
      "Material": "Silver",
      "Length": "8.5 inches",
      "Clasp": "Fold-over clasp with triangle cap accent",
      "Care": "Clean with a soft cloth. Avoid exposure to saltwater and harsh chemicals."
    },
    images: [
      "assets/generated-image-13.png",
      "assets/generated-image-14.png"
    ]
  },


  // {
  //   id: 8,
  //   name: "Midnight Evil Eye Beaded Bracelet",
    // price: 299,
  //   category: "bracelets",
  //   gender: "female",
  //   description: "A symbolic beaded bracelet featuring a deep blue evil eye charm flanked by glossy black and silver-tone beads. Designed for everyday wear and protection.",
  //   detailedDescription: "Rooted in tradition and styled for the modern spirit, the Midnight Evil Eye Bracelet is a perfect blend of symbolism and simplicity. At its center lies a glass evil eye bead in rich navy blue, believed to ward off negativity and attract good energy. The bracelet is meticulously hand-strung with alternating black and silver-toned cube beads that exude a minimal yet bold look. Adjustable in length, this unisex bracelet is perfect for layering or wearing solo, offering both meaning and style in one sleek accessory.",
  //   specifications: {
  //     "Material": "Glass and Silver beads with stainless steel findingsg",
  //     "Charm": "Evil Eye (navy blue glass)",
  //     "Length": "6.5 to 8 inches (adjustable)",
  //     "Weight": "16g",
  //     "Clasp": "Lobster claw with extender chain",
  //     "Care": "Keep dry; avoid direct contact with perfumes and sprays"
  //   },
  //   images: [
  //     "assets/generated-image-15.png",
  //     "assets/generated-image-16.png"
  //   ]
  // },


  {
    id: 9,
    name: "Elegant Pink Sapphire floral Bracelet",
    price: 1999,
    discount: 27.51,
    category: "bracelets",
    soldOut: false,
    gender: "female",
    description: "A delicate silver bracelet featuring floral links and vibrant pink sapphires. Designed to embody grace and romantic charm.",
    detailedDescription: "Grace your wrist with this enchanting silver bracelet, beautifully set with luminous pink sapphire stones alternated between sparkling pavé marquise-shaped links. Crafted in high-quality sterling silver, each gemstone is precision-set to maximize brilliance and elegance. With a secure lobster clasp and adjustable chain, this bracelet is perfect for both everyday sophistication and special evening moments.",
    specifications: {
      "Material": "Sterling Silver with Pink Sapphire Simulants and CZ Accents",
      "Length": "7 inches + 1-inch extender",
      "Clasp": "Lobster clasp with extender chain",
      "Care": "Store in a soft pouch. Keep away from water, perfumes, and cleaning agents"
    },
    images: [
      "assets/generated-image-17.png",
      "assets/generated-image-18.png"
    ]
  },


  // {
  //   id: 10,
  //   name: "Sculpted Stippling Pavé Band",
  //   price: 299,
  //   category: "rings",
  //   gender: "unisex",
  //   description: "A sleek silver band featuring geometric grids. Designed for bold elegance and modern refinement.",
  //   detailedDescription: "This stunning silver ring showcases a contemporary band design. The precision-cut facets catch the light beautifully, offering a radiant shimmer from every angle. Crafted from high-quality 777 silver, this unisex piece delivers durability and sophisticated edge—ideal for special events or upscale daily wear.",
  //   specifications: {
  //     "Material": "Silver",
  //     "Width": "6 mm",
  //     "Weight": "3g",
  //     "Finish": "High-polish with matte contrast in grooves",
  //     "Care": "Avoid water and perfume contact"
  //   },
  //   images: [
  //     "assets/generated-image-19.png",
  //     "assets/generated-image-21.png"
  //   ]
  // },


   {
    id: 11,
    name: "Celestial Blue & White Gemstone Ring",
    price: 599,
    discount: 50.08,
    category: "rings",
    soldOut: false,
    gender: "female",
    description: "A graceful silver ring featuring alternating vivid blue and white stones. A symbol of elegance with a celestial touch.",
    detailedDescription: "Capture the night sky's allure with this delicate silver ring, showcasing a captivating sequence of alternating royal blue and brilliant white gemstones. The round-cut stones are prong-set for maximum sparkle, each one carefully selected for clarity and color balance. Ideal as a promise ring, anniversary gift, or stackable statement piece, this band embodies refined femininity and timeless charm.",
    specifications: {
      "Material": "Sterling Silver with Diamond Simulants",
      "Stone Size": "3 mm each (approx.)",
      "Setting": "Prong setting",
      "Care": "Clean with a soft cloth. Avoid direct heat, chemicals, and water immersion."
    },
    images: [
      "assets/generated-image-20.png",
      "assets/generated-image-22.png"
    ]
   },

  {
    id: 12,
    name: "Sculpted Culture Pavé Band",
    price: 699,
    discount: 20,
    category: "rings",
    soldOut: true,
    gender: "female",
    description: "A sleek silver band featuring a delicately carved design. Designed for bold elegance and modern refinement.",
    detailedDescription: "This stunning silver ring showcases a contemporary band design highlighted by the art of a silversmith. The precision-cut facets catch the light beautifully, offering a radiant shimmer from every angle. Crafted from high-quality sterling silver, this unisex piece delivers durability and sophisticated edge—ideal for special events or upscale daily wear.",
    specifications: {
      "Material": "Silver",
      "Width": "6 mm",
      "Finish": "High-polish with matte contrast in grooves",
      "Care": "Wipe with a soft cloth. Avoid chemicals and prolonged water exposure."
    },
    images: [
      "assets/generated-image-23.png",
      "assets/generated-image-24.png"
    ]
  },

  {
    id: 13,
    name: "Sculpted Band",
    price: 299,
    discount: 20,
    category: "rings",
    soldOut: true,
    gender: "female",
    description: "A sleek silver band featuring a delicately carved design. Designed for bold elegance and modern refinement.",
    detailedDescription: "This stunning silver ring showcases a contemporary band design highlighted by the art of a silversmith. The precision-cut facets catch the light beautifully, offering a radiant shimmer from every angle. Crafted from high-quality sterling silver, this unisex piece delivers durability and sophisticated edge—ideal for special events or upscale daily wear.",
    specifications: {
      "Material": "Silver",
      "Width": "6 mm",
      "Finish": "High-polish with matte contrast in grooves",
      "Care": "Wipe with a soft cloth. Avoid chemicals and prolonged water exposure."
    },
    images: [
      "assets/generated-image-25.png",
      "assets/generated-image-26.png",
      "assets/generated-image-31.png"
    ]
  },

  {
    id: 14,
    name: "Textured Rope-Link Silver Chain",
    price: 2499,
    discount: 28.01,
    category: "bracelets",
    soldOut: false,
    gender: "unisex",
    description: "Distinctive silver chain featuring twisted rope-style links for a bold and intricate look. Made from premium sterling silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Sterling Silver",
      "Length": "8 inches",
      "Clasp": "Heavy-duty lobster clasp",
      "Care": "Polish gently with a soft cloth. Avoid water, perfume, and harsh chemicals."
  },
    images: [
      "assets/generated-image-27.png",
    ]
  },

  {
    id: 15,
    name: "Textured Oval-Link Silver Chain",
    price: 2999,
    discount: 30.1,
    category: "bracelets",
    soldOut: false,
    gender: "unisex",
    description: "Distinctive silver chain featuring Oval-style links for a bold and intricate look. Made from 777 silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Sterling Silver",
      "Length": "8 inches",
      "Clasp": "Heavy-duty lobster clasp",
      "Care": "Polish gently with a soft cloth. Avoid water, perfume, and harsh chemicals."
  },
    images: [
      "assets/generated-image-28.png",
      "assets/generated-image-29.png",
      "assets/generated-image-30.png"
    ]
  },
  {
    id: 16,
    name: "Minimalist Silver Chain",
    price: 2999,
    discount: 40.01,
    category: "necklaces",
    soldOut: false,
    gender: "female",
    description: "A sleek and timeless sterling silver chain designed for effortless everyday elegance.",
    detailedDescription: "Embrace understated sophistication with this minimalist sterling silver chain. Featuring a fine yet durable link construction, this necklace is ideal for layering or wearing solo as a subtle statement. Its polished finish and secure lobster clasp closure ensure both comfort and classic appeal. Perfect for both men and women, this piece transitions seamlessly from casual wear to more refined settings.",
    specifications: {
      "Material": "Silver",
      "Length": "18 inches",
      "Clasp": "Lobster clasp",
      "Care": "Polish with a silver cloth. Avoid moisture and store in a dry pouch."
    },
    images: [
      "assets/generated-image-32.png",
      "assets/generated-image-35.png",
      "assets/generated-image-36.png"
    ]
  },
 
  {
    id: 17,
    name: "Eternal Sparkle Slim Diamond Band",
    price: 699,
    discount: 50.07,
    category: "rings",
    soldOut: false,
    gender: "female",
    description: "A sleek silver band featuring a single row of shimmering artificial diamonds at its center. Elegant, minimal, and radiant.",
    detailedDescription: "Add a touch of refined brilliance to your everyday look with this slender sterling silver ring. At the heart of the design lies a continuous line of high-grade artificial diamonds, precisely set to create a seamless circle of sparkle. Perfect as a promise ring, stacking band, or solo statement, this ring combines timeless style with modern simplicity. Lightweight yet dazzling, it’s crafted for lasting comfort and shine.",
    specifications: {
      "Material": "Sterling Silver with Diamond Simulants",
      "Width": "2 mm",
      "Setting": "Channel-set",
      "Care": "Avoid direct contact with water or perfumes. Clean gently with a soft jewelry cloth."
    },
    images: [
       "assets/generated-image-33.png",
       "assets/generated-image-34.png"
    ]
  },
  {
    id: 18,
    name: "GeoPulse Unisex Patterned Band",
    price: 1499,
    discount: 46.70,
    category: "rings",
    soldOut: false,
    gender: "unisex",
    description: "A bold unisex ring featuring a continuous pattern engraved around a brushed silver band. Built for those who move with rhythm and intention.",
    detailedDescription: "The GeoPulse Band redefines minimalism with a modern industrial edge. Crafted from durable sterling silver, this unisex ring showcases a repeating motif, precision-etched along the center of a matte-finished surface. The clean, structured design evokes balance, rhythm, and purpose—making it a standout piece for everyday wear or meaningful gifting. Designed for comfort with a slightly curved inner edge.",
    specifications: {
      "Material": "Silver",
      "Width": "5mm",
      "Finish": "Matte with engraved pattern",
      "Care": "Polish gently with a dry cloth. Store in a fabric-lined box. Avoid abrasive surfaces."
    },
    images: [
      "assets/generated-image-37.png"
    ]
  },
  {
    id: 19,
    name: "Heart of Grace Slim Diamond Band",
    price: 899,
    discount: 20,
    category: "rings",
    soldOut: true,
    gender: "female",
    description: "A delicate sterling silver ring adorned with a line of white artificial diamonds and a single red heart centerpiece—symbolizing love, strength, and elegance.",
    detailedDescription: "Celebrate timeless beauty and heartfelt sentiment with this finely crafted slim band. Designed in sterling silver, the ring features a continuous line of sparkling white diamond simulants, accented by a single radiant red heart-shaped stone at the center. The contrast of color draws the eye and adds emotional depth—perfect as a promise ring, anniversary token, or elegant daily wear. Lightweight, feminine, and full of meaning.",
    specifications: {
      "Material": "Silver with Diamond Simulants and Red Cubic Zirconia",
      "Diamond Cut": "Round Brilliant",
      "Band Width": "2mm",
      "Setting": "Micro pavé and prong setting",
      "Care": "Avoid chemicals and impact. Clean gently with a soft cloth. Store in a velvet pouch."
      
    },
    images: [
      "assets/generated-image-38.png",
      "assets/generated-image-40.png"
    ]
  },
  // {
  //   id: 20,
  //   name: "Vintage Style Ring Female",
  //   price: 349,
  //   category: "rings",
  //   gender: "female",
  //   description: "Ornate vintage-inspired design with intricate details",
  //   detailedDescription: "Transport yourself to a bygone era with this vintage-inspired ring featuring intricate filigree work and delicate details. The ornate design showcases exceptional craftsmanship and attention to detail.",
  //   specifications: {
  //     "Material": "Sterling Silver with Antique Finish",
  //     "Style": "Vintage Art Deco",
  //     "Stone": "Cubic Zirconia",
  //     "Ring Size": "Adjustable 6-8",
  //     "Width": "15mm"
  //   },
  //   images: [
  //     "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxYTFhMWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+VmludGFnZSBSaW5nPC90ZXh0Pgo8L3N2Zz4="
  //   ]
  // },
  {
    id: 21,
    name: "Textured Rope-Link Silver Chain",
    price: 1999,
    discount: 20.01,
    category: "bracelets",
    soldOut: false,
    gender: "unisex",
    description: "Distinctive silver chain featuring twisted rope-style links for a bold and intricate look. Made from premium sterling silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Sterling Silver",
      "Length": "8 inches",
      "Clasp": "Heavy-duty lobster clasp",
      "Care": "Polish gently with a soft cloth. Avoid water, perfume, and harsh chemicals."
  },
    images: [
      "assets/generated-image-39.png"
    ]
  },
 {
    id: 22,
    name: "Ram Silver Ring",
    price: 1599,
    discount: 18.76,
    category: "rings",
    soldOut: false,
    gender: "unisex",
    description: "A bold sterling silver Ram Challa ring engraved with sacred symbolism. A timeless expression of strength, devotion, and tradition.",
    detailedDescription: "Rooted in tradition and crafted with precision, the Ram Challa ring carries a powerful message of faith and inner strength. Made from solid sterling silver, the ring features a clean, polished surface with intricate engravings of the word 'राम' (Ram) across its band. Revered for its spiritual significance, this unisex ring is a tribute to the divine and a reflection of unwavering resolve. Perfect for daily wear, rituals, or as a meaningful gift.",
    specifications: {
       "Material": "Silver",
       "Width": "6 mm",
       "Engraving": "राम (Ram) in Devanagari script",
       "Finish": "High-polish with oxidized accents",
       "Care": "Clean with a silver cloth. Avoid water and strong chemicals. Store wrapped separately."
  },
    images: [
      "assets/generated-image-41.png",
      "assets/generated-image-42.png"
    ]
  },
  {
    id: 23,
    name: "Minimalist Silver Chain",
    price: 1899,
    discount: 36.86,
    category: "necklaces",
    soldOut: false,
    gender: "Male",
    description: "A sleek and timeless sterling silver chain designed for effortless everyday elegance.",
    detailedDescription: "Embrace understated sophistication with this minimalist sterling silver chain. Featuring a fine yet durable link construction, this necklace is ideal for layering or wearing solo as a subtle statement. Its polished finish and secure lobster clasp closure ensure both comfort and classic appeal. Perfect for both men and women, this piece transitions seamlessly from casual wear to more refined settings.",
    specifications: {
      "Material": "Silver",
      "Length": "18 inches",
      "Clasp": "Lobster clasp",
      "Care": "Polish with a silver cloth. Avoid moisture and store in a dry pouch."
    },
    images: [
      "assets/generated-image-44.png",
      "assets/generated-image-45.png"
]
  },
 {
    id: 24,
    name: "Pure Form Minimalist Silver Band",
    price: 1599,
    discount: 37.52,
    category: "rings",
    soldOut: false,
    gender: "unisex",
    description: "A sleek and minimal sterling silver ring designed for everyday elegance. Understated. Timeless. Essential.",
    detailedDescription: "Celebrate the beauty of simplicity with the Pure Form Minimalist Band. Crafted from high-quality 925 sterling silver, this ultra-slim ring features a smooth, polished surface with a low-profile silhouette. Whether worn solo, stacked, or paired with statement pieces, it effortlessly complements any style. Perfect for those who appreciate clean lines and quiet sophistication.",
    specifications: {
      "Material": "Silver",
      "Width": "1.5 mm",
      "Finish": "High-polish mirror finish",
      "Care": "Avoid harsh chemicals. Clean with a soft dry cloth. Store separately to prevent scratches."
    },
    images: [
      "assets/generated-image-48.png",
      "assets/generated-image-49.png"
    ]
  },
//  {
//   id: 25,
//   name: "Urban Edge Flat Silver Chain",
//   price: 379,
//   category: "necklaces",
//   gender: "male",
//   description: "A bold, short flat sterling silver chain with a strong profile and smooth finish. Designed for urban minimalism.",
//   detailedDescription: "Refined yet powerful, the Urban Edge Flat Chain is crafted for the modern man. Made from high-quality 925 sterling silver, this short-length necklace features flat, interlocking links that lie flush against the skin, delivering both comfort and contemporary style. With a sturdy clasp and sleek polish, it’s perfect as a solo statement or layered with other pieces for a bolder look.",
//   specifications: {
//     "Material": "925 Sterling Silver",
//     "Length": "18 inches",
//     "Width": "5 mm",
//     "Weight": "15g",
//     "Clasp": "Lobster clasp",
//     "Finish": "High-polish flat links",
//     "Care": "Wipe with a soft cloth after use. Avoid direct contact with moisture and perfume."
//   },
//   images: [
//     "assets/generated-image-53.png",
//     "assets/generated-image-54.png"
//   ]
// },
{
  id: 26,
  name: "Legacy Flat-Link Silver Chain",
  price: 1799,
  discount: 19.46,
  category: "necklaces",
  soldOut: false,
  gender: "male",
  description: "A long flat-link chain crafted from silver. Bold, sleek, and designed for timeless confidence.",
  detailedDescription: "Crafted for those who appreciate understated luxury, the Legacy Flat-Link Chain combines length, weight, and clean design in one powerful accessory. Made from 777 silver, this long chain features flat, close-set links that drape comfortably across the chest. The smooth reflective surface and substantial feel make it a perfect standalone piece or ideal layering base. Built to last, made to stand out.",
  specifications: {
    "Material": "Silver",
    "Length": "24 inches",
    "Width": "5.5 mm",
    "Clasp": "Heavy-duty lobster clasp",
    "Finish": "Mirror-polished flat links",
    "Care": "Wipe gently after use. Store separately to prevent scratches. Avoid water and chemicals."
  },
  images: [
    "assets/generated-image-63.png",
    "assets/generated-image-64.png",
    "assets/generated-image-55.png",
    "assets/generated-image-65.png",
    "assets/generated-image-66.png",
    "assets/generated-image-67.png"
  ]
},
 {
    id: 27,
    name: "Dominion Cuban Link Bracelet",
    price: 10000,
    discount: 50.1,
    category: "bracelets",
    soldOut: false,
    gender: "unisex",
    description: "A bold Cuban link bracelet crafted from 777 silver. Rugged elegance with undeniable street style influence.",
    detailedDescription: "The Dominion Cuban Link Bracelet brings classic strength and style together in one iconic piece. Handcrafted from solid 777 silver, its tightly interlocked links offer a thick, heavy feel and unmistakable shine. The bracelet is finished with a secure box clasp, ensuring durability for everyday wear. Whether worn solo or stacked, this Cuban link delivers presence, power, and polish—ideal for men who move with confidence.",
    specifications: {
      "Material": "Silver",
      "Length": "8.5 inches",
      "Clasp": "High-gloss polished links",
      "Care": "Polish with a dry cloth. Avoid chemical contact and moisture. Store flat in a pouch."
  },
    images: [
      "assets/generated-image-68.png",
      "assets/generated-image-69.png"
    ]
  },
 {
  id: 28,
  name: "Om Divine Silver Pendant",
  price: 500,
  discount: 25,
  category: "pendants",
  soldOut: false,
  gender: "unisex",
  description: "A spiritual Om pendant handcrafted in 925 silver. Symbolic serenity in a refined, radiant form.",
  detailedDescription: "Channel peace and purpose with the Om Divine Silver Pendant. Expertly crafted in 925 sterling silver, this pendant features a finely detailed Om symbol — representing universal energy and inner calm. Its smooth, high-polish surface adds a contemporary touch to this timeless spiritual icon. Whether worn close to the heart or gifted as a meaningful token, the Om Divine Pendant balances style with soulful significance.",
  specifications: {
    "Material": "925 Sterling Silver",
    "Height": "1.5 inches",
    "Finish": "High-polish reflective surface",
    "Care": "Clean gently with a dry cloth. Avoid water and harsh chemicals. Store in a protective pouch."
  },
  images: [
    "assets/IMG_20250530_234800.jpg"
  ]
},
 {
  id: 29,
  name: "Khatu Shyam Devotional Pendant",
  price: 500,
  discount: 20,
  category: "pendants",
  soldOut: false,
  gender: "unisex",
  description: "A divine Khatu Shyam pendant in 925 silver. Crafted with reverence for spiritual devotion and timeless elegance.",
  detailedDescription: "Embrace divine blessings with the Khatu Shyam Devotional Pendant. Handcrafted from pure 925 sterling silver, this pendant features an intricately carved image of Lord Shyam, revered as the God of faith and sacrifice. The pendant is designed with a radiant finish that enhances its spiritual aura and visual appeal. Whether worn daily or on special religious occasions, this pendant serves as a constant source of strength, devotion, and grace.",
  specifications: {
    "Material": "925 Sterling Silver",
    "Height": "1.75 inches",
    "Finish": "Glossy antique-style engraving",
    "Care": "Wipe with a soft cloth after use. Keep away from chemicals and water. Store in a dry pouch or box."
  },
  images: [
    "assets/IMG_20250530_234813.jpg"
  ]
},
 {
  id: 30,
  name: "Sparkling Silver Diamond Necklace",
  price: 6999,
  discount: 50.01,
  category: "necklaces",
  soldOut: false,
  gender: "female",
  description: "Elegant sterling silver necklace adorned with shimmering artificial diamonds. Perfect for parties, weddings, or everyday glam.",
  detailedDescription: "This sparkling silver necklace features high-quality AAA-grade artificial diamonds intricately set in a 925 sterling silver base. With its delicate design and brilliant shine, it's an ideal accessory for women who love timeless beauty without the high cost. Lightweight, hypoallergenic, and beautifully finished, it’s perfect for gifting or adding a touch of luxury to any outfit.",
  specifications: {
    "Material": "925 Sterling Silver with AAA Simulated Diamonds",
    "Length": "16 inches + 2-inch extender",
    "Clasp": "Secure spring ring clasp",
    "Care": "Keep dry and store in a soft pouch; avoid perfume and moisture"
  },
  images: [
    "assets/IMG20250621201906.jpg",
  ]
},
 {
  id: 31,
  name: "Sterling Silver Snake Idol for Puja",
  price: 200,
  discount: 0,
  category: "puja-saman",
  soldOut: false,
  gender: "unisex",
  description: "A finely crafted sterling silver snake idol, ideal for Nag Panchami, Shiva Puja, and other religious rituals.",
  detailedDescription: "This sacred snake idol is handcrafted from pure 925 sterling silver and symbolizes Nag Devta, often worshipped during Nag Panchami and other Hindu rituals. Designed with intricate detailing, this piece holds spiritual significance and is ideal for temple setups or home altars. It’s a perfect puja saman for devotees who value traditional worship with purity and elegance.",
  specifications: {
    "Material": "777 Silver",
    "Weight": "varies",
    "Symbolism": "Represents Nag Devta, protector of dharma and fertility",
    "Care": "Keep in a dry place; polish gently with soft cloth to maintain shine"
  },
  images: [
    "assets/IMG_20250621_210807.jpg",
    "assets/image_50.png"
  ]
},
 {
  id: 32,
  name: "Gold-Plated Italian Silver Goat Pendant",
  price: 1599,
  discount: 20,
  category: "pendants",
  soldOut: false,
  gender: "unisex",
  description: "Charming gold-plated goat pendant crafted from Italian 92.5 silver. A unique blend of tradition, symbolism, and style.",
  detailedDescription: "This handcrafted lightweight pendant showcases a tiny goat motif, symbolizing strength and determination. Made from premium 92.5 sterling silver with rich Italian craftsmanship and a high-quality gold plating, this piece stands out with its minimalist yet artistic design. Ideal for spiritual wearers, animal lovers, or those who appreciate unique symbolic jewelry. Can be paired with a silver or gold-plated chain.",
  specifications: {
    "Material": "92.5 Sterling Silver with Gold Plating",
    "Finish": "Glossy Italian Craftsmanship",
    "Dimensions": "Height: 1.2 inch, Width: 0.6 inch",
    "Care": "Avoid water, perfume, and store in anti-tarnish pouch"
  },
  images: [
    "assets/IMG20250621221234.jpg",
  ]
},
 {
  id: 33,
  name: "Italian Silver Butterfly Pendant",
  price: 2000,
  discount: 25.05,
  category: "pendants",
  soldOut: false,
  gender: "female",
  description: "Delicate butterfly pendant crafted in 92.5 sterling silver with fine silver plating. Lightweight, elegant, and full of grace.",
  detailedDescription: "This elegant pendant features a beautifully detailed butterfly, symbolizing transformation, hope, and beauty. Expertly crafted in Italy from 92.5 sterling silver and finished with high-polish silver plating, the design is lightweight yet eye-catching. Perfect for everyday wear or as a meaningful gift, this pendant is ideal for women who love subtle charm with symbolic depth.",
  specifications: {
    "Material": "92.5 Sterling Silver with Silver Plating",
    "Finish": "Italian High Gloss Polish",
    "Dimensions": "Height: 1 inch, Width: 1 inch",
    "Care": "Avoid moisture and chemicals; store in soft pouch"
  },
  images: [
    "assets/IMG20250621215222.jpg",
  ]
},
 {
  id: 34,
  name: "Italian Silver Lock & Key Pendant Set",
  price: 2000,
  discount:  25.05,
  category: "pendants",
  soldOut: false,
  gender: "female",
  description: "Stylish lock and key pendants crafted in 92.5 sterling silver with sleek silver plating. A modern symbol of connection and trust.",
  detailedDescription: "This Italian-crafted pendant set features a beautifully detailed lock and matching key, representing love, security, and hidden meanings. Made from lightweight 92.5 sterling silver with a polished silver-plated finish, this duo can be worn together or shared between two people. Perfect as a gift for couples, best friends, or anyone who values unique, meaningful jewelry.",
  specifications: {
    "Material": "92.5 Sterling Silver with Silver Plating",
    "Finish": "Glossy Italian Craftsmanship",
    "Dimensions": "Lock: 0.8 inch, Key: 1 inch",
    "Care": "Avoid chemicals and water; polish gently with a silver cloth"
  },
  images: [
    "assets/IMG20250621215107.jpg",
    "assets/image_7.png",
    "assets/image_8.png"
  ]
},
 {
  id: 35,
  name: "Italian Silver Star Duo Pendant Set",
  price: 2000,
  discount: 30.05,
  category: "pendants",
  soldOut: false,
  gender: "unisex",
  description: "Minimalist star pendant set crafted in 92.5 sterling silver with a refined Italian silver finish. A perfect symbol of dreams, guidance, and light.",
  detailedDescription: "This graceful pendant set features two interlinked star designs—one solid, one hollow—symbolizing hope and harmony. Crafted in lightweight 92.5 sterling silver with sleek silver plating, the pieces can be worn together as one or shared as matching symbols of connection. A beautiful gift for couples, close friends, or anyone who believes in following their inner light. Designed with Italian craftsmanship and delicate detailing.",
  specifications: {
    "Material": "92.5 Sterling Silver with Silver Plating",
    "Finish": "Polished Italian Silver",
    "Dimensions": "Solid Star: 0.9 inch, Hollow Star: 1 inch",
    "Care": "Keep dry; gently clean with silver polish cloth to retain shine"
  },
  images: [
    "assets/image_3.png",
    "assets/image_4.png",
    "assets/image_5.png",
    "assets/image_6.png"
  ]
},
 {
  id: 36,
  name: "Italian Silver Infinity Loop Pendant",
  price: 2000,
  discount: 30.05,
  category: "pendants",
  soldOut: false,
  gender: "female",
  description: "Elegant infinity loop pendant made with 92.5 sterling silver and Italian silver plating. A timeless symbol of love, unity, and eternity.",
  detailedDescription: "This graceful pendant showcases the iconic infinity symbol, crafted with precision from 92.5 sterling silver and polished with a lustrous silver-plated finish. Lightweight and versatile, it embodies eternal love, endless possibilities, and inner balance. Perfect as a thoughtful gift or a daily reminder of meaningful bonds, this Italian-style design blends minimalism with deep symbolism.",
  specifications: {
    "Material": "92.5 Sterling Silver with Silver Plating",
    "Finish": "High-Gloss Italian Polish",
    "Dimensions": "Length: 1.2 inch, Width: 0.4 inch",
    "Care": "Store in a soft pouch; avoid direct contact with water and perfumes"
  },
  images: [
    "assets/image_17.png",
    "assets/image_18.png"
  ]
},
 {
  id: 37,
  name: "Crimson Elegance Drop Earrings",
  price: 1999,
  discount: 40.02,
  category: "earrings",
  soldOut: false,
  gender: "female",
  description: "Delicate long-drop earrings featuring a red crystal bead, silver bow accent, and minimalist oval hoop for a bold yet graceful statement.",
  detailedDescription: "These sophisticated drop earrings combine charm and modern design. Featuring a shimmering silver bow, vibrant red bead, and textured oval hoop with a sleek trailing chain, they’re perfect for both festive occasions and elegant evenings. Lightweight yet eye-catching, they offer a perfect balance of color and movement, making them a standout accessory for any wardrobe.",
  specifications: {
    "Material": "Alloy with Silver Polish",
    "Accents": "Red Crystal Beads, Silver Bow",
    "Length": "3.8 inches",
    "Care": "Keep in dry storage; avoid moisture, perfumes, and chemicals"
  },
  images: [
    "assets/IMG20250621214227.jpg",
    "assets/image_15.png",
    "assets/image_16.png"
   
  ]
},
{
  id: 38,
  name: "Convertible Magnetic Silver Pendant",
  price: 2999,
  discount: 33.34,
  category: "pendants",
  soldOut: false,
  gender: "unisex",
  description: "Innovative magnetic pendant crafted in 92.5 sterling silver with Italian-style silver plating. Wear it as one or share it as two.",
  detailedDescription: "This convertible magnetic pendant features a clever two-piece design that clicks together seamlessly using hidden magnets. Crafted from 92.5 sterling silver and plated with a high-gloss silver finish, it's perfect for expressing connection, love, or duality. Can be worn as a single statement piece or split into two for couples or close friends. Lightweight, modern, and meaningful — a perfect blend of art and sentiment.",
  specifications: {
    "Material": "92.5 Sterling Silver with Silver Plating",
    "Finish": "Italian Glossy Finish",
    "Dimensions": "Each Half: 0.8 inch | Combined: 1.5 inch",
    "Magnet Type": "Built-in neodymium magnet for secure hold",
    "Care": "Keep away from moisture and strong magnetic fields; clean with soft cloth"
  },
  images: [
    "assets/image_21.png",
    "assets/image_28.png",
    "assets/image_29.png",
    "assets/image_23.png",
    "assets/image_22.png",
    "assets/image_24.png"
  ]
},
 {
  id: 39,
  name: "Minimalist Silver Threader Earrings",
  price: 1000,
  discount: 65.1,
  category: "earrings",
  soldOut: false,
  gender: "female",
  description: "Sleek and lightweight silver threader earrings crafted for a subtle, modern look. Perfect for everyday elegance.",
  detailedDescription: "These ultra-light silver threader earrings feature a fine beaded chain that offers graceful movement and understated sophistication. Designed for modern minimalists, they add a touch of elegance without overpowering your look. Whether worn solo or paired with layered accessories, these earrings blend seamlessly with both casual and formal styles.",
  specifications: {
    "Material": "Alloy with 92.5 Silver Polish",
    "Design": "Beaded Chain Threader",
    "Length": "4 inches",
    "Care": "Avoid moisture, perfume, and chemicals; store separately in a soft pouch"
  },
  images: [
    "assets/IMG20250621214110.jpg",
    "assets/image_35.png",
    "assets/image_36.png"
  ]
},
 {
  id: 40,
  name: "Hamsa Sparkle Drop Earrings",
  price: 1999,
  discount: 35.05,
  category: "earrings",
  soldOut: false,
  gender: "female",
  description: "Protective Hamsa drop earrings embellished with cubic zirconia and sleek silver bars. A perfect fusion of charm and elegance.",
  detailedDescription: "Channel elegance and spiritual symbolism with these stunning Hamsa drop earrings. The intricately designed Hamsa hand, encrusted with dazzling cubic zirconia and a central black crystal, symbolizes protection and good fortune. A slender polished silver bar elegantly extends below, creating a modern silhouette that’s both refined and meaningful. Ideal for festive wear, gifting, or everyday glamour with a touch of mystique.",
  specifications: {
    "Material": "Alloy with 92.5 Silver Polish",
    "Accents": "Cubic Zirconia & Black Crystal",
    "Length": "3.5 inches",
    "Symbolism": "Hamsa Hand – Protection, Strength, and Blessings",
    "Care": "Avoid contact with moisture, perfumes, and sharp objects; store in a dry pouch"
  },
  images: [
    "assets/IMG20250621214010.jpg",
    "assets/image_32.png",
    "assets/image_33.png"
    
  ]
},
 {
  id: 41,
  name: "Hamsa Heart Drop Earrings",
  price: 1599,
  discount: 43.78,
  category: "earrings",
  soldOut: false,
  gender: "female",
  description: "Elegant Hamsa drop earrings adorned with a heart-shaped crystal and cubic zirconia, finished with sleek silver bars. A blend of love and protection.",
  detailedDescription: "Infused with both charm and symbolism, these Hamsa drop earrings feature a heart-shaped center crystal in place of the traditional eye, representing love, care, and emotional strength. Surrounded by fine cubic zirconia and finished with a slender polished silver bar, the design exudes grace and modern spirituality. Perfect for romantic gifts or as a stylish talisman for self-love and balance.",
  specifications: {
    "Material": "Alloy with 92.5 Silver Polish",
    "Accents": "Cubic Zirconia & Heart Crystal",
    "Length": "3.5 inches",
    "Symbolism": "Hamsa Hand with Heart – Love, Protection, and Harmony",
    "Care": "Avoid contact with moisture, perfumes, and sharp objects; store in a dry pouch"
  },
  images: [
    "assets/IMG20250621213921.jpg",
    "assets/image_30.png",
    "assets/image_31.png"
  ]
},
  {
  id: 42,
  name: "Parisian Charm Eiffel Tower Earrings",
  price: 899,
  discount: 41.60,
  category: "earrings",
  soldOut: false,
  gender: "female",
  description: "Romantic drop earrings featuring the Eiffel Tower charm, symbolizing travel, love, and timeless elegance.",
  detailedDescription: "Embrace the spirit of Paris with these stylish Eiffel Tower earrings. Crafted with delicate detail and a polished silver finish, these drops capture the magic of love, dreams, and wanderlust. Lightweight and charming, they’re perfect for romantics at heart or as a token of your love for adventure. Whether for a travel lover or as a personal keepsake, these earrings bring a touch of Europe to every outfit.",
  specifications: {
    "Material": "Alloy with Silver Polish",
    "Charm": "Miniature Eiffel Tower",
    "Length": "2.8 inches",
    "Weight": "2.1g (each)",
    "Care": "Keep away from moisture and perfume; store in a dry, padded pouch"
  },
  images: [
    "assets/image_34.png"
  ]
},
{
  id: 43,
  name: "Radiant Bloom Silver Stud Set",
  price: 1499,
  discount: 20,
  category: "earrings",
  soldOut: true,
  gender: "female",
  description: "Elegant floral-inspired stud set crafted in 92.5 sterling silver with pavé-set cubic zirconia. Three sizes, endless styling possibilities.",
  detailedDescription: "This beautifully designed stud set features three radiant flower/starburst-shaped earrings in varying sizes, each meticulously crafted from 92.5 sterling silver. Embellished with sparkling pavé-set cubic zirconia, these versatile studs are perfect for single, double, or triple lobe piercings. Whether you wear them as a matching set or mix and match for a layered look, they bring a touch of brilliance and charm to any ensemble. Lightweight, hypoallergenic, and ideal for everyday elegance or special occasions.",
  specifications: {
    "Material": "92.5 Sterling Silver with Cubic Zirconia",
    "Finish": "High Polish with Pavé Detailing",
    "Dimensions": "Small: 0.5 inch | Medium: 0.6 inch | Large: 0.75 inch",
    "Back Type": "Butterfly Push-Back",
    "Care": "Store in a dry place; avoid contact with perfume or water; clean gently with a silver cloth"
  },
  images: [
    "assets/image_42.png",
    "assets/image_43.png"
  ]
},
 {
  id: 44,
  name: "Heartfelt Sparkle Silver Pendant",
  price: 1699,
  discount: 41.09,
  category: "pendants",
  soldOut: false,
  gender: "female",
  description: "A delicate heart-shaped pendant in 92.5 sterling silver with a shimmering white CZ finish and a single red heart accent. A symbol of love, forever.",
  detailedDescription: "Crafted with care and elegance, the Heartfelt Sparkle Pendant captures timeless love in a modern form. Made from premium 92.5 sterling silver and encrusted with white cubic zirconia stones, this dainty heart pendant stands out with a bold red heart centerpiece. Perfect as a gift or a personal keepsake, it represents affection, warmth, and enduring bonds. The fine Italian-style glossy silver plating enhances its brilliance, making it suitable for both everyday wear and special occasions.",
  specifications: {
    "Material": "92.5 Sterling Silver with Silver Plating",
    "Stones": "White and Red Cubic Zirconia",
    "Finish": "Glossy Italian Silver",
    "Dimensions": "Pendant: 0.9 inch x 0.8 inch",
    "Chain Compatibility": "Fits standard chains up to 3mm",
    "Care": "Avoid moisture and harsh chemicals; store in a dry, padded box; clean gently with soft cloth"
  },
  images: [
    "assets/image_40.png",
    "assets/image_41.png"
  ]
},


{
  id: 45,
  name: "Enchanted Fairy Silver Pendant",
  price: 1899,
  discount: 36.86,
  category: "pendants",
  soldOut: false,
  gender: "female",
  description: "Whimsical fairy pendant crafted in 92.5 sterling silver with shimmering wings and magical detail. A symbol of wonder and grace.",
  detailedDescription: "Step into a world of fantasy with the Enchanted Fairy Pendant — a charming piece that captures the essence of dreams and magic. Handcrafted in 92.5 sterling silver and finished with a luminous Italian silver gloss, this pendant features a graceful fairy with outstretched, winged elegance. Delicate white CZ stones embellish her wings, reflecting light like morning dew. Ideal for dreamers, storytellers, or anyone drawn to the mystical, it’s a wearable reminder of belief in the beautiful and unseen.",
  specifications: {
    "Material": "92.5 Sterling Silver",
    "Finish": "Glossy Italian Silver",
    "Stones": "White Cubic Zirconia on Wings",
    "Dimensions": "1.2 inch height x 0.9 inch width",
    "Chain Compatibility": "Fits chains up to 3mm",
    "Care": "Avoid water and chemicals; clean gently with a soft cloth; store in a cool, dry place"
  },
  images: [
    "assets/image_44.png",
    "assets/image_45.png"
  ]
},
 {
  id: 46,
  name: "Floral Radiance Silver Studs",
  price: 1599,
  discount: 20,
  category: "earrings",
  soldOut: false,
  gender: "female",
  description: "Elegant floral silver studs crafted in 92.5 sterling silver with glittering cubic zirconia petals. Nature’s grace, captured in shine.",
  detailedDescription: "Inspired by blooming daisies and sunbursts, the Floral Radiance Studs bring a touch of nature’s joy to your jewelry box. Crafted in high-quality 92.5 sterling silver, each earring features a radiant floral design with pavé-set white cubic zirconia on every petal, surrounding a smooth silver dome at the center. Lightweight yet striking, they’re perfect for everyday wear or a sparkling accent to elevate your look. A delicate expression of femininity and natural beauty.",
  specifications: {
    "Material": "92.5 Sterling Silver with Cubic Zirconia",
    "Finish": "Glossy Pavé Finish",
    "Dimensions": "Diameter: 0.75 inch",
    "Back Type": "Secure Butterfly Push-Back",
    "Care": "Store away from moisture and perfumes; clean with a soft silver cloth"
  },
  images: [
    "assets/image_50.png",
    "assets/image_52.png"
  ]
},
 {
  id: 47,
  name: "Moonlit Pearl Silver Set",
  price: 2199,
  discount: 20,
  category: "sets",
  gender: "female",
  soldOut: true,
  description: "Elegant pearl and silver jewelry set with crescent-shaped design and sparkling CZ stones. A timeless symbol of grace and serenity.",
  detailedDescription: "The Moonlit Pearl Silver Set blends classic elegance with celestial beauty. Featuring a matching pendant and stud earrings, each piece is crafted from 92.5 sterling silver and gracefully cradles a luminous white pearl in a crescent-like arc. Accented with brilliant cubic zirconia stones, the design evokes the peaceful radiance of the moon. Whether worn for special occasions or as everyday elegance, this set embodies sophistication, femininity, and poise.",
  specifications: {
    "Material": "92.5 Sterling Silver",
    "Stones": "White Imitation Pearls & Cubic Zirconia",
    "Finish": "High-Gloss Italian Silver Plating",
    "Dimensions": "Pendant: 1.1 inch | Earrings: 0.9 inch",
    "Back Type": "Earrings: Butterfly Push-Back",
    "Care": "Avoid water, perfumes, and sprays; clean gently with a soft cloth; store separately to avoid scratches"
  },
  images: [
    "assets/image_55.png",
    "assets/image_56.png"
  ]
},
 {
  id: 48,
  name: "Retro Pop Enamel Huggie Earrings",
  price: 899,
  discount: 22.25,
  category: "earrings",
  soldOut: false,
  gender: "unisex",
  description: "Bold and playful huggie earrings in orange enamel with mint green accents. A funky fusion of retro style and modern attitude.",
  detailedDescription: "Add a pop of personality to your everyday look with the Retro Pop Enamel Huggie Earrings. Featuring a smooth, chunky band in vibrant orange enamel, each earring is adorned with playful mint green shapes and dotted accents in earthy brown. Crafted from durable stainless steel with a glossy finish, these huggies are lightweight, bold, and comfortable for all-day wear. Ideal for unisex styling, festival outfits, or quirky fashion lovers who embrace bold accessories.",
  specifications: {
    "Material": "Stainless Steel with Hand-Applied Enamel",
    "Finish": "Glossy Color-Enamel Coating",
    "Dimensions": "Diameter: 0.8 inch | Width: 0.35 inch",
    "Closure Type": "Hinged Snap Closure",
    "Care": "Avoid water, perfumes, and abrasive surfaces; store separately to preserve enamel finish"
  },
  images: [
    "assets/image_57.png",
    "assets/image_58.png",
    "assets/image_59.png",
    "assets/image_60.png"
  ]
},
 {
  id: 49,
  name: "Mystic Bloom Silver Necklace",
  price: 1599,
  discount: 20,
  category: "necklaces",
  soldOut: false,
  gender: "female",
  description: "Iridescent flower pendant on a dainty 92.5 sterling silver chain. Subtle, radiant, and full of charm.",
  detailedDescription: "The Mystic Bloom Necklace is a gentle yet striking piece that captures the essence of ethereal beauty. A finely crafted flower-shaped pendant glimmers with multicolor iridescence, subtly changing hues as it catches the light. Set on a slender 92.5 sterling silver chain with adjustable links, this necklace offers a minimalist silhouette with a magical twist. Perfect for layering or wearing solo, it’s a versatile piece for free spirits and dreamers.",
  specifications: {
    "Material": "92.5 Sterling Silver",
    "Pendant": "Iridescent Crystal in Flower Cut",
    "Finish": "High-Polish Silver",
    "Chain Length": "14 inch + 2 inch adjustable extension",
    "Clasp Type": "Spring Ring Clasp",
    "Care": "Keep away from water, perfumes, and cosmetics; store flat; clean gently with a soft cloth."
  },
  images: [
    "assets/image_77.png",
    "assets/image_78.png",
  ]
   },
   {
  id: 50,
  name: "Celeste Teardrop Solitaire Necklace",
  price: 1799,
  discount: 20,
  category: "necklaces",
  gender: "female",
  soldOut: true,
  description: "Timeless teardrop solitaire pendant in 92.5 sterling silver with a dazzling CZ centerpiece. Pure elegance, always in style.",
  detailedDescription: "The Celeste Teardrop Necklace captures the essence of classic beauty with its minimal yet powerful design. A brilliant pear-cut cubic zirconia stone sits gracefully in a sleek 92.5 sterling silver setting, suspended from a fine, high-polish silver chain. This piece adds instant sophistication to any look — whether layered for trend-driven styling or worn solo for timeless grace. The clean silhouette and radiant sparkle make it a staple for both daily elegance and evening wear.",
  specifications: {
    "Material": "92.5 Sterling Silver",
    "Stone": "High-Grade Cubic Zirconia (Teardrop Cut)",
    "Finish": "Mirror Polish",
    "Pendant Size": "0.6 inch x 0.35 inch",
    "Chain Length": "16 inch + 2 inch adjustable",
    "Clasp Type": "Spring Ring Clasp",
    "Care": "Avoid chemicals and water; clean gently with a soft cloth; store separately to prevent scratching"
  },
  images: [
    "assets/image_79.png",
    "assets/image_80.png",
  ]
}

   
];



const whatsappNumber = "+917011317729";
const businessInfo = {
  name: "Aaryav Jewels",
  address: "F-1308, Aditya Urban Casa, Sector - 78, Noida, 201301",
  email: "sagarporwalofficial@gmail.com",
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
    saturday: "Saturday: 10:00 AM - 6:00 PM",
    sunday: "Sunday: 12:00 PM - 5:00 PM"
  }
};

// Application state
let currentPage = 'home';
let currentProduct = null;
let filteredProducts = products;

// Router class
class Router {
  constructor() {
    this.routes = {
      'home': () => this.showPage('home-page'),
      'shop': () => this.showPage('shop-page'),
      'about': () => this.showPage('about-page'),
      'contact': () => this.showPage('contact-page'),
      'product': (id) => this.showProductPage(id)
    };
    
    this.init();
  }
  
  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }
  
  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const [route, param] = hash.split('/');
    
    if (this.routes[route]) {
      this.routes[route](param);
      this.updateNavigation(route);
    } else {
      this.routes['home']();
      this.updateNavigation('home');
    }
  }
  
  showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
     
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
    }
    
    // Load page-specific content
    if (pageId === 'shop-page') {
      this.loadShopProducts();
    } else if (pageId === 'home-page') {
      this.loadFeaturedProducts();
    }
  }
  
  showProductPage(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
      window.location.hash = 'home';
      return;
    }
    
    currentProduct = product;
    this.showPage('product-page');
    this.loadProductDetails(product);
  }
  
  
  updateNavigation(currentRoute) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentRoute}`) {
        link.classList.add('active');
      }
     window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
  loadFeaturedProducts() {
    const grid = document.getElementById('featured-products-grid');
    if (!grid) return;
    
    const featuredProducts = products.filter(p => [0, 2, 4, 16].includes(p.id));
    grid.innerHTML = featuredProducts.map(product => this.createProductCard(product)).join('');
  }
  
  loadShopProducts() {
    const grid = document.getElementById('shop-products-grid');
    if (!grid) return;
    
    grid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
  }
  
  // createProductCard(product) {
  //   return `
  //   <div class="product-card ${product.soldOut ? 'sold-out' : ''}" onclick="router.navigateToProduct(${product.id})">
  //     <img src="${product.images?.[0] || 'assets/default.png'}" alt="${product.name}" class="product-card__image">
  //     ${product.soldOut ? `<div class="sold-out-overlay">Sold Out</div>` : ''}
  //     <div class="product-card__content">
  //       <h3 class="product-card__title">${product.name}</h3>
  //       <div class="product-card__price">${product.price ? `₹${product.price}` : '—'}</div>
  //       <p class="product-card__description">${product.description}</p>
  //       <div class="product-card__tags">
  //         <span class="product-tag">${product.category}</span>
  //         <span class="product-tag">${product.gender}</span>
  //       </div>
  //       ${product.soldOut 
  //         ? `<button class="btn btn--secondary btn--sm" disabled>Sold Out</button>`
  //         : `<button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); router.navigateToProduct(${product.id})">View Details</button>`}
  //     </div>
  //   </div>
  //   `;
  // }
createProductCard(product) {
  const discountBadge = product.discount 
    ? `<div class="discount-badge">-${product.discount}%</div>` 
    : "";

  const finalPrice = product.discount 
    ? Math.round(product.price * (1 - product.discount / 100)) 
    : product.price;

  const priceHTML = product.discount
    ? `<div class="product-card__price"><span class="price-old">₹${product.price}</span> <span class="price-new">₹${finalPrice}</span></div>`
    : `<div class="product-card__price">₹${product.price}</div>`;

  return `
    <div class="product-card ${product.soldOut ? 'sold-out' : ''}" onclick="router.navigateToProduct(${product.id})">
      <div class="product-image-wrapper">
        <img src="${product.images?.[0] || 'assets/default.png'}" alt="${product.name}" class="product-card__image">
        ${product.soldOut ? `<div class="sold-out-overlay">Sold Out</div>` : ''}
        ${discountBadge}
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${product.name}</h3>
        ${priceHTML}
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__tags">
          <span class="product-tag">${product.category}</span>
          <span class="product-tag">${product.gender}</span>
        </div>
        ${product.soldOut 
          ? `<button class="btn btn--secondary btn--sm" disabled>Sold Out</button>`
          : `<button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); router.navigateToProduct(${product.id})">View Details</button>`}
      </div>
    </div>
  `;
}


  
  navigateToProduct(productId) {
  window.location.hash = `product/${productId}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
  
  loadProductDetails(product) {
    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
      <a href="#home">Home</a> <span>></span>
      <a href="#shop">Shop</a> <span>></span>
      <span>${product.name}</span>
    `;
    
    // Update product info
    document.getElementById('product-title').textContent = product.name;
    const productPriceEl = document.getElementById("product-price");

    if (product.discount) {
      const discountedPrice = Math.round(product.price * (1 - product.discount / 100));
      productPriceEl.innerHTML = `
        <span class="price-old">M.R.P.: ₹${product.price}</span>
        <span class="price-new">₹${discountedPrice}</span>
        <span class="discount-percent">(${product.discount}% OFF)</span>
      `;
    } else {
      productPriceEl.innerHTML = `₹${product.price}`;
    }
    
    document.getElementById('product-description-text').textContent = product.detailedDescription;
    
    // Update tags
    const tagsContainer = document.getElementById('product-tags');
    tagsContainer.innerHTML = `
      <span class="product-tag">${product.category}</span>
      <span class="product-tag">${product.gender}</span>
    `;
    
    // Update specifications
    const specsList = document.getElementById('specs-list');
    specsList.innerHTML = Object.entries(product.specifications)
      .map(([key, value]) => `
        <div class="spec-item">
          <span class="spec-label">${key}:</span>
          <span class="spec-value">${value}</span>
        </div>
      `).join('');
    
    // Update main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
    
    // Update thumbnails
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    thumbnailsContainer.innerHTML = product.images
      .map((image, index) => `
        <img src="${image}" alt="${product.name} ${index + 1}" 
             class="thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="productGallery.changeImage('${image}', this)">
      `).join('');
    
    // Update WhatsApp button
    const whatsappBtn = document.getElementById('whatsapp-order-btn');
    whatsappBtn.onclick = () => this.orderViaWhatsApp(product);
    
    // Load related products
    this.loadRelatedProducts(product);
  }
  
  loadRelatedProducts(currentProduct) {
    const related = products
      .filter(p => p.id !== currentProduct.id && 
                  (p.category === currentProduct.category || p.gender === currentProduct.gender))
      .slice(0, 3);
    
    const grid = document.getElementById('related-products-grid');
    grid.innerHTML = related.map(product => this.createProductCard(product)).join('');
  }
  
  orderViaWhatsApp(product) {
    const message = `Hi! I'm interested in ordering the ${product.name} (Price: ₹${product.price}). 

Product Details:
${product.description}

Please provide more information about availability and delivery.

Product Link: ${window.location.href}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

// Product Gallery class
class ProductGallery {
  constructor() {
    this.currentImageIndex = 0;
    this.initZoomModal();
  }
  
  changeImage(imageSrc, thumbnailElement) {
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
    });
    thumbnailElement.classList.add('active');
  }
  
  initZoomModal() {
    const zoomBtn = document.getElementById('zoom-btn');
    const zoomModal = document.getElementById('zoom-modal');
    const zoomImage = document.getElementById('zoom-image');
    const closeBtn = document.querySelector('.zoom-modal__close');
    
    zoomBtn.addEventListener('click', () => {
      const mainImage = document.getElementById('main-product-image');
      zoomImage.src = mainImage.src;
      zoomModal.classList.add('active');
    });
    
    closeBtn.addEventListener('click', () => {
      zoomModal.classList.remove('active');
    });
    
    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) {
        zoomModal.classList.remove('active');
      }
    });
  }
}

// Product Filter class
class ProductFilter {
  constructor() {
    this.initFilters();
  }
  
  initFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const genderFilter = document.getElementById('gender-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => this.applyFilters());
    }
    if (genderFilter) {
      genderFilter.addEventListener('change', () => this.applyFilters());
    }
    if (priceFilter) {
      priceFilter.addEventListener('change', () => this.applyFilters());
    }
  }
  
  applyFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const genderFilter = document.getElementById('gender-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (!categoryFilter || !genderFilter || !priceFilter) return;
    
    const category = categoryFilter.value;
    const gender = genderFilter.value;
    const priceRange = priceFilter.value;
    
    filteredProducts = products.filter(product => {
      // Category filter
      if (category !== 'all' && product.category !== category) {
        return false;
      }
      
      // Gender filter
      if (gender !== 'all' && product.gender !== gender) {
        return false;
      }
      
      // Price filter
      if (priceRange !== 'all') {
        const price = product.price;
        if (priceRange === '0-1000' && price >= 1001) return false;
        if (priceRange === '1000-2000' && (price < 999 || price >= 2001)) return false;
        if (priceRange === '2000' && price < 1999) return false;
      }
      
      return true;
    });
    
    // Reload shop products
    router.loadShopProducts();
  }
}

// Contact Form Handler
class ContactForm {
  constructor() {
    this.initForm();
  }
  
  initForm() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    const whatsappMessage = `Contact Form Submission:

Name: ${name}
Email: ${email}

Message:
${message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    e.target.reset();
    alert('Thank you for your message! We will contact you soon.');
  }
}

// Mobile Navigation
class MobileNav {
  constructor() {
    this.initMobileNav();
  }
  
  initMobileNav() {
    const toggle = document.querySelector('.navbar__mobile-toggle');
    const menu = document.querySelector('.navbar__menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
      });
      
      // Close menu when clicking on a link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('active');
          toggle.classList.remove('active');
        });
      });
    }
  }
}

// Initialize application
let router, productGallery, productFilter, contactForm, mobileNav;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  router = new Router();
  productGallery = new ProductGallery();
  productFilter = new ProductFilter();
  contactForm = new ContactForm();
  mobileNav = new MobileNav();
  
  // Initialize back to shop button
  const backToShopBtn = document.getElementById('back-to-shop');
  if (backToShopBtn) {
    backToShopBtn.addEventListener('click', () => {
      window.location.hash = 'shop';

  applySilverRateToProductPrices();   // 💰 Update prices based on manual silver rate
  displaySilverRate();                // 📢 Show silver rate on homepage
    });
  }
  
  // Initialize smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#home' || targetId === '#shop' || 
          targetId === '#about' || targetId === '#contact') {
        // Let the router handle these
        return;
      }
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  console.log('Aaryav Jewels application initialized successfully!');
});








document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  router = new Router();
  productGallery = new ProductGallery();
  productFilter = new ProductFilter();
  contactForm = new ContactForm();
  mobileNav = new MobileNav();

    // 🔍 Real-time search functionality
  document.getElementById('product-search').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase().trim();

  filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.gender.toLowerCase().includes(query)
  );

  router.loadShopProducts();
});



});
function displaySilverRate() {
  const el = document.getElementById('silver-rate-display');
  if (el) el.textContent = `Silver Rate: ₹ ${dailySilverRateINR} /g`;
}



// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__mobile-toggle');
  const menu = document.querySelector('.navbar__menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('zoom-btn').addEventListener('click', () => {
  const modal = document.getElementById('zoom-modal');
  const zoomImage = document.getElementById('zoom-image');
  const mainImage = document.getElementById('main-product-image');
  
  if (mainImage && zoomImage && modal) {
    zoomImage.src = mainImage.src;
    modal.style.display = 'flex';
  }
});

document.querySelector('.zoom-modal__close').addEventListener('click', () => {
  document.getElementById('zoom-modal').style.display = 'none';
});




// Export for global access
window.router = router;
