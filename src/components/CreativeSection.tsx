import { H2, Texture } from "./ui";

const TILES = [
  { src: "/images/ugc-scoop-kitchen.jpg", pos: "object-[45%_35%]" },
  { src: "/images/ugc-gym-selfie.jpg", pos: "object-[40%_30%]" },
];

export default function CreativeSection() {
  return (
    <section className="relative bg-cream px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.1} />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid w-full max-w-[568px] grid-cols-2 gap-3 overflow-hidden mx-auto">
          {TILES.map((t, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl">
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
              className="font-sans font-bold text-orange hover:underline"
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
