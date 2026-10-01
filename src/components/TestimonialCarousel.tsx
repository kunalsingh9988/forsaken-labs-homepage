import { useState } from "react";
import { Stars, Texture } from "./ui";

const QUOTES = [
  {
    quote:
      "I\u2019ve burned through every big-name pre on the shelf. Nothing hits like Citrus Surge — the focus is unreal and the pump stays with you all session.",
    name: "Marcus T.",
    role: "Competitive Powerlifter",
  },
  {
    quote:
      "Finally a pre-workout that lists every dose on the label. No jitters, no crash, just clean aggression for two straight hours.",
    name: "Dana R.",
    role: "Bodybuilding Coach",
  },
  {
    quote:
      "The taste is what got me — real citrus, not chemical candy. Then the pumps kicked in and I was sold for life.",
    name: "Jesse K.",
    role: "5AM Lifter",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setIndex((i) => (i + 1) % QUOTES.length);

  return (
    <section className="relative bg-sand px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.2} />
      <div className="relative mx-auto flex max-w-[880px] flex-col items-center gap-8 text-center">
        <Stars className="text-orange" size="w-5 h-5" />

        <div className="relative min-h-[190px] lg:min-h-[170px] w-full">
          {QUOTES.map((q, i) => (
            <figure
              key={q.name}
              className={`absolute inset-0 flex flex-col items-center justify-start gap-6 transition-opacity duration-500 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <blockquote className="font-display font-bold text-[22px] leading-[30px] lg:text-[30px] lg:leading-[40px] text-ink">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="text-[14px] leading-5 text-cocoa">
                <span className="font-sans font-bold text-ink-2">{q.name}</span>
                <span className="mx-2 opacity-50">·</span>
                {q.role}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-2/25 text-ink-2 transition-colors hover:border-ink-2 cursor-pointer"
          >
            <svg viewBox="0 0 8 13" className="h-4 w-auto" fill="currentColor">
              <path d="M6.478 0 8 1.545 3.055 6.5 8 11.455 6.478 13 0 6.5 6.478 0Z" />
            </svg>
          </button>
          <div className="flex gap-2">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${i === index ? "w-6 bg-ink" : "w-2 bg-ink/25"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-2/25 text-ink-2 transition-colors hover:border-ink-2 cursor-pointer"
          >
            <svg viewBox="0 0 8 13" className="h-4 w-auto" fill="currentColor">
              <path d="M1.522 0 0 1.545 4.945 6.5 0 11.455 1.522 13 8 6.5 1.522 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
