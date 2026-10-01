import { useRef } from "react";
import { useState } from "react";
import { H2, Stars, Texture } from "./ui";

const TABS = ["All", "Focus", "Pumps", "Taste", "Energy", "No Crash", "Value"] as const;

const REVIEWS: Record<(typeof TABS)[number], { title: string; body: string; name: string }[]> = {
  All: [
    {
      title: "The real deal",
      body: "Skeptical at first — every brand promises 'clinical doses.' Forsaken actually publishes them. Focus hits in 15 minutes and the pump is stupid.",
      name: "Anthony V.",
    },
    {
      title: "Best tasting pre, period",
      body: "Citrus Surge tastes like sparkling orange juice. First pre I've ever finished the whole tub of without dreading it.",
      name: "Sam W.",
    },
    {
      title: "Zero crash, all aggression",
      body: "350mg of caffeine but somehow smooth? Two-hour sessions, drive home fine, sleep normal. Witchcraft.",
      name: "Jordan M.",
    },
  ],
  Focus: [
    {
      title: "Tunnel vision in a scoop",
      body: "Alpha-GPC + tyrosine is no joke. I zone into my sets and the whole gym fades out.",
      name: "Chris D.",
    },
    {
      title: "Locked in from set one",
      body: "No warm-up fog. The focus arrives fast and stays sharp through heavy volume days.",
      name: "Priya S.",
    },
    {
      title: "Mind-muscle connection",
      body: "Best mind-muscle connection I've felt on any pre. It's calm intensity, not cracked-out energy.",
      name: "Tom H.",
    },
  ],
  Pumps: [
    {
      title: "8g of citrulline shows",
      body: "You can actually feel the 8g working — arms were full to the point of distraction on curl day.",
      name: "Derek L.",
    },
    {
      title: "Roadmap vascularity",
      body: "Second exercise in and the veins were out. Nitrosigine + citrulline stack is elite.",
      name: "Rico A.",
    },
    {
      title: "Pump that lasts",
      body: "Most pres fade by accessories. This pump was still there in the parking lot.",
      name: "Hannah B.",
    },
  ],
  Taste: [
    {
      title: "Actually tastes like citrus",
      body: "No fake candy flavor, no chemical bite. Bright orange, clean finish.",
      name: "Mia K.",
    },
    {
      title: "Zero grit",
      body: "Mixes perfectly in a shaker — no clumps at the bottom like every other brand.",
      name: "Eli F.",
    },
    {
      title: "I sip it",
      body: "I used to chug my pre to get it over with. Citrus Surge is genuinely enjoyable.",
      name: "Noah P.",
    },
  ],
  Energy: [
    {
      title: "Clean, not chaotic",
      body: "High stim but zero anxiety. Just relentless, usable energy the whole session.",
      name: "Owen J.",
    },
    {
      title: "5AM proof",
      body: "I lift at 5am and this wakes me up better than coffee ever did. No mid-morning slump either.",
      name: "Grace T.",
    },
    {
      title: "Consistent every time",
      body: "Scoop 30 hits exactly like scoop 1. That never happens with other pres.",
      name: "Luis C.",
    },
  ],
  "No Crash": [
    {
      title: "No post-gym zombie mode",
      body: "Energy tapers off gently. I can still hold a conversation and work afterward.",
      name: "Kate R.",
    },
    {
      title: "Sleep unaffected",
      body: "Trained at 6pm, asleep by 11. With my old pre I'd be staring at the ceiling.",
      name: "Dev M.",
    },
    {
      title: "Smooth landing",
      body: "The come-down is so gradual you don't notice it. No headache, no mood dip.",
      name: "Alyssa N.",
    },
  ],
  Value: [
    {
      title: "Cheaper than my stack",
      body: "I was buying citrulline, beta-alanine and caffeine separately — ~$90/month. This is $49.99.",
      name: "Marcus B.",
    },
    {
      title: "30 full scoops",
      body: "A true 30-serving tub at full dose. Not '2 scoops = 1 serving' games.",
      name: "Vic S.",
    },
    {
      title: "Subscription is a no-brainer",
      body: "15% off, arrives before I run out, and I can skip anytime. Easiest sub I have.",
      name: "Jill E.",
    },
  ],
};

export default function ReviewsSection() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="relative bg-sand py-12 lg:py-20 overflow-hidden">
      <Texture opacity={0.2} />
      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-0">
        <div className="flex flex-col items-center gap-6">
          <H2 center>
            Even Skeptics
            <br />
            Become Believers
          </H2>
          <div className="no-scrollbar flex w-full gap-2 overflow-x-auto lg:justify-center">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-sans font-bold transition-colors cursor-pointer ${
                  tab === t ? "bg-ink text-cream border-ink" : "text-ink-2 border-ink-2/25 hover:border-ink-2"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <div
          ref={scroller}
          className="no-scrollbar mx-auto flex max-w-[1200px] snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:px-0"
        >
          {REVIEWS[tab].map((r) => (
            <article
              key={r.name}
              className="flex w-[300px] shrink-0 snap-start flex-col gap-4 rounded-xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-18px_rgba(22,16,9,0.4)] lg:w-[360px] lg:p-8"
            >
              <Stars size="w-4 h-4" />
              <h3 className="font-display text-[22px] lg:text-[24px] font-bold leading-7 text-ink">{r.title}</h3>
              <p className="text-[14px] lg:text-[15px] leading-6 text-cocoa">{r.body}</p>
              <div className="mt-auto flex items-center gap-2 pt-2">
                <span className="font-sans text-[13px] font-bold text-ink-2">{r.name}</span>
                <span className="flex items-center gap-1 text-[12px] text-cocoa">
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 text-moss" fill="currentColor">
                    <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm2.9 4.1-3.6 4a.6.6 0 0 1-.9 0L3.1 6.7a.6.6 0 1 1 .8-.8l1 1.2 3.2-3.5a.6.6 0 1 1 .8.9Z" />
                  </svg>
                  Verified Buyer
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            aria-label="Scroll reviews left"
            onClick={() => scrollBy(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-2/25 text-ink-2 transition-colors hover:border-ink-2 cursor-pointer"
          >
            <svg viewBox="0 0 8 13" className="h-4 w-auto" fill="currentColor">
              <path d="M6.478 0 8 1.545 3.055 6.5 8 11.455 6.478 13 0 6.5 6.478 0Z" />
            </svg>
          </button>
          <button
            aria-label="Scroll reviews right"
            onClick={() => scrollBy(1)}
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
