import { CheckCircle, H2 } from "./ui";

const PERKS = [
  "Save 15% on every order — automatically",
  "Early access to new flavor drops",
  "Pre-shipment reminders so you never run dry",
  "Swap flavors or skip a month anytime",
  "No commitment — cancel in two clicks",
];

export default function SubscribeSection() {
  return (
    <section className="relative bg-ink">
      <div className="flex flex-col lg:h-[656px] lg:flex-row items-stretch">
        <div className="relative min-h-[320px] lg:min-h-0 lg:w-1/2">
          <img
            src="/images/tub-bench-warm.jpg"
            alt="Citrus Surge tub on a gym bench with a lifting strap and dumbbells behind"
            className="absolute inset-0 h-full w-full object-cover object-[8%_center]"
            loading="lazy"
          />
        </div>

        <div className="flex items-center px-5 py-12 lg:w-1/2 lg:px-16 lg:py-16 xl:px-24">
          <div className="flex flex-col items-start gap-6">
            <H2 className="text-cream">
              Built for the
              <br />
              Daily Grind
            </H2>
            <p className="text-[15px] lg:text-[16px] leading-7 text-cream/80 max-w-[460px]">
              Subscribe and never face an empty tub. Your Surge shows up before you need it — every time.
            </p>
            <ul className="flex flex-col gap-4">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle tone="light" />
                  <span className="text-[15px] lg:text-[16px] leading-6 text-cream/90">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#flavors"
              className="mt-2 inline-flex items-center justify-center rounded-lg border border-orange bg-orange px-5 py-[13px] text-[16px] leading-[18.6px] text-ink transition-colors hover:bg-orange-2"
            >
              Subscribe &amp; Save 15%
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
