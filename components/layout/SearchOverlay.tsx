"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, TrendingUp, X } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";
import { products } from "@/lib/products";
import { formatGBP } from "@/lib/format";
import HairArt from "@/components/ui/HairArt";

const popularSearches = ["Body Wave", "HD Lace", "Bob Wig", "Bundles", "Ponytail", "Curly"];

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useApp();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) setQuery("");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    if (searchOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.texture.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex flex-col bg-ivory animate-fade-in">
      <div className="border-b border-bronze/15">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-6 sm:px-0">
          <Search className="text-bronze" size={20} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for wigs, textures, lengths..."
            className="flex-1 border-none bg-transparent font-serif-display text-xl text-burgundy outline-none placeholder:text-ink/30"
          />
          <button
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="rounded-full p-2 text-ink/60 hover:bg-sand/50 hover:text-burgundy"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-4 py-8 sm:px-0">
        {query.trim().length < 2 ? (
          <div>
            <p className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">
              <TrendingUp size={13} /> Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="rounded-full border border-bronze/25 px-4 py-2 text-sm text-ink/75 transition hover:border-burgundy hover:text-burgundy"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="py-10 text-center">
            <p className="font-serif-display text-lg text-burgundy">
              We couldn&apos;t find exactly what you&apos;re looking for
            </p>
            <p className="mt-2 text-sm text-ink/60">Try a different term, or explore a popular category below.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="rounded-full border border-bronze/25 px-4 py-2 text-sm text-ink/75 hover:border-burgundy hover:text-burgundy"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <ul className="space-y-4">
            {results.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/products/${p.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-4 rounded-sm p-2 transition hover:bg-sand/30"
                >
                  <HairArt seed={p.id} className="h-16 w-14 shrink-0 rounded-sm" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-burgundy">{p.name}</p>
                    <p className="text-xs text-ink/55">
                      {p.type} · {p.texture}
                    </p>
                  </div>
                  <span className="text-sm text-ink/70">{formatGBP(p.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
