"use client";

import { motion } from "framer-motion";
import { Camera, Check, ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { InfluencerCard, type InfluencerItem } from "@/components/shared/InfluencerCard";

const influencers: InfluencerItem[] = [
  { name: "Ariana Vale", category: "Fashion", niche: "Luxury styling", rate: "$1.8K/hr", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80", rating: 4.9, verified: true },
  { name: "Kian Brooks", category: "Fitness", niche: "Performance coaching", rate: "$2.4K/hr", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", rating: 4.8, verified: true },
  { name: "Leona Hart", category: "Beauty", niche: "Brand storytelling", rate: "$1.5K/hr", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", rating: 4.9, verified: true },
  { name: "Samir Elian", category: "Tech", niche: "Product launches", rate: "$3.1K/hr", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80", rating: 5, verified: true },
  { name: "Mila Monroe", category: "Comedy", niche: "Short-form storytelling", rate: "$1.2K/hr", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", rating: 4.7, verified: true },
  { name: "Jules Park", category: "Travel", niche: "Luxury itineraries", rate: "$2.9K/hr", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80", rating: 4.8, verified: true },
  { name: "Nia Cross", category: "Beauty", niche: "Luxury product retail", rate: "$2.2K/hr", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80", rating: 4.9, verified: true },
  { name: "Theo Grant", category: "Tech", niche: "Creator reviews", rate: "$3.7K/hr", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", rating: 4.9, verified: true },
  { name: "Sage Rivers", category: "Fashion", niche: "Editorial campaigns", rate: "$2.6K/hr", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", rating: 4.8, verified: true },
];

const categories = ["Fashion", "Fitness", "Beauty", "Travel", "Tech", "Comedy"];
const gallery = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

function SidebarTitle({ children }: { children: string }) {
  return <h2 className="flex items-center gap-3 font-[var(--font-display)] text-xl text-white"><span className="h-5 w-1 bg-[var(--gold)]" />{children}</h2>;
}

export default function CategoriesPage() {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState(2400);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState("Default Sorting");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);

  const visible = useMemo(() => {
    const filtered = influencers.filter((item) => {
      const matchesQuery = `${item.name} ${item.category} ${item.niche}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selected.length === 0 || selected.includes(item.category);
      const rate = Number(item.rate.replace(/[^0-9.]/g, "")) * 1000;
      return matchesQuery && matchesCategory && rate <= price;
    });
    return [...filtered].sort((a, b) => sort === "Price: Low to High" ? Number(a.rate.replace(/[^0-9.]/g, "")) - Number(b.rate.replace(/[^0-9.]/g, "")) : sort === "Price: High to Low" ? Number(b.rate.replace(/[^0-9.]/g, "")) - Number(a.rate.replace(/[^0-9.]/g, "")) : a.name.localeCompare(b.name));
  }, [price, query, selected, sort]);

  const toggleCategory = (category: string) => setSelected((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <main>
        <section className="relative flex h-[380px] items-center justify-center overflow-hidden border-b border-[rgba(212,175,55,0.2)]">
          <motion.img initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2200&q=85" alt="Crowd at a creator event" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.4),rgba(10,9,6,0.85))]" />
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }} className="relative z-10 px-6 text-center">
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[var(--gold-light)]">Influencers Archive</div>
            <h1 className="mt-4 text-6xl leading-none text-white md:text-7xl">Browse Influencers</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap border border-[rgba(212,175,55,0.2)] bg-[#120f0a] px-6 py-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] shadow-xl shadow-black/30"><a href="/" className="hover:text-white">Home</a><span className="text-[var(--gold)]">♦</span><span className="text-[var(--gold-light)]">Influencers</span></motion.div>
        </section>

        <section className="section-shell pb-20 pt-20 md:pb-28">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(220px,30%)_1fr]">
            <aside className="space-y-9">
              <div><SidebarTitle>Search Creators</SidebarTitle><div className="mt-5 flex border border-[rgba(212,175,55,0.2)] bg-[#151209] transition focus-within:border-[var(--gold)] focus-within:ring-2 focus-within:ring-[rgba(212,175,55,0.4)]"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search talent..." className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[var(--text-muted)]" /><button aria-label="Search" className="flex w-12 items-center justify-center bg-[var(--gold)] text-[#120f09]"><Search className="h-4 w-4" /></button></div></div>
              <div><SidebarTitle>Popular Influencers</SidebarTitle><div className="mt-4 divide-y divide-[rgba(212,175,55,0.12)]">{influencers.slice(0, 3).map((item) => <div key={item.name} className="group flex items-center gap-3 py-3 transition hover:bg-[rgba(212,175,55,0.05)]"><img src={item.avatar} alt={item.name} className="h-14 w-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110" /><div><div className="font-medium text-white">{item.name}</div><div className="mt-1 text-xs text-[var(--gold-light)]">{item.rate}</div></div></div>)}</div></div>
              <div><SidebarTitle>Price</SidebarTitle><div className="relative mt-8"><div className="absolute -top-7 rounded bg-[var(--gold)] px-2 py-1 text-[0.65rem] font-bold text-[#120f09]" style={{ left: `calc(${((price - 500) / 3500) * 100}% - 18px)` }}>${price.toLocaleString()}</div><input type="range" min="500" max="4000" step="100" value={price} onChange={(event) => setPrice(Number(event.target.value))} className="price-slider w-full" /></div><div className="mt-3 flex justify-between text-[0.65rem] text-[var(--text-muted)]"><span>$500</span><span>$4,000+</span></div><div className="mt-2 flex justify-between px-1 text-[var(--gold-deep)]"><span>·</span><span>·</span><span>·</span><span>·</span><span>·</span></div></div>
              <div><SidebarTitle>Category</SidebarTitle><div className="mt-4 space-y-3">{categories.map((category) => <label key={category} className="group flex cursor-pointer items-center gap-3 text-sm text-[var(--text-body)] hover:text-white"><button type="button" aria-label={`Filter ${category}`} onClick={() => toggleCategory(category)} className={`flex h-4 w-4 items-center justify-center border ${selected.includes(category) ? "border-[var(--gold)] bg-[var(--gold)] text-[#120f09]" : "border-[rgba(212,175,55,0.45)]"}`}>{selected.includes(category) && <Check className="h-3 w-3" />}</button>{category}</label>)}</div></div>
              <div><SidebarTitle>Instagram Feeds</SidebarTitle><div className="mt-4 grid grid-cols-3 gap-1 overflow-hidden">{influencers.map((item) => <a href="/influencers" key={item.name} className="group relative aspect-square overflow-hidden"><img src={item.image} alt="Creator feed" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" /><span className="absolute inset-0 flex items-center justify-center bg-[rgba(212,175,55,0.45)] opacity-0 transition group-hover:opacity-100"><Camera className="h-5 w-5 text-[#120f09]" /></span></a>)}</div></div>
              <div><SidebarTitle>Popular Tags</SidebarTitle><div className="mt-4 flex flex-wrap gap-2">{["#Luxury", "#Fashion", "#Beauty", "#Wellness", "#CreatorLife", "#Travel"].map((tag) => <button key={tag} className="bg-[#1A1610] px-3 py-2 text-xs text-[var(--text-body)] transition hover:bg-[var(--gold)] hover:text-[#120f09]">{tag}</button>)}</div></div>
            </aside>
            <div><div className="mb-7 flex flex-col gap-4 border-b border-[rgba(212,175,55,0.16)] pb-5 sm:flex-row sm:items-center sm:justify-between"><div className="text-sm text-[var(--text-muted)]">Showing 1–{visible.length || 0} of 60 results</div><div className="relative"><button onClick={() => setSortOpen(!sortOpen)} className="flex min-w-[190px] items-center justify-between gap-5 border border-[rgba(212,175,55,0.35)] px-4 py-3 text-xs text-[var(--text-body)]">{sort}<ChevronDown className="h-4 w-4 text-[var(--gold-light)]" /></button>{sortOpen && <div className="absolute right-0 top-full z-30 mt-1 w-full border border-[rgba(212,175,55,0.25)] bg-[#151209] p-1 shadow-2xl">{["Default Sorting", "Price: Low to High", "Price: High to Low"].map((option) => <button key={option} onClick={() => { setSort(option); setSortOpen(false); }} className="block w-full px-3 py-2 text-left text-xs text-[var(--text-body)] hover:bg-[rgba(212,175,55,0.12)] hover:text-white">{option}</button>)}</div>}</div></div>
              {visible.length ? <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ staggerChildren: 0.06 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visible.map((item) => <motion.div key={item.name} variants={fadeUp}><InfluencerCard item={item} /></motion.div>)}</motion.div> : <div className="border border-[rgba(212,175,55,0.2)] bg-[#120f0b] p-12 text-center text-[var(--text-body)]">No creators match these filters.</div>}
              <div className="mt-12 flex items-center justify-center gap-2"><button onClick={() => setPage(Math.max(1, page - 1))} className="pagination-btn">«</button>{[1, 2, 3].map((number) => <button key={number} onClick={() => setPage(number)} className={`pagination-btn ${page === number ? "active" : ""}`}>{number}</button>)}<span className="px-2 text-[var(--text-muted)]">…</span><button onClick={() => setPage(10)} className={`pagination-btn ${page === 10 ? "active" : ""}`}>10</button><button onClick={() => setPage(Math.min(10, page + 1))} className="pagination-btn">»</button></div></div>
          </div>
        </section>
        <section className="overflow-hidden border-y border-[rgba(212,175,55,0.15)]"><div className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-6">{gallery.map((image) => <div key={image} className="group relative min-w-[72vw] snap-start overflow-hidden md:min-w-0"><img src={image} alt="Influencer campaign" className="h-[260px] w-full object-cover grayscale-[0.15] transition duration-500 group-hover:scale-110 group-hover:grayscale-0" /><div className="absolute inset-0 bg-[rgba(212,175,55,0.08)] mix-blend-color" /></div>)}</div></section>
        <section className="section-shell py-12"><form onSubmit={(event) => event.preventDefault()} className="flex flex-col gap-3 border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-4 md:flex-row md:items-center md:p-5"><h2 className="mr-auto whitespace-nowrap font-[var(--font-display)] text-2xl text-white">Subscribe</h2><input aria-label="Name" placeholder="Your name" className="subscribe-input" /><input aria-label="Email" type="email" placeholder="Email address" className="subscribe-input" /><button className="gold-btn relative overflow-hidden !px-6 after:absolute after:inset-y-0 after:-left-1/2 after:w-1/3 after:skew-x-[-20deg] after:bg-white/30 after:transition-all after:duration-500 hover:after:left-[120%]">Subscribe</button></form></section>
      </main>
    </div>
  );
}
