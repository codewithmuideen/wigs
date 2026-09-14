"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-sand/30 py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Stay Close</span>
          <h2 className="mt-3 max-w-md font-serif-display text-3xl leading-tight text-burgundy sm:text-4xl">
            Get First Access to New Drops
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
            Exclusive offers, early access to limited releases and hair inspiration,
            straight to your inbox.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif-display text-lg text-bronze">
              Welcome to the inner circle. Thank you for joining us.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex max-w-md items-center gap-2 rounded-full bg-ivory p-2 pl-6 shadow-lg"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-10 min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
              />
              <button
                type="submit"
                className="flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-burgundy px-5 text-xs font-medium uppercase tracking-wide text-ivory transition hover:bg-burgundy-light"
              >
                Subscribe
                <ArrowRight size={13} />
              </button>
            </form>
          )}
          <p className="mt-4 text-[11px] text-ink/45">
            By subscribing you agree to receive marketing emails. Unsubscribe at any time.
          </p>
        </div>

        <div className="relative hidden h-[26rem] lg:block">
          <div className="absolute left-0 top-6 h-[19rem] w-[15rem] overflow-hidden rounded-t-full shadow-xl">
            <Image
              src="/images/wigs/w-hd-lace-bodywave-glam.jpg"
              alt="Fèyíshọpé Luxe styling"
              fill
              sizes="15rem"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-72 w-72 overflow-hidden rounded-full shadow-xl">
            <Image
              src="/images/stock/guide-care.jpg"
              alt="Hair care essentials"
              fill
              sizes="18rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
