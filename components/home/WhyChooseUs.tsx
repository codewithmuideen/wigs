import Image from "next/image";
import { BadgeCheck, HeartHandshake, Sparkles, Truck, type LucideIcon } from "lucide-react";

interface Point {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const points: Point[] = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "100% virgin and raw human hair, selected and finished by hand.",
  },
  {
    icon: BadgeCheck,
    title: "Secure Checkout",
    desc: "Every order is protected with encrypted, trusted payment processing.",
  },
  {
    icon: Truck,
    title: "Fast UK Delivery",
    desc: "Tracked delivery across England, Scotland, Wales and Northern Ireland.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    desc: "Real guidance on fit, texture and care from a team that knows hair.",
  },
];

const positions = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 translate-x-[38%] -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  "left-0 top-1/2 -translate-x-[38%] -translate-y-1/2",
];

function Callout({ icon: Icon, title, className }: { icon: LucideIcon; title: string; className: string }) {
  return (
    <div className={`absolute z-10 flex w-40 items-center gap-2.5 rounded-full bg-ivory py-2 pl-2 pr-4 shadow-lg ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
        <Icon size={16} strokeWidth={1.6} />
      </span>
      <span className="text-xs font-medium leading-tight text-burgundy">{title}</span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-burgundy py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Desktop: radial badge layout around a portrait */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Why Fèyíshọpé Luxe
            </span>
            <h2 className="mt-3 font-serif-display text-4xl leading-tight text-ivory xl:text-5xl">
              Crafted for Confidence
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
              Every detail, from sourcing to shipping, is built around one goal: hair
              you can trust the moment it arrives.
            </p>
            <div className="mt-8 space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-3 max-w-sm">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <p.icon size={15} strokeWidth={1.6} />
                  </span>
                  <p className="text-sm text-ivory/70">
                    <span className="font-medium text-ivory">{p.title}.</span> {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full text-gold/25"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 3" />
            </svg>
            <div className="absolute inset-[12%] overflow-hidden rounded-full border-2 border-gold/40">
              <Image
                src="/images/wigs/w-deepwave-caramel-portrait.jpg"
                alt="A Fèyíshọpé Luxe customer"
                fill
                sizes="24rem"
                className="object-cover"
              />
            </div>
            {points.map((p, i) => (
              <Callout key={p.title} icon={p.icon} title={p.title} className={positions[i]} />
            ))}
          </div>
        </div>

        {/* Mobile / tablet: simple stacked cards */}
        <div className="lg:hidden">
          <div className="mb-10 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Why Fèyíshọpé Luxe</span>
            <h2 className="mt-2 font-serif-display text-3xl text-ivory sm:text-4xl">Crafted for Confidence</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-sm bg-ivory/5 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={20} strokeWidth={1.4} />
                </div>
                <p className="mt-3 font-serif-display text-base text-ivory">{title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ivory/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
