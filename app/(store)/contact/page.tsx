"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { useApp } from "@/components/providers/AppProvider";

const info = [
  { icon: Mail, label: "Email", value: "hello@feyishopeluxe.com" },
  { icon: Phone, label: "Phone", value: "+44 20 0000 0000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+44 7000 000000" },
  { icon: MapPin, label: "Based In", value: "London, United Kingdom" },
];

export default function ContactPage() {
  const { showComingSoon } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    showComingSoon(
      "Messaging Is Almost Ready",
      "Our contact form is being connected. Please email us directly for now and we will respond as quickly as we can."
    );
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="mt-4 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-serif-display text-3xl text-burgundy sm:text-4xl">Get in Touch</h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
            Questions about fit, texture or an existing order? Our team is happy to help.
          </p>
          <div className="mt-8 space-y-5">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sand/50 text-bronze">
                  <Icon size={17} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/45">{label}</p>
                  <p className="text-sm text-ink/80">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-sm border border-bronze/15 bg-sand/20 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-bronze">Business Hours</p>
            <p className="mt-2 text-sm text-ink/65">Monday to Friday, 9am to 6pm GMT</p>
            <p className="text-sm text-ink/65">Saturday, 10am to 4pm GMT</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink/70">Full name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-sm border border-bronze/25 bg-ivory px-4 py-3 text-sm outline-none focus:border-bronze"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink/70">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-bronze/25 bg-ivory px-4 py-3 text-sm outline-none focus:border-bronze"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink/70">Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-sm border border-bronze/25 bg-ivory px-4 py-3 text-sm outline-none focus:border-bronze"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
