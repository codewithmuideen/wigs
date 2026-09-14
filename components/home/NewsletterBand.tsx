"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-burgundy py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Stay Close</span>
        <h2 className="mt-3 font-serif-display text-3xl text-ivory sm:text-4xl">
          Get First Access to New Drops
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory/70">
          Exclusive offers, early access to limited releases and hair inspiration,
          straight to your inbox.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif-display text-lg text-gold">
            Welcome to the inner circle. Thank you for joining us.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name (optional)"
              className="h-12 flex-1 rounded-sm border border-ivory/25 bg-transparent px-4 text-sm text-ivory outline-none placeholder:text-ivory/40 focus:border-gold"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="h-12 flex-1 rounded-sm border border-ivory/25 bg-transparent px-4 text-sm text-ivory outline-none placeholder:text-ivory/40 focus:border-gold"
            />
            <Button type="submit" variant="secondary" size="md">
              Subscribe
            </Button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ivory/45">
          By subscribing you agree to receive marketing emails. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
