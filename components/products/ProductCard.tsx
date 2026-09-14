"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { formatGBP } from "@/lib/format";
import { useApp } from "@/components/providers/AppProvider";

const badgeClasses: Record<string, string> = {
  New: "bg-burgundy text-ivory",
  "Best Seller": "bg-gold text-burgundy",
  Limited: "bg-bronze text-ivory",
  Sale: "bg-[#7a2436] text-ivory",
  "Low Stock": "bg-ivory text-burgundy border border-bronze/40",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted, showComingSoon } = useApp();
  const wishlisted = isWishlisted(product.id);
  const defaultVariant = product.variants[0];

  return (
    <div className="group relative flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden rounded-sm bg-sand/40">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src={product.images[1] ?? product.images[0]}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
          {product.badges.map((b) => (
            <span
              key={b}
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide ${badgeClasses[b]}`}
            >
              {b}
            </span>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/90 text-burgundy shadow-sm transition hover:scale-105"
        >
          <Heart size={15} fill={wishlisted ? "currentColor" : "none"} />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, defaultVariant, 1);
          }}
          className="absolute inset-x-2.5 bottom-2.5 flex translate-y-3 items-center justify-center gap-2 rounded-sm bg-burgundy py-2.5 text-xs font-medium uppercase tracking-wide text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </Link>

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-[11px] uppercase tracking-wide text-bronze">{product.type}</p>
        <Link href={`/products/${product.slug}`} className="mt-0.5 text-sm font-medium text-ink hover:text-burgundy">
          {product.name}
        </Link>
        <div className="mt-1 flex items-center gap-1 text-xs text-ink/50">
          <span className="text-gold">★</span>
          <span>{product.rating.toFixed(1)}</span>
          <span>({product.reviewCount})</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-sm font-medium text-burgundy">{formatGBP(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-ink/40 line-through">{formatGBP(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
