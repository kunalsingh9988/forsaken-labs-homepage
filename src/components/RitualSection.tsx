import { CheckCircle, Eyebrow, H2 } from "./ui";

const POINTS = [
  "One scoop, 15 minutes before you touch the bar",
  "350mg of clean caffeine — no jitters, no crash",
  "8g of pure L-citrulline for unreal pumps",
  "Full-disclosure label — every dose listed",
  "Third-party tested for banned substances",
];

export default function RitualSection() {
  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-[1200px] lg:h-[656px] flex flex-col-reverse lg:flex-row items-stretch">
        <div className="lg:w-1/2 relative min-h-[320px] lg:min-h-0">
          <img
            src="/images/scoop-shaker-gym.jpg"
            alt="A lifter scooping Citrus Surge into a shaker bottle"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="lg:w-1/2 flex items-center px-5 py-12 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>The Forsaken Ritual</Eyebrow>
            <H2 className="text-cream">
              A Better Daily
              <br />
              Pre-Workout Ritual
            </H2>
            <ul className="flex flex-col gap-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle tone="light" />
                  <span className="text-[15px] lg:text-[16px] leading-6 text-cream/90">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#flavors"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-lg border border-cream bg-cream px-5 py-[13px] text-[16px] leading-[18.6px] text-ink transition-colors hover:bg-sand-2"
            >
              Try Citrus Surge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
