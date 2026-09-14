import { Product, Category, Length } from "./types";

const lengthsFrom = (start: Length, count: number): Length[] => {
  const all: Length[] = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  const startIdx = all.indexOf(start);
  return all.slice(startIdx, startIdx + count);
};

const colourSet = ["Natural Black", "Dark Brown", "Chestnut", "Honey Blonde"];

function buildVariants(basePrice: number, lengths: Length[], colours: string[]) {
  const variants = [];
  for (const length of lengths) {
    for (const colour of colours) {
      const lengthPremium = (length - lengths[0]) * 8;
      variants.push({
        length,
        colour,
        density: "180%" as const,
        capSize: "Average" as const,
        price: basePrice + lengthPremium,
        sku: `FSL-${length}-${colour.slice(0, 2).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
        stock: Math.floor(Math.random() * 18) + (length > 24 ? 2 : 6),
      });
    }
  }
  return variants;
}

const raw: Omit<Product, "variants" | "stock" | "rating" | "reviewCount">[] = [
  {
    id: "p1",
    slug: "bella-hd-lace-body-wave-wig",
    name: "Bèlla HD Lace Body Wave Wig",
    type: "HD Lace Wig",
    collection: "Luxury Collection",
    texture: "Body Wave",
    shortDescription: "Undetectable HD lace with soft, bouncy body wave movement.",
    description:
      "Bèlla is crafted from 100% virgin human hair set on an undetectable HD lace base that melts seamlessly into every skin tone. The body wave pattern holds its shape wash after wash and falls with the kind of natural movement that reads as your own hair, not a wig.",
    details: [
      "100% virgin human hair, double drawn",
      "13x4 HD transparent lace frontal",
      "180% density, pre-plucked hairline",
      "Bleached knots, baby hair included",
      "Adjustable straps and combs",
    ],
    images: ["bodywave-1", "bodywave-2", "bodywave-3", "bodywave-4"],
    price: 289,
    compareAtPrice: 349,
    badges: ["Best Seller", "Sale"],
    lengths: lengthsFrom(14, 6),
    colours: colourSet,
    featured: true,
  },
  {
    id: "p2",
    slug: "amara-glueless-bob-wig",
    name: "Amara Glueless Bob Wig",
    type: "Bob Wig",
    collection: "Everyday Collection",
    texture: "Straight",
    shortDescription: "A precision-cut bob designed for effortless, glueless wear.",
    description:
      "The Amara bob is cut by hand to a clean, blunt line and mounted on a glueless wig cap engineered for a snug, adhesive-free fit. Sleek, sharp and endlessly wearable for daily life.",
    details: [
      "100% human hair, single donor",
      "Glueless adjustable cap construction",
      "4x4 lace closure",
      "150% density",
      "Pre-cut, pre-styled",
    ],
    images: ["bob-1", "bob-2", "bob-3"],
    price: 219,
    badges: ["New"],
    lengths: lengthsFrom(10, 3),
    colours: colourSet,
    featured: true,
  },
  {
    id: "p3",
    slug: "noor-frontal-deep-wave-wig",
    name: "Noor 13x6 Frontal Deep Wave Wig",
    type: "Frontal Wig",
    collection: "Luxury Collection",
    texture: "Deep Wave",
    shortDescription: "Full frontal versatility with deep, defined curl pattern.",
    description:
      "Noor gives you a full 13x6 frontal for versatile parting and slicked-back styles, paired with a rich deep wave texture that keeps its definition through humidity and wear.",
    details: [
      "13x6 HD lace frontal",
      "100% virgin human hair",
      "180% density",
      "Pre-plucked with baby hair",
      "Circular sewn cap for versatile parting",
    ],
    images: ["deepwave-1", "deepwave-2", "deepwave-3", "deepwave-4"],
    price: 329,
    badges: ["Best Seller"],
    lengths: lengthsFrom(16, 6),
    colours: colourSet,
    featured: true,
  },
  {
    id: "p4",
    slug: "imole-closure-straight-wig",
    name: "Ìmọlẹ́ Closure Bone Straight Wig",
    type: "Closure Wig",
    collection: "Everyday Collection",
    texture: "Straight",
    shortDescription: "Silky bone straight hair with a natural 4x4 closure part.",
    description:
      "Ìmọlẹ́ delivers sleek, glass-like straight hair with a soft natural shine. The 4x4 closure gives a clean single part while keeping the wig lightweight for all day comfort.",
    details: [
      "100% human hair",
      "4x4 lace closure",
      "150% density",
      "Bleached knots",
      "Adjustable elastic band",
    ],
    images: ["straight-1", "straight-2", "straight-3"],
    price: 199,
    badges: [],
    lengths: lengthsFrom(12, 5),
    colours: colourSet,
  },
  {
    id: "p5",
    slug: "seyi-water-wave-lace-front-wig",
    name: "Seyi Lace Front Water Wave Wig",
    type: "Lace Front Wig",
    collection: "New Arrivals",
    texture: "Water Wave",
    shortDescription: "A light, glossy wave with a soft natural hairline.",
    description:
      "Seyi brings effortless movement with a water wave pattern that catches light beautifully. The ear to ear lace front allows for versatile styling away from the face.",
    details: [
      "100% virgin human hair",
      "13x4 lace front",
      "150% density",
      "Pre-plucked hairline",
      "Combs and adjustable strap",
    ],
    images: ["waterwave-1", "waterwave-2", "waterwave-3"],
    price: 259,
    badges: ["New"],
    lengths: lengthsFrom(14, 5),
    colours: colourSet,
  },
  {
    id: "p6",
    slug: "zuri-kinky-straight-hd-wig",
    name: "Zuri HD Kinky Straight Wig",
    type: "HD Lace Wig",
    collection: "New Arrivals",
    texture: "Kinky Straight",
    shortDescription: "Textured kinky straight hair that blends seamlessly with natural coils.",
    description:
      "Zuri is designed to blend beautifully with natural 4C hair textures at the edges, with a yaki-textured finish and an undetectable HD lace base.",
    details: [
      "100% virgin human hair",
      "13x4 HD lace",
      "180% density",
      "Yaki textured finish",
      "Pre-plucked with baby hair",
    ],
    images: ["kinky-1", "kinky-2", "kinky-3"],
    price: 279,
    badges: ["New"],
    lengths: lengthsFrom(14, 5),
    colours: colourSet,
  },
  {
    id: "p7",
    slug: "temi-curly-frontal-wig",
    name: "Temi Curly Frontal Wig",
    type: "Frontal Wig",
    collection: "Luxury Collection",
    texture: "Curly",
    shortDescription: "Bold, springy curls with long lasting definition.",
    description:
      "Temi is full of life, a bold curl pattern that bounces with movement and holds its shape between washes. Set on a 13x4 frontal for a seamless, natural hairline.",
    details: [
      "100% virgin human hair",
      "13x4 HD lace frontal",
      "180% density",
      "Full and bouncy curl pattern",
      "Bleached knots, baby hair included",
    ],
    images: ["curly-1", "curly-2", "curly-3", "curly-4"],
    price: 309,
    badges: ["Best Seller"],
    lengths: lengthsFrom(14, 6),
    colours: colourSet,
  },
  {
    id: "p8",
    slug: "layla-loose-wave-closure-wig",
    name: "Layla Loose Wave Closure Wig",
    type: "Closure Wig",
    collection: "Bridal",
    texture: "Loose Wave",
    shortDescription: "Soft, romantic waves perfect for bridal and special occasions.",
    description:
      "Layla offers soft, romantic movement that photographs beautifully. A favourite for weddings and events where hair needs to look effortless from morning until the last dance.",
    details: [
      "100% virgin human hair",
      "5x5 HD lace closure",
      "180% density",
      "Soft loose wave pattern",
      "Pre-plucked hairline",
    ],
    images: ["loosewave-1", "loosewave-2", "loosewave-3"],
    price: 299,
    badges: ["Limited"],
    lengths: lengthsFrom(16, 5),
    colours: colourSet,
  },
  {
    id: "p9",
    slug: "raw-body-wave-bundle-deal",
    name: "Raw Body Wave 3 Bundle Deal",
    type: "Bundle",
    collection: "Best Sellers",
    texture: "Body Wave",
    shortDescription: "Three raw human hair bundles, cuticle aligned and tangle free.",
    description:
      "A full set of raw body wave bundles for customers who want to build their own install. Cuticle aligned in one direction to prevent tangling and matting over time.",
    details: [
      "3 bundles, 100g each",
      "100% raw human hair",
      "Cuticle aligned, single donor",
      "Minimal shedding",
      "Can be dyed and toned",
    ],
    images: ["bundle-1", "bundle-2", "bundle-3"],
    price: 169,
    badges: ["Best Seller"],
    lengths: lengthsFrom(14, 6),
    colours: colourSet,
  },
  {
    id: "p10",
    slug: "hd-lace-frontal-body-wave",
    name: "HD Lace Frontal, Body Wave",
    type: "Frontal",
    collection: "Best Sellers",
    texture: "Body Wave",
    shortDescription: "13x4 HD frontal to complete your bundle install.",
    description:
      "A single 13x4 HD lace frontal that pairs with any of our bundle sets for a full, natural looking install with versatile parting space.",
    details: [
      "13x4 HD transparent lace",
      "100% virgin human hair",
      "Pre-plucked hairline",
      "Bleached knots",
    ],
    images: ["frontal-1", "frontal-2"],
    price: 129,
    badges: [],
    lengths: lengthsFrom(14, 5),
    colours: colourSet,
  },
  {
    id: "p11",
    slug: "wrap-ponytail-straight",
    name: "Wrap Ponytail, Bone Straight",
    type: "Ponytail",
    collection: "Everyday Collection",
    texture: "Straight",
    shortDescription: "A five minute wrap ponytail for effortless everyday length.",
    description:
      "Clip in, wrap and go. This drawstring ponytail adds instant length and volume for busy mornings and quick changes, made from soft, silky human hair.",
    details: [
      "100% human hair",
      "Adjustable drawstring and combs",
      "Wrap-around tail",
      "Heat safe up to 180°C",
    ],
    images: ["ponytail-1", "ponytail-2"],
    price: 89,
    badges: ["New"],
    lengths: lengthsFrom(16, 4),
    colours: colourSet,
  },
  {
    id: "p12",
    slug: "clip-in-set-body-wave",
    name: "Clip-In Extension Set, Body Wave",
    type: "Clip-In",
    collection: "Everyday Collection",
    texture: "Body Wave",
    shortDescription: "A seven piece clip-in set for instant length and fullness.",
    description:
      "Seven wefts of soft body wave hair to add fullness and length in minutes, with secure silicone-lined clips designed to protect natural hair.",
    details: [
      "7 piece set, 120g",
      "100% human hair",
      "Silicone-lined clips",
      "Blends with most textures",
    ],
    images: ["clipin-1", "clipin-2"],
    price: 145,
    badges: [],
    lengths: lengthsFrom(14, 5),
    colours: colourSet,
  },
  {
    id: "p13",
    slug: "aduke-glueless-hd-bob",
    name: "Aduke Glueless HD Bob Wig",
    type: "Bob Wig",
    collection: "Sale",
    texture: "Straight",
    shortDescription: "A rounded, face-framing bob on an undetectable HD base.",
    description:
      "Aduke is a softly rounded bob shape designed to frame the face, set on an HD lace base so fine it disappears against the skin. A modern classic worth keeping in rotation.",
    details: [
      "100% virgin human hair",
      "4x4 HD lace closure",
      "150% density",
      "Pre-cut, pre-styled",
    ],
    images: ["bob2-1", "bob2-2", "bob2-3"],
    price: 179,
    compareAtPrice: 229,
    badges: ["Sale", "Low Stock"],
    lengths: lengthsFrom(10, 3),
    colours: colourSet,
  },
  {
    id: "p14",
    slug: "ivie-tape-in-straight",
    name: "Ivie Tape-In Extensions, Straight",
    type: "Tape-In",
    collection: "Everyday Collection",
    texture: "Straight",
    shortDescription: "Seamless, reusable tape wefts for a natural flat install.",
    description:
      "Ultra-thin, reusable tape wefts that lie flat against the scalp for an undetectable finish. A stylist favourite for clients wanting long-term, low-maintenance length.",
    details: [
      "20 pieces per pack",
      "100% remy human hair",
      "Reusable up to 3 times",
      "Ultra-thin seamless tape",
    ],
    images: ["tapein-1", "tapein-2"],
    price: 159,
    badges: [],
    lengths: lengthsFrom(14, 5),
    colours: colourSet,
  },
  {
    id: "p15",
    slug: "moyo-water-wave-hd-wig",
    name: "Moyo HD Water Wave Wig",
    type: "HD Lace Wig",
    collection: "Sale",
    texture: "Water Wave",
    shortDescription: "Lightweight water wave texture on a breathable HD cap.",
    description:
      "Moyo is built for warm days and long wear, a breathable cap construction with a light water wave texture that stays soft and manageable from morning to night.",
    details: [
      "13x4 HD lace",
      "100% virgin human hair",
      "150% density",
      "Breathable cap construction",
    ],
    images: ["waterwave2-1", "waterwave2-2", "waterwave2-3"],
    price: 239,
    compareAtPrice: 289,
    badges: ["Sale"],
    lengths: lengthsFrom(14, 5),
    colours: colourSet,
  },
  {
    id: "p16",
    slug: "silk-wig-care-set",
    name: "Silk Wig Care Ritual Set",
    type: "Accessory",
    collection: "Everyday Collection",
    texture: "Straight",
    shortDescription: "Everything needed to keep human hair soft between wears.",
    description:
      "A considered edit of the essentials, a sulphate-free cleanse, a weightless leave-in and a silk wrap to protect your investment between wears.",
    details: [
      "Sulphate-free cleanser, 250ml",
      "Weightless leave-in treatment",
      "100% mulberry silk wrap",
      "Suitable for human hair and wigs",
    ],
    images: ["careset-1", "careset-2"],
    price: 59,
    badges: ["New"],
    lengths: lengthsFrom(10, 1),
    colours: ["One Size"],
  },
];

export const products: Product[] = raw.map((p, i) => {
  const variants = buildVariants(p.price, p.lengths, p.colours);
  const stock = variants.reduce((sum, v) => sum + v.stock, 0);
  return {
    ...p,
    variants,
    stock,
    rating: [4.9, 4.8, 4.7, 5, 4.6, 4.8, 4.9, 4.7, 4.8, 4.6, 4.5, 4.7, 4.6, 4.8, 4.7, 4.9][i] ?? 4.8,
    reviewCount: [214, 132, 98, 61, 47, 55, 176, 39, 288, 201, 84, 72, 63, 58, 41, 112][i] ?? 50,
  };
});

export const categories: Category[] = [
  { name: "HD Lace Wigs", slug: "hd-lace-wigs", image: "cat-hd-lace", description: "Undetectable, skin-melt lace" },
  { name: "Lace Front Wigs", slug: "lace-front-wigs", image: "cat-lace-front", description: "Natural, versatile hairlines" },
  { name: "Closure & Frontal", slug: "closure-frontal", image: "cat-closure", description: "Build your perfect install" },
  { name: "Bob Wigs", slug: "bob-wigs", image: "cat-bob", description: "Pre-cut, ready to wear" },
  { name: "Bundles", slug: "bundles", image: "cat-bundles", description: "Raw and virgin hair by the bundle" },
  { name: "Ponytails & Clip-Ins", slug: "ponytails-clip-ins", image: "cat-ponytail", description: "Instant length, zero commitment" },
];

export const textures: { name: string; slug: string }[] = [
  { name: "Straight", slug: "straight" },
  { name: "Body Wave", slug: "body-wave" },
  { name: "Deep Wave", slug: "deep-wave" },
  { name: "Water Wave", slug: "water-wave" },
  { name: "Curly", slug: "curly" },
  { name: "Loose Wave", slug: "loose-wave" },
];

export const lengthOptions: Length[] = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.texture === product.texture || p.type === product.type))
    .slice(0, count);
}
