"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product, VariantOption } from "@/lib/types";

export interface CartLine {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  colour: string;
  length: number;
  price: number;
  qty: number;
}

interface ComingSoonState {
  open: boolean;
  title: string;
  message: string;
}

interface AppState {
  cart: CartLine[];
  addToCart: (product: Product, variant: VariantOption, qty?: number) => void;
  removeFromCart: (key: string) => void;
  updateQty: (key: string, qty: number) => void;
  cartCount: number;
  cartSubtotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;

  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  loginOpen: boolean;
  setLoginOpen: (open: boolean) => void;

  comingSoon: ComingSoonState;
  showComingSoon: (title?: string, message?: string) => void;
  hideComingSoon: () => void;
  showShopifyConnect: () => void;
}

const AppContext = createContext<AppState | null>(null);

const CART_KEY = "fsl_cart_v1";
const WISHLIST_KEY = "fsl_wishlist_v1";

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [comingSoon, setComingSoon] = useState<ComingSoonState>({
    open: false,
    title: "",
    message: "",
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readStorage(CART_KEY, [] as CartLine[]));
    setWishlist(readStorage(WISHLIST_KEY, [] as string[]));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToCart = useCallback((product: Product, variant: VariantOption, qty = 1) => {
    const key = `${product.id}-${variant.length}-${variant.colour}`;
    setCart((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l));
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: product.images[0],
          colour: variant.colour,
          length: variant.length,
          price: variant.price,
          qty,
        },
      ];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((key: string) => {
    setCart((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const updateQty = useCallback((key: string, qty: number) => {
    setCart((prev) =>
      prev.map((l) => (l.key === key ? { ...l, qty: Math.max(1, qty) } : l))
    );
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const isWishlisted = useCallback((productId: string) => wishlist.includes(productId), [wishlist]);

  const showComingSoon = useCallback((title = "Coming Very Soon", message = "We're putting the finishing touches on this. Check back shortly.") => {
    setComingSoon({ open: true, title, message });
  }, []);

  const hideComingSoon = useCallback(() => {
    setComingSoon((prev) => ({ ...prev, open: false }));
  }, []);

  const showShopifyConnect = useCallback(() => {
    setComingSoon({
      open: true,
      title: "Checkout Is Almost Here",
      message:
        "We're connecting secure checkout with Shopify. Your bag is saved, please check back shortly to complete your order.",
    });
  }, []);

  const cartCount = useMemo(() => cart.reduce((sum, l) => sum + l.qty, 0), [cart]);
  const cartSubtotal = useMemo(() => cart.reduce((sum, l) => sum + l.qty * l.price, 0), [cart]);

  const value: AppState = {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    cartCount,
    cartSubtotal,
    cartOpen,
    setCartOpen,
    wishlist,
    toggleWishlist,
    isWishlisted,
    searchOpen,
    setSearchOpen,
    mobileNavOpen,
    setMobileNavOpen,
    loginOpen,
    setLoginOpen,
    comingSoon,
    showComingSoon,
    hideComingSoon,
    showShopifyConnect,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
