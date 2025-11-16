import React from 'react';

export default function Marquee({ items = [] }) {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/5">
      <div className="flex gap-8 animate-[marquee_20s_linear_infinite] py-3 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-white/70 text-sm">{item}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
