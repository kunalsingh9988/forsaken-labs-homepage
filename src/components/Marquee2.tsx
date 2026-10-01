const ITEMS = [
  "No Proprietary Blends",
  "No Artificial Flavors",
  "No Fillers",
  "No Crash",
  "Fully Transparent Label",
  "cGMP Manufactured",
  "Third-Party Tested",
  "Made in USA",
];

export default function Marquee2() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative bg-cream py-6 lg:py-7 overflow-hidden border-y border-line">
      <div className="texture absolute inset-0 opacity-10 pointer-events-none" aria-hidden />
      <div className="marquee-track-slow flex w-max items-center">
        {row.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-5 font-sans font-medium text-[16px] lg:text-[18px] leading-6 text-ink-2 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
