import Link from "next/link";
import { NavMenu } from "@/lib/nav";
import HairArt from "@/components/ui/HairArt";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  return (
    <div className="absolute left-1/2 top-full z-40 w-[46rem] -translate-x-1/2 pt-3">
      <div className="grid grid-cols-[1fr_1fr_18rem] gap-8 rounded-sm border border-bronze/10 bg-ivory p-8 shadow-xl">
        {menu.columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">
              {col.heading}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="text-sm text-ink/80 transition hover:text-burgundy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link href={menu.promo.href} onClick={onNavigate} className="group relative block overflow-hidden rounded-sm">
          <HairArt seed={menu.promo.seed} dark className="aspect-[4/5] w-full" />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-burgundy/90 via-burgundy/10 to-transparent p-5">
            <p className="font-serif-display text-lg text-ivory">{menu.promo.title}</p>
            <p className="mt-1 text-xs text-ivory/75">{menu.promo.subtitle}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-gold">
              Shop Now
              <ArrowRight size={13} className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
