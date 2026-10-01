import { useState } from "react";
import { Stars } from "./ui";

const FLAVORS = [
  {
    id: "citrus",
    label: "Citrus Surge",
    active: true,
    rating: "4.9",
    reviews: "1,000+",
    blurb:
      "Bright, sharp citrus built from real flavor — no artificial dyes, no chemical aftertaste. Sweetened clean, mixes clear, and disappears in one shake.",
    notes: ["Blood orange bite", "Subtle tropical finish", "Zero artificial flavors"],
  },
  {
    id: "soon1",
    label: "Coming Soon",
    active: false,
    rating: "",
    reviews: "",
    blurb:
      "New flavors are in the lab. Join the Forsaken list to get early access before the next drop sells through.",
    notes: [],
  },
];

export default function FlavorsSection() {
  const [activeId, setActiveId] = useState("citrus");
  const flavor = FLAVORS.find((f) => f.id === activeId) ?? FLAVORS[0];

  return (
    <section id="flavors" className="relative overflow-hidden bg-cream">
      {/* mobile: product photo on top, copy below — nothing overlaid */}
      <div className="px-5 pt-12 lg:hidden">
        <div className="overflow-hidden rounded-xl border border-line shadow-[0_16px_40px_-20px_rgba(22,16,9,0.4)]">
          <img
            src="/images/tub-solo-marble-splash.jpg"
            alt="Citrus Surge tub with a citrus splash and ice on marble"
            className="aspect-[4/3] w-full object-cover object-[50%_45%]"
            loading="lazy"
          />
        </div>
      </div>

      {/* desktop: full-bleed photo left, quiet gradient under the copy on the right */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src="/images/tub-marble-bright.jpg"
          alt=""
          className="h-full w-full object-cover object-[30%_center]"
          loading="lazy"
        />
        <div className="photo-scrim absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 pb-12 pt-8 lg:grid-cols-2 lg:px-0 lg:py-24">
        {/* left stays empty on desktop — the product photo shows through */}
        <div className="hidden lg:block" />

        <div className="flex flex-col items-start gap-6">
          <h2 className="font-display font-bold text-[32px] leading-[36px] lg:text-[48px] lg:leading-[52px] text-ink">
            A Surge for
            <br />
            Every Lifter
          </h2>

          <div className="flex flex-wrap gap-2">
            {FLAVORS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveId(f.id)}
                className={`rounded-full border px-5 py-2.5 text-[14px] font-mulish font-bold transition-colors cursor-pointer ${
                  activeId === f.id
                    ? "bg-ink text-cream border-ink"
                    : "bg-cream/60 text-ink-2 border-ink-2/25 hover:border-ink-2"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="min-h-[120px]">
            <p className="max-w-[520px] text-[15px] leading-7 lg:text-[16px] text-espresso">{flavor.blurb}</p>
            {flavor.notes.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {flavor.notes.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-[13px] font-mulish font-bold text-cocoa">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {n}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {flavor.active ? (
            <div className="flex items-center gap-2">
              <Stars size="w-4 h-4" />
              <span className="text-[13px] text-cocoa">
                <span className="font-mulish font-bold text-ink-2">{flavor.rating}</span> · {flavor.reviews} reviews
              </span>
            </div>
          ) : (
            <a href="#footer" className="text-[13px] font-mulish font-bold text-orange underline underline-offset-4">
              Get notified →
            </a>
          )}

          <a
            href="#"
            className="inline-flex min-w-[258px] items-center justify-center rounded-lg border border-ink bg-ink px-5 py-[13px] text-[16px] leading-[18.6px] text-cream transition-colors hover:bg-espresso"
          >
            {flavor.active ? "Shop Citrus Surge — $49.99" : "Notify Me"}
          </a>
        </div>
      </div>
    </section>
  );
}
