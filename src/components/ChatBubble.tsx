import { useState } from "react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-[92px] right-4 lg:right-6 z-40 w-[300px] rounded-2xl border border-line bg-cream p-5 shadow-2xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-sans font-extrabold text-[15px] text-ink">Talk to the Lab</p>
              <p className="mt-1 text-[13px] leading-5 text-cocoa">
                Questions about Citrus Surge, dosing, or your order? We usually reply within the hour.
              </p>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} className="cursor-pointer p-1 text-ink-2/60 hover:text-ink-2">
              <svg viewBox="0 0 12 12" className="w-3 h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
            </button>
          </div>
          <a
            href="mailto:support@forsaken-labs.com"
            className="mt-4 flex items-center justify-center rounded-lg bg-ink py-3 font-sans text-[14px] font-bold text-cream hover:bg-espresso transition-colors"
          >
            Message us
          </a>
        </div>
      )}

      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-40 flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-orange text-ink shadow-[0_8px_28px_-6px_rgba(245,100,10,0.7)] transition-transform hover:scale-105 cursor-pointer"
      >
        {open ? (
          <svg viewBox="0 0 16 16" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2l12 12M14 2L2 14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
            <circle cx="8.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="12.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="16.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>
    </>
  );
}
