import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2 lg:items-stretch lg:min-h-[82vh]">
        <div className="relative order-2 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:order-1 lg:px-16 lg:py-0">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
            Welcome to Fèyíshọpé Luxe
          </span>
          <h1 className="mt-5 max-w-lg font-serif-display text-5xl leading-[1.05] text-burgundy sm:text-6xl lg:text-[4rem]">
            Hair That
            <br />
            Defines <span className="italic text-gold">You</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/65 sm:text-base">
            Premium human hair, beautifully crafted for confidence, elegance and everyday
            luxury. Made for the women who wear their standards well.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
            <span className="flex text-gold">{"★★★★★"}</span>
            <span>4.8 · Trusted by 1,200+ UK customers</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop?category=wigs"
              className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-full bg-burgundy px-8 text-sm font-medium tracking-wide text-ivory transition hover:bg-burgundy-light"
            >
              Shop Wigs
            </Link>
            <Link
              href="/shop?category=hair"
              className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-full border border-burgundy/25 px-8 text-sm font-medium tracking-wide text-burgundy transition hover:bg-burgundy/5"
            >
              Explore Hair
            </Link>
          </div>
        </div>

        <div
          className="relative order-1 flex min-h-[26rem] items-end justify-center overflow-hidden rounded-bl-[90px] sm:min-h-[32rem] lg:order-2 lg:min-h-0 lg:items-stretch lg:justify-end lg:rounded-bl-[140px]"
          style={{ backgroundColor: "#6B3A28" }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-ivory/10 blur-2xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-8 hidden font-serif-display text-[15px] font-bold uppercase tracking-[0.6em] text-transparent lg:block"
            style={{
              writingMode: "vertical-rl",
              WebkitTextStroke: "1.5px rgba(251,248,243,0.75)",
            }}
          >
            Fèyíshọpé Luxe
          </span>
          <div className="relative h-full w-full max-w-[30rem] lg:max-w-none">
            <Image
              src="/images/wigs/woman.png"
              alt="Fèyíshọpé Luxe, premium human hair"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain object-bottom lg:object-[center_bottom]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
