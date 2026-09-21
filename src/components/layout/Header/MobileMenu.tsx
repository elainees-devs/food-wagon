import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { LoginButton } from "@/components/layout/Header/LoginButton";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    if (open) setOpen(false);
  }

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="md:hidden rounded-lg p-2 text-text-primary transition-colors duration-200 hover:bg-primary-light"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
            aria-hidden="true"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-40 md:hidden",
          open ? "" : "invisible",
        ].join(" ")}
      >
        <div
          onClick={close}
          aria-hidden="true"
          className={[
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={[
            "absolute top-0 right-0 flex h-full w-72 max-w-[85%] flex-col bg-white shadow-xl outline-none",
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            <span className="font-display text-xl font-bold text-text-primary">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="rounded-lg p-2 text-text-primary transition-colors duration-200 hover:bg-primary-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-2" aria-label="Primary">
            <NavLink
              to="/"
              onClick={close}
              className={({ isActive }) =>
                [
                  "block rounded-lg px-4 py-3 text-base font-semibold transition-colors duration-200 hover:bg-primary-light",
                  isActive ? "bg-primary-light text-primary" : "text-text-primary",
                ].join(" ")
              }
            >
              Home
            </NavLink>
          </nav>

          <div className="border-t border-border px-2 py-4">
            <div className="flex items-center gap-3 rounded-lg px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="truncate text-sm text-text-secondary">
                Langata, Nairobi, Kenya
              </span>
            </div>
            <LoginButton />
          </div>
        </div>
      </div>
    </>
  );
}