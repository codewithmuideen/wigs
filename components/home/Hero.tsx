import Link from "next/link";
import HairArt from "@/components/ui/HairArt";
import { buttonClasses } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-burgundy">
      <div className="absolute inset-0">
        <HairArt seed="hero-main" dark className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/40 to-burgundy/10" />
      </div>
      <div className="relative mx-auto flex min-h-[78vh] max-w-[1440px] flex-col items-center justify-center px-6 py-24 text-center sm:min-h-[82vh]">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
          Beauty in Gratitude
        </span>
        <h1 className="mt-6 max-w-3xl font-serif-display text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
          Hair That Defines You
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/75 sm:text-base">
          Premium human hair, beautifully crafted for confidence, elegance and everyday luxury.
          Made for the women who wear their standards well.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/shop?category=wigs" className={buttonClasses("secondary", "lg", "min-w-[180px]")}>
            Shop Wigs
          </Link>
          <Link href="/shop?category=hair" className={buttonClasses("outline-light", "lg", "min-w-[180px]")}>
            Explore Hair
          </Link>
        </div>
      </div>
    </section>
  );
}
