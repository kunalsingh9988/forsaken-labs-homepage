import { useState } from "react";
import { CheckPill, CrossPill, H2, Texture } from "./ui";

const TABS = ["Typical Pre-Workout", "Energy Drink", "Black Coffee"] as const;

const ROWS: { label: string; cells: [boolean, boolean, boolean] }[] = [
  { label: "Fully transparent label", cells: [false, false, true] },
  { label: "Clinical doses, no pixie dusting", cells: [false, false, false] },
  { label: "Skin-splitting pumps", cells: [false, false, false] },
  { label: "Insane focus for hours", cells: [false, false, false] },
  { label: "Zero crash, zero jitters", cells: [false, false, true] },
  { label: "No artificial flavors or dyes", cells: [false, false, true] },
  { label: "Third-party tested", cells: [false, false, false] },
];

export default function CompareTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-cream px-5 py-10 lg:px-[120px] lg:py-16 overflow-hidden">
      <Texture opacity={0.12} />
      <div className="relative mx-auto max-w-[1200px] flex flex-col items-center gap-8">
        <H2 center>
          More in Every Scoop
          <br />
          Than the Rest
        </H2>

        <div className="flex flex-wrap justify-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-[14px] font-sans font-bold transition-colors cursor-pointer ${
                active === i
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-ink-2 border-ink-2/25 hover:border-ink-2"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="w-full max-w-[920px] rounded-xl border border-line bg-cream overflow-hidden">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] items-stretch">
            <div className="px-4 lg:px-6 py-4" />
            <div className="bg-sand-2 px-3 lg:px-6 py-4 flex flex-col items-center justify-center gap-0.5">
              <span className="font-sans font-black text-[13px] lg:text-[15px] tracking-[0.06em] text-ink">FORSAKEN LABS</span>
              <span className="text-[11px] text-cocoa">Citrus Surge</span>
            </div>
            <div className="px-3 lg:px-6 py-4 flex items-center justify-center">
              <span className="font-sans font-bold text-[13px] lg:text-[15px] text-ink-2 text-center">
                {TABS[active]}
              </span>
            </div>
          </div>
          {ROWS.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-[1.4fr_1fr_1fr] items-stretch ${i % 2 ? "bg-sand/40" : ""}`}>
              <div className="px-4 lg:px-6 py-3.5 text-[13px] lg:text-[15px] leading-5 text-ink-2 flex items-center">
                {row.label}
              </div>
              <div className="bg-sand-2/70 px-3 lg:px-6 py-3.5 flex items-center justify-center">
                <CheckPill />
              </div>
              <div className="px-3 lg:px-6 py-3.5 flex items-center justify-center">
                {row.cells[active] ? <CheckPill dark /> : <CrossPill />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
