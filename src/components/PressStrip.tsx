import { Texture } from "./ui";

const PRESS = [
  {
    wordmark: "IRON CULTURE",
    quote: "The most aggressive fully-dosed pre-workout we\u2019ve tested this year.",
  },
  {
    wordmark: "REP REVIEW",
    quote: "Citrus Surge is what happens when a brand respects the lifter\u2019s wallet and the label.",
  },
  {
    wordmark: "THE SUPPLEMENT LAB",
    quote: "No proprietary blends, no fairy dusting — just clinical doses that deliver.",
  },
];

export default function PressStrip() {
  return (
    <section className="relative bg-ink px-5 py-12 lg:px-[120px] lg:py-16 overflow-hidden">
      <Texture opacity={0.08} />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
        {PRESS.map((p) => (
          <figure key={p.wordmark} className="flex flex-col items-center gap-5 text-center">
            <span className="font-mulish font-black text-[18px] lg:text-[20px] tracking-[0.22em] text-cream">
              {p.wordmark}
            </span>
            <blockquote className="font-display text-[18px] leading-[28px] text-cream/85 max-w-[320px]">
              &ldquo;{p.quote}&rdquo;
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
