import { H2, Texture } from "./ui";

const CERTS = [
  {
    title: "Heavy Metals",
    text: "Screened for lead, arsenic, cadmium & mercury on every batch.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 3 28 9v8c0 7-5 10.5-12 12C9 27.5 4 24 4 17V9l12-6Z" strokeLinejoin="round" />
        <path d="m11 16 3.4 3.4L21.5 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Banned Substances",
    text: "Certified free of banned stimulants and prohibited compounds.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="16" cy="16" r="12.5" />
        <path d="M8.5 8.5l15 15" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Label Accuracy",
    text: "Every dose verified — what's on the label is in the tub.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M11 11h10M11 16h10M11 21h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Purity & Potency",
    text: "Microbial and purity panels run by independent labs.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 3h6M15 3v8l-7.5 12A3 3 0 0 0 10 27h12a3 3 0 0 0 2.5-4.6L17 11V3" strokeLinejoin="round" />
        <path d="M11 20h10" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CertSection() {
  return (
    <section className="relative bg-cream px-5 py-12 lg:px-[120px] lg:py-20 overflow-hidden">
      <Texture opacity={0.1} />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <H2>
            Third-Party Tested for
            <br />
            Purity &amp; Potency
          </H2>
          <p className="max-w-[420px] text-[15px] lg:text-[16px] leading-7 text-cocoa">
            Every batch of Citrus Surge is sent to independent labs before it ships. No exceptions, no shortcuts.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-moss/15 px-4 py-2 font-sans text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#4f6b2a]">
            <svg viewBox="0 0 12 10" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1.5 5.5 4.5 8.5 10.5 1.5" />
            </svg>
            Tested &amp; Verified
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CERTS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-3 rounded-xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-[0_14px_36px_-16px_rgba(22,16,9,0.3)]"
            >
              <span className="text-orange">{c.icon}</span>
              <h3 className="font-sans text-[16px] font-extrabold text-ink-2">{c.title}</h3>
              <p className="text-[13px] leading-5 text-cocoa">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
