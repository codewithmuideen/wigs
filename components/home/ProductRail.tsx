import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";
import ProductCard from "@/components/products/ProductCard";

export default function ProductRail({
  eyebrow,
  title,
  products,
  viewAllHref,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  products: Product[];
  viewAllHref: string;
  tone?: "light" | "sand";
}) {
  return (
    <section className={`py-20 ${tone === "sand" ? "bg-sand/30" : ""}`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">{eyebrow}</span>
            <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">{title}</h2>
          </div>
          <Link
            href={viewAllHref}
            className="hidden items-center gap-1 text-sm font-medium text-burgundy hover:gap-2 sm:inline-flex transition-all"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center sm:hidden">
          <Link href={viewAllHref} className="inline-flex items-center gap-1 text-sm font-medium text-burgundy">
            View All <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
