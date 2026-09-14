import { BadgeCheck, HeartHandshake, Sparkles, Truck } from "lucide-react";

const points = [
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

export default function WhyChooseUs() {
  return (
    <section className="bg-sand/30 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Why Fèyíshọpé Luxe</span>
          <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">
            Crafted for Confidence
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-bronze/30 text-bronze">
                <Icon size={22} strokeWidth={1.4} />
              </div>
              <p className="mt-4 font-serif-display text-lg text-burgundy">{title}</p>
              <p className="mt-1.5 max-w-[22ch] text-sm text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
