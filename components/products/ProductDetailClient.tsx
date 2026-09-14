"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Heart, Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { Product } from "@/lib/types";
import { formatGBP } from "@/lib/format";
import { useApp } from "@/components/providers/AppProvider";
import HairArt from "@/components/ui/HairArt";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import { getRelatedProducts } from "@/lib/products";

const tabs = ["Description", "Details", "Shipping & Returns", "Hair Care"] as const;

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted, showShopifyConnect } = useApp();
  const [length, setLength] = useState(product.lengths[0]);
  const [colour, setColour] = useState(product.colours[0]);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Description");
  const wishlisted = isWishlisted(product.id);

  const variant = useMemo(
    () =>
      product.variants.find((v) => v.length === length && v.colour === colour) ??
      product.variants[0],
    [product.variants, length, colour]
  );

  const related = getRelatedProducts(product);
  const inStock = variant.stock > 0;
  const lowStock = variant.stock > 0 && variant.stock <= 5;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 pb-28 sm:px-6 lg:px-10 lg:pb-8">
      <Breadcrumbs items={[{ label: "Shop", href: "/shop" }, { label: product.name }]} />

      <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-sm">
            <HairArt seed={`${product.id}-${activeImage}`} className="aspect-[4/5] w-full" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`overflow-hidden rounded-sm border-2 transition ${
                  activeImage === i ? "border-burgundy" : "border-transparent"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <HairArt seed={`${product.id}-${i}`} className="aspect-square w-full" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">{product.type}</p>
          <h1 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-gold">
              {"★".repeat(Math.round(product.rating))}
              <span className="text-ink/40">{"★".repeat(5 - Math.round(product.rating))}</span>
            </span>
            <span className="text-ink/60">
              {product.rating.toFixed(1)} · {product.reviewCount} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif-display text-2xl text-burgundy">{formatGBP(variant.price)}</span>
            {product.compareAtPrice && (
              <>
                <span className="text-base text-ink/40 line-through">{formatGBP(product.compareAtPrice)}</span>
                <span className="rounded-full bg-[#7a2436]/10 px-2.5 py-1 text-xs font-medium text-[#7a2436]">
                  Save {formatGBP(product.compareAtPrice - variant.price)}
                </span>
              </>
            )}
          </div>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70">{product.shortDescription}</p>

          <div className="mt-7">
            <p className="mb-2.5 text-xs font-medium uppercase tracking-[0.14em] text-ink/70">
              Length: <span className="text-burgundy">{length}&quot;</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.lengths.map((l) => (
                <button
                  key={l}
                  onClick={() => setLength(l)}
                  className={`h-11 w-14 rounded-sm border text-sm transition ${
                    length === l
                      ? "border-burgundy bg-burgundy text-ivory"
                      : "border-bronze/25 text-ink/75 hover:border-burgundy"
                  }`}
                >
                  {l}&quot;
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2.5 text-xs font-medium uppercase tracking-[0.14em] text-ink/70">
              Colour: <span className="text-burgundy">{colour}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colours.map((c) => (
                <button
                  key={c}
                  onClick={() => setColour(c)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    colour === c
                      ? "border-burgundy bg-burgundy text-ivory"
                      : "border-bronze/25 text-ink/75 hover:border-burgundy"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            {inStock ? (
              lowStock ? (
                <p className="text-sm font-medium text-[#7a2436]">Only {variant.stock} left in stock</p>
              ) : (
                <p className="text-sm font-medium text-emerald-700">In stock, ready to ship</p>
              )
            ) : (
              <p className="text-sm font-medium text-ink/50">Currently out of stock</p>
            )}
          </div>

          <div className="mt-6 hidden items-center gap-4 lg:flex">
            <div className="flex items-center rounded-sm border border-bronze/25">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-3 text-ink/60 hover:text-burgundy"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-3 text-ink/60 hover:text-burgundy"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              disabled={!inStock}
              onClick={() => addToCart(product, variant, qty)}
              className="h-12 flex-1 rounded-sm bg-burgundy text-sm font-medium tracking-wide text-ivory transition hover:bg-burgundy-light disabled:opacity-50"
            >
              Add to Bag
            </button>
            <button
              disabled={!inStock}
              onClick={() => {
                addToCart(product, variant, qty);
                showShopifyConnect();
              }}
              className="h-12 flex-1 rounded-sm bg-gold text-sm font-medium tracking-wide text-burgundy transition hover:bg-gold-soft disabled:opacity-50"
            >
              Buy Now
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={wishlisted}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-bronze/25 text-burgundy"
            >
              <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-bronze/15 pt-6 text-center">
            {[
              { icon: ShieldCheck, label: "Secure Payment" },
              { icon: Truck, label: "UK Delivery" },
              { icon: RotateCcw, label: "Easy Returns" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <Icon size={20} className="text-bronze" strokeWidth={1.4} />
                <span className="text-[11px] text-ink/60">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex gap-6 overflow-x-auto border-b border-bronze/15">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition ${
                    activeTab === tab ? "border-burgundy text-burgundy" : "border-transparent text-ink/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="pt-5 text-sm leading-relaxed text-ink/70">
              {activeTab === "Description" && <p>{product.description}</p>}
              {activeTab === "Details" && (
                <ul className="list-disc space-y-1.5 pl-5">
                  {product.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              {activeTab === "Shipping & Returns" && (
                <p>
                  Standard UK delivery arrives in 2 to 4 working days, with express options
                  available at checkout. Unworn items in original packaging can be returned
                  within 14 days. Visit our{" "}
                  <Link href="/returns" className="text-bronze underline underline-offset-2">
                    Returns Policy
                  </Link>{" "}
                  for full details.
                </p>
              )}
              {activeTab === "Hair Care" && (
                <p>
                  Wash with sulphate-free products, condition from mid-length to ends, and
                  air dry on a wig stand whenever possible. Store on a stand or in a silk bag
                  to protect the lace and hairline between wears.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="mb-8 font-serif-display text-2xl text-burgundy sm:text-3xl">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t border-bronze/15 bg-ivory p-3 shadow-[0_-4px_16px_rgba(56,11,21,0.08)] lg:hidden">
        <div className="flex-1">
          <p className="truncate text-xs text-ink/60">{product.name}</p>
          <p className="font-serif-display text-lg text-burgundy">{formatGBP(variant.price)}</p>
        </div>
        <button
          disabled={!inStock}
          onClick={() => addToCart(product, variant, qty)}
          className="h-12 flex-1 rounded-sm bg-burgundy text-sm font-medium text-ivory disabled:opacity-50"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
