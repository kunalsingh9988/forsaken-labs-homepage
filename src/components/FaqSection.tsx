import { H2, Texture } from "./ui";

const FAQS = [
  {
    q: "What is Forsaken Labs?",
    a: "Forsaken Labs is a performance nutrition brand built for lifters who refuse to settle. We make fully-dosed, fully-disclosed supplements — starting with Citrus Surge, our flagship pre-workout. No proprietary blends, no artificial junk, no compromises.",
  },
  {
    q: "What's in Citrus Surge?",
    a: "One scoop delivers 8g L-citrulline, 3.2g CarnoSyn beta-alanine, 350mg caffeine, plus Alpha-GPC, L-tyrosine, betaine, taurine and Nitrosigine — every dose printed on the label. Naturally flavored, zero sugar, zero artificial dyes.",
  },
  {
    q: "How is it different from other pre-workouts?",
    a: "Most pres hide underdosed ingredients behind proprietary blends. Citrus Surge lists every dose at the full clinical level, gets third-party tested each batch, and skips the fillers entirely. You're paying for what works — nothing else.",
  },
  {
    q: "Who is Citrus Surge for?",
    a: "Lifters who demand more — powerlifters, bodybuilders, CrossFitters, and anyone who trains with intent. If you're new to high-stim pre-workouts, start with half a scoop to assess tolerance.",
  },
  {
    q: "How much caffeine is in a scoop?",
    a: "350mg of caffeine anhydrous — roughly three strong cups of coffee, smoothed out with focus ingredients so it feels clean rather than jittery.",
  },
  {
    q: "When should I take it?",
    a: "Mix one scoop with 8–10oz of cold water 15–20 minutes before training. Avoid taking it within 6 hours of bedtime. Do not exceed one scoop per day.",
  },
  {
    q: "Do you offer a guarantee?",
    a: "Yes — every order is backed by our Forsaken Guarantee. If Citrus Surge isn't the best pre-workout you've ever used within 30 days, we'll refund you. No return shipping, no hassle.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative bg-sand-2 px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.15} />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <H2>Got Questions?</H2>
          <p className="max-w-[380px] text-[15px] lg:text-[16px] leading-7 text-cocoa">
            Everything you need to know about Citrus Surge and the Forsaken way. Still stuck?{" "}
            <a href="#footer" className="font-sans font-bold text-orange underline underline-offset-4">
              Talk to us
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col">
          {FAQS.map((f) => (
            <details key={f.q} className="faq border-b border-ink-2/15 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5">
                <span className="font-sans text-[15px] lg:text-[17px] font-bold text-ink-2">{f.q}</span>
                <svg
                  viewBox="0 0 18 18"
                  className="chev h-[18px] w-[18px] shrink-0 text-ink-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m4.5 6.75 4.5 4.5 4.5-4.5" />
                </svg>
              </summary>
              <div className="faq-body">
                <div>
                  <p className="pb-5 text-[14px] lg:text-[15px] leading-6 text-cocoa">{f.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
