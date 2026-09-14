export type ProductBadge = "New" | "Best Seller" | "Limited" | "Sale" | "Low Stock";

export type Texture =
  | "Straight"
  | "Body Wave"
  | "Deep Wave"
  | "Water Wave"
  | "Curly"
  | "Kinky Straight"
  | "Loose Wave";

export type ProductType =
  | "HD Lace Wig"
  | "Lace Front Wig"
  | "Closure Wig"
  | "Frontal Wig"
  | "Bob Wig"
  | "Bundle"
  | "Closure"
  | "Frontal"
  | "Clip-In"
  | "Ponytail"
  | "Tape-In"
  | "Accessory";

export type Length = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30;

export interface VariantOption {
  length: Length;
  colour: string;
  density?: "130%" | "150%" | "180%" | "200%";
  capSize?: "Small" | "Average" | "Large";
  price: number;
  compareAtPrice?: number;
  sku: string;
  stock: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  body: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  type: ProductType;
  collection: string;
  texture: Texture;
  shortDescription: string;
  description: string;
  details: string[];
  images: string[];
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badges: ProductBadge[];
  lengths: Length[];
  colours: string[];
  densities?: string[];
  variants: VariantOption[];
  stock: number;
  featured?: boolean;
  reviews?: Review[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}
