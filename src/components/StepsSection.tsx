import { H2, Texture } from "./ui";

const STEPS = [
  {
    n: "01",
    title: "Scoop",
    text: "One full scoop of Citrus Surge into 8–10oz of cold water.",
    img: "/images/flatlay-dark.jpg",
    pos: "object-[55%_42%]",
  },
  {
    n: "02",
    title: "Shake",
    text: "Shake hard for 15 seconds — it mixes clean. No grit, no clumps.",
    img: "/images/tub-marble-bright.jpg",
    pos: "object-[65%_center]",
  },
  {
    n: "03",
    title: "Dominate",
    text: "Drink 15–20 minutes before your session. Then go to war.",
    img: "/images/scoop-shaker-gym.jpg",
    pos: "object-[50%_30%]",
  },
];

export default function StepsSection() {
  return (
    <section className="relative bg-sand px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.2} />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-10">
        <H2 center>
          Scoop. Shake.
          <br />
          Dominate.
        </H2>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-4">
              <div className="group relative aspect-[368/276] overflow-hidden rounded-lg">
                <img
                  src={s.img}
                  alt={`${s.title} — Citrus Surge`}
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${s.pos}`}
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 font-mulish text-[12px] font-extrabold tracking-[0.14em] text-orange-2">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-[24px] leading-7 font-bold text-ink">{s.title}</h3>
              <p className="text-[15px] leading-6 text-cocoa">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
