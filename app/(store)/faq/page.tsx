import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about orders, delivery, returns, wigs and hair care at Fèyíshọpé Luxe.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <div className="mt-4 text-center">
        <h1 className="font-serif-display text-3xl text-burgundy sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
          Everything you need to know about ordering, delivery and caring for your hair.
        </p>
      </div>
      <div className="mt-12">
        <FaqAccordion />
      </div>
    </div>
  );
}
