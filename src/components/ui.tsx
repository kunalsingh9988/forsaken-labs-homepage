import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

/* ---------- stars ---------- */
export function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12.192 11.704" className={className} fill="currentColor" aria-hidden>
      <path d="M12.192 4.472 9.632 4.145 7.925 3.93 6.096 0 4.267 3.93 2.56 4.145 0 4.472l3.048 3.17.216 1.63-.863 2.22L6.096 9.81l3.695 1.682-.863-2.22.216-1.63 3.048-3.17Z" />
    </svg>
  );
}

export function Stars({ className = "text-orange-2", size = "w-[15px] h-[15px]" }: { className?: string; size?: string }) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className={size} />
      ))}
    </span>
  );
}

/* ---------- check / cross pills (comparison tables) ---------- */
export function CheckPill({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${dark ? "bg-cream" : "bg-orange"}`}>
      <svg viewBox="0 0 10 8" className={`w-3 h-3 ${dark ? "text-ink" : "text-cream"}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 4.2 3.6 6.8 9 1.2" />
      </svg>
    </span>
  );
}

export function CrossPill() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-ink-2/25">
      <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-ink-2/60" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M1.5 1.5 8.5 8.5M8.5 1.5l-7 7" />
      </svg>
    </span>
  );
}

/* circle-check list icon (ritual / subscribe lists) */
export function CheckCircle({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 shrink-0 ${tone === "light" ? "text-cream" : "text-orange"}`} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10.2" />
      <path d="m7.5 12.4 3 3 6-6.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- logo ---------- */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" aria-label="Forsaken Labs home" className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-[26px] w-[26px] shrink-0" aria-hidden>
        <path d="M16 1l4.4 10.6L31 16l-10.6 4.4L16 31l-4.4-10.6L1 16l10.6-4.4L16 1Z" className="fill-orange" />
        <circle cx="16" cy="16" r="3.4" className={light ? "fill-ink" : "fill-cream"} />
      </svg>
      <span className={`font-sans font-black tracking-[0.06em] leading-none text-[19px] ${light ? "text-cream" : "text-ink-2"}`}>
        FORSAKEN
        <span className="text-orange"> LABS</span>
      </span>
    </Link>
  );
}

/* ---------- shared layout helpers ---------- */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

export function Texture({ opacity = 0.15 }: { opacity?: number }) {
  return <div className="texture absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden />;
}

export function Eyebrow({ children, className = "text-orange" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans font-extrabold text-[12px] tracking-[0.18em] uppercase leading-4 ${className}`}>
      {children}
    </p>
  );
}

export function H2({ children, className = "text-ink", center = false }: { children: ReactNode; className?: string; center?: boolean }) {
  return (
    <h2 className={`font-display font-bold tracking-[-0.01em] text-[28px] leading-[34px] md:text-[40px] md:leading-[44px] ${center ? "text-center" : ""} ${className}`}>
      {children}
    </h2>
  );
}

/* gentle scroll-in reveal for section wrappers */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function CtaButton({
  children,
  tone = "dark",
  className = "",
  onClick,
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "orange";
  className?: string;
  onClick?: () => void;
}) {
  const tones = {
    dark: "bg-ink text-cream border-ink hover:bg-espresso",
    light: "bg-cream text-ink border-cream hover:bg-sand-2",
    orange:
      "bg-orange text-ink border-orange hover:bg-orange-2 shadow-[0_12px_30px_-10px_rgba(245,100,10,0.65)]",
  };
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center border rounded-lg px-5 py-[13px] text-[16px] leading-[18.6px] transition-all duration-200 active:scale-[0.98] cursor-pointer ${tones[tone]} ${className}`}
    >
      {children}
    </button>
  );
}
