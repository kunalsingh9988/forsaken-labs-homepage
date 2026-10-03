import type { ReactNode } from "react";
import { Eyebrow, Texture } from "./ui";

/* shared page hero — eyebrow + display title + optional lead copy on sand */
export default function PageHero({
  eyebrow,
  title,
  children,
  tone = "sand",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "sand" | "ink";
}) {
  const ink = tone === "ink";
  return (
    <section className={`relative overflow-hidden px-5 py-14 lg:px-[120px] lg:py-20 ${ink ? "bg-ink text-cream" : "bg-sand text-ink"}`}>
      <Texture opacity={ink ? 0.2 : 0.25} />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
        <Eyebrow className="text-orange">{eyebrow}</Eyebrow>
        <h1 className="font-display font-bold tracking-[-0.01em] text-[36px] leading-[42px] lg:text-[56px] lg:leading-[60px]">
          {title}
        </h1>
        {children && <div className={`max-w-[560px] text-[15px] lg:text-[17px] leading-7 ${ink ? "text-cream/80" : "text-cocoa"}`}>{children}</div>}
      </div>
    </section>
  );
}
