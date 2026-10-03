import { useState } from "react";
import { Link } from "react-router-dom";
import { Stars } from "./ui";

const CHECK = "/images/check-orange.png";

const SLIDES = [
  { src: "/images/tub-solo-marble-splash.jpg", alt: "Citrus Surge tub with citrus splash and ice on marble", pos: "object-center" },
  { src: "/images/flatlay-dark.jpg", alt: "Citrus Surge flat lay with powder scoop, shaker and oranges", pos: "object-center" },
  { src: "/images/tub-inferno.jpg", alt: "Citrus Surge tub with an orange eruption behind it", pos: "object-[50%_55%]" },
  { src: "/images/trio-glow.jpg", alt: "Three Citrus Surge tubs glowing under warm beams", pos: "object-center" },
  { src: "/images/tub-splash-swirl.jpg", alt: "Citrus Surge tub with a citrus powder swirl", pos: "object-[50%_40%]" },
  { src: "/images/tub-solo-dark.jpg", alt: "Citrus Surge tub in smoke on dark stone", pos: "object-center" },
  { src: "/images/trio-sunset.jpg", alt: "Three Citrus Surge tubs on rocks at sunset", pos: "object-center" },
  { src: "/images/tub-bench-warm.jpg", alt: "Citrus Surge tub on a weight bench with strap and dumbbells", pos: "object-[20%_center]" },
];

const BENEFITS = [
  "Skin-splitting pumps — 8g citrulline",
  "Tunnel-vision focus — Alpha-GPC + tyrosine",
  "No crash, no jitters — clean 350mg caffeine",
  "Full-disclosure label — zero hidden blends",
];

const PERKS = ["Free shipping over $50", "30-day Forsaken Guarantee", "Skip or cancel anytime"];

