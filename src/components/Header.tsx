import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./ui";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/product" },
  { label: "The Science", href: "/science" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

function AccountIcon() {
  return (
    <svg viewBox="0 0 24 20" className="w-6 h-5" fill="currentColor" aria-hidden>
      <path d="M12 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-7.5 10a7.5 7.5 0 0 1 15 0h-15Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 20" className="w-6 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M4 5h16l-1.5 11h-13L4 5Zm4-3.5h8l1 3.5H7l1-3.5Z" strokeLinejoin="round" />
      <path d="M9 8.5a3 3 0 0 0 6 0" strokeLinecap="round" />
    </svg>
  );
}

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream h-[41px] flex items-center justify-center px-4 relative z-40">
      <p className="font-sans text-[11px] lg:text-[13px] leading-[16px] tracking-[0.02em] text-center">
        <span className="font-extrabold text-orange-2">CITRUS SURGE</span>
        <span className="mx-1.5 lg:mx-2 opacity-60">—</span>
        THE FIRST DROP IS LIVE<span className="hidden sm:inline">. LIMITED STOCK.</span>
        <Link to="/product" className="ml-2 underline underline-offset-2 font-bold hover:text-orange-2 transition-colors">
          Shop now
        </Link>
      </p>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const open = () => setCartOpen(true);
    window.addEventListener("forsaken:open-cart", open);
    return () => window.removeEventListener("forsaken:open-cart", open);
  }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, cartOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-cream transition-shadow ${scrolled ? "shadow-[0_1px_0_0_rgba(22,16,9,0.08),0_8px_24px_-12px_rgba(22,16,9,0.25)]" : ""}`}
      >
        <div className="h-[55px] lg:h-[75px] flex items-center justify-between px-4 lg:px-[120px]">
          <Logo className="hidden lg:flex" />
          <Logo className="lg:hidden scale-[0.82] origin-left" />

          <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-[15px] leading-5 text-ink-2 hover:text-orange transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-5">
            <Link to="/contact" aria-label="Account" className="hidden lg:block text-ink-2 hover:text-orange transition-colors">
              <AccountIcon />
            </Link>
            <button
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              className="text-ink-2 hover:text-orange transition-colors cursor-pointer"
            >
              <CartIcon />
            </button>
            <Link
              to="/product"
              className="hidden lg:inline-flex bg-ink text-cream text-[15px] leading-4 rounded-lg px-5 py-3 hover:bg-espresso transition-colors"
            >
              Try Citrus Surge
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            >
              <span className="block w-[18px] h-[2px] bg-ink-2" />
              <span className="block w-[18px] h-[2px] bg-ink-2" />
              <span className="block w-[18px] h-[2px] bg-ink-2" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[300px] max-w-full bg-cream flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-5 border-b border-line">
            <Logo className="scale-[0.8] origin-left" />
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="p-2 cursor-pointer">
              <svg viewBox="0 0 16 16" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M2 2l12 12M14 2L2 14" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-[18px] font-sans font-bold text-ink-2 border-b border-line/60"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[18px] font-sans font-bold text-ink-2 border-b border-line/60"
            >
              Account
            </Link>
          </nav>
          <div className="p-5 mt-auto">
            <Link
              to="/product"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center bg-ink text-cream rounded-lg py-4 text-[16px]"
            >
              Try Citrus Surge
            </Link>
          </div>
        </div>
      </div>

      {/* cart drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${cartOpen ? "opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}`}
        aria-hidden={!cartOpen}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={() => setCartOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-cream flex flex-col transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-5 border-b border-line">
            <h3 className="font-display font-bold text-[22px] text-ink">Your Cart</h3>
            <button aria-label="Close cart" onClick={() => setCartOpen(false)} className="p-2 cursor-pointer">
              <svg viewBox="0 0 16 16" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M2 2l12 12M14 2L2 14" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <svg viewBox="0 0 24 20" className="w-12 h-10 text-ink-2/30" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 5h16l-1.5 11h-13L4 5Zm4-3.5h8l1 3.5H7l1-3.5Z" strokeLinejoin="round" />
            </svg>
            <p className="font-sans font-bold text-[17px] text-ink-2">Your cart is empty</p>
            <p className="text-[14px] text-cocoa">Fuel up — Citrus Surge is waiting.</p>
            <Link
              to="/product"
              onClick={() => setCartOpen(false)}
              className="mt-2 bg-orange text-ink rounded-lg px-6 py-3 text-[15px] font-sans font-bold"
            >
              Shop Citrus Surge
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
