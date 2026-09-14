import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink/55">
      <Link href="/" className="hover:text-burgundy">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} />
          {item.href ? (
            <Link href={item.href} className="hover:text-burgundy">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink/75">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
