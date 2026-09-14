import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story and standards behind Fèyíshọpé Luxe.",
};

const values = [
  {
    title: "Sourced With Care",
    body: "We work directly with trusted suppliers to select virgin and raw human hair, checked for quality before it ever reaches our workshop.",
  },
  {
    title: "Finished By Hand",
    body: "Every lace is bleached, plucked and styled individually. Nothing leaves us until it meets the standard we would wear ourselves.",
  },
  {
    title: "Built On Trust",
    body: "From secure checkout to responsive support, we treat every order the way we would want to be treated as a customer.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="relative overflow-hidden bg-burgundy">
        <Image
          src="/images/wigs/w-portrait-pink-blazer.jpg"
          alt="Fèyíshọpé Luxe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/70 to-burgundy/40" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Our Story</span>
          <h1 className="mt-4 font-serif-display text-4xl text-ivory sm:text-5xl">Beauty in Gratitude</h1>
          <p className="mt-6 text-sm leading-relaxed text-ivory/75 sm:text-base">
            Fèyíshọpé Luxe was founded on a simple belief, that great hair should feel
            like a form of self respect, not a compromise. We bring premium human hair
            wigs and extensions to women across the UK who want quality they can trust
            and service that matches it.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-sm border border-bronze/15 p-6">
              <p className="font-serif-display text-lg text-burgundy">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/wigs/w-lace-styling-straight.jpg"
              alt="A Fèyíshọpé Luxe hair specialist at work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif-display text-3xl text-burgundy">
              Made for women who wear their standards well
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Our name means gratitude, and it shapes how we work. We are grateful to
              every customer who trusts us with something as personal as their hair,
              and we build our standards around that trust rather than around shortcuts.
              As we grow, our promise stays the same, premium materials, honest service
              and a shopping experience that feels as considered as the products we sell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
