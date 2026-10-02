"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShieldCheck, SlidersHorizontal, Star } from "lucide-react";
import { useState } from "react";

const tabs = ["All", "Fashion", "Fitness", "Beauty", "Tech", "Travel", "Comedy"];

const highlightCreators = [
  {
    name: "Ariana Vale",
    category: "Fashion & Lifestyle",
    rate: "$1.8K/collab",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
  },
  {
    name: "Kian Brooks",
    category: "Fitness & Wellness",
    rate: "$2.4K/collab",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
  },
  {
    name: "Leona Hart",
    category: "Beauty & Skincare",
    rate: "$1.5K/collab",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    rating: 5,
  },
];

const creators = [
  ...highlightCreators,
  {
    name: "Samir Elian",
    category: "Tech & Gadgets",
    rate: "$3.1K/collab",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
  },
  {
    name: "Nia Cross",
    category: "Beauty & Lifestyle",
    rate: "$2.2K/collab",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
  },
  {
    name: "Mila Monroe",
    category: "Comedy & Entertainment",
    rate: "$1.2K/collab",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
  },
  {
    name: "Jules Park",
    category: "Travel & Discovery",
    rate: "$2.9K/collab",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
  },
  {
    name: "Theo Grant",
    category: "Tech & Gadgets",
    rate: "$3.7K/collab",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function CreatorCard({ creator }: { creator: (typeof creators)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="group overflow-hidden border border-[rgba(212,175,55,0.18)] bg-[#120f0b]"
    >
      <div className="relative">
        <img src={creator.image} alt={creator.name} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
        <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] text-[#120f09]">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-center gap-1 text-[var(--gold)]">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} className={`h-3.5 w-3.5 ${idx < Math.round(creator.rating) ? "fill-current" : "opacity-50"}`} />
          ))}
        </div>
        <div className="text-center">
          <h3 className="font-[var(--font-display)] text-[1.8rem] text-white">{creator.name}</h3>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">{creator.category}</p>
        </div>
        <div className="flex items-center justify-between border-t border-b border-[rgba(212,175,55,0.12)] py-3 text-sm">
          <span className="text-[var(--text-body)]">From</span>
          <span className="font-semibold text-[var(--gold-light)]">{creator.rate}</span>
        </div>
        <button className="gold-btn w-full !py-3 !px-4 !text-[0.68rem] !tracking-[0.16em]">View Profile</button>
      </div>
    </motion.article>
  );
}

export default function InfluencersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredCreators = activeTab === "All" ? creators : creators.filter((creator) => creator.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <main className="section-shell py-16 md:py-24">
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }} className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Influencer network</span>
            <h1 className="mt-5 max-w-xl text-5xl md:text-7xl leading-none text-white">
              Premium creators for <span className="gold-text">high-impact campaigns</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-body)]">
              Discover vetted talent trusted by brands that want elevated storytelling, proven reach, and polished campaign performance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full max-w-xl items-center gap-3 border border-[rgba(212,175,55,0.25)] bg-[#120f0b] px-4 py-3 text-[var(--text-body)]">
                <Search className="h-4 w-4 text-[var(--gold-light)]" />
                <input placeholder="Search by niche, style, or audience" className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none" />
              </div>
              <button className="gold-btn !px-6 !py-3.5">Find talent</button>
            </div>
          </div>

          <div className="relative overflow-hidden border border-[rgba(212,175,55,0.2)] bg-[#130f0a] p-3 shadow-[0_26px_60px_rgba(0,0,0,0.34)]">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" alt="Creator spotlight" className="h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(10,9,6,0.35)_100%)]"></div>
            <div className="absolute bottom-6 left-6 right-6 space-y-4 rounded border border-[rgba(212,175,55,0.2)] bg-[rgba(10,9,6,0.66)] p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Best fit</p>
                  <div className="mt-2 font-[var(--font-display)] text-2xl text-white">Ariana Vale</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] text-[#120f09]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-[var(--text-body)]">
                <span>Luxury fashion creator</span>
                <span className="font-semibold text-[var(--gold-light)]">$1.8K/collab</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <span className="eyebrow">Featured creators</span>
          </div>
          <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-3">
            {highlightCreators.map((creator) => (
              <motion.div key={creator.name} whileHover={{ scale: 1.02 }} className="min-w-[290px] flex-1 border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-3 md:max-w-[360px]">
                <img src={creator.image} alt={creator.name} className="h-72 w-full object-cover" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl text-white">{creator.name}</h3>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">{creator.category}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--gold)]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">{creator.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Explore talent</span>
              <h2 className="mt-4 text-4xl md:text-5xl text-white">Find your next creator</h2>
            </div>
            <div className="flex items-center gap-3 border border-[rgba(212,175,55,0.18)] bg-[#120f0b] px-4 py-3 text-[var(--text-body)]">
              <SlidersHorizontal className="h-4 w-4 text-[var(--gold-light)]" />
              <span className="text-[0.7rem] uppercase tracking-[0.16em]">Filter by category</span>
            </div>
          </div>

          <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap border px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] ${
                  activeTab === tab
                    ? "border-transparent bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] text-[#120f09]"
                    : "border-[rgba(212,175,55,0.2)] bg-[#120f0b] text-[var(--text-body)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredCreators.map((creator) => (
              <CreatorCard key={creator.name} creator={creator} />
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20 rounded border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="eyebrow">Why brands choose us</span>
              <h2 className="mt-4 text-4xl md:text-5xl text-white">Built for visibility, trust, and conversion</h2>
            </div>
            <a href="/brands" className="gold-btn">Explore brand solutions</a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Managed shortlists", text: "Get curated creators matched to your audience and product goals." },
              { title: "Campaign-ready creators", text: "Work with talent who understand premium product storytelling and conversion." },
              { title: "Transparent reporting", text: "Track performance, delivery, and brand fit from campaign kickoff to results." },
            ].map((item) => (
              <div key={item.title} className="border border-[rgba(212,175,55,0.12)] bg-[rgba(9,7,5,0.65)] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)] text-[var(--gold-light)]">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-[var(--text-body)]">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
