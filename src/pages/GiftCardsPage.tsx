import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Texture } from "../components/ui";

export default function GiftCardsPage() {
  return (
    <main>
      <PageHero eyebrow="Gift Cards" title="Fuel Someone's Grind" tone="ink">
        Forsaken Labs gift cards are coming soon — the easiest gift for the lifter who
        never skips leg day.
      </PageHero>

      <section className="relative bg-cream px-5 py-14 lg:py-20">
        <Texture opacity={0.15} />
        <div className="relative mx-auto max-w-[640px] text-center">
          <div className="mx-auto flex h-44 w-72 items-center justify-center rounded-2xl bg-ink shadow-xl">
            <div className="text-center">
              <p className="font-sans text-[13px] font-extrabold tracking-[0.2em] text-orange">FORSaken LABS</p>
              <p className="mt-2 font-display text-[30px] font-bold text-cream">GIFT CARD</p>
            </div>
          </div>
          <p className="mt-8 text-[15px] font-sans leading-7 text-cocoa">
            Digital gift cards in $25, $50, and $100 — delivered instantly by email.
            Want to know the second they drop? Leave your email with the team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="rounded-lg bg-ink px-7 py-3.5 text-[15px] font-sans font-bold text-cream hover:bg-espresso">
              Notify Me
            </Link>
            <Link to="/product" className="rounded-lg bg-orange px-7 py-3.5 text-[15px] font-sans font-extrabold text-ink hover:bg-orange-2">
              Shop Citrus Surge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
