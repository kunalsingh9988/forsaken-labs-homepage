import { useState } from "react";
import PageHero from "../components/PageHero";
import { Texture, Eyebrow } from "../components/ui";

const TOPICS = ["Order help", "Subscription", "Product question", "Wholesale / retail", "Something else"];

const CHANNELS = [
  { title: "Email us", detail: "support@forsakenlabs.com", sub: "Replies within one business day" },
  { title: "Order status", detail: "Track your shipment", sub: "Check your confirmation email for the tracking link" },
  { title: "Social", detail: "@forsakenlabs", sub: "DMs open on Instagram & TikTok" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: TOPICS[0], order: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <main>
      <PageHero eyebrow="Contact" title="Talk to a Human" tone="ink">
        Questions about an order, the formula, or wholesale — we answer every message,
        usually within one business day.
      </PageHero>

      <section className="relative bg-cream px-5 py-12 lg:py-16">
        <Texture opacity={0.15} />
        <div className="relative mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
          {/* channels */}
          <div className="space-y-4">
            <Eyebrow>Reach us</Eyebrow>
            {CHANNELS.map((c) => (
              <div key={c.title} className="rounded-xl border border-line bg-sand-2 p-5">
                <p className="text-[12px] font-sans font-extrabold uppercase tracking-[0.14em] text-orange">{c.title}</p>
                <p className="mt-1.5 font-display text-[19px] font-bold text-ink">{c.detail}</p>
                <p className="mt-1 text-[13px] font-sans text-cocoa">{c.sub}</p>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-cocoa/40 p-5">
              <p className="text-[13px] font-sans font-semibold leading-6 text-cocoa">
                Prefer chat? Tap the orange bubble in the corner — it reaches the same inbox.
              </p>
            </div>
          </div>

          {/* form */}
          <div className="rounded-2xl border border-line bg-sand-2 p-6 lg:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange">
                  <svg viewBox="0 0 10 8" className="h-6 w-8 text-ink" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 4.2 3.6 6.8 9 1.2" />
                  </svg>
                </span>
                <h2 className="mt-6 font-display text-[26px] font-bold text-ink">Message sent.</h2>
                <p className="mt-2 max-w-[320px] text-[14px] font-sans text-cocoa">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-sans font-extrabold uppercase tracking-[0.12em] text-cocoa">Name</span>
                    <input required value={form.name} onChange={set("name")} className="mt-1.5 w-full rounded-lg border border-line bg-cream px-4 py-3 text-[15px] outline-none focus:border-orange" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-sans font-extrabold uppercase tracking-[0.12em] text-cocoa">Email</span>
                    <input required type="email" value={form.email} onChange={set("email")} className="mt-1.5 w-full rounded-lg border border-line bg-cream px-4 py-3 text-[15px] outline-none focus:border-orange" placeholder="you@example.com" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-sans font-extrabold uppercase tracking-[0.12em] text-cocoa">Topic</span>
                    <select value={form.topic} onChange={set("topic")} className="mt-1.5 w-full rounded-lg border border-line bg-cream px-4 py-3 text-[15px] outline-none focus:border-orange">
                      {TOPICS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-sans font-extrabold uppercase tracking-[0.12em] text-cocoa">Order # (optional)</span>
                    <input value={form.order} onChange={set("order")} className="mt-1.5 w-full rounded-lg border border-line bg-cream px-4 py-3 text-[15px] outline-none focus:border-orange" placeholder="FL-0000" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[12px] font-sans font-extrabold uppercase tracking-[0.12em] text-cocoa">Message</span>
                  <textarea required rows={5} value={form.message} onChange={set("message")} className="mt-1.5 w-full resize-none rounded-lg border border-line bg-cream px-4 py-3 text-[15px] outline-none focus:border-orange" placeholder="How can we help?" />
                </label>
                <button type="submit" className="w-full rounded-lg bg-ink py-4 text-[16px] font-sans font-extrabold text-cream transition hover:bg-espresso active:scale-[0.99]">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
