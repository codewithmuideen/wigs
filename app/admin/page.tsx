import Link from "next/link";
import type { Metadata } from "next";
import { Lock, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const stats = [
  { icon: TrendingUp, label: "Revenue This Month", value: "£0.00" },
  { icon: ShoppingCart, label: "Orders", value: "0" },
  { icon: Users, label: "Customers", value: "0" },
  { icon: Package, label: "Products", value: "16" },
];

const bars = [30, 55, 40, 70, 45, 80, 60];

export default function AdminDashboardPreview() {
  return (
    <div className="min-h-screen bg-[#241016] text-ivory">
      <header className="flex items-center justify-between border-b border-ivory/10 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3">
          <LogoMark tone="dark" size={36} />
          <span className="text-sm font-medium tracking-wide">Admin Dashboard</span>
        </div>
        <Link href="/" className="text-xs text-ivory/60 hover:text-ivory">
          Exit to Store
        </Link>
      </header>

      <div className="relative">
        <div className="pointer-events-none select-none px-6 py-10 opacity-40 blur-[2px] sm:px-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-sm border border-ivory/10 bg-ivory/5 p-5">
                <Icon size={18} className="text-gold" />
                <p className="mt-4 font-serif-display text-2xl">{value}</p>
                <p className="mt-1 text-xs text-ivory/50">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-sm border border-ivory/10 bg-ivory/5 p-6">
              <p className="mb-6 text-sm font-medium">Revenue, Last 7 Days</p>
              <div className="flex h-40 items-end gap-3">
                {bars.map((b, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gold/60" style={{ height: `${b}%` }} />
                ))}
              </div>
            </div>
            <div className="rounded-sm border border-ivory/10 bg-ivory/5 p-6">
              <p className="mb-4 text-sm font-medium">Order Status</p>
              <ul className="space-y-3 text-xs text-ivory/60">
                <li className="flex justify-between">
                  <span>Processing</span> <span>0</span>
                </li>
                <li className="flex justify-between">
                  <span>Dispatched</span> <span>0</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivered</span> <span>0</span>
                </li>
                <li className="flex justify-between">
                  <span>Cancelled</span> <span>0</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-sm border border-ivory/10 bg-ivory/5 p-6">
            <p className="mb-4 text-sm font-medium">Recent Orders</p>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-ivory/5 pb-3 text-xs text-ivory/50">
                  <span>MW-2026-0000{i}</span>
                  <span>Customer Name</span>
                  <span>£0.00</span>
                  <span>Pending</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-sm border border-gold/30 bg-[#2f1620]/95 p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Lock size={22} />
            </div>
            <h1 className="mt-5 font-serif-display text-2xl">Admin Dashboard, Coming Soon</h1>
            <p className="mt-3 text-sm leading-relaxed text-ivory/65">
              Product uploads, inventory, order management and analytics are being built
              into this space. Sign in below to be notified the moment it is ready.
            </p>
            <Link
              href="/admin_login"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold text-sm font-medium text-burgundy transition hover:bg-gold-soft"
            >
              Go to Admin Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
