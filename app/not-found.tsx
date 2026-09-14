import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/layout/Logo";
import { products } from "@/lib/products";

export default function NotFound() {
  const suggestions = products.filter((p) => p.badges.includes("Best Seller")).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <Logo tone="light" />
      <p className="mt-10 font-serif-display text-7xl text-burgundy">404</p>
      <h1 className="mt-3 font-serif-display text-2xl text-burgundy">This page has wandered off</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        The page you are looking for may have moved or no longer exists. Let&apos;s get you
        back to something beautiful.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex h-12 items-center justify-center rounded-sm bg-burgundy px-8 text-sm font-medium text-ivory transition hover:bg-burgundy-light"
      >
        Return Home
      </Link>

      {suggestions.length > 0 && (
        <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4">
          {suggestions.map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="group block text-left">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-2 truncate text-xs font-medium text-ink/75">{p.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
