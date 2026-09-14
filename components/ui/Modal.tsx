"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({
  open,
  onClose,
  children,
  labelledBy,
  maxWidth = "max-w-md",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  labelledBy: string;
  maxWidth?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        aria-label="Close dialog"
        className="absolute inset-0 bg-burgundy/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative w-full ${maxWidth} animate-reveal rounded-sm bg-ivory p-7 shadow-2xl sm:p-9 outline-none`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-ink/60 transition hover:bg-sand/60 hover:text-ink"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
