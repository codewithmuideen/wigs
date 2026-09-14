"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";

const tiles = [
  "/images/wigs/w-group-four-colours.jpg",
  "/images/wigs/w-curly-pixie-profile.jpg",
  "/images/wigs/w-bob-blonde-bright.jpg",
  "/images/wigs/w-deepwave-caramel-portrait.jpg",
  "/images/wigs/w-curly-bob-black.jpg",
  "/images/wigs/w-portrait-pink-blazer.jpg",
];

export default function InstagramGrid() {
  const { showComingSoon } = useApp();

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-10 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Community</span>
        <h2 className="mt-2 font-serif-display text-3xl text-burgundy sm:text-4xl">@feyishopeluxe</h2>
        <p className="mt-2 text-sm text-ink/60">Tag us to be featured on our page</p>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
        {tiles.map((src) => (
          <button
            key={src}
            onClick={() =>
              showComingSoon(
                "Instagram Feed Coming Soon",
                "We're connecting our live Instagram feed here. In the meantime, search Fèyíshọpé Luxe on your favourite platform."
              )
            }
            className="group relative block aspect-square overflow-hidden rounded-sm"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 16vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-burgundy/0 transition group-hover:bg-burgundy/40">
              <Camera
                size={20}
                className="text-ivory opacity-0 transition group-hover:opacity-100"
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
