function hashSeed(input: string) {
  let h = 1779033703 ^ input.length;
  for (let i = 0; i < input.length; i++) {
    h = Math.imul(h ^ input.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const PALETTES = [
  ["#8C693E", "#D1A76C", "#E6D3C1"],
  ["#380B15", "#8C693E", "#D1A76C"],
  ["#D1A76C", "#E3C295", "#8C693E"],
];

function buildStrands(seed: string, count: number) {
  const rand = hashSeed(seed);
  const palette = PALETTES[Math.floor(rand() * PALETTES.length)];
  const strands = [];
  for (let i = 0; i < count; i++) {
    const x = 8 + rand() * 84;
    const drift = (rand() - 0.5) * 40;
    const c1x = x + drift * 0.4;
    const c1y = 30 + rand() * 20;
    const c2x = x + drift * 0.8;
    const c2y = 60 + rand() * 20;
    const endX = x + drift;
    const color = palette[i % palette.length];
    const width = 0.6 + rand() * 1.6;
    const opacity = 0.18 + rand() * 0.3;
    strands.push({ x, c1x, c1y, c2x, c2y, endX, color, width, opacity });
  }
  return strands;
}

export default function HairArt({
  seed,
  label,
  className = "",
  dark = false,
}: {
  seed: string;
  label?: string;
  className?: string;
  dark?: boolean;
}) {
  const strands = buildStrands(seed, 26);
  const bg = dark
    ? "linear-gradient(145deg, #380B15 0%, #4a0f1c 55%, #380B15 100%)"
    : "linear-gradient(145deg, #F7F0E6 0%, #E6D3C1 60%, #F0E4D6 100%)";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {strands.map((s, i) => (
          <path
            key={i}
            d={`M ${s.x} -5 C ${s.c1x} ${s.c1y}, ${s.c2x} ${s.c2y}, ${s.endX} 105`}
            stroke={s.color}
            strokeWidth={s.width}
            strokeLinecap="round"
            fill="none"
            opacity={s.opacity}
          />
        ))}
      </svg>
      <span
        className="pointer-events-none absolute -bottom-6 -right-2 select-none font-serif-display text-8xl"
        style={{ color: dark ? "#D1A76C" : "#8C693E", opacity: 0.08 }}
      >
        FL
      </span>
      {label && (
        <span
          className={`absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] ${
            dark ? "text-gold/70" : "text-bronze/70"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
