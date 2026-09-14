"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import Filters, { FilterState } from "@/components/products/Filters";
import Drawer from "@/components/ui/Drawer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type SortKey = "recommended" | "newest" | "price-asc" | "price-desc" | "best-selling" | "rating";

const sortLabels: Record<SortKey, string> = {
  recommended: "Recommended",
  newest: "Newest",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "best-selling": "Best Selling",
  rating: "Highest Rated",
};

const emptyFilters: FilterState = { texture: [], length: [], type: [], collection: [], maxPrice: 400 };

export default function ShopContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(() => {
    const texture = searchParams.get("texture");
    const type = searchParams.get("type");
    const collection = searchParams.get("collection");
    const length = searchParams.get("length");
    return {
      texture: texture ? [texture] : [],
      type: type ? [type] : [],
      collection: collection ? [collection] : [],
      length: length ? [Number(length)] : [],
      maxPrice: 400,
    };
  });
  const [sort, setSort] = useState<SortKey>("recommended");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = searchParams.get("category");

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price <= filters.maxPrice);

    if (category === "wigs") list = list.filter((p) => p.type.toLowerCase().includes("wig"));
    if (category === "hair")
      list = list.filter((p) => !p.type.toLowerCase().includes("wig"));

    if (filters.texture.length) list = list.filter((p) => filters.texture.includes(p.texture));
    if (filters.type.length) list = list.filter((p) => filters.type.includes(p.type));
    if (filters.collection.length) list = list.filter((p) => filters.collection.includes(p.collection));
    if (filters.length.length)
      list = list.filter((p) => p.lengths.some((l) => filters.length.includes(l)));

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "best-selling":
        list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "newest":
        list = [...list].filter((p) => p.badges.includes("New")).concat(list.filter((p) => !p.badges.includes("New")));
        break;
      default:
        break;
    }
    return list;
  }, [filters, sort, category]);

  const activeChips: { key: keyof FilterState; value: string | number; label: string }[] = [
    ...filters.texture.map((v) => ({ key: "texture" as const, value: v, label: v })),
    ...filters.type.map((v) => ({ key: "type" as const, value: v, label: v })),
    ...filters.collection.map((v) => ({ key: "collection" as const, value: v, label: v })),
    ...filters.length.map((v) => ({ key: "length" as const, value: v, label: `${v}"` })),
  ];

  const removeChip = (key: keyof FilterState, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [key]: (prev[key] as (string | number)[]).filter((v) => v !== value),
    }));
  };

  const pageTitle =
    category === "wigs" ? "Wigs" : category === "hair" ? "Hair Extensions" : searchParams.get("collection") || "Shop All";

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Shop", href: "/shop" }, { label: pageTitle }]} />

      <div className="mb-8 mt-3">
        <h1 className="font-serif-display text-3xl text-burgundy sm:text-4xl">{pageTitle}</h1>
        <p className="mt-2 text-sm text-ink/60">{filtered.length} products</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <Filters filters={filters} setFilters={setFilters} />
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 rounded-sm border border-bronze/25 px-4 py-2.5 text-sm text-ink/75 lg:hidden"
            >
              <SlidersHorizontal size={15} /> Filters
            </button>
            <div className="ml-auto flex items-center gap-2">
              <label className="text-xs text-ink/50" htmlFor="sort">
                Sort by
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-sm border border-bronze/25 bg-ivory px-3 py-2 text-sm text-ink outline-none"
              >
                {Object.entries(sortLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {activeChips.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {activeChips.map((chip) => (
                <button
                  key={`${chip.key}-${chip.value}`}
                  onClick={() => removeChip(chip.key, chip.value)}
                  className="flex items-center gap-1.5 rounded-full bg-sand/60 px-3 py-1.5 text-xs text-burgundy"
                >
                  {chip.label} <X size={12} />
                </button>
              ))}
              <button
                onClick={() => setFilters(emptyFilters)}
                className="text-xs font-medium text-bronze underline underline-offset-2"
              >
                Clear all
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif-display text-xl text-burgundy">
                We couldn&apos;t find exactly what you&apos;re looking for
              </p>
              <p className="mt-2 text-sm text-ink/60">Try adjusting or clearing your filters.</p>
              <button
                onClick={() => setFilters(emptyFilters)}
                className="mt-5 text-sm font-medium text-bronze underline underline-offset-2"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Drawer open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} title="Filters" widthClass="max-w-sm">
        <div className="px-5">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="sticky bottom-0 border-t border-bronze/15 bg-ivory p-4">
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="w-full rounded-sm bg-burgundy py-3 text-sm font-medium text-ivory"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </Drawer>
    </div>
  );
}
