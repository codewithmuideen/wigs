"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";

export default function AdminLoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-burgundy lg:block">
        <Image
          src="/images/stock/admin-portal.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-burgundy via-burgundy/70 to-burgundy/20 p-12">
          <LogoMark tone="dark" size={48} />
          <div>
            <p className="font-serif-display text-3xl leading-tight text-ivory">
              The back office for Fèyíshọpé Luxe.
            </p>
            <p className="mt-4 max-w-sm text-sm text-ivory/70">
              Manage products, orders, inventory and customers from one place, built with
              the same care as the storefront your customers see.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Beauty in Gratitude</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-ivory px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center text-center lg:hidden">
            <LogoMark tone="light" size={44} />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-sand/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">
            <ShieldCheck size={12} /> Restricted Access
          </span>
          <h1 className="mt-4 font-serif-display text-2xl text-burgundy sm:text-3xl">Admin Sign In</h1>
          <p className="mt-2 text-sm text-ink/60">
            Sign in to manage products, orders and store settings.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-sm border border-gold/40 bg-gold/10 p-6 text-center">
              <p className="font-serif-display text-lg text-burgundy">Access Request Received</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                The admin dashboard is currently being built. We will notify this account the
                moment product, order and inventory management are ready to use.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-sm bg-burgundy px-6 text-sm font-medium text-ivory transition hover:bg-burgundy-light"
              >
                Return to Store
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink/70">Admin email</label>
                <div className="flex items-center gap-2 rounded-sm border border-bronze/25 bg-ivory px-3.5 focus-within:border-bronze">
                  <Mail size={16} className="text-bronze" />
                  <input
                    type="email"
                    required
                    placeholder="admin@feyishopeluxe.com"
                    className="w-full bg-transparent py-2.5 text-sm outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink/70">Password</label>
                <div className="flex items-center gap-2 rounded-sm border border-bronze/25 bg-ivory px-3.5 focus-within:border-bronze">
                  <Lock size={16} className="text-bronze" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full bg-transparent py-2.5 text-sm outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-sm bg-burgundy text-sm font-medium tracking-wide text-ivory transition hover:bg-burgundy-light disabled:opacity-60"
              >
                {loading ? "Verifying…" : "Sign In"}
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-xs text-ink/45">
            Not a team member?{" "}
            <Link href="/" className="text-bronze hover:underline">
              Return to the storefront
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
