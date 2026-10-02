"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";

const contactCards = [
  { icon: Phone, title: "Call us", detail: "+1 (212) 555-2048" },
  { icon: Mail, title: "Email", detail: "hello@clevertechmedia.com" },
  { icon: MapPin, title: "Office", detail: "4 Mercer St, New York, NY" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <main className="section-shell py-16 md:py-24">
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }} className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h1 className="mt-5 text-5xl md:text-7xl leading-none text-white">
              Let’s build a campaign worth <span className="gold-text">remembering</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-body)]">
              Share your brief, your audience, and your goals. We’ll match you with the right creators and shape a premium campaign plan that fits your market.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-center gap-4 border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.06)] text-[var(--gold-light)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">{title}</div>
                    <div className="mt-1 text-[var(--text-body)]">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="eyebrow">Start a project</span>
                <h2 className="mt-4 font-[var(--font-display)] text-4xl text-white">Tell us about your goals</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.06)] text-[var(--gold-light)]">
                <MessageSquareText className="h-5 w-5" />
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Full name" />
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Email address" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Company name" />
                <input className="border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Budget range" />
              </div>
              <input className="w-full border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Campaign goal or niche" />
              <textarea rows={6} className="w-full border border-[rgba(212,175,55,0.2)] bg-[#1b1712] p-3 text-white placeholder:text-[var(--text-muted)]" placeholder="Tell us about your campaign" />
              <button className="gold-btn w-full">Send inquiry <ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { title: "Response time", value: "< 24 hours" },
            { title: "Campaign launch", value: "7–14 days" },
            { title: "Average fit score", value: "94%" },
          ].map((item) => (
            <div key={item.title} className="border border-[rgba(212,175,55,0.18)] bg-[#120f0b] p-6 text-center">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-light)]">{item.title}</div>
              <div className="mt-4 font-[var(--font-display)] text-4xl text-white">{item.value}</div>
            </div>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
