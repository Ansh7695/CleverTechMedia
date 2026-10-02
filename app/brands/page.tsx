"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Check, Sparkles, Target } from "lucide-react";

const offerings = [
  { name: "Creator Seeding", detail: "Targeted creator programs for product launches and audience expansion." },
  { name: "Event Coverage", detail: "On-site and digital activations with premium local creators." },
  { name: "UGC & Reels", detail: "Short-form creative built for conversion, retention, and social proof." },
  { name: "Brand Storytelling", detail: "Campaigns designed to turn attention into trust and action." },
];

const steps = [
  { title: "Brief & fit", text: "We align on goals, audience, and creator archetypes." },
  { title: "Talent pairing", text: "We shortlist premium creators who match your niche and tone." },
  { title: "Launch & optimize", text: "You get polished reporting and fast adjustments across delivery." },
];

const caseStudies = [
  { name: "Northline Studio", metric: "+82% engagement", description: "Luxury lifestyle launch with six creator partners across fashion and wellness." },
  { name: "Vanta Labs", metric: "4.3x ROAS", description: "Tech launch campaign blending creator reviews and product demos." },
];

const logos = ["Aster", "NEXA", "Monarch", "Aurelian", "Luma", "Velora"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <main className="section-shell py-16 md:py-24">
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }} className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="eyebrow">For brands</span>
            <h1 className="mt-5 max-w-xl text-5xl md:text-7xl leading-none text-white">
              Launch bold campaigns with <span className="gold-text">premium creator strategy</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-body)]">
              From product launches to long-term brand storytelling, Clevertechmedia helps you discover the right creators, shape the brief, and optimize every campaign for attention and conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="gold-btn">Book a discovery call</a>
              <a href="/influencers" className="gold-outline">Browse creators</a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bento-card min-h-[200px] border border-[rgba(212,175,55,0.18)] bg-[linear-gradient(135deg,#15110d_0%,#0d0a07_100%)] p-6">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.06)] text-[var(--gold-light)]">
                <Target className="h-5 w-5" />
              </div>
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Campaign fit</div>
              <div className="mt-4 font-[var(--font-display)] text-4xl text-white">94%</div>
              <p className="mt-3 text-sm text-[var(--text-body)]">Average creator-brand match score across premium briefs.</p>
            </div>

            <div className="bento-card min-h-[200px] border border-[rgba(212,175,55,0.18)] bg-[linear-gradient(135deg,#1b140f_0%,#0d0a07_100%)] p-6">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.06)] text-[var(--gold-light)]">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Performance</div>
              <div className="mt-4 font-[var(--font-display)] text-4xl text-white">3.4x</div>
              <p className="mt-3 text-sm text-[var(--text-body)]">Average lift in engagement for premium campaign activations.</p>
            </div>

            <div className="md:col-span-2 border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Trusted by</p>
                  <h3 className="mt-3 font-[var(--font-display)] text-3xl text-white">Product and luxury brands</h3>
                </div>
                <div className="rounded-full border border-[rgba(212,175,55,0.2)] p-3 text-[var(--gold-light)]"><Sparkles className="h-4 w-4" /></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {logos.map((logo) => (
                  <div key={logo} className="flex h-16 items-center justify-center border border-[rgba(212,175,55,0.12)] bg-[#0d0a07] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20">
          <div className="mb-8">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-white">Campaign services built for growth</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offerings.map((item, index) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.06)] text-[var(--gold-light)] transition group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-white">{item.name}</h3>
                <p className="mt-3 text-[var(--text-body)]">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-8">
            <span className="eyebrow">Process</span>
            <h2 className="mt-4 text-4xl text-white">How we move fast without losing polish</h2>
            <div className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] font-bold text-[#120f09]">{index + 1}</div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl text-white">{step.title}</h3>
                    <p className="mt-2 text-[var(--text-body)]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <div key={study.name} className="border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">Case study</p>
                    <h3 className="mt-3 font-[var(--font-display)] text-3xl text-white">{study.name}</h3>
                  </div>
                  <div className="rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.06)] px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold-light)]">{study.metric}</div>
                </div>
                <p className="mt-5 text-[var(--text-body)]">{study.description}</p>
                <div className="mt-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)]">
                  Read story <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20 border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="eyebrow">Ready to launch</span>
              <h2 className="mt-4 text-4xl md:text-5xl text-white">Turn attention into measurable momentum</h2>
            </div>
            <a href="/contact" className="gold-btn">Book a strategy call</a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Creator vetting & shortlists",
              "Performance-led campaign guidance",
              "Premium brand-safe creator partnerships",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border border-[rgba(212,175,55,0.12)] bg-[#0d0a07] p-4 text-[var(--text-body)]">
                <Check className="h-4 w-4 text-[var(--gold-light)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
