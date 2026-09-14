import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { articles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Journal",
  description: "Wig guides, hair care tips and buying advice from Fèyíshọpé Luxe.",
};

export default function JournalIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Journal" }]} />
      <div className="mt-4 text-center">
        <h1 className="font-serif-display text-3xl text-burgundy sm:text-4xl">The Journal</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
          Guides on choosing, fitting and caring for premium human hair.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {articles.map((a) => (
          <Link key={a.slug} href={`/journal/${a.slug}`} className="group block">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
              <Image
                src={a.image}
                alt={a.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            <p className="mt-4 font-serif-display text-xl text-burgundy">{a.title}</p>
            <p className="mt-1.5 text-sm text-ink/60">{a.excerpt}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-bronze">
              Read Article <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
