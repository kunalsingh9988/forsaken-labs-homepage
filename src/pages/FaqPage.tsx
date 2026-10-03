import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import FaqSection from "../components/FaqSection";
import { Reveal } from "../components/ui";

const ORDER_FAQS = [
  {
    q: "When will my order ship?",
    a: "Orders placed before 2pm ET ship the same business day; orders after that ship within 24 hours. You'll get a tracking link by email the moment your label is created.",
  },
  {
    q: "How much is shipping?",
    a: "Flat $4.99 US shipping — free on orders over $50. Subscriptions always ship free. International rates are calculated at checkout.",
  },
  {
    q: "How do I manage my subscription?",
    a: "Skip, pause, change flavors, or cancel anytime from your account — no emails required and no lock-in. We send a reminder 3 days before every charge.",
  },
  {
    q: "What if I don't like it?",
    a: "Every first order is covered by the 30-day Forsaken Guarantee. Email us within 30 days and we'll refund you — no tub to ship back.",
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship to the US, Canada, UK, and Australia. Duties and taxes are shown at checkout where applicable.",
  },
];

function OrderAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-[720px] divide-y divide-line">
      {ORDER_FAQS.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span className="text-[16px] font-sans font-extrabold text-ink">{f.q}</span>
            <svg
              viewBox="0 0 12 12"
              className={`h-3 w-3 shrink-0 text-cocoa transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M1 3.5 6 8.5 11 3.5" />
            </svg>
          </button>
          {open === i && <p className="pb-5 text-[14px] font-sans leading-6 text-cocoa">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="Support" title="Got Questions?">
        Everything you need to know about Citrus Surge, shipping, subscriptions, and the
        Forsaken Guarantee.
      </PageHero>
      <Reveal><FaqSection /></Reveal>
      <section className="bg-sand px-5 py-12 lg:py-16">
        <h2 className="text-center font-display text-[26px] font-bold text-ink lg:text-[34px]">
          Orders &amp; Shipping
        </h2>
        <div className="mt-8">
          <OrderAccordion />
        </div>
      </section>
      <section className="bg-cream px-5 py-14 lg:py-16">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-line bg-sand-2 p-8 text-center lg:p-10">
          <h2 className="font-display text-[24px] font-bold text-ink lg:text-[28px]">
            Still stuck? Talk to a human.
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] text-[14px] font-sans leading-6 text-cocoa">
            Our support team answers within one business day — usually much faster.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-lg bg-ink px-7 py-3.5 text-[15px] font-sans font-bold text-cream transition hover:bg-espresso"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
