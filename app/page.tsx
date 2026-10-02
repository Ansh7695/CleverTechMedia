"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, CirclePlay, ShieldCheck, Sparkles, Star, X } from "lucide-react";
import { useState } from "react";
import { ScrollHero } from "@/components/ScrollHero";
import { InfluencerCard, type InfluencerItem } from "@/components/shared/InfluencerCard";
import { SectionEyebrow, SectionHeading } from "@/components/shared/SectionHeading";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Influencers", href: "/influencers" },
  { label: "Brands", href: "/brands" },
  { label: "How It Works", href: "/brands" },
  { label: "Pricing", href: "/pricing" },
];

const trendingInfluencers: InfluencerItem[] = [
  {
    name: "Ariana Vale",
    category: "Fashion & Lifestyle",
    niche: "Luxury styling",
    rate: "$1.8K/collab",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
    verified: true,
  },
  {
    name: "Kian Brooks",
    category: "Fitness & Wellness",
    niche: "Performance coaching",
    rate: "$2.4K/collab",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    verified: true,
  },
  {
    name: "Leona Hart",
    category: "Beauty & Skincare",
    niche: "Brand storytelling",
    rate: "$1.5K/collab",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
    verified: true,
  },
  {
    name: "Samir Elian",
    category: "Tech & Gadgets",
    niche: "Product launches",
    rate: "$3.1K/collab",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
];

const categoryTiles = [
  { name: "Fashion", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" },
  { name: "Fitness", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80" },
  { name: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80" },
  { name: "Travel", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
];

const avatarRow = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
];

const tabs = ["Fashion", "Fitness", "Tech", "Beauty", "Travel", "Comedy"];

const directoryInfluencers: InfluencerItem[] = [
  ...trendingInfluencers,
  {
    name: "Mila Monroe",
    category: "Comedy & Entertainment",
    niche: "Short-form storytelling",
    rate: "$1.2K/collab",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    rating: 4.7,
  },
  {
    name: "Jules Park",
    category: "Travel & Discovery",
    niche: "Luxury itineraries",
    rate: "$2.9K/collab",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
  },
  {
    name: "Nia Cross",
    category: "Beauty & Lifestyle",
    niche: "Luxury product retail",
    rate: "$2.2K/collab",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
  },
  {
    name: "Theo Grant",
    category: "Tech & Gadgets",
    niche: "Creator reviews",
    rate: "$3.7K/collab",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
  },
];

const articles = [
  {
    category: "Brand Strategy",
    title: "How luxury brands balance reach and trust in creator campaigns",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Campaign Insight",
    title: "The creator briefing checklist for premium product launches",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Talent Network",
    title: "What makes an influencer worth booking for a high-end campaign",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
];

const pricingTiers = [
  {
    tier: "Starter Collab",
    price: "$1,200",
    description: "For launches that need a focused creator push.",
    features: ["1 creator campaign", "Creative direction deck", "Full content usage rights", "Reporting snapshot"],
  },
  {
    tier: "Growth Campaign",
    price: "$4,800",
    description: "For brands scaling reach across premium audiences.",
    features: ["3–5 creator network", "Campaign strategy call", "Performance optimization", "Priority support"],
    featured: true,
  },
  {
    tier: "Enterprise Partnership",
    price: "$12,000",
    description: "For long-term momentum and market expansion.",
    features: ["Dedicated talent roster", "Executive partnership plan", "Multi-market activation", "Custom analytics"],
  },
];

const stats = [
  { value: "84k", label: "Influencers onboarded" },
  { value: "10M+", label: "Combined reach" },
  { value: "2K+", label: "Brands served" },
  { value: "100M+", label: "Campaign impressions" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Fashion");

  const visibleInfluencers = directoryInfluencers.filter((item) => item.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <main>
        <ScrollHero>
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(225,220,201,0.35)] bg-[rgba(65,45,21,0.7)] px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--text-primary)]">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 500+ brands
            </div>
            <h1 className="text-5xl leading-[0.92] text-[var(--text-primary)] md:text-7xl">
              Where great brands meet great <span className="gold-text">Influencers</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--text-primary)]">
              Discover vetted creators, launch premium campaigns, and build a high-trust partnership network designed for ambitious brands.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/influencers" className="gold-btn">Explore Influencers</a>
              <button onClick={() => setProjectOpen(true)} className="gold-outline">Post a Project</button>
            </div>
          </div>
        </ScrollHero>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Featured this week</SectionEyebrow>
              <div className="mt-4">
                <SectionHeading title="Trending Influencers" highlight="Influencers" />
              </div>
            </div>
            <a href="/influencers" className="hidden items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)] md:inline-flex">
              View more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trendingInfluencers.map((item) => (
              <InfluencerCard key={item.name} item={item} />
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="pb-24 md:pb-32">
          <div className="section-shell">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <SectionEyebrow>Trending categories</SectionEyebrow>
                <div className="mt-4">
                  <SectionHeading title="Discover Talent" highlight="Talent" />
                </div>
              </div>
            </div>
          </div>
          <div className="section-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryTiles.map((tile) => (
              <div key={tile.name} className="duotone-card group relative min-h-[300px] overflow-hidden border border-[rgba(212,175,55,0.18)]">
                <img src={tile.image} alt={tile.name} className="absolute inset-0 h-full w-full object-cover grayscale-[0.2] contrast-110" />
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.6)] bg-[rgba(16,12,9,0.38)] text-[var(--gold-light)] backdrop-blur-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-[var(--font-display)] text-white">{tile.name}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="grid overflow-hidden border border-[rgba(212,175,55,0.2)] bg-[#120f0b] md:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <SectionEyebrow>Live now</SectionEyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl leading-tight text-white">
                See our creators <span className="gold-text">in action</span>
              </h2>
              <p className="mt-5 max-w-md text-[var(--text-body)]">
                From campaign walkthroughs to premium product testing, every creator on Clevertechmedia is vetted for reach, trust, and conversion quality.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/brands" className="gold-btn">Learn More</a>
              </div>
            </div>
            <div className="relative min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                alt="Creator campaign spotlight"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,9,6,0.18)]">
                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(242,216,121,0.8)] bg-[rgba(10,9,6,0.34)] text-[var(--gold-light)] backdrop-blur-sm">
                  <CirclePlay className="h-7 w-7 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Top rated talent</SectionEyebrow>
              <div className="mt-4">
                <SectionHeading title="Bestselling Influencers" highlight="Influencers" />
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trendingInfluencers.slice(0, 4).map((item) => (
              <InfluencerCard key={item.name + "-rated"} item={item} compact />
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8">
            <SectionEyebrow>Influencer categories</SectionEyebrow>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading title="Find the right category" highlight="category" />
            </div>
          </div>

          <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2 md:flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`whitespace-nowrap border px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] ${
                  activeCategory === tab
                    ? "border-transparent bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] text-[#120f09]"
                    : "border-[rgba(212,175,55,0.2)] bg-[#120f0b] text-[var(--text-body)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visibleInfluencers.length > 0 ? (
              visibleInfluencers.map((item) => <InfluencerCard key={item.name + "-filter"} item={item} />)
            ) : (
              <div className="col-span-full rounded border border-[rgba(212,175,55,0.2)] bg-[#120f0b] p-10 text-center text-[var(--text-body)]">
                No influencers match this filter yet. Try another category.
              </div>
            )}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8">
            <SectionEyebrow>Verified talent</SectionEyebrow>
            <div className="mt-4">
              <SectionHeading title="Handpicked Influencers" highlight="Influencers" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trendingInfluencers.map((item) => (
              <div key={item.name + "-handpicked"} className="group overflow-hidden border border-[rgba(212,175,55,0.2)] bg-[#140f0d]">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover grayscale-[0.05] contrast-125 transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.6)] bg-[rgba(10,9,6,0.8)] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--gold-light)]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  <div className="text-center">
                    <h3 className="font-[var(--font-display)] text-[1.7rem] text-white">{item.name}</h3>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-body)]">From</span>
                    <span className="font-semibold text-[var(--gold-light)]">{item.rate}</span>
                  </div>
                  <button className="gold-btn w-full !py-3 !px-4 !text-[0.68rem] !tracking-[0.16em]">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8">
            <SectionEyebrow>Directory</SectionEyebrow>
            <div className="mt-4">
              <SectionHeading title="Our Influencers" highlight="Influencers" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {directoryInfluencers.slice(0, 8).map((item) => (
              <InfluencerCard key={item.name + "-directory"} item={item} />
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8 text-center">
            <SectionEyebrow>Campaign pricing</SectionEyebrow>
            <div className="mt-4">
              <SectionHeading title="Book a campaign" highlight="campaign" />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.tier} className={`border p-8 ${tier.featured ? "border-[var(--gold)] bg-[linear-gradient(180deg,#1d1814,#120f0b)] shadow-[0_24px_50px_rgba(212,175,55,0.12)]" : "border-[rgba(212,175,55,0.18)] bg-[#120f0b]"}`}>
                <div className="flex items-center justify-between">
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--gold-light)]">{tier.tier}</div>
                  {tier.featured && <div className="rounded-full border border-[rgba(212,175,55,0.6)] bg-[rgba(212,175,55,0.08)] px-2 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-[var(--gold-light)]">Popular</div>}
                </div>
                <div className="mt-6 font-[var(--font-display)] text-5xl text-white">{tier.price}</div>
                <p className="mt-3 text-[var(--text-body)]">{tier.description}</p>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[var(--text-body)]">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(212,175,55,0.12)] text-[var(--gold-light)]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="/pricing" className={`mt-8 inline-flex ${tier.featured ? "gold-btn" : "gold-outline"}`}>
                  Choose plan
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="pb-24 md:pb-32">
          <div className="section-shell">
            <div className="grid gap-4 border border-[rgba(212,175,55,0.18)] bg-[linear-gradient(135deg,#100d09_0%,#18140f_100%)] px-6 py-8 md:grid-cols-4 md:px-10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-[rgba(212,175,55,0.12)] py-4 md:border-b-0 md:border-r md:last:border-r-0 md:pr-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.04)] text-[var(--gold-light)]">
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <div className="font-[var(--font-display)] text-5xl leading-none text-white">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="maze-bg relative overflow-hidden border border-[rgba(212,175,55,0.2)] px-6 py-10 md:px-12 md:py-16">
            <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <SectionEyebrow>Make your next campaign shine</SectionEyebrow>
                <h2 className="mt-5 max-w-xl text-4xl md:text-6xl text-white">
                  Make your next <span className="gold-text">campaign</span> shine
                </h2>
              </div>
              <a href="/brands" className="gold-btn">Book a discovery call</a>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8 text-center">
            <SectionEyebrow>Client stories</SectionEyebrow>
            <div className="mt-4">
              <SectionHeading title="What brands say" highlight="say" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Clevertechmedia gave us direct access to creators who matched our brand voice without the agency overhead.",
              "The quality of creators is exceptional. We launched in under two weeks and saw stronger engagement than forecast.",
              "Their mix of premium talent and campaign strategy made the partnership feel like an extension of our team.",
            ].map((quote, index) => (
              <div key={index} className="border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-7">
                <div className="mb-6 flex items-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-[var(--text-primary)]">“{quote}”</p>
                <div className="mt-8 border-t border-[rgba(212,175,55,0.12)] pt-4">
                  <div className="font-[var(--font-display)] text-xl text-white">Nora Mills</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">Brand Director, Northline</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="section-shell pb-24 md:pb-32">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Latest</SectionEyebrow>
              <div className="mt-4">
                <SectionHeading title="News & insights" highlight="insights" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="group overflow-hidden border border-[rgba(212,175,55,0.18)] bg-[#100d09]">
                <div className="overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">{article.category}</div>
                  <h3 className="font-[var(--font-display)] text-3xl leading-tight text-white">{article.title}</h3>
                  <a href="/pricing" className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)]">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </main>

      {projectOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" onClick={() => setProjectOpen(false)}>
          <div className="w-full max-w-xl border border-[rgba(212,175,55,0.24)] bg-[#120f0b] p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Post a project</div>
                <h3 className="mt-2 font-[var(--font-display)] text-4xl text-white">Launch your next campaign</h3>
              </div>
              <button onClick={() => setProjectOpen(false)} className="rounded-full border border-[rgba(212,175,55,0.2)] p-2 text-[var(--gold-light)]">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Brand name" />
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Budget range" />
              </div>
              <input className="w-full border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Niche needed" />
              <textarea rows={5} className="w-full border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Campaign brief" />
              <button type="button" className="gold-btn w-full">Submit brief</button>
            </form>
          </div>
        </div>
      )}

      {joinOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" onClick={() => setJoinOpen(false)}>
          <div className="w-full max-w-xl border border-[rgba(212,175,55,0.24)] bg-[#120f0b] p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Join as creator</div>
                <h3 className="mt-2 font-[var(--font-display)] text-4xl text-white">Apply to our network</h3>
              </div>
              <button onClick={() => setJoinOpen(false)} className="rounded-full border border-[rgba(212,175,55,0.2)] p-2 text-[var(--gold-light)]">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Full name" />
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Email address" />
              </div>
              <input className="w-full border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Instagram / TikTok handle" />
              <textarea rows={5} className="w-full border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Tell us about your audience and niche" />
              <button type="button" className="gold-btn w-full">Submit application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