export default function PdpBuyBox() {
  const [slide, setSlide] = useState(0);
  const [plan, setPlan] = useState<"sub" | "once">("sub");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    setAdded(true);
    window.dispatchEvent(new Event("forsaken:open-cart"));
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section className="bg-cream px-5 pt-8 pb-10 lg:px-[120px] lg:pt-12 lg:pb-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[55%_45%] lg:gap-12">
        {/* ---------- gallery ---------- */}
        <div className="min-w-0">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand-2">
            <img
              key={slide}
              src={SLIDES[slide].src}
              alt={SLIDES[slide].alt}
              className={`h-full w-full object-cover ${SLIDES[slide].pos}`}
              loading={slide === 0 ? "eager" : "lazy"}
            />
            {slide > 0 && (
              <button
                onClick={() => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-md transition hover:bg-cream"
              >
                ‹
              </button>
            )}
            {slide < SLIDES.length - 1 && (
              <button
                onClick={() => setSlide((s) => (s + 1) % SLIDES.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-md transition hover:bg-cream"
              >
                ›
              </button>
            )}
            <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-[11px] font-sans font-extrabold uppercase tracking-[0.08em] text-ink">
              Best Seller
            </span>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-8 lg:overflow-visible">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`View image ${i + 1}`}
                className={`aspect-square w-[64px] shrink-0 overflow-hidden rounded-lg border-2 transition lg:w-auto ${
                  i === slide ? "border-orange" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={s.src} alt="" className={`h-full w-full object-cover ${s.pos}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* ---------- buy box ---------- */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Stars />
            <Link to="/reviews" className="text-[13px] font-sans font-bold text-ink underline underline-offset-2 hover:text-orange">
              1,000+ reviews
            </Link>
          </div>

          <h1 className="mt-3 font-display text-[34px] font-bold leading-[38px] tracking-[-0.01em] text-ink lg:text-[46px] lg:leading-[50px]">
            Citrus Surge
          </h1>
          <p className="mt-1 text-[15px] font-sans font-semibold text-cocoa">Pre-Workout · 30 Servings</p>

          <ul className="mt-5 space-y-2.5">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[14px] font-sans font-semibold text-ink-2">
                <img src={CHECK} alt="" className="h-5 w-5 shrink-0" /> {b}
              </li>
            ))}
          </ul>

          {/* flavor picker */}
          <p className="mt-6 text-[12px] font-sans font-extrabold uppercase tracking-[0.14em] text-cocoa">Choose Flavor</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button className="rounded-lg border-2 border-ink bg-ink px-4 py-2.5 text-[14px] font-sans font-bold text-cream">
              Citrus Surge
            </button>
            <button disabled className="rounded-lg border border-dashed border-cocoa/40 px-4 py-2.5 text-[14px] font-sans font-bold text-cocoa/60">
              More Flavors Soon
            </button>
          </div>

          {/* purchase options */}
          <div className="mt-5 space-y-3">
            <button
              onClick={() => setPlan("sub")}
              className={`relative w-full rounded-xl border-2 p-4 text-left transition ${
                plan === "sub" ? "border-orange bg-orange/5" : "border-line bg-cream hover:border-tan"
              }`}
            >
              <span className="absolute -top-3 left-4 rounded-full bg-orange px-3 py-0.5 text-[11px] font-sans font-extrabold uppercase tracking-wide text-ink">
                Best Value
              </span>
              <span className="flex items-center justify-between gap-3">
                <span>
                  <span className="block text-[15px] font-sans font-extrabold text-ink">Subscribe &amp; Save 15%</span>
                  <span className="mt-0.5 block text-[12.5px] font-sans text-cocoa">
                    Delivered monthly · free shaker on first order
                  </span>
                </span>
                <span className="text-right">
                  <span className="block text-[18px] font-sans font-black text-ink">$42.49<span className="text-[13px] font-bold text-cocoa">/mo</span></span>
                  <span className="block text-[12px] font-sans text-cocoa line-through">$49.99</span>
                </span>
              </span>
            </button>
            <button
              onClick={() => setPlan("once")}
              className={`w-full rounded-xl border-2 p-4 text-left transition ${
                plan === "once" ? "border-orange bg-orange/5" : "border-line bg-cream hover:border-tan"
              }`}
            >
              <span className="flex items-center justify-between gap-3">
                <span>
                  <span className="block text-[15px] font-sans font-extrabold text-ink">One-Time Purchase</span>
                  <span className="mt-0.5 block text-[12.5px] font-sans text-cocoa">30-serving tub, ships in 24h</span>
                </span>
                <span className="text-right">
                  <span className="block text-[18px] font-sans font-black text-ink">$49.99</span>
                  <span className="block text-[12px] font-sans text-cocoa line-through">$60.00</span>
                </span>
              </span>
            </button>
          </div>

          {/* qty + ATC */}
          <div className="mt-4 flex gap-3">
            <div className="flex items-center rounded-lg border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="h-full w-11 text-lg font-bold text-ink hover:text-orange"
              >
                −
              </button>
              <span className="w-8 text-center text-[15px] font-sans font-bold">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(6, q + 1))}
                aria-label="Increase quantity"
                className="h-full w-11 text-lg font-bold text-ink hover:text-orange"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              className="flex-1 rounded-lg bg-orange py-4 text-[16px] font-sans font-extrabold text-ink shadow-[0_12px_30px_-10px_rgba(245,100,10,0.65)] transition hover:bg-orange-2 active:scale-[0.98]"
            >
              {added ? "Added to Cart ✓" : `Add to Cart — ${plan === "sub" ? "$42.49" : "$49.99"}`}
            </button>
          </div>

          {/* perks */}
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-[12.5px] font-sans font-semibold text-cocoa">
                <svg viewBox="0 0 10 8" className="h-2.5 w-3 text-orange" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 4.2 3.6 6.8 9 1.2" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          {/* accordions */}
          <div className="mt-6 divide-y divide-line border-y border-line">
            {[
              {
                t: "Supplement Facts",
                c: "L-Citrulline 8g · Beta-Alanine 3.2g · Caffeine 350mg · Alpha-GPC 300mg · L-Tyrosine 1g · Betaine 2.5g · Taurine 1g · Nitrosigine 1.5g · Electrolyte blend 500mg. Every dose printed — no proprietary blends.",
              },
              {
                t: "How to Use",
                c: "Mix one scoop with 16–24oz of cold water 15–20 minutes before training. Start with half a scoop to assess tolerance. Do not exceed one scoop per day.",
              },
              {
                t: "Shipping & Returns",
                c: "Orders ship within 24 hours (Mon–Fri). Free US shipping over $50. Covered by the 30-day Forsaken Guarantee — love it or your money back.",
              },
            ].map((a) => (
              <details key={a.t} className="group py-0">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[15px] font-sans font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {a.t}
                  <span className="text-xl text-cocoa transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-[13.5px] font-sans leading-6 text-cocoa">{a.c}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
