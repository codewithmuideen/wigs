const values = [
  {
    title: "Premium Sourcing",
    desc: "Hand selected virgin and raw human hair, checked for quality before it reaches our workshop.",
  },
  {
    title: "Expert Craftsmanship",
    desc: "Every lace is bleached, plucked and styled individually to a standard we would wear ourselves.",
  },
  {
    title: "Trusted By Thousands",
    desc: "Rated 4.8 out of 5 by over 1,200 customers across England, Scotland, Wales and Northern Ireland.",
    highlight: true,
  },
];

export default function ValueProps() {
  return (
    <section className="bg-ivory pb-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className={`rounded-sm p-8 ${
                v.highlight ? "bg-burgundy text-ivory" : "border border-bronze/15 bg-ivory text-ink"
              }`}
            >
              <p className={`font-serif-display text-2xl ${v.highlight ? "text-ivory" : "text-burgundy"}`}>
                {v.title}
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${v.highlight ? "text-ivory/75" : "text-ink/60"}`}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
