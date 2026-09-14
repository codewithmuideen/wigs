"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import Logo from "@/components/layout/Logo";
import MegaMenu from "@/components/layout/MegaMenu";
import { useApp } from "@/components/providers/AppProvider";
import { collectionsMenu, hairMenu, simpleLinks, wigsMenu } from "@/lib/nav";

const menus = [wigsMenu, hairMenu, collectionsMenu];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    cartCount,
    wishlist,
    setCartOpen,
    setSearchOpen,
    setMobileNavOpen,
    setLoginOpen,
  } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(140,105,62,0.15)]" : ""
      }`}
      onMouseLeave={closeWithDelay}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
            className="p-2 text-burgundy"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 lg:flex-none lg:justify-self-start">
          <div className="flex justify-center lg:justify-start">
            <Logo tone="light" />
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-burgundy">
            Home
          </Link>
          <Link href="/shop" className="text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-burgundy">
            Shop
          </Link>
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => openWithDelay(menu.label)}
            >
              <Link
                href={menu.href}
                className="text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-burgundy"
              >
                {menu.label}
              </Link>
              {openMenu === menu.label && (
                <MegaMenu menu={menu} onNavigate={() => setOpenMenu(null)} />
              )}
            </div>
          ))}
          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition ${
                link.label === "Sale" ? "text-bronze hover:text-burgundy" : "text-ink/80 hover:text-burgundy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="rounded-full p-2 text-ink/75 transition hover:bg-sand/50 hover:text-burgundy"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            aria-label="Account"
            className="hidden rounded-full p-2 text-ink/75 transition hover:bg-sand/50 hover:text-burgundy sm:inline-flex"
          >
            <User size={19} strokeWidth={1.5} />
          </button>
          <Link
            href="/account/wishlist"
            aria-label="Wishlist"
            className="relative hidden rounded-full p-2 text-ink/75 transition hover:bg-sand/50 hover:text-burgundy sm:inline-flex"
          >
            <Heart size={19} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bronze text-[9px] text-ivory">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Shopping bag"
            className="relative rounded-full p-2 text-ink/75 transition hover:bg-sand/50 hover:text-burgundy"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-burgundy text-[9px] text-ivory">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
