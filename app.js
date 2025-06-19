// Application data
// 🪙 Manually update this silver rate daily (₹ per gram)
let dailySilverRateINR = 115.50;





const products = [
 

  {
    id: 1,
    name: "Elegant Gold Chain Female",
    price: 299,
    category: "bracelets",
    gender: "male",
    description: "Sleek and minimal silver chain designed for everyday sophistication. Crafted from high-quality sterling silver with a modern oval-link pattern.",
    detailedDescription: "This elegant silver chain blends timeless design with contemporary style. Meticulously crafted from 777 silver, the chain features polished oval links and a secure lobster clasp, making it perfect for both casual wear and formal occasions. Its unisex design ensures it complements any outfit, for any gender.",
    specifications: {
      "Material": "Silver",
      "Length": "18 inches (adjustable)",
      "Weight": "11g",
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
    name: "Elegant Gold Chain Female",
    price: 299,
    category: "bracelets",
    gender: "male",
    description: "Distinctive silver chain featuring twisted rope-style links for a bold and intricate look. Made from silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Silver",
      "Length": "8 inches (adjustable)",
      "Weight": "10g",
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
    name: "Elegant Gold Chain Female",
    price: 299,
    category: "bracelets",
    gender: "female",
    description: "A refined silver bracelet adorned with brilliant-cut diamonds set in square links. Crafted for elegant evenings and timeless sophistication.",
    detailedDescription: "Elevate your jewelry collection with this stunning silver bracelet featuring five dazzling square-shaped links, each encrusted with radiant-cut diamonds. Meticulously set in sterling silver, the bracelet strikes a perfect balance between contemporary design and classic luxury. Its adjustable length and secure clasp offer both comfort and beauty, ideal for formal occasions or as a statement accessory.",
    specifications: {
      "Material": "Sterling Silver with Diamond Simulants",
      "Length": "7 inches + 1-inch extender",
      "Weight": "14g",
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
    price: 299,
    category: "bracelets",
    gender: "female",
    description: "A delicate silver bracelet featuring alternating marquise links and vibrant pink sapphires. Designed to embody grace and romantic charm.",
    detailedDescription: "Grace your wrist with this enchanting silver bracelet, beautifully set with luminous pink sapphire stones alternated between sparkling pavé marquise-shaped links. Crafted in high-quality sterling silver, each gemstone is precision-set to maximize brilliance and elegance. With a secure lobster clasp and adjustable chain, this bracelet is perfect for both everyday sophistication and special evening moments.",
    specifications: {
      "Material": "Silver with Pink Sapphire Simulants and CZ Accents",
      "Length": "7 inches + 1-inch extender",
      "Weight": "12g",
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
    price: 299,
    category: "bracelets",
    gender: "female",
    description: "A luminous silver bracelet featuring a continuous design of diamond-studded marquise links. Pure elegance with a modern silhouette.",
    detailedDescription: "Radiating refined sophistication, this sterling silver bracelet showcases an elegant chain of open marquise-shaped links, each delicately encrusted with sparkling cubic zirconia. The design flows gracefully across the wrist, offering timeless charm with a hint of modern luxury. Its adjustable extension and secure lobster clasp ensure a flawless fit for any occasion—from casual elegance to formal glamour.",
    specifications: {
      "Material": "Sterling Silver with Cubic Zirconia",
      "Length": "7 inches + 1-inch extender",
      "Weight": "10g",
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
    price: 299,
    category: "bracelets",
    gender: "female",
    description: "A bold and spiritual bracelet featuring an 'Om' symbol at the center of a shimmering pavé diamond bar. Perfect harmony of style and meaning.",
    detailedDescription: "Channel spiritual energy and sophisticated style with this refined bracelet featuring a sleek bar design paved with rows of dazzling cubic zirconia. At the center lies a black enamel 'Om' symbol, symbolizing peace, protection, and cosmic power. The polished sterling silver frame is matched with an adjustable drawstring chain, ensuring comfort and a secure fit. A meaningful accessory that blends tradition with contemporary fashion—ideal for personal wear or a thoughtful gift.",
    specifications: {
      "Material": "Sterling Silver with Black Enamel and Cubic Zirconia",
      "Length": "Adjustable – fits most wrist sizes",
      "Weight": "16g",
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
    price: 299,
    category: "bracelets",
    gender: "male",
    description: "A timeless silver curb chain bracelet that speaks of strength and subtle style. A staple accessory for the modern man.",
    detailedDescription: "Engineered for everyday elegance, this masculine bracelet features a bold, polished curb chain crafted from durable stainless steel. The sleek interlocking links provide a strong yet flexible feel, while the triangular-end clasp detail adds a distinctive modern touch. Whether worn solo or layered with a watch, the Titan Classic bracelet is a statement in simplicity and style—perfect for casual and formal ensembles alike.",
    specifications: {
      "Material": "Silver",
      "Length": "8.5 inches",
      "Weight": "12g",
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
  //   price: 299,
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
    price: 299,
    category: "bracelets",
    gender: "female",
    description: "A delicate silver bracelet featuring floral links and vibrant pink sapphires. Designed to embody grace and romantic charm.",
    detailedDescription: "Grace your wrist with this enchanting silver bracelet, beautifully set with luminous pink sapphire stones alternated between sparkling pavé marquise-shaped links. Crafted in high-quality sterling silver, each gemstone is precision-set to maximize brilliance and elegance. With a secure lobster clasp and adjustable chain, this bracelet is perfect for both everyday sophistication and special evening moments.",
    specifications: {
      "Material": "Sterling Silver with Pink Sapphire Simulants and CZ Accents",
      "Length": "7 inches + 1-inch extender",
      "Weight": "12g",
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
    price: 299,
    category: "rings",
    gender: "female",
    description: "A graceful silver ring featuring alternating vivid blue and white stones. A symbol of elegance with a celestial touch.",
    detailedDescription: "Capture the night sky's allure with this delicate silver ring, showcasing a captivating sequence of alternating royal blue and brilliant white gemstones. The round-cut stones are prong-set for maximum sparkle, each one carefully selected for clarity and color balance. Ideal as a promise ring, anniversary gift, or stackable statement piece, this band embodies refined femininity and timeless charm.",
    specifications: {
      "Material": "Sterling Silver with Diamond Simulants",
      "Stone Size": "3 mm each (approx.)",
      "Weight": "12g",
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
    price: 299,
    category: "rings",
    gender: "female",
    description: "A sleek silver band featuring a delicately carved design. Designed for bold elegance and modern refinement.",
    detailedDescription: "This stunning silver ring showcases a contemporary band design highlighted by the art of a silversmith. The precision-cut facets catch the light beautifully, offering a radiant shimmer from every angle. Crafted from high-quality sterling silver, this unisex piece delivers durability and sophisticated edge—ideal for special events or upscale daily wear.",
    specifications: {
      "Material": "Silver",
      "Width": "6 mm",
      "Weight": "6g",
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
    category: "rings",
    gender: "female",
    description: "A sleek silver band featuring a delicately carved design. Designed for bold elegance and modern refinement.",
    detailedDescription: "This stunning silver ring showcases a contemporary band design highlighted by the art of a silversmith. The precision-cut facets catch the light beautifully, offering a radiant shimmer from every angle. Crafted from high-quality sterling silver, this unisex piece delivers durability and sophisticated edge—ideal for special events or upscale daily wear.",
    specifications: {
      "Material": "Silver",
      "Width": "6 mm",
      "Weight": "6g",
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
    price: 349,
    category: "bracelets",
    gender: "unisex",
    description: "Distinctive silver chain featuring twisted rope-style links for a bold and intricate look. Made from premium sterling silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Sterling Silver",
      "Length": "8 inches",
      "Weight": "13g",
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
    price: 349,
    category: "bracelets",
    gender: "unisex",
    description: "Distinctive silver chain featuring Oval-style links for a bold and intricate look. Made from 777 silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Sterling Silver",
      "Length": "8 inches",
      "Weight": "13g",
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
    price: 399,
    category: "necklaces",
    gender: "female",
    description: "A sleek and timeless sterling silver chain designed for effortless everyday elegance.",
    detailedDescription: "Embrace understated sophistication with this minimalist sterling silver chain. Featuring a fine yet durable link construction, this necklace is ideal for layering or wearing solo as a subtle statement. Its polished finish and secure lobster clasp closure ensure both comfort and classic appeal. Perfect for both men and women, this piece transitions seamlessly from casual wear to more refined settings.",
    specifications: {
      "Material": "Silver",
      "Length": "18 inches",
      "Weight": "6g",
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
    price: 289,
    category: "rings",
    gender: "female",
    description: "A sleek silver band featuring a single row of shimmering artificial diamonds at its center. Elegant, minimal, and radiant.",
    detailedDescription: "Add a touch of refined brilliance to your everyday look with this slender sterling silver ring. At the heart of the design lies a continuous line of high-grade artificial diamonds, precisely set to create a seamless circle of sparkle. Perfect as a promise ring, stacking band, or solo statement, this ring combines timeless style with modern simplicity. Lightweight yet dazzling, it’s crafted for lasting comfort and shine.",
    specifications: {
      "Material": "Sterling Silver with Diamond Simulants",
      "Width": "2 mm",
      "Weight": "2.5g",
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
    price: 199,
    category: "rings",
    gender: "unisex",
    description: "A bold unisex ring featuring a continuous pattern engraved around a brushed silver band. Built for those who move with rhythm and intention.",
    detailedDescription: "The GeoPulse Band redefines minimalism with a modern industrial edge. Crafted from durable sterling silver, this unisex ring showcases a repeating motif, precision-etched along the center of a matte-finished surface. The clean, structured design evokes balance, rhythm, and purpose—making it a standout piece for everyday wear or meaningful gifting. Designed for comfort with a slightly curved inner edge.",
    specifications: {
      "Material": "Silver",
      "Width": "5mm",
      "Weight": "5.8g",
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
    category: "rings",
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
    price: 349,
    category: "bracelets",
    gender: "unisex",
    description: "Distinctive silver chain featuring twisted rope-style links for a bold and intricate look. Made from premium sterling silver.",
    detailedDescription: "Crafted for those who appreciate statement pieces, this silver chain boasts twisted rope-style links that add texture and depth. The intricate design is both classic and contemporary, perfect for everyday wear or special occasions. With its secure lobster clasp and durable construction, it’s a versatile piece suitable for any gender.",
    specifications: {
      "Material": "Sterling Silver",
      "Length": "8 inches",
      "Weight": "13g",
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
    price: 499,
    category: "rings",
    gender: "unisex",
    description: "A bold sterling silver Ram Challa ring engraved with sacred symbolism. A timeless expression of strength, devotion, and tradition.",
    detailedDescription: "Rooted in tradition and crafted with precision, the Ram Challa ring carries a powerful message of faith and inner strength. Made from solid sterling silver, the ring features a clean, polished surface with intricate engravings of the word 'राम' (Ram) across its band. Revered for its spiritual significance, this unisex ring is a tribute to the divine and a reflection of unwavering resolve. Perfect for daily wear, rituals, or as a meaningful gift.",
    specifications: {
       "Material": "Silver",
       "Width": "6 mm",
       "Weight": "7g",
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
    price: 399,
    category: "necklaces",
    gender: "Male",
    description: "A sleek and timeless sterling silver chain designed for effortless everyday elegance.",
    detailedDescription: "Embrace understated sophistication with this minimalist sterling silver chain. Featuring a fine yet durable link construction, this necklace is ideal for layering or wearing solo as a subtle statement. Its polished finish and secure lobster clasp closure ensure both comfort and classic appeal. Perfect for both men and women, this piece transitions seamlessly from casual wear to more refined settings.",
    specifications: {
      "Material": "Silver",
      "Length": "18 inches",
      "Weight": "15g",
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
    price: 199,
    category: "rings",
    gender: "unisex",
    description: "A sleek and minimal sterling silver ring designed for everyday elegance. Understated. Timeless. Essential.",
    detailedDescription: "Celebrate the beauty of simplicity with the Pure Form Minimalist Band. Crafted from high-quality 925 sterling silver, this ultra-slim ring features a smooth, polished surface with a low-profile silhouette. Whether worn solo, stacked, or paired with statement pieces, it effortlessly complements any style. Perfect for those who appreciate clean lines and quiet sophistication.",
    specifications: {
      "Material": "Silver",
      "Width": "1.5 mm",
      "Weight": "1.8g",
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
  price: 449,
  category: "necklaces",
  gender: "male",
  description: "A long flat-link chain crafted from silver. Bold, sleek, and designed for timeless confidence.",
  detailedDescription: "Crafted for those who appreciate understated luxury, the Legacy Flat-Link Chain combines length, weight, and clean design in one powerful accessory. Made from 777 silver, this long chain features flat, close-set links that drape comfortably across the chest. The smooth reflective surface and substantial feel make it a perfect standalone piece or ideal layering base. Built to last, made to stand out.",
  specifications: {
    "Material": "Silver",
    "Length": "24 inches",
    "Width": "5.5 mm",
    "Weight": "21g",
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
    price: 349,
    category: "bracelets",
    gender: "unisex",
    description: "A bold Cuban link bracelet crafted from 777 silver. Rugged elegance with undeniable street style influence.",
    detailedDescription: "The Dominion Cuban Link Bracelet brings classic strength and style together in one iconic piece. Handcrafted from solid 777 silver, its tightly interlocked links offer a thick, heavy feel and unmistakable shine. The bracelet is finished with a secure box clasp, ensuring durability for everyday wear. Whether worn solo or stacked, this Cuban link delivers presence, power, and polish—ideal for men who move with confidence.",
    specifications: {
      "Material": "Silver",
      "Length": "8.5 inches",
      "Weight": "3.4g",
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
  price: 279,
  category: "pendants",
  gender: "unisex",
  description: "A spiritual Om pendant handcrafted in 925 silver. Symbolic serenity in a refined, radiant form.",
  detailedDescription: "Channel peace and purpose with the Om Divine Silver Pendant. Expertly crafted in 925 sterling silver, this pendant features a finely detailed Om symbol — representing universal energy and inner calm. Its smooth, high-polish surface adds a contemporary touch to this timeless spiritual icon. Whether worn close to the heart or gifted as a meaningful token, the Om Divine Pendant balances style with soulful significance.",
  specifications: {
    "Material": "925 Sterling Silver",
    "Height": "1.5 inches",
    "Weight": "2.1g",
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
  price: 299,
  category: "pendants",
  gender: "unisex",
  description: "A divine Khatu Shyam pendant in 925 silver. Crafted with reverence for spiritual devotion and timeless elegance.",
  detailedDescription: "Embrace divine blessings with the Khatu Shyam Devotional Pendant. Handcrafted from pure 925 sterling silver, this pendant features an intricately carved image of Lord Shyam, revered as the God of faith and sacrifice. The pendant is designed with a radiant finish that enhances its spiritual aura and visual appeal. Whether worn daily or on special religious occasions, this pendant serves as a constant source of strength, devotion, and grace.",
  specifications: {
    "Material": "925 Sterling Silver",
    "Height": "1.75 inches",
    "Weight": "2.5g",
    "Finish": "Glossy antique-style engraving",
    "Care": "Wipe with a soft cloth after use. Keep away from chemicals and water. Store in a dry pouch or box."
  },
  images: [
    "assets/IMG_20250530_234813.jpg"
  ]
}
];

function applySilverRateToProductPrices() {
  products.forEach(product => {
    const weightStr = product.specifications?.Weight || "";
    const match = weightStr.match(/([\d.]+)g/); // Match number with 'g'

    if (match) {
      const weight = parseFloat(match[1]);
      const makingCharge = 100; // Optional markup
      product.price = Math.round(weight * dailySilverRateINR + makingCharge);
    }
  });
}

function displaySilverRate() {
  const el = document.getElementById("silver-rate-display");
  if (el) el.textContent = `Silver Rate: ₹${dailySilverRateINR} /g`;
}





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
  
  createProductCard(product) {
    return `
      <div class="product-card" onclick="router.navigateToProduct(${product.id})">
        <img src="${product.images?.[0] || 'assets/default.png'}" alt="${product.name}" class="product-card__image">
        <div class="product-card__content">
          <h3 class="product-card__title">${product.name}</h3>
          <div class="product-card__price">$${product.price}</div>
          <p class="product-card__description">${product.description}</p>
          <div class="product-card__tags">
            <span class="product-tag">${product.category}</span>
            <span class="product-tag">${product.gender}</span>
          </div>
          <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); router.navigateToProduct(${product.id})">
            View Details
          </button>
        </div>
      </div>
    `;
  }
  
  navigateToProduct(productId) {
  window.location.hash = `product/${productId}`;
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
    document.getElementById('product-price').textContent = `$${product.price}`;
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
    const message = `Hi! I'm interested in ordering the ${product.name} (Price: $${product.price}). 

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
        if (priceRange === '0-300' && price >= 300) return false;
        if (priceRange === '300-600' && (price < 300 || price >= 600)) return false;
        if (priceRange === '600+' && price < 600) return false;
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

  applySilverRateToProductPrices(); // 💰 Apply silver pricing logic
});
function displaySilverRate() {
  const el = document.getElementById('silver-rate-display');
  if (el) el.textContent = `Silver Rate: ₹${dailySilverRateINR} /g`;
}














// Export for global access
window.router = router;
