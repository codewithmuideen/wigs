import Link from "next/link";
import Image from "next/image";
import { buttonClasses } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-burgundy">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2 lg:min-h-[86vh]">
        <div className="relative order-2 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:order-1 lg:px-16 lg:py-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, #D1A76C 0px, #D1A76C 1px, transparent 1px, transparent 64px)",
            }}
          />
          <span className="relative text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Beauty in Gratitude
          </span>
          <h1 className="relative mt-6 max-w-xl font-serif-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-[3.4rem]">
            Hair That Defines You
          </h1>
          <p className="relative mt-6 max-w-md text-sm leading-relaxed text-ivory/75 sm:text-base">
            Premium human hair, beautifully crafted for confidence, elegance and everyday
            luxury. Made for the women who wear their standards well.
          </p>
          <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop?category=wigs" className={buttonClasses("secondary", "lg", "min-w-[180px]")}>
              Shop Wigs
            </Link>
            <Link href="/shop?category=hair" className={buttonClasses("outline-light", "lg", "min-w-[180px]")}>
              Explore Hair
            </Link>
          </div>
          <div className="relative mt-12 flex items-center gap-6 border-t border-ivory/10 pt-6 sm:gap-10">
            <div>
              <p className="font-serif-display text-2xl text-gold">4.8/5</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-ivory/50">Customer Rating</p>
            </div>
            <div className="h-8 w-px bg-ivory/15" />
            <div>
              <p className="font-serif-display text-2xl text-gold">UK Wide</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-ivory/50">Tracked Delivery</p>
            </div>
            <div className="h-8 w-px bg-ivory/15" />
            <div>
              <p className="font-serif-display text-2xl text-gold">100%</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-ivory/50">Human Hair</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/5] w-full sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:h-auto">
          <Image
            src="/images/wigs/w-hd-lace-bodywave-glam.jpg"
            alt="Fèyíshọpé Luxe, premium human hair"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_22%] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy/50 via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-burgundy/70 to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
