import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[16/10] lg:aspect-[4/5]">
          <Image
            src="/images/wigs/w-portrait-pink-blazer.jpg"
            alt="Fèyíshọpé Luxe, our story"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Our Story</span>
          <h2 className="mt-3 max-w-md font-serif-display text-4xl leading-tight text-burgundy sm:text-5xl">
            Beauty in Gratitude
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/65">
            Fèyíshọpé Luxe was founded on a simple belief, that great hair should feel like
            a form of self respect, not a compromise. Every piece we sell is chosen and
            finished the way we would want to wear it ourselves.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
            From sourcing to shipping, we build our standards around the trust our
            customers place in us, not around shortcuts.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-burgundy hover:gap-3 transition-all"
          >
            Discover Our Story
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
