"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Influencers", href: "/influencers" },
  { label: "Brands", href: "/brands" },
  { label: "How It Works", href: "/brands" },
  { label: "Pricing", href: "/pricing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[rgba(212,175,55,0.2)] bg-[rgba(10,9,6,0.82)] backdrop-blur-md">
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(212,175,55,0.6)] bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] font-[var(--font-display)] text-sm font-bold text-[#120f09]">
              CTM
            </div>
            <div className="font-[var(--font-display)] text-xl font-bold tracking-[-0.04em] text-white">
              Clever<span className="gold-text">tech</span>media
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)] lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[var(--gold-light)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 border border-[rgba(212,175,55,0.2)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              <Phone className="h-4 w-4 text-[var(--gold-light)]" />
              Talk to us
            </div>
            <a href="/contact" className="gold-btn !py-3 !px-6 !text-[0.65rem] !tracking-[0.14em]">
              Join as Influencer
            </a>
          </div>

          <button onClick={() => setMobileOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.3)] text-[var(--gold-light)] lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="ml-auto h-full w-[80%] max-w-sm border-l border-[rgba(212,175,55,0.2)] bg-[#100d0a] p-6 text-white" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between">
              <div className="font-[var(--font-display)] text-2xl text-white">Clevertechmedia</div>
              <button onClick={() => setMobileOpen(false)} className="rounded-full border border-[rgba(212,175,55,0.2)] p-2 text-[var(--gold-light)]">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4 text-sm uppercase tracking-[0.12em] text-[var(--text-body)]">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block border-b border-[rgba(212,175,55,0.12)] py-3" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <a href="/contact" className="gold-btn mt-8 w-full">Join as Influencer</a>
          </div>
        </div>
      )}
    </>
  );
}
