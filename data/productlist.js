const productlist = [
    {
        name: 'Samsung Galaxy M34 5G',
        price: 16999,
        description: 'A budget 5G smartphone with a Super AMOLED display, 6000mAh battery, and a 50MP triple camera setup – perfect for all-day use and smooth performance.',
        category: 'mobile',
        imageUrl: '/assets/mobile/m1.webp'
      },
      {
        name: 'Samsung Galaxy S22 Ultra',
        price: 84999,
        description: 'Premium flagship with a stunning 6.8" Dynamic AMOLED display, Snapdragon 8 Gen 1, built-in S Pen, and powerful 108MP quad-camera – ideal for creators and professionals.',
        category: 'mobile',
        imageUrl: '/assets/mobile/m2.jpg'
      },
      {
        name: 'Samsung Galaxy S24',
        price: 79999,
        description: 'The latest in the Galaxy S series featuring an advanced AI-powered camera system, sleek design, and powerful Exynos/Snapdragon processor for peak performance.',
        category: 'mobile',
        imageUrl: '/assets/mobile/m3.webp'
      },
      {
        name: 'Realme Narzo 60 5G',
        price: 14499,
        description: 'A value-packed smartphone with a curved AMOLED display, 64MP AI camera, and MediaTek Dimensity chipset – stylish and performance-driven for the youth.',
        category: 'mobile',
        imageUrl: '/assets/mobile/m6.png'
      },
      {
        name: 'Vivo X90 Pro',
        price: 84999,
        description: 'Premium flagship co-engineered with ZEISS optics, 1-inch Sony IMX989 sensor, Dimensity 9200 processor – perfect for photography enthusiasts.',
        category: 'mobile',
        imageUrl: '/assets/mobile/m7.webp'
      },
      {
        name: 'Vivo V29 Pro',
        price: 39999,
        description: 'A sleek premium mid-range smartphone with a 3D curved display, 50MP portrait camera, and fast charging support – stylish and powerful.',
        category: 'mobile',
        imageUrl: '/assets/mobile/m8.jpg'
      },
      {
        name: 'Lenovo Tab M10 (3rd Gen)',
        price: 14999,
        description: 'A budget-friendly Android tablet with a 10.1" display, Dolby Atmos speakers, and long battery life – great for entertainment and e-learning.',
        category: 'mobile',
        imageUrl: '/assets/mobile/t3.jpg'
      },
      {
        name: 'Samsung Galaxy Tab S9 FE+',
        price: 49999,
        description: 'A high-end tablet featuring a 12.4" WQXGA display, S Pen support, water resistance, and DeX mode – ideal for work and play.',
        category: 'mobile',
        imageUrl: '/assets/mobile/t4.jpg'
      },

//tv

  {
    name: 'LuxWash Elite 9000',
    price: 74999,
    description: 'Premium front-loading washing machine with 10kg capacity and intelligent fabric care technology. Features 14 wash programs, steam sanitization, and energy-efficient operation. The sleek white design with chrome accents complements any modern laundry space.',
    category: 'tvs',
    imageUrl: '/assets/tv/a1.jpg'
  },

  {
    name: 'ColorBurst Pro X7',
    price: 91999,
    description: 'Revolutionary washing machine with ColorProtect™ technology that preserves vibrant colors and prevents bleeding. 12kg capacity with advanced spin balance and ultra-quiet operation. Includes specialized cycles for delicates, sportswear, and bedding.',
    category: 'tvs',
    imageUrl: '/assets/tv/a2.jpg'
  },

  {
    name: 'Arctic Breeze Deluxe',
    price: 15999,
    description: 'Portable evaporative air cooler with 25L water tank capacity. Three-speed settings with oscillation function and remote control. Perfect for spaces up to 300 sq ft. Energy-efficient alternative to traditional air conditioning with easy-roll casters.',
    category: 'tvs',
    imageUrl: '/assets/tv/c1.jpg'
  },

  {
    name: 'CoolComfort 4500',
    price: 14000,
    description: 'Compact air cooler with honeycomb cooling technology and ice compartment for enhanced cooling. Features adjustable louvers, sleep mode, and 18-hour programmable timer. Low power consumption with 12L water capacity and low-water indicator.',
    category: 'tvs',
    imageUrl: '/assets/tv/c2.jpg'
  },

  {
    name: 'FrostMaster SmartChill',
    price: 62999,
    description: 'Energy-efficient refrigerator with 410L capacity featuring digital temperature control and multi-airflow system. No-frost technology with odor neutralizer and convertible freezer compartment. Sleek black finish with fingerprint-resistant coating.',
    category: 'tvs',
    imageUrl: '/assets/tv/f1.png'
  },

  {
    name: 'PanoView UltraScape 55',
    price: 54499,
    description: '4K UHD Smart TV with stunning mountain-lake view capabilities. Features AI picture optimization, Dolby Vision HDR, and integrated voice assistant. Includes 3 HDMI ports, built-in WiFi, and streamlined interface for all your entertainment needs.',
    category: 'tvs',
    imageUrl: '/assets/tv/tv1.jpg'
  },

  {
    name: 'ClearVision HD 43',
    price: 27499,
    description: 'Full HD television with enhanced color accuracy and wide viewing angle. Smart features include popular streaming apps and screen mirroring. Energy-efficient with eco mode and sleep timer. Perfect entry-level smart TV for bedrooms or smaller living spaces.',
    category: 'tvs',
    imageUrl: '/assets/tv/tv2.jpg'
  },

  {
    name: 'GoldenView 50" UHD',
    price: 39999,
    description: '4K Ultra HD display with dynamic color enhancement technology. Features HDR10 support, motion smoothing for action scenes, and immersive sound. Slim bezel design maximizes screen space while complementing modern home décor.',
    category: 'tvs',
    imageUrl: '/assets/tv/tv3.jpg'
  },

//fashion
//men Hoodie
{
    name: 'UrbanDenim Hooded Jacket',
    price: 3499,
    description: 'Black denim jacket with contrasting light gray hood, perfect for layered casual looks.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies1.jpg'
  },

  {
    name: 'EcoComfort Olive Hoodie',
    price: 2299,
    description: 'Classic olive green pullover hoodie with spacious front pocket and relaxed fit.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies2.jpg'
  },
  {
    name: 'AlphaStride Performance Hoodie',
    price: 2799,
    description: 'Forest green athletic hoodie with kangaroo pocket, ideal for active lifestyles.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies3.jpg'
  },
  {
    name: 'SandTone Quarter-Zip Sweater',
    price: 2499,
    description: 'Beige quarter-zip pullover with minimalist design for versatile styling options.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies4.jpg'
  },
  {
    name: 'StreetEdge Zip-Up Hoodie',
    price: 2199,
    description: 'Charcoal zip-up hoodie with contrasting drawstrings for urban casual wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies5.jpg'
  },
  {
    name: 'NightShade Essential Hoodie',
    price: 1999,
    description: 'Classic black pullover hoodie with subtle logo and standard kangaroo pocket.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies6.jpg'
  },
  {
    name: 'DualTone Athletic Zip Hoodie',
    price: 2889,
    description: 'Gray and black color-blocked zip-up hoodie with embroidered logo detail.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies7.jpg'
  },
  {
    name: 'ContraBlock Streetwear Hoodie',
    price: 3259,
    description: 'Black and white color-blocked hoodie with statement sleeve text and kangaroo pocket.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies8.jpg'
  },
  {
    name: 'WindBreaker Classic Jacket',
    price: 3499,
    description: 'Black denim jacket with contrasting light gray hood, perfect for layered casual looks.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'Hoodies'
    },
    imageUrl: '/assets/men/hoodies/hoodies9.jpg'
  },
  
  
  //jeans
  {
    name: 'ClassicFit Medium Wash Jeans',
    price: 2499,
    description: 'Standard fit medium blue denim jeans with subtle fading for everyday casual wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'jeans'
    },
    imageUrl: '/assets/men/jeans/jeans1.jpg'
  },
  {
    name: 'UrbanCargo Relaxed Jeans',
    price: 2900,
    description: 'Dark wash relaxed fit jeans with utility-inspired pocket details for urban style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'jeans'
    },
    imageUrl: '/assets/men/jeans/jeans2.jpg'
  },
  {
    name: 'LightWash Relaxed Straight Jeans',
    price: 2340,
    description: 'Light blue straight-leg jeans with comfortable relaxed fit and classic styling.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'jeans'
    },
    imageUrl: '/assets/men/jeans/jeans3.jpg'
  },
  {
    name: 'SkyBlue Slim Stretch Jeans',
    price: 2199,
    description: 'Medium-blue slim-fit jeans with slight stretch for comfort and modern silhouette.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'jeans'
    },
    imageUrl: '/assets/men/jeans/jeans4.jpg'
  },
  {
    name: 'WorkStyle Contrast Stitch Cargo Jeans',
    price: 3000,
    description: 'Black utility jeans with contrast stitching and cargo pockets for functional style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'jeans'
    },
    imageUrl: '/assets/men/jeans/jeans5.jpg'
  },
  {
    name: 'VintageWash Standard Jeans',
    price: 2650,
    description: 'Medium-to-light wash standard fit jeans with authentic vintage appearance and comfort.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'jeans'
    },
    imageUrl: '/assets/men/jeans/jeans6.jpg'
  },
  



  //shirts
  {
    name: 'VerticalStripe Resort Shirt',
    price: 1899,
    description: 'Green and cream striped short-sleeve casual shirt with relaxed fit for summer style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirts1.jpg'
  },
  {
    name: 'GeoPattern Navy Camp Shirt',
    price: 1759,
    description: 'Blue and white geometric pattern short-sleeve shirt with traditional collar.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt2.jpg'
  },
  {
    name: 'NavyLinen Roll-Up Shirt',
    price: 1700,
    description: 'Classic navy blue linen shirt with roll-up sleeves for casual elegance.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt3.jpg'
  },
  {
    name: 'OmbreBlossom Printed Shirt',
    price: 2099,
    description: 'White to black gradient shirt with floral pattern for distinctive style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt4.jpg'
  },
  {
    name: 'RacerStripe Formal Shirt',
    price: 1999,
    description: 'Navy blue shirt with white horizontal stripe detail for smart-casual occasions.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt5.jpg'
  },
  {
    name: 'UrbanCheck 3/4 Sleeve Shirt',
    price: 1840,
    description: 'Navy and grey checked shirt with three-quarter sleeves for versatile styling.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt6.jpg'
  },
  {
    name: 'icroFloral Cotton Shirt',
    price: 1789,
    description: 'Light blue shirt with subtle floral pattern and rolled sleeves for refined casual wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt7.jpg'
  },
  {
    name: 'RoseStripe Button-Down',
    price: 1669,
    description: 'Pink textured cotton shirt with clean lines and comfortable fit.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt8.jpg'
  },
  {
    name: 'SoftCheck Flannel Shirt',
    price: 1899,
    description: 'Grey and cream plaid pattern shirt with relaxed fit for casual comfort.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt9.jpg'
  },

  {
    name: 'GeoMint Vacation Shirt',
    price: 2199,
    description: 'Teal, white and black geometric pattern short-sleeve shirt for bold summer style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shirts'
    },
    imageUrl: '/assets/men/shirts/shirt10.jpg'
  },

  //shoes

  {
    name: 'FlexKnit Pro Runners',
    price: 3999,
    description: 'White lightweight knit athletic shoes with slip-on design and cushioned sole.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear1.jpg'
  },
  {
    name: 'VintageEdge Penny Loafers',
    price: 4899,
    description: 'Classic brown leather loafers with durable lug sole for sophisticated casual wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear2.jpg'
  },
  {
    name: 'UrbanStripe Canvas Sneakers',
    price: 2999,
    description: 'White low-top casual sneakers with side logo detail and contrast stitching.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear3.jpg'
  },
  {
    name: 'BlackEdge Comfort Oxfords',
    price: 3499,
    description: 'All-black leather casual dress shoes with cushioned outsole for everyday comfort.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear4.jpg'
  },
  {
    name: 'EasyStep Slip-On Formals',
    price: 2799,
    description: 'Burgundy slip-on formal shoes with durable rubber sole for office wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear5.jpg'
  },
  {
    name: 'ClassicLine Derby Shoes',
    price: 3899,
    description: 'Traditional black leather lace-up dress shoes with subtle stitch detail.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear6.jpg'
  },
  {
    name: 'ComfortSole Casual Oxfords',
    price: 2699,
    description: 'Brown lace-up casual shoes with contrast white sole for relaxed style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear7.jpg'
  },
  {
    name: 'NauticalDeck Leather Casuals',
    price: 3299,
    description: 'Brown moc-toe casual shoes with white outsole for versatile everyday wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear8.jpg'
  },
  {
    name: 'CloudWalk Mesh Trainers',
    price: 2599,
    description: 'Light grey athletic shoes with breathable mesh upper and memory foam insole.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear9.jpg'
  },
  {
    name: 'SpeedStreak Performance Runners',
    price: 4499,
    description: 'Black athletic shoes with neon accent and specialized cushioning for active lifestyles.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear10.jpg'
  },
  {
    name: 'ModernBrogue Hybrid Shoes',
    price: 3799,
    description: 'Tan leather wingtip shoes with lightweight comfort sole for modern styling.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear11.jpg'
  },
  {
    name: 'ExecutiveComfort Derby Shoes',
    price: 3599,
    description: 'Rich brown leather dress shoes with cushioned insole for all-day comfort.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear12.jpg'
  },
  {
    name: 'SlipStream Leather Casuals',
    price: 3899,
    description: 'Brown slip-on leather sneakers with minimalist design and contrast white sole.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear13.jpg'
  },
  {
    name: 'HeritageMonk Formal Loafers',
    price: 4299,
    description: 'Burnished brown double-buckle monk strap shoes for refined formal occasions.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear14.jpg'
  },
  {
    name: 'FlexFit Casual Sandals',
    price: 2399,
    description: 'Black leather casual sandals with adjustable strap and cushioned footbed.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/men/shoes/footwear15.jpg'
  },
  //shorts
  {
    name: 'TerraCotta Chino Shorts',
    price: 1499,
    description: 'Rust orange casual shorts with standard fit and classic chino styling.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short1.jpg'
  },
  {
    name: 'NavyDot Printed Shorts',
    price: 1399,
    description: 'Navy blue shorts with white polka dot pattern and comfortable regular fit.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short2.jpg'
  },
  {
    name: 'ForestCargo Drawstring Shorts',
    price: 1599,
    description: 'Olive green utility shorts with elastic waistband and side cargo pockets.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short3.jpg'
  },
  {
    name: 'AquaFlex Casual Shorts',
    price: 1299,
    description: 'Teal lightweight shorts with clean lines for versatile summer wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short4.jpg'
  },
  {
    name: 'MicroPrint Collection Shorts',
    price: 1199,
    description: 'Beige shorts with subtle pattern, available in multiple color options.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short5.jpg'
  },
  {
    name: 'EarthTone Comfort Shorts',
    price: 1349,
    description: 'Brown cotton shorts with drawstring waist for casual relaxed style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short6.jpg'
  },
  {
    name: 'SandDune Classic Shorts',
    price: 1449,
    description: 'Khaki flat-front shorts with standard fit for everyday versatility.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short7.jpg'
  },
  {
    name: 'MintFresh Summer Shorts',
    price: 1249,
    description: 'Light mint green shorts with clean design for cool summer style.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short8.jpg'
  },
  {
    name: 'DualTone Essential Shorts',
    price: 1699,
    description: 'Two-pack featuring navy and khaki shorts with classic chino styling.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'shorts'
    },
    imageUrl: '/assets/men/shorts/short9.jpg'
  },
  //tshirts
  {
    name: 'GreenJade Textured Henley',
    price: 1099,
    description: 'Deep teal long-sleeve t-shirt with subtle textured pattern and crew neck.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt.jpg'
  },
  {
    name: 'SandDune Classic Sweater',
    price: 1599,
    description: 'Camel brown lightweight sweater with crew neck and relaxed fit.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt1.jpg'
  },
  {
    name: 'GeoAztec Printed Tee',
    price: 999,
    description: 'Black and white geometric pattern short-sleeve t-shirt with intricate design.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt2.jpg'
  },
  {
    name: 'RedStripe Graphic Tee',
    price: 899,
    description: 'Vibrant red t-shirt featuring horizontal white stripe box design.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt3.jpg'
  },
  {
    name: 'SageMist Casual Tee',
    price: 799,
    description: 'Light sage green short-sleeve t-shirt with relaxed fit and soft fabric.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt4.jpg'
  },
  {
    name: 'DesertSand Henley Tee',
    price: 1199,
    description: 'Beige short-sleeve henley t-shirt with button placket and subtle embroidery.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt5.jpg'
  },
  {
    name: 'EssentialTri-Pack Tees',
    price: 1599,
    description: 'Set of three basic t-shirts in teal, white, and black for everyday wear.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt6.jpg'
  },
  {
    name: 'ComfortFit Triple Pack',
    price: 1499,
    description: 'Three-pack of t-shirts in white, olive green, and light gray with minimal branding.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt7.jpg'
  },
  {
    name: 'StickerBomb Graphic Tee',
    price: 1299,
    description: 'All-over cartoon sticker print t-shirt with multi-color design on white background.',
    category: 'fashion',
    details: {
      gender: 'men',
      subcategory: 'tshirts'
    },
    imageUrl: '/assets/men/tshirts/tshirt8.jpg'
  },


  //women

  //shoes
  {
    name: 'CloudStep Chunky Sneakers',
    price: 2799,
    description: 'White and grey platform sneakers with thick sole and sporty design.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear1.jpg'
  },
  {
    name: 'PearlBit Loafer Mules',
    price: 2499,
    description: 'White slip-on platform loafers with decorative metal bit detail.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear2.jpg'
  },
  {
    name: 'SandyPlatform Velcro Sneakers',
    price: 2399,
    description: 'Beige platform sneakers with adjustable velcro strap for casual comfort.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear3.jpg'
  },
  {
    name: 'ClassicBow Ballet Flats',
    price: 1899,
    description: 'White pointed-toe ballerina flats with delicate bow detail.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear4.jpg'
  },
  {
    name: 'ShimmerBlock Party Heels',
    price: 2699,
    description: 'Gold glitter block heel pumps with pointed toe for elegant occasions.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear5.jpg'
  },
  {
    name: 'GlossMini Block Heels',
    price: 1999,
    description: 'Black patent leather pumps with low block heel for everyday elegance.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear6.jpg'
  },
  {
    name: 'BlushGlow Pointed Pumps',
    price: 2199,
    description: 'Blush pink patent leather pointed-toe pumps with comfortable heel height.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear7.jpg'
  },
  {
    name: 'NudeKnot Slide Sandals',
    price: 1799,
    description: 'Beige slip-on sandals with decorative knot detail for effortless style.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear8.jpg'
  },
  {
    name: 'CrystalPointed Evening Pumps',
    price: 2599,
    description: 'Black pointed-toe pumps with crystal embellishment for special occasions.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear9.jpg'
  },
  {
    name: 'ShimmerWave Heel Slides',
    price: 2099,
    description: 'Beige slip-on mules with metallic wave pattern and comfortable block heel.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/women/shoes/footwear10.jpg'
  },


  //jackets
  {
    name: 'FloralGlow Longline Shrug',
    price: 2499,
    description: 'Multicolor floral printed long jacket with open front design for layered looks.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets1.jpg'
  },
  {
    name: 'GrayCharm Basic Shrug',
    price: 1699,
    description: 'Soft grey three-quarter sleeve shrug with open front for versatile styling.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets2.jpg'
  },
  {
    name: 'HoundsTooth Classic Jacket',
    price: 2899,
    description: 'Black and white houndstooth pattern cropped jacket with clean lines.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets3.jpg'
  },
  {
    name: 'LaceDream Bolero',
    price: 1999,
    description: 'Black lace short jacket with scalloped edges and delicate pattern.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets4.jpg'
  },
  {
    name: 'PowerShoulder Crop Blazer',
    price: 2199,
    description: 'White structured crop blazer with padded shoulders for modern silhouette.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets5.jpg'
  },
  {
    name: 'ShimmerNet Party Shrug',
    price: 2299,
    description: 'Grey sequined sheer shrug with flared sleeves for evening occasions.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets6.jpg'
  },
  {
    name: 'DenimCrop Casual Jacket',
    price: 1899,
    description: 'Light blue denim cropped jacket with collared neckline and side pockets.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets7.jpg'
  },
  {
    name: 'MehndiPrint Ethnic Jacket',
    price: 1799,
    description: 'Lime green printed short jacket with traditional motifs for festive wear.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets8.jpg'
  },
  {
    name: 'SandyTone Safari Blazer',
    price: 2799,
    description: 'Beige structured blazer with utility pockets and button front closure.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets9.jpg'
  },
  {
    name: 'FlowerMix Printed Blazer',
    price: 2599,
    description: 'Navy blue blazer with colorful floral pattern for statement style.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets10.jpg'
  },
  {
    name: 'AquaFolk Embroidered Jacket',
    price: 2999,
    description: 'Light blue jacket with intricate border embroidery in ethnic design.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets11.jpg'
  },
  {
    name: 'LaceCrop Zip-Up Jacket',
    price: 1799,
    description: 'White lace cropped jacket with zipper front for delicate feminine style.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets12.jpg'
  },
  {
    name: 'ContrastPiping Blazer',
    price: 2399,
    description: 'Black structured blazer with contrasting edge detail for sophisticated look.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/women/jackets/jackets13.jpg'
  },
  //kurti
  {
    name: 'RubyGlow Embellished Kurti',
    price: 1699,
    description: 'Red tunic top with delicate embroidery detail at hem and sleeve edges.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis1.jpg'
  },
  {
    name: 'LavenderBloom Printed Kurta',
    price: 1899,
    description: 'Purple and white floral printed A-line kurta with three-quarter sleeves.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis2.jpg'
  },
  {
    name: 'RustKalamkari Ethnic Kurti',
    price: 1799,
    description: 'Rust red traditional printed straight kurti with contrast border detailing.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis3.jpg'
  },
  {
    name: 'MintDream Kurta Set',
    price: 2899,
    description: 'Seafoam green floral printed kurta with matching palazzo pants and dupatta.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis4.jpg'
  },
  {
    name: 'LilacTiered Maxi Kurta',
    price: 2299,
    description: 'Lavender tiered maxi kurta with delicate embroidery on yoke for festive occasions.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis5.jpg'
  },
  {
    name: 'EbonyCharm Embroidered Kurti',
    price: 1599,
    description: 'Black kurti with striking white embroidery detail on neck and placket.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis6.jpg'
  },
  {
    name: 'SilverLeaf Printed Tunic',
    price: 1499,
    description: 'Grey and white geometric pattern tunic top with mandarin collar and button placket.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'kurtis'
    },
    imageUrl: '/assets/women/kurtis/kurtis7.jpg'
  },

  //sarees
  { 
    name: 'Maroon Banarasi Silk Saree',
    price: 18500,
    description: 'Elegant maroon Banarasi silk saree adorned with rich gold embroidery.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree1.jpg'
  },
  { 
    name: 'Orange Net Saree with Silver Border',
    price: 22000,
    description: 'Bright orange embroidered net saree featuring a delicate silver border.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree2.jpg'
  },
  { 
    name: 'Black Sequin Saree',
    price: 15750,
    description: 'Chic black evening wear saree decorated with shimmering sequins.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree3.jpg'
  },
  { 
    name: 'Red Zari Silk Saree',
    price: 19800,
    description: 'Deep red traditional silk saree with intricate zari work for a classic look.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree4.jpg'
  },
  { 
    name: 'Coral Pink Linen Saree',
    price: 12500,
    description: 'Subtle coral pink linen saree featuring an elegant gold border.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree5.jpg'
  },
  { 
    name: 'Beige Occasion Wear Saree',
    price: 25800,
    description: 'Beige saree with gold embellishments, perfect for grand occasions.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree6.jpg'
  },
  { 
    name: 'Pastel Pink Net Party Saree',
    price: 28500,
    description: 'Pastel pink embroidered net saree ideal for party wear and celebrations.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree7.jpg'
  },
  { 
    name: 'Pink Banarasi Wedding Saree',
    price: 21200,
    description: 'Graceful pink Banarasi silk saree from the wedding collection.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree8.jpg'
  },
  { 
    name: 'Yellow Blue Printed Silk Saree',
    price: 16300,
    description: 'Designer saree with yellow and blue silk prints, vibrant and stylish.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree9.jpg'
  },
  { 
    name: 'Blue Cotton Casual Saree',
    price: 8900,
    description: 'Comfortable blue block print cotton saree for casual wear.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'sarees'
    },
    imageUrl: '/assets/women/sarees/saree10.jpg'
  },

  //toptshirts
  { 
    name: 'White Cherry Crop Top',
    price: 899,
    description: 'Trendy white crop top featuring a cute cherry print, perfect for summer vibes.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt1.jpg'
  },
  { 
    name: 'Solid Pink Crop Tee',
    price: 599,
    description: 'Basic solid pink crop tee made for comfort and everyday wear.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt2.jpg'
  },
  { 
    name: 'Green Graphic T-shirt',
    price: 799,
    description: 'Forest green T-shirt with bold graphic print for a casual statement look.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt3.jpg'
  },
  { 
    name: 'White Scalloped V-neck Top',
    price: 749,
    description: 'Elegant white V-neck top with scalloped edges for a soft, feminine style.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt4.jpg'
  },
  { 
    name: 'Black Essential Tee',
    price: 649,
    description: 'Classic black essential T-shirt for a timeless and versatile wardrobe staple.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt5.jpg'
  },
  { 
    name: 'Cream Vintage Print Tee',
    price: 899,
    description: 'Cream-colored tee featuring a retro Archies vintage graphic design.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt6.jpg'
  },
  { 
    name: 'Brown Round Neck Top',
    price: 699,
    description: 'Chocolate brown solid round neck top for a sleek everyday look.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt7.jpg'
  },
  { 
    name: 'Stripe Print V-neck Blouse',
    price: 849,
    description: 'Stylish V-neck blouse with abstract stripe prints for a bold fashion statement.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt8.jpg'
  },
  { 
    name: 'White Statement Graphic Tee',
    price: 799,
    description: 'White graphic print T-shirt designed to stand out and express personality.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt9.jpg'
  },
  { 
    name: 'Terracotta Graphic Tee',
    price: 999,
    description: 'Terracotta colored tee with a fashion illustration graphic, casual and artsy.',
    category: 'fashion',
    details: {
      gender: 'women',
      subcategory: 'toptshirts'
    },
    imageUrl: '/assets/women/toptshirts/toptshirt10.jpg'
  },


  //kid
  //frock
  { 
    name: 'Blue Princess Ball Gown',
    price: 2499,
    description: 'Royal blue princess-style ball gown for girls with elegant layers and sparkle.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'frocks'
    },
    imageUrl: '/assets/kid/frocks/frock1.jpg'
  },
  { 
    name: 'Pink Tulle Party Dress',
    price: 1899,
    description: 'Hot pink multilayered tulle party dress, perfect for special occasions.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'frocks'
    },
    imageUrl: '/assets/kid/frocks/frock2.jpg'
  },
  { 
    name: 'Yellow Polka Cotton Frock',
    price: 1199,
    description: 'Casual yellow cotton frock with fun polka dots, ideal for daily wear.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'frocks'
    },
    imageUrl: '/assets/kid/frocks/frock3.jpg'
  },
  { 
    name: 'White Green Pattu Pavadai',
    price: 2799,
    description: 'Traditional South Indian pattu pavadai in white and green with festive charm.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'frocks'
    },
    imageUrl: '/assets/kid/frocks/frock4.jpg'
  },
  { 
    name: 'Maroon Sequin Party Gown',
    price: 2299,
    description: 'Maroon party gown with dazzling sequin embellishments for festive events.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'frocks'
    },
    imageUrl: '/assets/kid/frocks/frock5.jpg'
  },
  { 
    name: 'Red Floral Summer Dress',
    price: 899,
    description: 'Lightweight red summer dress with floral print, cute and breathable.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'frocks'
    },
    imageUrl: '/assets/kid/frocks/frock6.jpg'
  },


  //jacket
  { 
    name: 'Rust Corduroy Zip Jacket',
    price: 1299,
    description: 'Rust-colored corduroy winter zip-up jacket, cozy and stylish for cold days.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket1.jpg'
  },
  { 
    name: 'Blue Teddy Hooded Jacket',
    price: 1199,
    description: 'Soft blue fleece jacket with teddy bear ears on the hood, perfect for winter fun.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket2.jpg'
  },
  { 
    name: 'Grey Navy Varsity Bomber',
    price: 1499,
    description: 'Classic grey and navy varsity-style bomber jacket for a sporty look.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket3.jpg'
  },
  { 
    name: 'Grey Zipper Hoodie Sweatshirt',
    price: 1399,
    description: 'Grey hooded zipper sweatshirt with number detailing, ideal for casual layering.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket4.jpg'
  },
  { 
    name: 'Navy Embroidered Sweater',
    price: 1249,
    description: 'Navy blue zip-up sweater featuring subtle embroidery and a sleek fit.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket5.jpg'
  },
  { 
    name: 'Cream Animal Hooded Jacket',
    price: 1099,
    description: 'Cream-colored hooded jacket with playful animal print, warm and adorable.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket6.jpg'
  },
  { 
    name: 'Blue Bear Ear Cardigan',
    price: 1349,
    description: 'Knitted blue hooded cardigan with cute bear ear details, comfy and fun.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'jackets'
    },
    imageUrl: '/assets/kid/jackets/jacket7.jpg'
  },

  //shoes
  { 
    name: 'White LED Velcro Shoes',
    price: 899,
    description: 'White LED light-up sports shoes with velcro closure, fun and comfy for kids.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear1.jpg'
  },
  { 
    name: 'Marvel Character Sneakers',
    price: 1099,
    description: 'Navy blue and red sneakers featuring Marvel characters, sporty and stylish.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear2.jpg'
  },
  { 
    name: 'Blue Bunny Sandals',
    price: 649,
    description: 'Cartoon bunny themed blue summer sandals with open-toe design.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear3.jpg'
  },
  { 
    name: 'Pink Robot Slippers',
    price: 549,
    description: 'Cozy pink house slippers with cute robot graphics for indoor comfort.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear4.jpg'
  },
  { 
    name: 'Orange Butterfly Sandals',
    price: 699,
    description: 'Bright orange strap sandals with butterfly design, perfect for sunny days.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear5.jpg'
  },
  { 
    name: 'Black Grey Sports Sneakers',
    price: 849,
    description: 'Casual sports sneakers in black and grey for everyday activity and play.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear6.jpg'
  },
  { 
    name: 'Beige Cartoon Clogs',
    price: 599,
    description: 'Comfy beige clogs with cartoon print, ideal for easy wear and breathability.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear7.jpg'
  },
  { 
    name: 'Blue Velcro Casual Shoes',
    price: 799,
    description: 'Double velcro casual shoes in blue for quick on-off and snug fit.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear8.jpg'
  },
  { 
    name: 'Pink White Mary Janes',
    price: 749,
    description: 'Adorable pink and white Mary Jane style shoes for stylish outings.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear9.jpg'
  },
  { 
    name: 'Black Star LED Sneakers',
    price: 999,
    description: 'Black and white sneakers with star details and LED lights for extra flair.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear10.jpg'
  },
  { 
    name: 'Disney Navy Sandals',
    price: 849,
    description: 'Navy sandals with Disney character prints, perfect for daily wear.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear11.jpg'
  },
  { 
    name: 'Grey Orange Running Shoes',
    price: 899,
    description: 'Athletic running shoes in grey and orange designed for active comfort.',
    category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'shoes'
    },
    imageUrl: '/assets/kid/shoes/footwear12.jpg' 
  },
  //tshirt
  
    {
      name: 'Designer Abstract Pattern Kids T-shirt (White/Blue/Gold)',
      price: 650,
      description: 'Stylish kids t-shirt with a designer abstract pattern in white, blue, and gold.',
      category: 'fashion',
    details: {
      gender: 'kid',
      subcategory: 'tshirt'
    },
      imageUrl: '/assets/tshirts/tshirt1.jpg'
    },
    {
      name: 'Blue "U" Logo Kids T-shirt',
      price: 450,
      description: 'Casual blue t-shirt for kids featuring a bold "U" logo design.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt2.jpg'
    },
    {
      name: 'Turquoise Daisy Print Kids T-shirt',
      price: 399,
      description: 'Bright turquoise t-shirt with a cheerful daisy print perfect for sunny days.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt3.jpg'
    },
    {
      name: 'Light Blue Printed Kids T-shirt with Side Text',
      price: 499,
      description: 'Trendy light blue t-shirt featuring graphic prints and vertical side text.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt4.jpg'
    },
    {
      name: 'White Colorful Graphic Print Kids T-shirt',
      price: 550,
      description: 'White t-shirt with vibrant and fun graphic prints for kids.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt5.jpg'
    },
    {
      name: 'Mustard Yellow "LETS RACE" Motocross Kids T-shirt',
      price: 399,
      description: 'Energetic mustard yellow t-shirt with motocross-themed "LETS RACE" print.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt6jpg'
    },
    {
      name: 'Bright Green Safari Animals Kids T-shirt',
      price: 350,
      description: 'Playful bright green t-shirt with adorable safari animal prints.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt7.jpg'
    },
    {
      name: 'Light Green "Follow your heart" Kids T-shirt',
      price: 399,
      description: 'Inspiring light green t-shirt with the quote "Follow your heart".',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt8.jpg'
    },
    {
      name: 'Olive Green Ribbed Kids T-shirt with Tape Detail',
      price: 599,
      description: 'Stylish olive green ribbed t-shirt with unique tape detailing on the sleeves.',
      category: 'fashion',
      details: {
        gender: 'kid',
        subcategory: 'tshirt'
      },
        imageUrl: '/assets/tshirts/tshirt9.jpg'
    },
  

  //kitchen
  {
    name: 'Silicone Turner Set',
    price: 299,
    description: 'Durable, heat-resistant turners perfect for non-stick cookware. Includes a slotted and a solid turner.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen1.jpg'
  },
  {
    name: 'Steel Kitchen Utensil Set',
    price: 749,
    description: 'Complete set of ladle, skimmer, turner and more with ergonomic green handles. Ideal for everyday cooking.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen2.jpg'
  },
  {
    name: 'Single Burner Gas Stove',
    price: 2899,
    description: 'Heavy-duty stainless steel single burner stove, suitable for commercial or home use.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen3.jpg'
  },
  {
    name: 'Multicolor Stainless Cookware Set',
    price: 1899,
    description: 'Stackable rainbow-colored stainless steel pots with golden interior. Stylish and durable.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen4.jpg'
  },
  {
    name: 'WonderChef Serving Spoon',
    price: 199,
    description: 'Strong and sleek serving spoon with non-stick surface and ergonomic grip.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen5.jpg'
  },
  {
    name: 'Measuring Cup Stainless Steel',
    price: 149,
    description: 'Accurate and sturdy measuring cup with clear markings. Essential for baking and cooking.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen6.jpg'
  },
  {
    name: 'Bowl Holder Tong',
    price: 259,
    description: 'Non-slip green handle bowl tong for safely lifting hot dishes from microwave or steamer.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen7.jpg'
  },
  {
    name: 'Multi-Use Strainer Spoon Set',
    price: 229,
    description: 'Versatile spoon for frying, straining, or serving. Heat-resistant and dishwasher safe.',
    category: 'kitchen',
    imageUrl: '/assets/kitchen/kitchen8.jpg'
  },

  //beauty
  {
    name: 'Summer Fridays Sheer Skin Tint',
    price: 3500,
    description: 'A lightweight skin tint that provides sheer coverage for a radiant, natural finish.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty1.jpg'
  },
  {
    name: 'LUMI Glowoil Advanced Treatment',
    price: 5600,
    description: 'A nourishing facial oil designed to boost skin luminosity and smooth texture.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty2.jpg'
  },
  {
    name: 'Fenty Skin Butta Drop Whipped Oil Body Cream',
    price: 3200,
    description: 'Rich, luxurious body cream infused with tropical oils for deep hydration and glow.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty3.jpg'
  },
  {
    name: 'Laura Mercier Translucent Loose Setting Powder',
    price: 3300,
    description: 'A cult-favorite setting powder that locks in makeup for a flawless, matte finish.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty4.jpg'
  },
  {
    name: 'Charlotte Tilbury Airbrush Flawless Finish Setting Powder',
    price: 3700,
    description: 'A finely milled setting powder that blurs imperfections and controls shine.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty5.jpg'
  },
  {
    name: 'Olay Face & Body Razor',
    price: 1650,
    description: 'Gentle razor designed for both face and body with moisturizing elements.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty6.jpg'
  },
  {
    name: 'POUT AFFAIR Liquid Lipstick',
    price: 2000,
    description: 'Long-lasting, richly pigmented liquid lipstick for bold and beautiful lips.',
    category: 'beauty',
    imageUrl: '/assets/beauty/beauty7.jpg'
  },

  //grocery
  {
    name: 'Disano Pasta Penne & Maggi Noodles',
    price: 132,
    description: '1.High-quality durum wheat pasta perfect for Italian recipes. 2.Classic 2-minute instant noodles loved across generations.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery1.jpg'
  },
  
  {
    name: 'TATA Salt - 1kg pack',
    price: 24,
    description: 'Iodized salt with purity and quality you can trust.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery2.jpg'
  },
  {
    name: 'Nescafe Gold Blend & TATA Coffee Gold',
    price: 900,
    description: '1.Premium instant coffee with rich aroma and smooth taste.2.Instant coffee blend with a strong and satisfying flavor.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery3.jpg'
  },
 
  {
    name: 'Lactose Free Milk',
    price: 140,
    description: 'Dairy milk alternative suitable for lactose-intolerant individuals.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery4.jpg'
  },
  {
    name: 'Maggi 2-Minute Noodles',
    price: 12,
    description: 'Instant noodles with classic masala flavor ready in just 2 minutes.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery5.jpg'
  },
  {
    name: 'Walkers Pickled Onion Crisps - 32.5g',
    price: 130,
    description: 'Tangy pickled onion flavored crisps in a convenient snack pack.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery6.jpg'
  },
  {
    name: 'Walkers Cheese & Onion Crisps - 70g',
    price: 130,
    description: 'Crunchy crisps with a cheesy and savory onion flavor.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery7.jpg'
  },
  {
    name: 'Cadbury Celebrations & Ferrero Rocher Moments',
    price: 550,
    description: '1.Assorted chocolates perfect for gifting and festive occasions.2.Decadent hazelnut chocolates wrapped in golden elegance.',
    category: 'grocery',
    imageUrl: '/assets/grocery/grocery8.jpg'
  },


  //furniture
  {
    name: 'Wooden Dining/Side Chairs (Set of 2)',
    price: 7000,
    description: 'Simple slatted back wooden chairs, perfect for dining or side seating.',
    category: 'furniture',
    imageUrl: '/assets/furniture/furniture1.jpg'
  },
  {
    name: 'Wooden Armchair with Checkered Upholstery',
    price: 12500,
    description: 'Traditional single-seater sofa chair with a wooden frame and checkered fabric.',
    category: 'furniture',
    imageUrl: '/assets/furniture/furniture2.jpg'
  },
  {
    name: 'Wooden Barrel Chair/Captain\'s Chair',
    price: 9500,
    description: 'Semi-circular back wooden chair with a cushioned seat for extra comfort.',
    category: 'furniture',
    imageUrl: '/assets/furniture/furniture3.jpg'
  },
  {
    name: 'Office Study Desk with Drawers (Dark Brown)',
    price: 8500,
    description: 'Compact computer desk in dark brown finish featuring three storage drawers.',
    category: 'furniture',
    imageUrl: '/assets/furniture/furniture4.jpg'
  },
  {
    name: 'Wooden Sofa Armchair with Cushions',
    price: 15000,
    description: 'Box-style wooden single seater with soft beige cushions for cozy comfort.',
    category: 'furniture',
    imageUrl: '/assets/furniture/furniture5.jpg'
  },
  {
    name: 'Executive L-Shaped Office Desk',
    price: 22000,
    description: 'Spacious wooden corner desk with built-in drawers and extension panel.',
    category: 'furniture',
    imageUrl: '/assets/furniture/furniture6.jpg'
  },

  //40-50-
  {
    name: 'Garnier Skincare Products (Sunscreen & Micellar Water)',
    price: 450,
    description: 'Gentle and effective skincare combo including Garnier sunscreen and micellar water.',
    category: '40-off',
    imageUrl: '/assets/beauty/40-1.jpg'
  },
  {
    name: 'Derma E Pore Minimizing Scrub',
    price: 1200,
    description: 'Exfoliating scrub that visibly minimizes pores and improves skin texture.',
    category: '40-off',
    imageUrl: '/assets/beauty/40-2.jpg'
  },
  {
    name: 'Nike Air Jordan 1 High "Mocha"',
    price: 14000,
    description: 'Iconic and stylish high-top sneakers with mocha colorway from Nike Air Jordan.',
    category: '40-off',
    imageUrl: '/assets/fashion/40-3.jpg'
  },
  {
    name: 'Lenovo IdeaPad Laptop',
    price: 55000,
    description: 'Powerful and sleek Lenovo IdeaPad laptop suitable for work and entertainment.',
    category: '40-off',
    imageUrl: '/assets/electronics/40-4.jpg'
  },
  {
    name: 'Vaseline Body Lotion (Healthy Bright)',
    price: 280,
    description: 'Moisturizing lotion with vitamin-infused formula for brighter, hydrated skin.',
    category: '40-off',
    imageUrl: '/assets/beauty/40-5.jpg'
  },
  {
    name: 'Premium Android Tablet',
    price: 30000,
    description: 'High-performance Android tablet with premium design and features.',
    category: '40-off',
    imageUrl: '/assets/electronics/40-6.jpg'
  },
  {
    name: 'Samsung Galaxy Tab with S Pen',
    price: 45000,
    description: 'Versatile Samsung tablet with S Pen for productivity and creativity.',
    category: '50-off',
    imageUrl: '/assets/electronics/50-1.jpg'
  },
  {
    name: 'Chanel Coco Mademoiselle Perfume',
    price: 9500,
    description: 'Luxury fragrance with bold yet fresh notes, perfect for a sophisticated scent.',
    category: '50-off',
    imageUrl: '/assets/beauty/50-2.jpg'
  },
  {
    name: 'Adidas Americana Shoes',
    price: 7000,
    description: 'Classic sneakers from Adidas with a timeless Americana design.',
    category: '50-off',
    imageUrl: '/assets/fashion/50-3.jpg'
  },
  {
    name: 'Children\'s Outfit Set (Yellow T-shirt with Floral Pants)',
    price: 800,
    description: 'Adorable outfit set for kids featuring a yellow t-shirt and floral print pants.',
    category: '50-off',
    imageUrl: '/assets/kidswear/50-4.jpg'
  },
  {
    name: 'Grace Cole Body Lotion with Shea Butter',
    price: 1200,
    description: 'Rich body lotion infused with nourishing shea butter for smooth, soft skin.',
    category: '50-off',
    imageUrl: '/assets/beauty/50-5.jpg'
  },

  //60-
  {
    name: 'Beardo DE-TAN Face Wash & Toning Serum Combo',
    price: 599,
    description: 'Men\'s skincare set with coffee scrub face wash and toning serum for clearer skin.',
    category: '60-off',
    imageUrl: '/assets/beauty/60-1.jpg'
  },
  {
    name: 'Kalolia Lavender Shampoo/Body Wash',
    price: 450,
    description: 'Lavender-infused body care product in a convenient pump bottle.',
    category: '60-off',
    imageUrl: '/assets/beauty/60-2.jpg'
  },
  {
    name: 'Children\'s Striped Long Sleeve T-shirt with Sun Design',
    price: 799,
    description: 'White and blue striped kids\' top featuring a colorful sun graphic.',
    category: '60-off',
    imageUrl: '/assets/kidswear/60-3.jpg'
  },
  {
    name: 'M.S.C.17 Navy Blue Sweatshirt',
    price: 1200,
    description: 'Dark blue casual sweatshirt for everyday wear with minimal branding.',
    category: '60-off',
    imageUrl: '/assets/fashion/60-4.jpg'
  },
  {
    name: 'Campus/Action Black Slip-on Walking Shoes',
    price: 899,
    description: 'Comfortable casual black mesh slip-on sneakers ideal for walking.',
    category: '60-off',
    imageUrl: '/assets/fashion/60-5.jpg'
  }

];


module.exports = productlist;