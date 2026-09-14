import { Suspense } from "react";
import type { Metadata } from "next";
import ShopContent from "@/components/shop/ShopContent";

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse premium human hair wigs, HD lace fronts, bundles and extensions.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1440px] px-4 py-24 text-center text-sm text-ink/50">Loading products…</div>}>
      <ShopContent />
    </Suspense>
  );
}
