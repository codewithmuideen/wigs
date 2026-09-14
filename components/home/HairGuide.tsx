import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HairArt from "@/components/ui/HairArt";

const guides = [
  { title: "How to Choose Your First Wig", slug: "how-to-choose-a-wig", seed: "guide-choose" },
  { title: "Measuring Your Head, Made Simple", slug: "how-to-measure-your-head", seed: "guide-measure" },
  { title: "Caring for Human Hair at Home", slug: "how-to-care-for-human-hair", seed: "guide-care" },
  { title: "Understanding Lace Types", slug: "lace-guide", seed: "guide-lace" },
];

export default function HairGuide() {
  return (
    <section className="bg-sand/30 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">The Hair Guide</span>
            <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">Learn Before You Shop</h2>
          </div>
          <Link
            href="/journal"
            className="hidden items-center gap-1 text-sm font-medium text-burgundy hover:gap-2 sm:inline-flex transition-all"
          >
            Visit the Journal <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g) => (
            <Link key={g.slug} href={`/journal/${g.slug}`} className="group block overflow-hidden rounded-sm bg-ivory">
              <HairArt seed={g.seed} className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105" />
              <div className="p-4">
                <p className="font-serif-display text-base text-burgundy">{g.title}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-bronze">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
