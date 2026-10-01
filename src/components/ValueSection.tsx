import { CheckPill, Texture } from "./ui";

const ITEMS = [
  { name: "L-Citrulline (8g clinical dose)", price: "$28" },
  { name: "Beta-Alanine (3.2g CarnoSyn)", price: "$22" },
  { name: "Caffeine + focus nootropics", price: "$24" },
  { name: "Betaine & taurine support", price: "$18" },
];

export default function ValueSection() {
  return (
    <section className="relative bg-tan-2 px-5 py-12 lg:px-[120px] lg:py-16 overflow-hidden">
      <Texture opacity={0.18} />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <h3 className="font-display font-bold text-[26px] leading-[32px] lg:text-[36px] lg:leading-[42px] text-ink">
            One Scoop.
            <br />
            Zero Compromise.
          </h3>
          <p className="max-w-[440px] text-[15px] lg:text-[16px] leading-7 text-espresso">
            Buy each ingredient in Citrus Surge separately and you&apos;d spend over $90 — and still get a
            watered-down stack. We built the full formula into one scoop.
          </p>
          <div className="relative aspect-[480/272] w-full max-w-[480px] overflow-hidden rounded-lg">
            <img
              src="/images/scoop-overhead-marble.jpg"
              alt="A scoop of Citrus Surge powder being poured over the tub"
              className="h-full w-full object-cover object-[50%_35%]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-ink-2/15 bg-cream">
          <div className="grid grid-cols-[1.5fr_1fr] border-b border-ink-2/10 px-5 lg:px-7 py-4">
            <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.14em] text-cocoa">
              Bought separately
            </span>
            <span className="text-right font-sans text-[12px] font-extrabold uppercase tracking-[0.14em] text-cocoa">
              Cost
            </span>
          </div>
          {ITEMS.map((i) => (
            <div key={i.name} className="grid grid-cols-[1.5fr_1fr] items-center border-b border-ink-2/10 px-5 lg:px-7 py-4">
              <span className="text-[13px] lg:text-[15px] leading-5 text-ink-2">{i.name}</span>
              <span className="text-right font-sans font-bold text-[14px] lg:text-[16px] text-ink-2">{i.price}</span>
            </div>
          ))}
          <div className="grid grid-cols-[1.5fr_1fr] items-center px-5 lg:px-7 py-5">
            <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.14em] text-cocoa">
              Buying it all
            </span>
            <span className="text-right font-display text-[20px] font-bold text-ink line-through decoration-orange/70">
              $92
            </span>
          </div>
          <div className="grid grid-cols-[1.5fr_1fr] items-center bg-ink px-5 lg:px-7 py-5">
            <span className="flex items-center gap-3 font-sans font-black text-[14px] lg:text-[16px] tracking-[0.04em] text-cream">
              <CheckPill dark /> FORSAKEN LABS
            </span>
            <span className="text-right font-display text-[22px] font-bold text-orange-2">$49.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
