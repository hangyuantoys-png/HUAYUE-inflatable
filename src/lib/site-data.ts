export type ProductCategory = {
  name: string;
  slug: string;
  heroImage: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
};

export type FAQ = {
  question: string;
  answer: string;
  relatedProduct?: string;
};

export type Product = {
  name: string;
  slug: string;
  category: string;
  images: string[];
  keyFeatures: string[];
  specs: Record<string, string>;
  applications: string[];
  faq: FAQ[];
  seoTitle: string;
  seoDescription: string;
};

export type Application = {
  market: string;
  slug: string;
  buyerType: string;
  painPoints: string[];
  solution: string;
  recommendedProducts: string[];
};

export type InquiryPayload = {
  name: string;
  email: string;
  country: string;
  whatsapp?: string;
  productRequirement: string;
  message: string;
};

export const company = {
  name: "Guangzhou Huayue Inflatable Products Co., Ltd.",
  brand: "Huayue Toys",
  founded: "2015",
  factoryArea: "6250+ m²",
  team: "40+ elite team members",
  email: "admin@huayueinflatable.com",
  phone: "+86 18688894785",
  whatsapp: "+86 18688894785",
  address: "No.83, Zhenhua North Road, Shenshan Industrial Park, Jianggao Town, Baiyun District, Guangzhou, Guangdong Province, China",
  addressCn: "广东省广州市白云区江高镇神山工业区振华北路83号",
  map: {
    lat: 23.3417978,
    lng: 113.1854169,
    osmUrl: "https://www.openstreetmap.org/?mlat=23.3417978&mlon=113.1854169#map=16/23.3417978/113.1854169",
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=113.1754%2C23.3318%2C113.1954%2C23.3518&layer=mapnik&marker=23.3417978%2C113.1854169"
  },
  siteUrl: "https://hyskyfar.com"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications/resort-hotel" },
  { label: "Factory", href: "/factory" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const productCategories: ProductCategory[] = [
  {
    name: "Inflatable Water Parks",
    slug: "inflatable-water-park",
    heroImage: "/assets/hero-water-park.png",
    summary: "Commercial aqua park combinations for resorts, lakes, beaches and tourism projects.",
    seoTitle: "Commercial Inflatable Water Park Manufacturer | Huayue Toys",
    seoDescription: "Buy custom commercial inflatable water parks from a China OEM/ODM manufacturer for resorts, rental businesses and tourism projects."
  },
  {
    name: "Inflatable Water Slides",
    slug: "inflatable-water-slide",
    heroImage: "/assets/hero-water-park.png",
    summary: "Large water slides, yacht slides and floating slide modules for commercial operation.",
    seoTitle: "Commercial Inflatable Water Slide for Sale | Huayue Toys",
    seoDescription: "Custom inflatable water slides for commercial parks, lakes, yacht events and rental businesses."
  },
  {
    name: "Water Obstacle Courses",
    slug: "water-obstacle-course",
    heroImage: "/assets/hero-water-park.png",
    summary: "Modular obstacle layouts with climbing, balancing, jumping and slide elements.",
    seoTitle: "Water Obstacle Course Inflatable Supplier | Huayue Toys",
    seoDescription: "OEM water obstacle course inflatables with modular layouts, durable PVC material and project support."
  },
  {
    name: "Inflatable Buoys",
    slug: "inflatable-buoy",
    heroImage: "/assets/hero-water-park.png",
    summary: "Towable banana boats, floating buoys and leisure water toys for beach and lake operations.",
    seoTitle: "Inflatable Buoy and Towable Water Toys Supplier",
    seoDescription: "Inflatable buoys, banana boats and towable water toys for resorts, beaches and rental businesses."
  },
  {
    name: "PVC Inflatable Mirror Ball",
    slug: "pvc-inflatable-mirror-ball",
    heroImage: "/assets/hero-water-park.png",
    summary: "PVC mirror balls and creative promotional inflatables for events, displays and entertainment.",
    seoTitle: "PVC Inflatable Mirror Ball Manufacturer | Huayue Toys",
    seoDescription: "Custom PVC inflatable mirror balls and promotional inflatables from Huayue Toys."
  },
  {
    name: "Inflatable Bouncer Slides",
    slug: "inflatable-bouncer-slide",
    heroImage: "/assets/hero-water-park.png",
    summary: "Dry inflatable bouncers and slides for party rental, family events and outdoor parks.",
    seoTitle: "Inflatable Bouncer Slide Manufacturer | Huayue Toys",
    seoDescription: "OEM inflatable bouncer slides and dry inflatable playground equipment for rental companies."
  },
  {
    name: "Inflatable Paintball Bunkers",
    slug: "inflatable-paintball-bunkers",
    heroImage: "/assets/hero-water-park.png",
    summary: "Custom bunkers and sport inflatables for paintball, tactical games and event operators.",
    seoTitle: "Inflatable Paintball Bunkers Supplier | Huayue Toys",
    seoDescription: "Inflatable paintball bunkers and custom sport field inflatables for commercial game operators."
  },
  {
    name: "Air Track / Inflatable Gym Mat",
    slug: "air-track-inflatable-gym-mat",
    heroImage: "/assets/hero-water-park.png",
    summary: "Air tracks and gym mats for schools, gymnastics, training facilities and event rentals.",
    seoTitle: "Air Track Inflatable Gym Mat Manufacturer | Huayue Toys",
    seoDescription: "Durable inflatable air tracks and gym mats with OEM colors, sizes and branding."
  }
];

export const products: Product[] = productCategories.slice(0, 5).map((category) => ({
  name: category.name,
  slug: category.slug,
  category: category.name,
  images: [category.heroImage],
  keyFeatures: [
    "OEM/ODM size, color and layout customization",
    "Commercial-grade PVC tarpaulin and reinforced seams",
    "Project support from design recommendation to global delivery",
    "Designed for fast setup, storage and repeated commercial use"
  ],
  specs: {
    Material: "Commercial-grade PVC tarpaulin",
    Customization: "Size, color, logo and layout",
    Certification: "CE / EN14960 where applicable",
    Applications: "Resorts, lakes, beaches, rental business, events",
    Support: "Layout advice, production, packing and shipping"
  },
  applications: ["Resort & Hotel Water Parks", "Beach & Lake Tourism Projects", "Rental Business", "Events & Party Rental"],
  faq: [
    {
      question: "Can you customize the product size and color?",
      answer: "Yes. Huayue Toys supports OEM/ODM customization including size, color, logo, layout and functional modules.",
      relatedProduct: category.name
    },
    {
      question: "What information should I send before quotation?",
      answer: "Please send your target water area or venue size, country, preferred product type, quantity and expected operation scenario."
    },
    {
      question: "Do you ship to UAE, Saudi Arabia, Nigeria and South Africa?",
      answer: "Yes. We support global delivery and can help buyers plan packing and shipping for commercial inflatable products."
    }
  ],
  seoTitle: category.seoTitle,
  seoDescription: category.seoDescription
}));

export const applications: Application[] = [
  {
    market: "Resort & Hotel Water Parks",
    slug: "resort-hotel",
    buyerType: "Resort owners, hotel groups and tourism project buyers",
    painPoints: ["Need attractive guest experience", "Need safe commercial equipment", "Need project-level layout planning"],
    solution: "Huayue Toys recommends modular inflatable water park layouts based on water area, visitor age group and operation capacity.",
    recommendedProducts: ["Inflatable Water Parks", "Inflatable Water Slides", "Water Obstacle Courses"]
  },
  {
    market: "Rental Business",
    slug: "rental-business",
    buyerType: "Inflatable rental business owners and event rental companies",
    painPoints: ["Need fast return on investment", "Need durable products for repeated use", "Need easy setup and storage"],
    solution: "We help rental operators choose high-demand modules, compact packing options and products suitable for repeated commercial rental.",
    recommendedProducts: ["Inflatable Bouncer Slides", "Water Obstacle Courses", "Air Track / Inflatable Gym Mat"]
  },
  {
    market: "Beach & Lake Tourism Projects",
    slug: "beach-lake",
    buyerType: "Beach operators, lake parks and tourism investors",
    painPoints: ["Need stable floating products", "Need safe guest flow", "Need visual appeal for seasonal traffic"],
    solution: "Huayue Toys builds floating layouts with slides, platforms, obstacle modules and leisure water toys for open-water operation.",
    recommendedProducts: ["Inflatable Water Parks", "Inflatable Buoys", "Inflatable Water Slides"]
  }
];

export const faqs: FAQ[] = [
  {
    question: "How much does a commercial inflatable water park cost?",
    answer: "The cost depends on the layout size, module quantity, material requirements, accessories, packing and shipping destination. Send your water area size and target country for a project quotation."
  },
  {
    question: "Can you customize the size, color and layout?",
    answer: "Yes. Huayue Toys supports OEM/ODM customization for size, color, logo, theme, water park layout and product combinations."
  },
  {
    question: "What material do you use?",
    answer: "Commercial products use durable PVC tarpaulin with reinforced seams. Material details can be confirmed according to product type and project requirement."
  },
  {
    question: "How long does production take?",
    answer: "Production time depends on product size, order quantity and customization complexity. Our sales team will confirm timing after the final design and quotation."
  },
  {
    question: "Do you support shipping to UAE, Saudi Arabia, Nigeria and South Africa?",
    answer: "Yes. Huayue Toys supports global delivery and project communication for buyers in the Middle East, Africa and other international markets."
  }
];

export const blogPosts = [
  "Inflatable Water Park Cost Guide for Commercial Buyers",
  "How to Install an Inflatable Water Park Safely",
  "Commercial Inflatable Water Park Maintenance Checklist",
  "How to Choose an Inflatable Water Park for Rental Business",
  "Inflatable Water Park ROI Model for Seasonal Operators",
  "Resort Buyer Guide: Planning a Water Park Project",
  "UAE Inflatable Water Park Supplier Guide",
  "Saudi Arabia Inflatable Water Park Buying Guide",
  "Nigeria Inflatable Water Park Supplier Guide",
  "South Africa Inflatable Water Park Wholesale Guide",
  "Inflatable Water Park vs Water Slide: Which Is Better?",
  "What Size Inflatable Water Park Do I Need?"
].map((title) => ({
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  excerpt: "A practical B2B purchasing guide for overseas buyers comparing cost, safety, customization and commercial operation factors."
}));

export const processSteps = [
  "3D design",
  "Material cutting",
  "Welding / sewing",
  "Inflation test",
  "Packing",
  "Global shipping"
];

export const countryPages = [
  {
    country: "UAE",
    slug: "inflatable-water-park-uae",
    title: "Inflatable Water Park UAE Supplier",
    description:
      "OEM/ODM commercial inflatable water parks for UAE resorts, beaches, hotel projects and rental businesses."
  },
  {
    country: "Saudi Arabia",
    slug: "inflatable-water-park-saudi-arabia",
    title: "Inflatable Water Park Saudi Arabia Manufacturer",
    description:
      "Custom commercial inflatable water park equipment for Saudi Arabia tourism, resort and rental business buyers."
  },
  {
    country: "Nigeria",
    slug: "inflatable-water-park-nigeria",
    title: "Inflatable Water Park Nigeria Supplier",
    description:
      "Factory direct inflatable water parks, slides and water toys for Nigeria distributors, rental operators and tourism projects."
  },
  {
    country: "South Africa",
    slug: "inflatable-water-park-south-africa",
    title: "Inflatable Water Park South Africa Wholesale",
    description:
      "Commercial inflatable water park and water slide solutions for South Africa resorts, lakes, events and rental businesses."
  }
];
