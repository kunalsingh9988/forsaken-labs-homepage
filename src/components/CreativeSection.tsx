import { H2, Texture } from "./ui";

const TILES = [
  { src: "/images/flatlay-dark.jpg", pos: "object-center" },
  { src: "/images/tub-solo-marble-splash.jpg", pos: "object-center" },
  { src: "/images/trio-glow.jpg", pos: "object-[55%_center]" },
  { src: "/images/tub-solo-dark.jpg", pos: "object-center" },
  { src: "/images/scoop-shaker-gym.jpg", pos: "object-[50%_15%]" },
  { src: "/images/scoop-overhead-marble.jpg", pos: "object-[50%_70%]" },
  { src: "/images/tub-bench-shaker.jpg", pos: "object-[55%_center]" },
  { src: "/images/tub-marble-bright.jpg", pos: "object-[60%_60%]" },
  { src: "/images/tub-splash-white.jpg", pos: "object-[30%_30%]" },
];

export default function CreativeSection() {
  return (
    <section className="relative bg-cream px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.1} />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid aspect-square w-full max-w-[568px] grid-cols-3 gap-2 overflow-hidden rounded-xl mx-auto">
          {TILES.map((t, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={t.src}
                alt={i === 0 ? "Citrus Surge content from the Forsaken community" : ""}
                className={`h-full w-full object-cover transition-transform duration-500 hover:scale-110 ${t.pos}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-6">
          <H2>
            Fuel Your
            <br />
            Grind
          </H2>
          <p className="max-w-[440px] text-[15px] lg:text-[16px] leading-7 text-cocoa">
            Pre-lift ritual, mid-set veins, post-PR celebration — show us how you Surge. Tag{" "}
            <a
              href="https://www.instagram.com/forsaken_labs/"
              target="_blank"
              rel="noreferrer"
              className="font-mulish font-bold text-orange hover:underline"
            >
              @forsaken_labs
            </a>{" "}
            to get featured.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/forsaken_labs/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-ink bg-ink px-5 py-[13px] text-[16px] leading-[18.6px] text-cream transition-colors hover:bg-espresso"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.tiktok.com/@forsakenlabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-ink-2/30 px-5 py-[13px] text-[16px] leading-[18.6px] text-ink-2 transition-colors hover:border-ink-2"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
