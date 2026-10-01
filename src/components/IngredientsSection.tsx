import { useEffect, useRef, useState } from "react";
import { H2 } from "./ui";

const STATS = [
  { value: "8g", label: "L-Citrulline" },
  { value: "3.2g", label: "Beta-Alanine" },
  { value: "350mg", label: "Caffeine" },
  { value: "0g", label: "Sugar" },
];

const FACTS: [string, string][] = [
  ["L-Citrulline", "8,000mg"],
  ["Beta-Alanine (CarnoSyn®)", "3,200mg"],
  ["Caffeine Anhydrous", "350mg"],
  ["L-Tyrosine", "1,000mg"],
  ["Alpha-GPC", "300mg"],
  ["Betaine Anhydrous", "2,500mg"],
  ["Taurine", "1,000mg"],
  ["Nitrosigine®", "1,500mg"],
];

export default function IngredientsSection() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open) d.showModal();
    else d.close();
  }, [open]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/scoop-overhead-marble.jpg"
          alt=""
          className="h-full w-full object-cover object-[25%_center]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/40 via-cream/70 to-cream/95" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-14 lg:grid-cols-2 lg:py-24">
        <div className="hidden lg:block" />
        <div className="flex flex-col items-start gap-6">
          <H2>
            Radical Transparency,
            <br />
            Clinical Doses
          </H2>
          <p className="max-w-[480px] text-[15px] lg:text-[16px] leading-7 text-espresso">
            We list every ingredient and every dose — no proprietary blends, ever. If it&apos;s not on the
            label, it&apos;s not in the tub.
          </p>

          <div className="grid w-full max-w-[520px] grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 border-l-2 border-orange pl-4">
                <span className="font-display text-[28px] lg:text-[32px] font-bold leading-8 text-ink">{s.value}</span>
                <span className="text-[12px] lg:text-[13px] font-mulish font-bold uppercase tracking-[0.08em] text-cocoa">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-2 inline-flex items-center gap-2 text-[15px] font-mulish font-bold text-ink-2 underline underline-offset-4 hover:text-orange transition-colors cursor-pointer"
          >
            See Full Supplement Facts
            <svg viewBox="0 0 8 13" className="h-3.5 w-auto" fill="currentColor">
              <path d="M1.522 0 0 1.545 4.945 6.5 0 11.455 1.522 13 8 6.5 1.522 0Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* supplement facts dialog */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
        className="m-auto w-[92vw] max-w-[460px] rounded-xl bg-cream p-0 shadow-2xl backdrop:bg-ink/60"
      >
        <div className="flex items-center justify-between border-b-4 border-ink px-6 pb-4 pt-6">
          <h3 className="font-mulish font-black text-[22px] leading-6 text-ink">Supplement Facts</h3>
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="rounded-full p-2 hover:bg-sand transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-[12px] text-cocoa pb-3">Serving size: 1 scoop · Servings per container: 30</p>
          <ul className="divide-y divide-ink-2/10">
            {FACTS.map(([name, dose]) => (
              <li key={name} className="flex items-center justify-between py-2.5">
                <span className="text-[14px] font-medium text-ink-2">{name}</span>
                <span className="font-mulish text-[14px] font-bold text-ink">{dose}</span>
              </li>
            ))}
          </ul>
          <p className="pt-4 pb-2 text-[11px] leading-4 text-cocoa/80">
            Other ingredients: natural citrus flavor, citric acid, stevia extract, silicon dioxide. Third-party tested
            for heavy metals and banned substances.
          </p>
        </div>
      </dialog>
    </section>
  );
}
