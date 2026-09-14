import Link from "next/link";
import HairArt from "@/components/ui/HairArt";
import { buttonClasses } from "@/components/ui/Button";

export default function Editorial() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="grid overflow-hidden rounded-sm bg-burgundy lg:grid-cols-2">
        <div className="relative min-h-[22rem]">
          <HairArt seed="luxury-editorial" dark className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-center px-8 py-14 sm:px-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            The Luxury Collection
          </span>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight text-ivory sm:text-4xl">
            Our finest hair, reserved for the pieces we are proudest of
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
            Hand selected virgin human hair, finished on undetectable HD lace. A small
            collection made for the moments when only the best will do.
          </p>
          <Link
            href="/shop?collection=Luxury Collection"
            className={buttonClasses("secondary", "lg", "mt-8 w-fit")}
          >
            Discover the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
