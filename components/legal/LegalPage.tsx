import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: title }]} />
      <h1 className="mt-4 font-serif-display text-3xl text-burgundy sm:text-4xl">{title}</h1>
      <p className="mt-2 text-xs uppercase tracking-wide text-ink/45">Last updated September 2026</p>

      <div className="mt-6 rounded-sm border border-bronze/20 bg-sand/25 p-4 text-xs leading-relaxed text-ink/60">
        This page is a working draft for review by our legal advisor before the store
        launches publicly. It is provided to show the intended structure of this policy.
      </div>

      {intro && <p className="mt-8 text-sm leading-relaxed text-ink/70">{intro}</p>}

      <div className="mt-8 space-y-8">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-serif-display text-xl text-burgundy">{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="mt-3 text-sm leading-relaxed text-ink/70">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
