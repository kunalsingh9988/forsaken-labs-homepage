import { H2, Texture } from "./ui";

const STATS = [
  { value: "94%", label1: "felt insane focus &", label2: "locked-in drive" },
  { value: "91%", label1: "noticed skin-splitting", label2: "pumps" },
  { value: "89%", label1: "reported zero crash", label2: "post-session" },
  { value: "85%", label1: "hit new PRs within", label2: "their first month" },
];

const COLLAGE = [
  { src: "/images/flatlay-dark.jpg", alt: "Citrus Surge flat lay with oranges, shaker and dumbbell", pos: "object-[50%_35%]" },
  { src: "/images/tub-bench-dark.jpg", alt: "Citrus Surge tub on a gym bench", pos: "object-[40%_60%]" },
  { src: "/images/tub-splash-white.jpg", alt: "Citrus Surge with fresh orange splash", pos: "object-center" },
  { src: "/images/tub-solo-marble-splash.jpg", alt: "Citrus Surge tub with a citrus splash on marble", pos: "object-center" },
];

const FOOTNOTE = "Post-purchase survey (June 2026) of over 1,500 customers using Citrus Surge at least 4 times a week.";

export default function StatsSection() {
  return (
    <section className="relative bg-sand px-5 py-10 lg:px-[120px] lg:py-12 overflow-hidden">
      <Texture opacity={0.2} />
      <div className="relative mx-auto max-w-[1200px] flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 w-full">
          <H2 center className="lg:text-left">What Lifters Are Saying</H2>
          <p className="mt-4 text-center lg:text-left text-[15px] lg:text-[16px] leading-6 text-cocoa">
            Here&apos;s what the Forsaken community reported<sup className="text-[10px]">†</sup> after putting Citrus Surge to work:
          </p>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="bg-sand-2 rounded-md px-4 py-6 flex flex-col items-center text-center self-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgba(22,16,9,0.35)]"
              >
                <span className="font-sans font-medium text-[32px] leading-9 text-ink">{s.value}</span>
                <span className="mt-2 text-[12px] leading-4 text-ink">
                  {s.label1}
                  <br />
                  <span className="font-medium">{s.label2}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 hidden text-center text-[11px] leading-4 text-cocoa/80 lg:block lg:text-left">
            <sup>†</sup>
            {FOOTNOTE}
          </p>
        </div>

        <div className="w-full max-w-[480px] lg:w-[580px] shrink-0">
          <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden lg:aspect-[580/432] aspect-square">
            {COLLAGE.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover ${img.pos}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] leading-4 text-cocoa/80 lg:hidden">
          <sup>†</sup>
          {FOOTNOTE}
        </p>
      </div>
    </section>
  );
}
