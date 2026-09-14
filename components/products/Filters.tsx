"use client";

import { textures, lengthOptions } from "@/lib/products";
import { ProductType } from "@/lib/types";

export interface FilterState {
  texture: string[];
  length: number[];
  type: string[];
  collection: string[];
  maxPrice: number;
}

const types: ProductType[] = [
  "HD Lace Wig",
  "Lace Front Wig",
  "Closure Wig",
  "Frontal Wig",
  "Bob Wig",
  "Bundle",
  "Closure",
  "Frontal",
  "Clip-In",
  "Ponytail",
  "Tape-In",
  "Accessory",
];

const collections = [
  "New Arrivals",
  "Best Sellers",
  "Luxury Collection",
  "Everyday Collection",
  "Bridal",
  "Sale",
];

function CheckGroup({
  label,
  options,
  active,
  onToggle,
}: {
  label: string;
  options: string[];
  active: string[];
  onToggle: (val: string) => void;
}) {
  return (
    <div className="border-b border-bronze/15 py-5">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">{label}</p>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink/75">
            <input
              type="checkbox"
              checked={active.includes(opt)}
              onChange={() => onToggle(opt)}
              className="h-4 w-4 accent-burgundy"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Filters({
  filters,
  setFilters,
}: {
  filters: FilterState;
  setFilters: (updater: (prev: FilterState) => FilterState) => void;
}) {
  const toggle = (key: keyof FilterState, val: string | number) => {
    setFilters((prev) => {
      const arr = prev[key] as (string | number)[];
      const next = arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
      return { ...prev, [key]: next };
    });
  };

  return (
    <div>
      <CheckGroup
        label="Texture"
        options={textures.map((t) => t.name)}
        active={filters.texture}
        onToggle={(v) => toggle("texture", v)}
      />
      <CheckGroup
        label="Product Type"
        options={types}
        active={filters.type}
        onToggle={(v) => toggle("type", v)}
      />
      <CheckGroup
        label="Collection"
        options={collections}
        active={filters.collection}
        onToggle={(v) => toggle("collection", v)}
      />
      <div className="border-b border-bronze/15 py-5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">Length</p>
        <div className="flex flex-wrap gap-2">
          {lengthOptions.map((len) => (
            <button
              key={len}
              onClick={() => toggle("length", len)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                filters.length.includes(len)
                  ? "border-burgundy bg-burgundy text-ivory"
                  : "border-bronze/25 text-ink/70 hover:border-burgundy"
              }`}
            >
              {len}&quot;
            </button>
          ))}
        </div>
      </div>
      <div className="py-5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">
          Max Price: £{filters.maxPrice}
        </p>
        <input
          type="range"
          min={50}
          max={400}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
          className="w-full accent-burgundy"
        />
      </div>
    </div>
  );
}
