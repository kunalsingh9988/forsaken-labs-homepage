import { Link } from "react-router-dom";
import { Stars, Texture, Eyebrow } from "../components/ui";

function StoryBlock({
  title,
  children,
  align = "center",
}: {
  title: string;
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section className="bg-cream px-5 py-12 lg:py-16">
      <div className={`mx-auto max-w-[720px] ${align === "center" ? "text-center" : ""}`}>
        <h2 className="font-display text-[30px] font-bold leading-[38px] tracking-[-0.01em] text-ink lg:text-[42px] lg:leading-[48px]">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-[15.5px] font-sans leading-7 text-cocoa">{children}</div>
      </div>
    </section>
  );
}

export default function StoryPage() {
  return (
    <main>
      {/* ---------- video hero ---------- */}
      <section className="relative">
        <img
          src="/images/trio-sunset.jpg"
          alt="Forsaken Labs tubs on rocks at sunset"
          className="h-[52vh] min-h-[380px] w-full object-cover object-center lg:h-[64vh]"
        />
        <div className="absolute inset-0 bg-ink/15" />
        <button
          className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-label="Watch our story video"
        >
          <span className="flex flex-col items-center gap-4">
            <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-cream bg-ink/35 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-orange lg:h-[92px] lg:w-[92px]">
              <svg viewBox="0 0 24 24" className="ml-1.5 h-8 w-8 fill-cream transition group-hover:fill-ink" aria-hidden>
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="text-[12px] font-sans font-extrabold uppercase tracking-[0.28em] text-cream">
              Watch Video
            </span>
          </span>
          <span className="absolute -bottom-6 left-1/2 h-5 w-[2px] -translate-x-1/2 bg-cream/70" aria-hidden />
        </button>
      </section>

      {/* ---------- act 1: the problem ---------- */}
      <StoryBlock title="In today’s market, a real pre-workout is hard to find.">
        <p>
          Shelves are stacked with underdosed formulas hiding behind “proprietary blends.” You pay for a
          stimulant bomb and a fairy dusting of the ingredients that actually build pumps, focus, and
          endurance — then crash an hour later.
        </p>
      </StoryBlock>

      <section className="bg-sand px-5 py-12 lg:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-[30px] font-bold leading-[38px] tracking-[-0.01em] text-ink lg:text-[42px] lg:leading-[48px]">
            So we set out to rebuild the pre-workout from zero
          </h2>
          <p className="mt-5 text-[15.5px] font-sans leading-7 text-cocoa">
            No marketing degrees. No white-label manufacturers. Just lifters who wanted one scoop that
            hit like it should — clinical doses, full-disclosure label, nothing hidden.
          </p>
        </div>
      </section>

      {/* ---------- act 2: split image + copy ---------- */}
      <section className="flex flex-col bg-cream lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/scoop-shaker-gym.jpg"
            alt="A lifter scooping Citrus Surge into a shaker"
            className="aspect-[4/3] w-full object-cover object-center lg:h-full lg:aspect-auto"
          />
        </div>
        <div className="relative flex w-full items-center bg-sand-2 px-6 py-12 lg:w-1/2 lg:p-14 xl:p-20">
          <Texture opacity={0.15} />
          <div className="relative">
            <h2 className="font-display text-[30px] font-bold leading-[38px] tracking-[-0.01em] text-ink lg:text-[42px] lg:leading-[48px]">
              We became obsessed with clinical doses and total transparency
            </h2>
            <div className="mt-5 space-y-4 text-[15.5px] font-sans leading-7 text-cocoa">
              <p>
                8 grams of L-citrulline, not 1.5. A real 3.2 grams of CarnoSyn beta-alanine. 350mg of
                caffeine paired with Alpha-GPC and L-tyrosine so the energy feels like focus — not
                anxiety.
              </p>
              <p>
                Early one morning, mid-session between sets, the idea finally clicked… what if one
                scoop could cover everything — pumps, drive, endurance — with nothing on the label
                hidden from you?
              </p>
              <p>
                A scoop to fuel brutal training, respect the lifter drinking it, and hold up under a
                lab microscope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- signature ---------- */}
      <StoryBlock title="Every tub is still built that way.">
        <p>
          We’re honored to share this labor of love, and hope it helps you chase your own PRs and
          fuel your own grind.
        </p>
        <p className="text-[17px] font-display font-bold text-ink">
          It’s amazing what you can achieve when you feel your best.
        </p>
        <div className="mt-8">
          <p className="font-display text-[26px] font-bold italic text-ink">The Forsaken Team</p>
          <p className="mt-1 text-[12px] font-sans font-extrabold uppercase tracking-[0.2em] text-cocoa">
            Founders &amp; Lifters
          </p>
        </div>
      </StoryBlock>

      {/* ---------- review + CTA card ---------- */}
      <section className="bg-cream px-5 pb-16 lg:pb-24">
        <div className="mx-auto grid max-w-[900px] overflow-hidden rounded-2xl border border-line bg-sand-2 lg:grid-cols-2">
          <img
            src="/images/tub-solo-marble-splash.jpg"
            alt="Citrus Surge tub with citrus splash on marble"
            className="h-64 w-full object-cover object-center lg:h-full"
          />
          <div className="flex flex-col items-center justify-center gap-4 p-8 text-center lg:p-12">
            <Stars />
            <p className="text-[12px] font-sans font-extrabold uppercase tracking-[0.2em] text-cocoa">
              1,000+ five-star reviews
            </p>
            <p className="font-display text-[22px] font-bold leading-8 text-ink">
              “The label literally tells you everything. First pre that didn’t lie to me.”
            </p>
            <p className="text-[13px] font-sans font-bold text-cocoa">— Marcus T., Verified Buyer</p>
            <Link
              to="/product"
              className="mt-2 rounded-lg bg-orange px-7 py-3.5 text-[15px] font-sans font-extrabold text-ink shadow-[0_12px_30px_-10px_rgba(245,100,10,0.65)] transition hover:bg-orange-2"
            >
              TRY IT RISK-FREE
            </Link>
            <Link to="/guarantee" className="text-[12px] font-sans font-bold text-cocoa underline underline-offset-4 hover:text-orange">
              Backed by the Forsaken Guarantee
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- closing strip ---------- */}
      <section className="relative bg-ink px-5 py-16 text-cream lg:py-20">
        <Texture opacity={0.2} />
        <div className="relative mx-auto max-w-[760px] text-center">
          <Eyebrow>Built for lifters who demand more</Eyebrow>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-[40px] tracking-[-0.01em] lg:text-[46px] lg:leading-[52px]">
            One scoop. Nothing hidden.
          </h2>
          <Link
            to="/product"
            className="mt-8 inline-flex rounded-lg bg-orange px-8 py-4 text-[16px] font-sans font-extrabold text-ink shadow-[0_12px_30px_-10px_rgba(245,100,10,0.65)] transition hover:bg-orange-2"
          >
            Try Citrus Surge — $49.99
          </Link>
        </div>
      </section>
    </main>
  );
}
