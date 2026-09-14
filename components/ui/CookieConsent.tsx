"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "fsl_cookie_prefs_v1";

interface Prefs {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (next: Prefs) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] animate-reveal border-t border-bronze/15 bg-ivory/98 p-4 shadow-[0_-4px_20px_rgba(56,11,21,0.08)] backdrop-blur sm:p-5">
      <div className="mx-auto max-w-5xl">
        {!customizing ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink/75">
              We use cookies to keep the store running smoothly and, with your permission, to
              understand how it is used. Read our{" "}
              <Link href="/cookies" className="text-bronze underline underline-offset-2">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button size="sm" variant="ghost" onClick={() => setCustomizing(true)}>
                Preferences
              </Button>
              <Button
                size="sm"
                variant="outline-light"
                className="border-bronze/40 text-ink hover:bg-sand/40"
                onClick={() => save({ necessary: true, analytics: false, marketing: false, preferences: false })}
              >
                Reject Optional
              </Button>
              <Button size="sm" variant="primary" onClick={() => save({ necessary: true, analytics: true, marketing: true, preferences: true })}>
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-4 font-serif-display text-lg text-burgundy">Cookie Preferences</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { key: "necessary" as const, label: "Necessary", desc: "Required for the store to function. Always on.", locked: true },
                { key: "analytics" as const, label: "Analytics", desc: "Helps us understand how the store is used." },
                { key: "marketing" as const, label: "Marketing", desc: "Used to show relevant offers and content." },
                { key: "preferences" as const, label: "Preferences", desc: "Remembers choices like currency and region." },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-start gap-3 rounded-sm border border-bronze/15 p-3"
                >
                  <input
                    type="checkbox"
                    checked={prefs[item.key]}
                    disabled={item.locked}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, [item.key]: e.target.checked }))
                    }
                    className="mt-0.5 accent-burgundy"
                  />
                  <span>
                    <span className="block text-sm font-medium text-ink">{item.label}</span>
                    <span className="block text-xs text-ink/55">{item.desc}</span>
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button size="sm" variant="ghost" onClick={() => setCustomizing(false)}>
                Back
              </Button>
              <Button size="sm" variant="primary" onClick={() => save(prefs)}>
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
