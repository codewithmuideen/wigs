"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";
import { products } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buttonClasses } from "@/components/ui/Button";

export default function WishlistPage() {
  const { wishlist } = useApp();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Wishlist" }]} />
      <h1 className="mt-3 font-serif-display text-3xl text-burgundy sm:text-4xl">Your Wishlist</h1>
      <p className="mt-2 text-sm text-ink/60">{items.length} saved items</p>

      {items.length === 0 ? (
        <div className="flex flex-col items-center py-24 text-center">
          <Heart className="text-bronze/50" size={40} strokeWidth={1.2} />
          <p className="mt-4 font-serif-display text-xl text-burgundy">Nothing saved yet</p>
          <p className="mt-2 max-w-[32ch] text-sm text-ink/60">
            Tap the heart on any product to save it here for later.
          </p>
          <Link href="/shop" className={buttonClasses("primary", "md", "mt-6")}>
            Browse the Shop
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
