import { Stars } from "./ui";

export default function Hero() {
  return (
    <section className="relative">
      {/* bg image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-trio-dark.jpg"
          alt="Forsaken Labs Citrus Surge pre-workout tubs surrounded by fresh oranges"
          className="h-full w-full object-cover object-[70%_center] lg:object-center"
        />
        {/* readability scrim — keeps the photo visible while letting text sit on it */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-ink/10 lg:via-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/30 lg:to-transparent" />
      </div>

      <div className="relative flex min-h-[720px] lg:min-h-0 lg:h-[742px] flex-col justify-center">
        <div className="w-full px-5 lg:px-[120px]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 py-16 text-center lg:mx-0 lg:items-start lg:text-left">
            {/* rating row */}
            <div className="flex items-end gap-2">
              <Stars size="w-[15px] h-[15px]" />
              <span className="text-[12px] leading-4 text-cream">1,000+ 5-Star Reviews</span>
            </div>

            <h1 className="font-display font-bold text-cream text-[40px] leading-[44px] lg:text-[64px] lg:leading-[72px]">
              <span className="lg:block">Built for Lifters</span>{" "}
              <span className="lg:block">Who Demand More</span>
            </h1>

            <p className="text-[16px] leading-6 lg:text-[18px] lg:leading-7 text-cream/90 max-w-[480px]">
              Every scoop of Citrus Surge packs clinical doses, fully transparent ingredients,
              and zero artificial junk — engineered for brutal workouts and relentless progress.
            </p>

            <a
              href="#flavors"
              className="mt-4 inline-flex w-full max-w-[300px] items-center justify-center rounded-lg border border-orange bg-orange px-5 py-[13px] text-[16px] leading-[18.6px] text-ink transition-colors hover:bg-orange-2 lg:w-auto lg:min-w-[258px]"
            >
              Try Citrus Surge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
