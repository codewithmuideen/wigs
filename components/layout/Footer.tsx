"use client";

import Link from "next/link";
import { useState } from "react";
import { Camera, Globe, Music2, Send, ShieldCheck } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { useApp } from "@/components/providers/AppProvider";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "Wigs", href: "/shop?category=wigs" },
      { label: "Hair Extensions", href: "/shop?category=hair" },
      { label: "New Arrivals", href: "/shop?collection=New Arrivals" },
      { label: "Best Sellers", href: "/shop?collection=Best Sellers" },
      { label: "Sale", href: "/shop?collection=Sale" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Delivery", href: "/delivery" },
      { label: "Returns", href: "/returns" },
      { label: "Track Your Order", href: "/track-order" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Admin Sign In", href: "/admin_login" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/returns" },
    ],
  },
];

export default function Footer() {
  const { showComingSoon } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-burgundy text-ivory/80">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo tone="dark" showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Premium human hair wigs and extensions, thoughtfully sourced and finished
              for women who wear their confidence well.
            </p>
            <div className="mt-6 flex gap-3">
              {[Camera, Globe, Music2].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => showComingSoon("Social Coming Soon", "Our social channels are launching alongside the full store. Thank you for your patience.")}
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 transition hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-ivory/65 transition hover:text-ivory">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-ivory/10 bg-ivory/5 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="font-serif-display text-xl text-ivory">Join the inner circle</p>
              <p className="mt-1 text-sm text-ivory/60">
                Get first access to new drops, exclusive offers and hair inspiration.
              </p>
            </div>
            {subscribed ? (
              <p className="text-sm text-gold">Thank you, you&apos;re on the list.</p>
            ) : (
              <form onSubmit={onSubscribe} className="flex w-full max-w-sm gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-sm border border-ivory/25 bg-transparent px-4 py-2.5 text-sm text-ivory outline-none placeholder:text-ivory/40 focus:border-gold"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold text-burgundy transition hover:bg-gold-soft"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 border-t border-ivory/10 pt-6 text-[11px] text-ivory/45">
          <ShieldCheck size={13} className="text-gold/70" />
          Secure checkout · Visa · Mastercard · PayPal · Klarna
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 text-xs text-ivory/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Fèyíshọpé Luxe. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span>United Kingdom</span>
            <span>GBP £</span>
            <button
              onClick={() => showComingSoon("Cookie Preferences", "You can review and adjust cookie preferences here once analytics and marketing integrations are connected.")}
              className="hover:text-ivory"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
