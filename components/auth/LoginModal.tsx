"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/providers/AppProvider";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

export default function LoginModal() {
  const { loginOpen, setLoginOpen, showComingSoon } = useApp();
  const [mode, setMode] = useState<"signin" | "create">("signin");

  const close = () => setLoginOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    close();
    showComingSoon(
      "Customer Accounts Launching Soon",
      "We're building a beautiful account experience for order tracking, wishlists and faster checkout. Check back soon to sign in."
    );
  };

  return (
    <Modal open={loginOpen} onClose={close} labelledBy="login-title" maxWidth="max-w-sm">
      <div className="flex flex-col items-center text-center">
        <Logo tone="light" />
        <h2 id="login-title" className="sr-only">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h2>

        <div className="mt-6 flex w-full rounded-full bg-sand/50 p-1 text-sm">
          <button
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-full py-2 transition ${
              mode === "signin" ? "bg-burgundy text-ivory" : "text-ink/60"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("create")}
            className={`flex-1 rounded-full py-2 transition ${
              mode === "create" ? "bg-burgundy text-ivory" : "text-ink/60"
            }`}
          >
            Create Account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 w-full space-y-3 text-left">
          {mode === "create" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-ink/70">Full name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-sm border border-bronze/25 bg-ivory px-3.5 py-2.5 text-sm outline-none transition focus:border-bronze"
              />
            </div>
          )}
          <div>
            <label className="mb-1 block text-xs font-medium text-ink/70">Email address</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-sm border border-bronze/25 bg-ivory px-3.5 py-2.5 text-sm outline-none transition focus:border-bronze"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-ink/70">Password</label>
            <input
              type="password"
              required
              minLength={6}
              placeholder="••••••••"
              className="w-full rounded-sm border border-bronze/25 bg-ivory px-3.5 py-2.5 text-sm outline-none transition focus:border-bronze"
            />
          </div>
          {mode === "signin" && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => showComingSoon("Password Reset Coming Soon", "Account recovery will be available once customer accounts go live.")}
                className="text-xs text-bronze hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}
          <Button type="submit" variant="primary" className="w-full">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <button
          onClick={() => {
            close();
            showComingSoon();
          }}
          className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-ink/60 hover:text-burgundy"
        >
          Continue as Guest
        </button>

        <p className="mt-6 border-t border-bronze/15 pt-4 text-[11px] text-ink/50">
          Part of the Fèyíshọpé Luxe team?{" "}
          <Link href="/admin_login" onClick={close} className="text-bronze hover:underline">
            Admin sign in
          </Link>
        </p>
      </div>
    </Modal>
  );
}
