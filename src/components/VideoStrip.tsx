import { H2, Texture } from "./ui";

const THUMBS = [
  { src: "/images/scoop-shaker-gym.jpg", pos: "object-[40%_top]" },
  { src: "/images/hero-trio-dark.jpg", pos: "object-[15%_center]" },
  { src: "/images/tub-bench-dark.jpg", pos: "object-center" },
  { src: "/images/scoop-overhead-marble.jpg", pos: "object-[30%_center]" },
  { src: "/images/tub-bench-shaker.jpg", pos: "object-[55%_center]" },
  { src: "/images/tub-marble-bright.jpg", pos: "object-[40%_center]" },
  { src: "/images/hero-trio-dark.jpg", pos: "object-[85%_center]" },
];

export default function VideoStrip() {
  return (
    <section className="relative bg-cream py-10 lg:py-14 overflow-hidden">
      <div className="px-5 lg:px-[120px]">
        <H2 center>Trusted by Lifters Everywhere</H2>
      </div>

      <div className="relative mt-8">
        <Texture opacity={0.1} />
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 lg:justify-center lg:px-[120px]">
          {THUMBS.map((t, i) => (
            <div
              key={i}
              className="group relative w-[150px] h-[267px] lg:w-[192px] lg:h-[341px] shrink-0 rounded-lg overflow-hidden bg-ink-2 cursor-pointer"
            >
              <img
                src={t.src}
                alt={`Lifter using Forsaken Labs Citrus Surge, clip ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${t.pos}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/15 transition-colors duration-300 group-hover:bg-ink/5" />
              {i === 0 && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-cream/90">
                  <svg viewBox="0 0 14 16" className="w-4 h-4 translate-x-[1px] text-ink" fill="currentColor">
                    <path d="M0 0l14 8-14 8V0Z" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
