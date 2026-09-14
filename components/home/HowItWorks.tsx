const steps = [
  {
    number: "01",
    title: "Browse & Choose",
    desc: "Explore the collection by texture, length or category until you find your perfect match.",
  },
  {
    number: "02",
    title: "Select Your Fit",
    desc: "Choose your length, colour and density, then add it to your bag in seconds.",
  },
  {
    number: "03",
    title: "Secure Checkout",
    desc: "Pay safely with encrypted checkout and track your order from confirmation to dispatch.",
  },
  {
    number: "04",
    title: "Arrives Ready to Wear",
    desc: "Your hair arrives beautifully packaged, pre-styled and ready to install.",
  },
];

function StepCard({ title, desc, align }: { title: string; desc: string; align: "left" | "right" }) {
  return (
    <div className={`rounded-sm bg-ivory px-5 py-4 shadow-sm ${align === "right" ? "text-right" : "text-left"}`}>
      <p className="font-serif-display text-lg text-burgundy">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/60">{desc}</p>
    </div>
  );
}

function Badge({ number }: { number: string }) {
  return (
    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-ivory font-serif-display text-sm text-burgundy shadow-sm">
      {number}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-sand/25 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">How It Works</span>
          <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">
            From Browse to Beautiful
          </h2>
        </div>

        {/* Mobile: single column, badge left */}
        <div className="relative mx-auto max-w-md space-y-8 sm:hidden">
          <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px -translate-x-1/2 border-l-2 border-dashed border-bronze/25" />
          {steps.map((s) => (
            <div key={s.number} className="relative flex items-start gap-4">
              <Badge number={s.number} />
              <div className="flex-1 pt-1">
                <StepCard title={s.title} desc={s.desc} align="left" />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: alternating sides along a centre line */}
        <div className="relative mx-auto hidden max-w-2xl sm:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-bronze/25" />
          <div className="space-y-6">
            {steps.map((s, i) => {
              const isRight = i % 2 === 1;
              return (
                <div key={s.number} className="grid grid-cols-[1fr_3rem_1fr] items-center gap-8">
                  <div>{!isRight && <StepCard title={s.title} desc={s.desc} align="right" />}</div>
                  <div className="flex justify-center">
                    <Badge number={s.number} />
                  </div>
                  <div>{isRight && <StepCard title={s.title} desc={s.desc} align="left" />}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
