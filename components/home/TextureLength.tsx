import Link from "next/link";
import Image from "next/image";
import { textures, lengthOptions } from "@/lib/products";

export default function TextureLength() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Texture</span>
          <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">Shop by Texture</h2>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {textures.map((t) => (
              <Link key={t.slug} href={`/shop?texture=${t.name}`} className="group text-center">
                <div className="relative aspect-square w-full overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mt-2 block text-xs font-medium text-ink/75 group-hover:text-burgundy">
                  {t.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Length</span>
          <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">Shop by Length</h2>
          <p className="mt-3 max-w-md text-sm text-ink/60">
            From a sleek everyday bob to dramatic waist length waves, find the length that matches your moment.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {lengthOptions.map((len) => (
              <Link
                key={len}
                href={`/shop?length=${len}`}
                className="flex h-14 w-16 flex-col items-center justify-center rounded-sm border border-bronze/25 text-sm font-medium text-ink/75 transition hover:border-burgundy hover:bg-burgundy hover:text-ivory"
              >
                {len}
                <span className="text-[10px] opacity-70">inch</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
