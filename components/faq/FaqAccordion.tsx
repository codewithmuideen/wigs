"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    category: "Orders",
    question: "How long does it take to process my order?",
    answer:
      "Orders are typically processed within 1 to 2 business days before dispatch. You will receive an email as soon as your order ships.",
  },
  {
    category: "Orders",
    question: "Can I change or cancel my order after placing it?",
    answer:
      "You can request a change or cancellation while your order is still pending. Once it has entered processing, please contact us as soon as possible and we will do our best to help.",
  },
  {
    category: "Delivery",
    question: "Do you deliver across the whole UK?",
    answer:
      "Yes, we deliver to England, Scotland, Wales and Northern Ireland with tracked delivery options available at checkout.",
  },
  {
    category: "Delivery",
    question: "How much does delivery cost?",
    answer:
      "Delivery is free on orders over £150. Standard delivery rates apply below that threshold, calculated at checkout based on your location.",
  },
  {
    category: "Returns",
    question: "What is your returns policy?",
    answer:
      "Unworn items in original packaging can be returned within 14 days of delivery. Visit our Returns Policy page for the full process.",
  },
  {
    category: "Returns",
    question: "How long do refunds take?",
    answer:
      "Once your return is received and inspected, refunds are processed within 5 to 7 business days back to your original payment method.",
  },
  {
    category: "Wigs & Hair",
    question: "What is the difference between HD lace and regular lace?",
    answer:
      "HD lace is thinner and more transparent, designed to sit almost invisibly against the skin. Regular lace is slightly more durable and better suited to frequent styling.",
  },
  {
    category: "Wigs & Hair",
    question: "How do I choose the right density?",
    answer:
      "150% density gives a natural, everyday fullness. 180% and 200% offer more volume for a fuller, more dramatic look. Our product pages list the density for each style.",
  },
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit and credit cards along with other secure payment options available at checkout.",
  },
  {
    category: "Accounts",
    question: "Do I need an account to place an order?",
    answer:
      "No, guest checkout is available. Creating an account simply makes it easier to track orders and save your details for next time.",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FaqAccordion() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        query.trim() === "" ||
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="mx-auto max-w-lg">
        <div className="flex items-center gap-2 rounded-full border border-bronze/25 bg-ivory px-4 py-2.5">
          <Search size={16} className="text-bronze" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search frequently asked questions"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-xs transition ${
              category === c ? "border-burgundy bg-burgundy text-ivory" : "border-bronze/25 text-ink/70"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl divide-y divide-bronze/15 border-y border-bronze/15">
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-sm text-ink/55">No matching questions found.</p>
        ) : (
          filtered.map((f, i) => (
            <div key={f.question}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium text-ink">{f.question}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-bronze transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && <p className="pb-5 text-sm leading-relaxed text-ink/65">{f.answer}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
