import { Eyebrow, Texture } from "./ui";

export default function AmbassadorSection() {
  return (
    <section className="relative bg-tan overflow-hidden">
      <Texture opacity={0.22} />
      <div className="relative flex flex-col lg:h-[600px] lg:flex-row items-stretch">
        <div className="relative min-h-[300px] lg:min-h-0 lg:w-1/2">
          <img
            src="/images/tub-inferno.jpg"
            alt="Citrus Surge tub on wet stone with a burst of orange and citrus around it"
            className="absolute inset-0 h-full w-full object-cover object-[50%_55%]"
            loading="lazy"
          />
        </div>

        <div className="flex items-center px-5 py-12 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="flex flex-col gap-6">
            <Eyebrow>From the Team</Eyebrow>
            <blockquote className="font-display font-bold text-[24px] leading-[34px] lg:text-[30px] lg:leading-[40px] text-ink">
              &ldquo;We didn&apos;t start Forsaken Labs to make another supplement. We started it because nothing on
              the shelf respected the lifter — fully dosed, fully disclosed, zero fluff.&rdquo;
            </blockquote>
            <figcaption className="text-[14px] leading-5 text-espresso">
              <span className="font-sans font-bold text-ink">The Forsaken Team</span>
              <span className="mx-2 opacity-50">·</span>
              Founders &amp; Lifters
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
