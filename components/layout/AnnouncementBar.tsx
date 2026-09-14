const messages = [
  "Free UK Delivery on Orders Over £150",
  "New Collection Now Live",
  "Interest Free Payments Available at Checkout",
];

export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-burgundy py-2.5 text-ivory">
      <div className="no-scrollbar flex animate-[marquee_28s_linear_infinite] gap-16 whitespace-nowrap px-4 text-[11px] font-medium uppercase tracking-[0.14em]">
        {[...messages, ...messages].map((m, i) => (
          <span key={i} className="flex items-center gap-16">
            <span>{m}</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
