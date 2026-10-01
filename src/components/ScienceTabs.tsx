import { useState } from "react";
import { CheckCircle, Eyebrow, H2, Texture } from "./ui";

const TABS = [
  {
    id: "focus",
    label: "Energy & Focus",
    img: "/images/tub-solo-dark.jpg",
    pos: "object-center",
    bullets: [
      "350mg of caffeine anhydrous for fast, clean energy",
      "L-tyrosine + Alpha-GPC to sharpen tunnel-vision focus",
      "No jittery spike — a smooth climb that holds for hours",
    ],
  },
  {
    id: "pumps",
    label: "Pumps",
    img: "/images/tub-splash-swirl.jpg",
    pos: "object-[50%_45%]",
    bullets: [
      "8g of pure L-citrulline — the full clinical dose",
      "Nitrosigine to keep blood flowing set after set",
      "Vascularity you can see by your second exercise",
    ],
  },
  {
    id: "strength",
    label: "Strength",
    img: "/images/trio-sunset.jpg",
    pos: "object-center",
    bullets: [
      "3.2g of CarnoSyn beta-alanine for muscular endurance",
      "Betaine anhydrous to support power output under load",
      "Built to show up in your logbook, not just the mirror",
    ],
  },
  {
    id: "endurance",
    label: "Endurance",
    img: "/images/trio-glow.jpg",
    pos: "object-center",
    bullets: [
      "Electrolyte support for sessions that run long",
      "Taurine to buffer fatigue when the volume climbs",
      "Same energy on your last set as your first",
    ],
  },
];

export default function ScienceTabs() {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section id="science" className="relative bg-cream px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.1} />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>The Science of the Surge</Eyebrow>
          <H2 center>
            Built to Hit Harder
          </H2>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className={`rounded-full border px-5 py-2.5 text-[14px] font-mulish font-bold transition-colors cursor-pointer ${
                active.id === t.id
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-ink-2 border-ink-2/25 hover:border-ink-2"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[560/400] overflow-hidden rounded-xl bg-sand-2">
            <img
              key={active.id}
              src={active.img}
              alt={`Citrus Surge — ${active.label}`}
              className={`h-full w-full object-cover ${active.pos}`}
              loading="lazy"
            />
          </div>
          <ul className="flex flex-col gap-5">
            {active.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle tone="dark" />
                <span className="text-[15px] lg:text-[17px] leading-7 text-ink-2">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
