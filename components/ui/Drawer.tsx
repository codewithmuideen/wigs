"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Drawer({
  open,
  onClose,
  children,
  side = "right",
  title,
  widthClass = "max-w-md",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  title: string;
  widthClass?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className={`absolute inset-0 bg-burgundy/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`absolute top-0 ${side === "right" ? "right-0" : "left-0"} flex h-full w-full ${widthClass} flex-col bg-ivory shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "translate-x-0"
            : side === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-bronze/15 px-5 py-4">
          <h2 className="font-serif-display text-lg text-burgundy">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-ink/60 transition hover:bg-sand/60 hover:text-ink"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
