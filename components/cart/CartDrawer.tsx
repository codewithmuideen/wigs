"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";
import Drawer from "@/components/ui/Drawer";
import Button, { buttonClasses } from "@/components/ui/Button";
import HairArt from "@/components/ui/HairArt";
import { formatGBP } from "@/lib/format";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartSubtotal, showShopifyConnect } = useApp();

  const close = () => setCartOpen(false);
  const freeDeliveryThreshold = 150;
  const remaining = Math.max(0, freeDeliveryThreshold - cartSubtotal);

  return (
    <Drawer open={cartOpen} onClose={close} title={`Your Bag (${cart.length})`}>
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
          <ShoppingBag className="text-bronze/50" size={40} strokeWidth={1.2} />
          <p className="font-serif-display text-lg text-burgundy">Your bag is empty</p>
          <p className="max-w-[26ch] text-sm text-ink/60">
            Discover the wigs and hair pieces our customers cannot stop wearing.
          </p>
          <Link href="/shop" onClick={close} className={buttonClasses("primary", "md", "mt-2")}>
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          {remaining > 0 ? (
            <div className="bg-sand/50 px-5 py-3 text-center text-xs text-burgundy">
              Add <strong>{formatGBP(remaining)}</strong> more for free UK delivery
            </div>
          ) : (
            <div className="bg-gold/20 px-5 py-3 text-center text-xs font-medium text-burgundy">
              You have unlocked free UK delivery
            </div>
          )}

          <ul className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
            {cart.map((line) => (
              <li key={line.key} className="flex gap-4">
                <HairArt seed={line.key} className="h-24 w-20 shrink-0 rounded-sm" />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/products/${line.slug}`}
                        onClick={close}
                        className="text-sm font-medium text-burgundy hover:underline"
                      >
                        {line.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-ink/55">
                        {line.length}&quot; · {line.colour}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(line.key)}
                      aria-label={`Remove ${line.name} from bag`}
                      className="p-1 text-ink/40 transition hover:text-burgundy"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center rounded-full border border-bronze/25">
                      <button
                        onClick={() => updateQty(line.key, line.qty - 1)}
                        className="p-1.5 text-ink/60 hover:text-burgundy"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-6 text-center text-xs">{line.qty}</span>
                      <button
                        onClick={() => updateQty(line.key, line.qty + 1)}
                        className="p-1.5 text-ink/60 hover:text-burgundy"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="text-sm font-medium text-burgundy">
                      {formatGBP(line.price * line.qty)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-bronze/15 px-5 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-serif-display text-lg text-burgundy">{formatGBP(cartSubtotal)}</span>
            </div>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                close();
                showShopifyConnect();
              }}
            >
              Proceed to Checkout
            </Button>
            <button
              onClick={close}
              className="mt-3 w-full text-center text-xs font-medium uppercase tracking-[0.14em] text-ink/60 hover:text-burgundy"
            >
              Continue Shopping
            </button>
            <p className="mt-4 text-center text-[11px] text-ink/45">
              Taxes and delivery calculated at checkout
            </p>
          </div>
        </div>
      )}
    </Drawer>
  );
}
