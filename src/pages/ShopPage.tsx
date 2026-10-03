import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Stars } from "../components/ui";

const PRODUCTS = [
  {
    name: "Citrus Surge",
    sub: "Pre-Workout · 30 servings",
    price: "$49.99",
    was: "$60.00",
    img: "/images/tub-solo-marble-splash.jpg",
    pos: "object-center",
    badge: "Best Seller",
    href: "/product",
  },
  {
    name: "Subscribe & Save",
    sub: "Citrus Surge monthly · save 15%",
    price: "$42.49/mo",
    was: "$49.99",
    img: "/images/tub-bench-warm.jpg",
    pos: "object-[20%_center]",
    badge: "Best Value",
    href: "/product",
  },
];

const COMING = ["Blood Rush", "Titan's Blood", "Midnight Forge"];

export default function ShopPage() {
  return (
    <main>
      <PageHero eyebrow="Shop" title="Every Tub, Built Like It Counts">
        One formula. Zero shortcuts. More flavors are in the lab — Citrus Surge leads the way.
      </PageHero>

      <section className="bg-cream px-5 py-12 lg:px-[120px] lg:py-16">
        <div className="mx-auto grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              className="group overflow-hidden rounded-2xl border border-line bg-sand-2 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className={`h-full w-full object-cover ${p.pos} transition duration-500 group-hover:scale-[1.03]`}
                />
                <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-[11px] font-sans font-extrabold uppercase tracking-wide text-ink">
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Stars size="h-[13px] w-[13px]" />
                  <span className="text-[12px] font-sans font-bold text-cocoa">1,000+ reviews</span>
                </div>
                <h2 className="mt-2 font-display text-[22px] font-bold text-ink group-hover:text-orange">
                  {p.name}
                </h2>
                <p className="mt-0.5 text-[13px] font-sans text-cocoa">{p.sub}</p>
                <p className="mt-3 text-[16px] font-sans font-extrabold text-ink">
                  {p.price} <span className="ml-1 text-[13px] font-bold text-cocoa line-through">{p.was}</span>
                </p>
              </div>
            </Link>
          ))}

          {COMING.map((name) => (
            <div key={name} className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-cocoa/40 p-10 text-center">
              <p className="font-display text-[22px] font-bold text-cocoa/70">{name}</p>
              <p className="mt-1 text-[13px] font-sans text-cocoa/60">Coming soon</p>
              <Link to="/contact" className="mt-4 text-[13px] font-sans font-bold text-orange underline underline-offset-4">
                Get notified →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
