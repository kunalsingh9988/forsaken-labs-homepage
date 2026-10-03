import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

type Policy = { title: string; updated: string; sections: { h: string; p: string[] }[] };

const POLICIES: Record<string, Policy> = {
  shipping: {
    title: "Shipping & Returns",
    updated: "October 2026",
    sections: [
      {
        h: "Shipping",
        p: [
          "Orders placed before 2pm ET ship the same business day. Everything else ships within 24 hours, Monday through Friday. You'll receive a tracking link by email the moment your order leaves our facility.",
          "US shipping is a flat $4.99 and free on orders over $50. Subscriptions always ship free. Transit time is typically 2–5 business days.",
          "We currently ship to the US, Canada, United Kingdom, and Australia. International duties and taxes are calculated and shown at checkout where applicable.",
        ],
      },
      {
        h: "Returns",
        p: [
          "Every first order is covered by the 30-day Forsaken Guarantee — if Citrus Surge isn't for you, email support@forsakenlabs.com within 30 days of delivery for a full refund. No tub to ship back.",
          "For unopened tubs returned within 30 days, we refund the product price in full. Return shipping is the customer's responsibility unless the order arrived damaged or incorrect.",
          "Damaged, missing, or incorrect items are replaced or refunded immediately — just send us a photo of what arrived.",
        ],
      },
    ],
  },
  guarantee: {
    title: "The Forsaken Guarantee",
    updated: "October 2026",
    sections: [
      {
        h: "Love it or your money back",
        p: [
          "We stand behind every scoop. Try Citrus Surge for a full 30 days — finish the tub if you want — and if you don't love the pumps, the focus, and the clean energy, we'll refund every cent.",
          "No return shipping. No forms. No interrogation. One email to support@forsakenlabs.com and it's handled.",
        ],
      },
      {
        h: "How to claim",
        p: [
          "Email support@forsakenlabs.com with your order number within 30 days of delivery. Include the email you ordered with and we'll process the refund to your original payment method within 3–5 business days.",
          "The guarantee covers your first order, one tub per customer. Repeat purchases can be returned unopened under our standard returns policy.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "October 2026",
    sections: [
      {
        h: "What we collect",
        p: [
          "When you shop with us we collect the details needed to fulfill your order: name, shipping address, email, and payment information (processed securely by our payment provider — we never see or store your full card number).",
          "We also collect browsing data — pages viewed, device type, and referral source — to improve the site and understand what our customers actually want.",
        ],
      },
      {
        h: "How we use it",
        p: [
          "Your information is used to fulfill orders, provide support, send order updates, and — only if you opt in — send marketing emails about drops and deals. You can unsubscribe from marketing at any time via the link in any email.",
          "We never sell your personal information to data brokers. Third parties we work with (payment processing, shipping, email) only receive what's required to perform their service.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You may request a copy of the data we hold about you, ask us to correct it, or ask us to delete it entirely by emailing support@forsakenlabs.com. We respond to data requests within 30 days.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "October 2026",
    sections: [
      {
        h: "Using this site",
        p: [
          "By using forsakenlabs.com and purchasing our products you agree to these terms. You must be at least 18 years old to purchase. Product statements have not been evaluated by the FDA; Citrus Surge is not intended to diagnose, treat, cure, or prevent any disease.",
          "Always consult a physician before starting any supplement, especially if you have a medical condition, are pregnant or nursing, or take medication.",
        ],
      },
      {
        h: "Subscriptions",
        p: [
          "Subscription orders bill automatically on the schedule shown at checkout. You may skip, pause, or cancel anytime before your next billing date from your account or by contacting support. Changes made after an order has processed apply to the next shipment.",
          "We send a reminder email 3 days before every subscription charge so there are no surprises.",
        ],
      },
      {
        h: "Liability",
        p: [
          "To the extent permitted by law, Forsaken Labs' total liability for any claim related to a purchase is limited to the amount you paid for the product. All trademarks, imagery, and copy on this site are the property of Forsaken Labs.",
        ],
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    updated: "October 2026",
    sections: [
      {
        h: "First-order guarantee",
        p: [
          "Your first tub is covered by the 30-day Forsaken Guarantee: email support@forsakenlabs.com within 30 days of delivery for a full refund — no need to return the product.",
        ],
      },
      {
        h: "Standard returns",
        p: [
          "Unopened, sealed tubs can be returned within 30 days of delivery for a full refund of the product price. Return shipping is the customer's responsibility unless the item arrived damaged or incorrect.",
          "Refunds are issued to the original payment method within 3–5 business days of approval.",
        ],
      },
      {
        h: "Subscriptions",
        p: [
          "Cancel a subscription before the next billing date and you won't be charged again. Orders already processed are covered by the same 30-day guarantee for first orders.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    updated: "October 2026",
    sections: [
      {
        h: "Our commitment",
        p: [
          "Forsaken Labs is committed to making our site usable by everyone, including people using screen readers, keyboard navigation, or assistive technology.",
          "We aim for WCAG 2.1 AA conformance: semantic markup, visible focus states, alt text on meaningful imagery, sufficient color contrast, and respect for reduced-motion preferences.",
        ],
      },
      {
        h: "Need help?",
        p: [
          "If you hit an accessibility barrier anywhere on the site — a control that doesn't work with your setup, text that can't be read, a page that can't be navigated — tell us and we'll fix it.",
          "Email support@forsakenlabs.com with 'Accessibility' in the subject. Include the page URL and a description of the issue; we take these reports seriously.",
        ],
      },
    ],
  },
  "do-not-sell": {
    title: "Do Not Sell My Personal Information",
    updated: "October 2026",
    sections: [
      {
        h: "The short version",
        p: [
          "We do not sell your personal information. We do not share your data with data brokers, and we never have.",
          "Some third-party tools on this site (analytics, advertising pixels) may process browsing data as defined under the CCPA/CPRA. You can opt out of that below.",
        ],
      },
      {
        h: "Your privacy choices",
        p: [
          "To opt out of any sale or sharing of personal information as defined by applicable law, email support@forsakenlabs.com with the subject 'Privacy Choices' from the address associated with your account.",
          "You can also submit a request to access, correct, or delete your data under the same email — we respond to all privacy requests within 30 days.",
        ],
      },
    ],
  },
};

export default function PolicyPage({ slug }: { slug: string }) {
  const policy = POLICIES[slug];
  if (!policy) return null;
  return (
    <main>
      <PageHero eyebrow="Support" title={policy.title}>
        Last updated {policy.updated}.
      </PageHero>
      <section className="bg-cream px-5 py-12 lg:py-16">
        <div className="mx-auto max-w-[760px] space-y-10">
          {policy.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-[22px] font-bold text-ink lg:text-[26px]">{s.h}</h2>
              <div className="mt-3 space-y-3 text-[15px] font-sans leading-7 text-cocoa">
                {s.p.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
          <div className="rounded-xl border border-line bg-sand-2 p-6 text-center">
            <p className="text-[14px] font-sans font-semibold text-cocoa">
              Questions about this policy?{" "}
              <Link to="/contact" className="font-bold text-orange underline underline-offset-4">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
