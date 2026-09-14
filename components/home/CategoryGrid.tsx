import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";
import HairArt from "@/components/ui/HairArt";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Explore</span>
          <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">Shop by Category</h2>
        </div>
        <Link
          href="/shop"
          className="hidden items-center gap-1 text-sm font-medium text-burgundy hover:gap-2 sm:inline-flex transition-all"
        >
          View All <ArrowRight size={15} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className="group relative block overflow-hidden rounded-sm"
          >
            <HairArt seed={cat.slug} className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-burgundy/85 via-burgundy/5 to-transparent p-4 sm:p-5">
              <p className="font-serif-display text-base text-ivory sm:text-xl">{cat.name}</p>
              <p className="mt-0.5 text-[11px] text-ivory/70 sm:text-xs">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
