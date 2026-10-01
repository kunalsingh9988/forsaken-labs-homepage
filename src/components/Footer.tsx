import { useState } from "react";
import { Logo, Stars } from "./ui";

const COLS = [
  {
    title: "Shop",
    links: ["Citrus Surge", "Subscribe & Save", "All Products", "Gift Cards"],
  },
  {
    title: "Explore",
    links: ["Our Story", "The Formula", "Lab Results", "Reviews"],
  },
  {
    title: "Support",
    links: ["FAQ", "Shipping & Returns", "Contact Us", "Forsaken Guarantee"],
  },
];

const LEGAL = ["Privacy Policy", "Terms of Service", "Refund Policy", "Accessibility", "Do Not Sell My Info"];

const PAYS = ["pay-visa", "pay-amex", "pay-discover", "pay-mc", "pay-paypal", "pay-affirm"];

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.6 2h3.1c.2 2 1.5 3.6 3.6 3.9v3.2c-1.3 0-2.6-.4-3.7-1.1v7.4a6.3 6.3 0 1 1-6.3-6.3c.3 0 .7 0 1 .1v3.3a3 3 0 1 0 2.3 2.9V2Z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="footer" className="relative bg-[#0f0c08] text-cream">
      {/* newsletter — full-bleed photo, copy on the left over a scrim */}
      <div className="relative overflow-hidden">
        <img
          src="/images/tub-bench-dark.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c08] via-[#0f0c08]/85 to-[#0f0c08]/55 lg:via-[#0f0c08]/70 lg:to-[#0f0c08]/10" />
        <div className="relative mx-auto flex max-w-[1200px] px-5 py-20 lg:px-0 lg:py-28">
          <div className="flex w-full max-w-[560px] flex-col items-start gap-6 text-left">
            <h2 className="font-sans font-extrabold text-[26px] lg:text-[32px] leading-8 tracking-[-0.01em]">
              Unlock 10% off
            </h2>
            <p className="max-w-[420px] text-[15px] leading-6 text-cream/70">
              Join the Forsaken — early access to drops, exclusive discounts, and zero spam.
            </p>
            {subscribed ? (
              <p className="rounded-lg border border-moss/40 bg-moss/10 px-6 py-3 font-sans text-[15px] font-bold text-moss">
                Welcome to the Forsaken. Check your inbox.
              </p>
            ) : (
              <form
                className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row sm:items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 flex-1 rounded-lg border border-cream/20 bg-cream/5 px-4 font-sans text-[15px] text-cream placeholder:text-cream/40 outline-none focus:border-orange"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-lg bg-orange px-6 font-sans text-[15px] font-extrabold text-ink transition-colors hover:bg-orange-2 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            )}
            <p className="max-w-[520px] text-[11px] leading-4 text-cream/45">
              By entering your email you agree to receive marketing emails from Forsaken Labs. Consent is not a
              condition of purchase. View our Privacy Policy for more details.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-0">

        {/* link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <Logo light />
            <p className="text-[13px] leading-5 text-cream/60 max-w-[240px]">
              Performance nutrition for lifters who refuse to settle. Fully dosed. Fully disclosed. Zero fluff.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/forsaken_labs/"
                target="_blank"
                rel="noreferrer"
                aria-label="Forsaken Labs on Instagram"
                className="text-cream/70 transition-colors hover:text-orange"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@forsakenlabs"
                target="_blank"
                rel="noreferrer"
                aria-label="Forsaken Labs on TikTok"
                className="text-cream/70 transition-colors hover:text-orange"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-sans text-[12px] font-extrabold uppercase tracking-[0.16em] text-cream/50">
                {col.title}
              </h3>
              {col.links.map((l) => (
                <a key={l} href="#" className="text-[14px] leading-5 text-cream/80 transition-colors hover:text-orange">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* reviews strip */}
        <div className="flex flex-col items-center gap-2 border-t border-cream/10 py-8 text-center">
          <Stars size="w-4 h-4" />
          <p className="font-sans text-[13px] font-bold text-cream/80">1,000+ verified 5-star reviews</p>
        </div>

        {/* legal + payments */}
        <div className="flex flex-col items-center gap-6 border-t border-cream/10 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l}>
                <a href="#" className="text-[12px] text-cream/50 transition-colors hover:text-cream">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            {PAYS.map((p) => (
              <img
                key={p}
                src={`/assets/icons/${p}.svg`}
                alt={p.replace("pay-", "")}
                className="h-6 w-9 rounded-[3px] bg-cream/95 p-[3px] object-contain"
                loading="lazy"
              />
            ))}
          </div>
          <p className="text-[12px] text-cream/40">© {new Date().getFullYear()} Forsaken Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
