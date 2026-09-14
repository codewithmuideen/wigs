"use client";

import { Sparkles } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { LogoMark } from "@/components/layout/Logo";

export default function ComingSoonModal() {
  const { comingSoon, hideComingSoon } = useApp();

  return (
    <Modal open={comingSoon.open} onClose={hideComingSoon} labelledBy="coming-soon-title">
      <div className="flex flex-col items-center text-center">
        <LogoMark tone="light" size={44} />
        <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-bronze">
          <Sparkles size={12} />
          In Progress
        </span>
        <h2 id="coming-soon-title" className="mt-4 font-serif-display text-2xl text-burgundy">
          {comingSoon.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{comingSoon.message}</p>
        <Button variant="primary" className="mt-7 w-full" onClick={hideComingSoon}>
          Continue Browsing
        </Button>
      </div>
    </Modal>
  );
}
