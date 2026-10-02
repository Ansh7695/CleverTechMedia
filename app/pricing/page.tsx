"use client";

import { motion } from "framer-motion";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Starter Collab",
    price: "$1,200",
    description: "For focused launches that need premium creator reach quickly.",
    features: ["1 creator campaign", "Creative direction support", "Content usage rights", "Campaign summary report"],
  },
  {
    name: "Growth Campaign",
    price: "$4,800",
    description: "For brands scaling visibility across multiple premium audience segments.",
    features: ["3–5 creator network", "Content optimization", "Performance analysis", "Priority campaign support"],
    featured: true,
  },
  {
    name: "Enterprise Partnership",
    price: "$12,000",
    description: "For long-term brand momentum and multi-market creator strategy.",
    features: ["Dedicated talent roster", "Executive strategy planning", "Cross-channel optimization", "Custom reporting"],
  },
];

const faqs = [
  { question: "How quickly can we launch a campaign?", answer: "Most brand campaigns can be scoped and launched in 7–14 days depending on creator availability and asset requirements." },
  { question: "Are creator rates flexible?", answer: "Yes. We tailor creator selection and negotiation based on niche, audience quality, deliverables, and campaign goals." },
  { question: "Do you support multi-platform activations?", answer: "Absolutely. We can plan across Instagram, TikTok, YouTube, and other social channels for a more seamless launch." },
  { question: "Can we work with a custom campaign strategy?", answer: "Yes. Enterprise clients receive tailored planning, onboarding, and ongoing optimization across campaign phases." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <main className="section-shell py-16 md:py-24">
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <span className="eyebrow">Campaign pricing</span>
          <h1 className="mt-5 mx-auto max-w-3xl text-5xl md:text-7xl leading-none text-white">
            Flexible pricing for <span className="gold-text">premium partnerships</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Transparent packages for founders, brands, and teams looking for premium creator access without the friction of a traditional agency model.
          </p>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`border p-8 ${tier.featured ? "border-[var(--gold)] bg-[linear-gradient(180deg,#1d1814,#120f0b)] shadow-[0_24px_40px_rgba(212,175,55,0.12)]" : "border-[rgba(212,175,55,0.18)] bg-[#120f0b]"}`}>
              <div className="flex items-center justify-between">
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--gold-light)]">{tier.name}</div>
                {tier.featured && (
                  <div className="rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.08)] px-2 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-[var(--gold-light)]">Popular</div>
                )}
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

              <a href="/contact" className={`mt-8 inline-flex ${tier.featured ? "gold-btn" : "gold-outline"}`}>
                {tier.featured ? "Get started" : "Choose plan"}
              </a>
            </div>
          ))}
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20 rounded border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-6 md:p-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <span className="eyebrow">Comparison</span>
              <h2 className="mt-4 text-4xl md:text-5xl text-white">Built to match your campaign stage</h2>
            </div>
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.08)] text-[var(--gold-light)]">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="overflow-hidden border border-[rgba(212,175,55,0.12)]">
            <div className="grid grid-cols-4 border-b border-[rgba(212,175,55,0.12)] bg-[#0d0a07] text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">
              <div className="p-4">Plan</div>
              <div className="p-4">Scope</div>
              <div className="p-4">Support</div>
              <div className="p-4">Best for</div>
            </div>
            {tiers.map((tier) => (
              <div key={tier.name} className="grid grid-cols-4 border-b border-[rgba(212,175,55,0.12)] text-sm text-[var(--text-body)] last:border-b-0">
                <div className="p-4 font-semibold text-white">{tier.name}</div>
                <div className="p-4">{tier.features[0]}</div>
                <div className="p-4">{tier.featured ? "Priority" : "Standard"}</div>
                <div className="p-4">{tier.featured ? "Scaling teams" : "Focused launches"}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20 max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-white">Questions brands ask before booking</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.question} className="border border-[rgba(212,175,55,0.18)] bg-[#120f0b]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base font-medium text-white">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-[var(--gold-light)] transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <p className="px-5 pb-5 text-[var(--text-body)]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
