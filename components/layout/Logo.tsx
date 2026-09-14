import Link from "next/link";

type Tone = "dark" | "light";

const toneClasses = (tone: Tone) => ({
  name: tone === "dark" ? "text-ivory" : "text-burgundy",
  luxe: tone === "dark" ? "text-gold" : "text-bronze",
  ring: tone === "dark" ? "border-gold/60 text-gold" : "border-bronze/50 text-bronze",
});

export function LogoMark({ tone = "light", size = 40 }: { tone?: Tone; size?: number }) {
  const c = toneClasses(tone);
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border font-serif-display ${c.ring}`}
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      aria-hidden="true"
    >
      FL
    </span>
  );
}

export default function Logo({
  tone = "light",
  showTagline = false,
  className = "",
}: {
  tone?: Tone;
  showTagline?: boolean;
  className?: string;
}) {
  const c = toneClasses(tone);
  return (
    <Link
      href="/"
      aria-label="Fèyíshọpé Luxe, home"
      className={`group inline-flex flex-col items-center leading-none ${className}`}
    >
      <span className="flex items-baseline gap-[0.14em]">
        <span className={`font-serif-display text-[1.55rem] tracking-[0.01em] sm:text-[1.75rem] ${c.name}`}>
          Fèyíshọpé
        </span>
        <span className={`font-serif-display text-[1.55rem] italic tracking-[0.01em] sm:text-[1.75rem] ${c.luxe}`}>
          Luxe
        </span>
      </span>
      {showTagline && (
        <span className={`mt-1 text-[0.62rem] tracking-[0.42em] uppercase ${c.luxe}`}>
          Beauty in Gratitude
        </span>
      )}
    </Link>
  );
}
