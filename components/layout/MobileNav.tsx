"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart, User } from "lucide-react";
import Drawer from "@/components/ui/Drawer";
import { useApp } from "@/components/providers/AppProvider";
import { collectionsMenu, hairMenu, simpleLinks, wigsMenu } from "@/lib/nav";

const menus = [wigsMenu, hairMenu, collectionsMenu];

export default function MobileNav() {
  const { mobileNavOpen, setMobileNavOpen, setLoginOpen } = useApp();
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => setMobileNavOpen(false);

  return (
    <Drawer open={mobileNavOpen} onClose={close} title="Menu" side="left" widthClass="max-w-sm">
      <nav className="flex flex-col px-2 py-2">
        <Link href="/" onClick={close} className="border-b border-bronze/10 px-4 py-4 text-sm font-medium text-ink">
          Home
        </Link>
        <Link href="/shop" onClick={close} className="border-b border-bronze/10 px-4 py-4 text-sm font-medium text-ink">
          Shop All
        </Link>
        {menus.map((menu) => (
          <div key={menu.label} className="border-b border-bronze/10">
            <button
              onClick={() => setExpanded(expanded === menu.label ? null : menu.label)}
              className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-ink"
              aria-expanded={expanded === menu.label}
            >
              {menu.label}
              <ChevronDown
                size={16}
                className={`transition-transform ${expanded === menu.label ? "rotate-180" : ""}`}
              />
            </button>
            {expanded === menu.label && (
              <div className="bg-sand/30 px-4 pb-4">
                {menu.columns.map((col) => (
                  <div key={col.heading} className="pt-3">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-bronze">
                      {col.heading}
                    </p>
                    <ul className="space-y-2.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link href={l.href} onClick={close} className="text-sm text-ink/75">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {simpleLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={close}
            className="border-b border-bronze/10 px-4 py-4 text-sm font-medium text-ink"
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={() => {
            close();
            setLoginOpen(true);
          }}
          className="mt-4 flex items-center gap-3 px-4 py-3 text-sm font-medium text-ink"
        >
          <User size={18} strokeWidth={1.5} /> Account
        </button>
        <Link
          href="/account/wishlist"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-ink"
        >
          <Heart size={18} strokeWidth={1.5} /> Wishlist
        </Link>
      </nav>
    </Drawer>
  );
}
