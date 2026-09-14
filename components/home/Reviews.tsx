const reviews = [
  {
    name: "Adaeze O.",
    location: "London",
    rating: 5,
    text: "The lace melted into my skin within minutes and nobody could tell it wasn't my own hair. Worth every penny.",
    product: "Bèlla HD Lace Body Wave Wig",
  },
  {
    name: "Chidinma A.",
    location: "Manchester",
    rating: 5,
    text: "I've bought from a lot of UK hair stores and this is genuinely the softest, most natural bundle I've owned.",
    product: "Raw Body Wave 3 Bundle Deal",
  },
  {
    name: "Folake B.",
    location: "Birmingham",
    rating: 5,
    text: "Delivery was quick, the packaging felt luxurious and the bob is exactly the shape I asked for. I'm ordering another one.",
    product: "Amara Glueless Bob Wig",
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-12 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Testimonials</span>
        <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">
          Loved by Women Across the UK
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-sm border border-bronze/15 bg-ivory p-6">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-5 border-t border-bronze/10 pt-4">
              <p className="text-sm font-medium text-burgundy">{r.name}</p>
              <p className="text-xs text-ink/50">
                {r.location} · {r.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
