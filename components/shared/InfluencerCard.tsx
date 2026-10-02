"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export type InfluencerItem = {
  name: string;
  category: string;
  niche: string;
  rate: string;
  image: string;
  avatar: string;
  rating: number;
  verified?: boolean;
};

export function InfluencerCard({ item, compact = false }: { item: InfluencerItem; compact?: boolean }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="group overflow-hidden border border-[var(--border)] bg-[rgba(20,18,16,0.9)] shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.25)]"
    >
      <div className="relative overflow-hidden">
        <img src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover transition duration-[400ms] ease-out group-hover:scale-[1.12]" />
        <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] text-[10px] text-[#120f0b] shadow-lg shadow-[rgba(212,175,55,0.22)] transition-transform duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[rgba(212,175,55,0.18)]">
          <Check className="h-3.5 w-3.5" />
        </div>
        <div className="absolute -bottom-5 left-4 h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--bg)] bg-[#1c160f] shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--gold)]">
          <img src={item.avatar} alt={item.name} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="space-y-4 px-5 pb-5 pt-9">
        <div className="flex items-center justify-center gap-1 text-[var(--gold)]">
          {Array.from({ length: 5 }).map((_, idx) => (
            <motion.span key={idx} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05, duration: 0.22 }}>
              <Star className={`h-3.5 w-3.5 ${idx < Math.round(item.rating) ? "fill-current" : "opacity-60"}`} />
            </motion.span>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-[var(--font-display)] text-[1.5rem] leading-none text-white">{item.name}</h3>
          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">{item.category}</p>
        </div>

        <div className="flex items-center justify-between border-t border-b border-[rgba(212,175,55,0.12)] py-3 text-sm">
          <span className="text-[var(--text-body)]">{item.niche}</span>
          <span className="font-semibold text-[var(--gold-light)]">{item.rate}</span>
        </div>

        {!compact && (
          <button className="gold-btn w-full !py-3.5 !px-4 !text-[0.68rem] !tracking-[0.16em]">
            View Profile
          </button>
        )}
      </div>
    </motion.article>
  );
}
