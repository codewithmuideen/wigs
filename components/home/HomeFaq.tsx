"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I know which wig construction is right for me?",
    answer:
      "Closure wigs are the most affordable and easiest to start with. Frontal wigs give you more parting freedom, and HD lace wigs offer the most undetectable finish. Our Hair Guide walks through each option in detail.",
  },
  {
    question: "Will the lace match my skin tone?",
    answer:
      "HD and transparent lace are designed to melt into a wide range of skin tones as they are. For an exact match, a light dusting of powder or a small amount of foundation blended along the hairline works beautifully.",
  },
  {
    question: "How long does UK delivery take?",
    answer:
      "Standard delivery arrives within 2 to 4 working days, with express options at checkout. Delivery is free on all orders over £150.",
  },
  {
    question: "Can I return a wig if it isn't right for me?",
    answer:
      "Yes, unworn items in original packaging with hygiene seals intact can be returned within 14 days of delivery. Visit our Returns Policy page for the full process.",
  },
  {
    question: "How do I care for my human hair wig?",
    answer:
      "Wash with sulphate-free products, condition from mid-length to ends, and air dry on a wig stand whenever possible. Our Journal has a full care routine to help it last.",
  },
];

const avatars = [
  "/images/wigs/w-curly-pixie-profile.jpg",
  "/images/wigs/w-bob-blonde-bright.jpg",
  "/images/wigs/w-deepwave-caramel-portrait.jpg",
];

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-serif-display text-3xl text-burgundy sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm text-ink/60">
          Everything you need to know about ordering and wearing your hair.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl px-4 sm:px-6">
        <div className="divide-y divide-bronze/15 border-y border-bronze/15">
          {faqs.map((f, i) => (
            <div key={f.question}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium text-burgundy">{f.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bronze/30 text-bronze">
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>
              {open === i && (
                <p className="pb-5 pr-10 text-sm leading-relaxed text-ink/65">{f.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6">
        <div className="rounded-sm bg-sand/35 px-6 py-12 text-center">
          <div className="flex justify-center -space-x-3">
            {avatars.map((src) => (
              <div key={src} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-ivory">
                <Image src={src} alt="" fill sizes="44px" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-5 font-serif-display text-xl text-burgundy">Still have questions?</p>
          <p className="mt-1.5 text-sm text-ink/60">
            Can&apos;t find the answer you&apos;re looking for? Chat to our friendly team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-burgundy px-8 text-sm font-medium tracking-wide text-ivory transition hover:bg-burgundy-light"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
