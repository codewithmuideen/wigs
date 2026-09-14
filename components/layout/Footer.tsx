"use client";

import Link from "next/link";
import Image from "next/image";
import { AtSign, Camera, Globe, Music2, Pin, Play, ShieldCheck } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { useApp } from "@/components/providers/AppProvider";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Admin Sign In", href: "/admin_login" },
    ],
  },
  {
    heading: "Help Center",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Delivery", href: "/delivery" },
      { label: "Returns", href: "/returns" },
      { label: "Track Your Order", href: "/track-order" },
    ],
  },
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
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/returns" },
    ],
  },
];

const socials = [Globe, Camera, Play, Pin, AtSign, Music2];

export default function Footer() {
  const { showComingSoon } = useApp();

  return (
    <footer className="bg-sand/35 text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo tone="light" showTagline />

          <div className="flex shrink-0 gap-3">
            {socials.map((Icon, i) => (
              <button
                key={i}
                onClick={() =>
                  showComingSoon(
                    "Social Coming Soon",
                    "Our social channels are launching alongside the full store. Thank you for your patience."
                  )
                }
                aria-label="Social link"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-burgundy shadow-sm transition hover:text-bronze"
              >
                <Icon size={16} strokeWidth={1.6} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-bronze/15 pt-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 font-serif-display text-lg text-burgundy">{col.heading}</p>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[15px] text-ink/70 transition hover:text-burgundy">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-bronze/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 px-4 py-7 text-sm text-ink/70 sm:flex-row sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Fèyíshọpé Luxe Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex shrink-0 items-center gap-1.5">
              <ShieldCheck size={16} className="text-bronze" />
              Secure Checkout
            </span>
            <span className="relative h-8 w-40 shrink-0 sm:h-10 sm:w-52">
              <Image
                src="/images/wigs/paymentb.jpg"
                alt="Visa, Mastercard, PayPal, Klarna, American Express"
                fill
                sizes="208px"
                className="object-contain"
              />
            </span>
          </div>
          <button
            onClick={() =>
              showComingSoon(
                "Cookie Preferences",
                "You can review and adjust cookie preferences here once analytics and marketing integrations are connected."
              )
            }
            className="underline underline-offset-2 hover:text-burgundy"
          >
            Cookie Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
