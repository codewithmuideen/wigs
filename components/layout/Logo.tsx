import Link from "next/link";

type Tone = "dark" | "light";

const toneClasses = (tone: Tone) => ({
  name: tone === "dark" ? "text-ivory" : "text-burgundy",
  luxe: tone === "dark" ? "text-gold" : "text-bronze",
  ring: tone === "dark" ? "border-gold/60 text-gold" : "border-bronze/50 text-bronze",
  rule: tone === "dark" ? "bg-gold/50" : "bg-bronze/40",
});

export function LogoMark({ tone = "light", size = 40 }: { tone?: Tone; size?: number }) {
  const c = toneClasses(tone);
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full border font-serif-display ${c.ring}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      aria-hidden="true"
    >
      <span
        className="absolute rounded-full border border-current opacity-40"
        style={{ inset: size * 0.09 }}
      />
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
      <span className={`font-serif-display text-[1.55rem] tracking-[0.01em] sm:text-[1.75rem] ${c.name}`}>
        Fèyíshọpé <span className={c.luxe}>Luxe</span>
      </span>
      {showTagline && (
        <span className="mt-2 flex items-center gap-2">
          <span className={`h-px w-4 ${c.rule}`} />
          <span className={`text-[0.6rem] tracking-[0.32em] uppercase ${c.luxe}`}>
            Beauty in Gratitude
          </span>
          <span className={`h-px w-4 ${c.rule}`} />
        </span>
      )}
    </Link>
  );
}
