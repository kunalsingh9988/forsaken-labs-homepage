import { H2, Texture } from "./ui";

const THUMBS = [
  { src: "/images/ugc-scoop-kitchen.jpg", pos: "object-[45%_35%]" },
  { src: "/images/ugc-park-tub.jpg", pos: "object-[55%_35%]" },
  { src: "/images/tub-solo-marble-splash.jpg", pos: "object-center" },
  { src: "/images/ugc-locker-selfie.jpg", pos: "object-[50%_35%]" },
  { src: "/images/ugc-shop-point.jpg", pos: "object-[45%_35%]" },
  { src: "/images/tub-inferno.jpg", pos: "object-[50%_55%]" },
  { src: "/images/ugc-car-gym.jpg", pos: "object-[60%_35%]" },
  { src: "/images/flatlay-dark.jpg", pos: "object-[50%_40%]" },
  { src: "/images/ugc-desk-tub.jpg", pos: "object-[58%_30%]" },
  { src: "/images/ugc-home-scoop.jpg", pos: "object-[50%_35%]" },
  { src: "/images/ugc-gym-selfie.jpg", pos: "object-[40%_30%]" },
];

export default function VideoStrip() {
  return (
    <section className="relative bg-cream py-10 lg:py-14 overflow-hidden">
      <div className="px-5 lg:px-[120px]">
        <H2 center>Trusted by Lifters Everywhere</H2>
      </div>

      <div className="relative mt-8">
        <Texture opacity={0.1} />
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 lg:px-[120px]">
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
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 14 16" className="w-4 h-4 translate-x-[1px] text-ink" fill="currentColor">
                  <path d="M0 0l14 8-14 8V0Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
