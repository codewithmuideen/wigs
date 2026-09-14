"use client";

import { useState } from "react";
import { PackageSearch } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { useApp } from "@/components/providers/AppProvider";

export default function TrackOrderPage() {
  const { showComingSoon } = useApp();
  const [orderRef, setOrderRef] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showComingSoon(
      "Order Tracking Launching Soon",
      "Live order tracking will be available once checkout is connected. Your confirmation email will carry updates in the meantime."
    );
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <Breadcrumbs items={[{ label: "Track Order" }]} />
      <div className="mt-6 flex flex-col items-center text-center">
        <PackageSearch className="text-bronze" size={36} strokeWidth={1.3} />
        <h1 className="mt-4 font-serif-display text-3xl text-burgundy">Track Your Order</h1>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          Enter your order reference and email address to see the latest status.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-10 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-ink/70">Order reference</label>
          <input
            type="text"
            required
            value={orderRef}
            onChange={(e) => setOrderRef(e.target.value)}
            placeholder="e.g. MW-2026-00482"
            className="w-full rounded-sm border border-bronze/25 bg-ivory px-4 py-3 text-sm outline-none focus:border-bronze"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-ink/70">Email or postcode</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-sm border border-bronze/25 bg-ivory px-4 py-3 text-sm outline-none focus:border-bronze"
          />
        </div>
        <Button type="submit" variant="primary" className="w-full">
          Track Order
        </Button>
      </form>
    </div>
  );
}
