const ITEMS = [
  { icon: "/assets/icons/icon-vitamins.svg", label: "Insane Focus" },
  { icon: "/assets/icons/icon-bolt.svg", label: "Skin-Splitting Pumps" },
  { icon: "/assets/icons/icon-omega.svg", label: "Relentless Energy" },
  { icon: "/assets/icons/icon-adaptogens.svg", label: "Mental Clarity" },
  { icon: "/assets/icons/icon-protein.svg", label: "Explosive Power" },
  { icon: "/assets/icons/icon-drop.svg", label: "Zero Crash" },
  { icon: "/assets/icons/icon-leaf.svg", label: "Transparent Label" },
  { icon: "/assets/icons/icon-minerals.svg", label: "Clinical Doses" },
  { icon: "/assets/icons/icon-berry.svg", label: "Elite Endurance" },
  { icon: "/assets/icons/icon-probiotics.svg", label: "Third-Party Tested" },
  { icon: "/assets/icons/icon-fiber.svg", label: "Made in USA" },
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative bg-orange py-6 lg:py-0 lg:h-[104px] overflow-hidden" aria-label="Forsaken Labs benefits">
      <div className="texture absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div className="marquee-track flex items-center gap-12 lg:gap-16 w-max lg:h-full">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <img src={item.icon} alt="" className="w-6 h-6 [filter:brightness(0)]" />
            <span className="font-mulish font-bold text-[15px] lg:text-[16px] leading-5 text-ink whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
