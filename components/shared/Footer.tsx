import { Camera, Mail, MessageSquareText, Phone, Search } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(212,175,55,0.2)] bg-[#090705]">
      <div className="section-shell py-10">
        <div className="grid gap-10 border-b border-[rgba(212,175,55,0.12)] pb-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.6)] bg-[linear-gradient(135deg,#f2d879_0%,#d4af37_45%,#9c7a22_100%)] font-[var(--font-display)] text-lg font-bold text-[#120f09]">
                CTM
              </div>
              <div className="font-[var(--font-display)] text-2xl text-white">Clevertechmedia</div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--text-body)]">
              A premium talent network for brands that want standout campaigns and creators that command attention.
            </p>
          </div>

          <div>
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)]">About</div>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-body)]">
              <li><a href="/brands">Our story</a></li>
              <li><a href="/influencers">Creators</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)]">Quick links</div>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-body)]">
              <li><a href="/brands">Brands</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/categories">Categories</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)]">Contact</div>
            <ul className="mt-5 space-y-4 text-sm text-[var(--text-body)]">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--gold-light)]" /> +1 (212) 555-2048</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--gold-light)]" /> hello@clevertechmedia.com</li>
              <li className="flex items-center gap-3"><MessageSquareText className="h-4 w-4 text-[var(--gold-light)]" /> 4 Mercer St, New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <div>© 2026 Clevertechmedia. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Built by Clevertechmedia</span>
            <div className="flex items-center gap-3 text-[var(--gold-light)]">
              <a href="#" aria-label="Instagram"><Camera className="h-4 w-4" /></a>
              <a href="#" aria-label="Search"><Search className="h-4 w-4" /></a>
              <a href="#" aria-label="Chat"><MessageSquareText className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
