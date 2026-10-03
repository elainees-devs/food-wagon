import { MapPin, Tag, Zap } from "lucide-react";

import { AppDownloadBadge } from "./AppDownloadBadge";
import { AppDownloadBenefits, type AppDownloadBenefit } from "./AppDownloadBenefits";

const benefits: AppDownloadBenefit[] = [
  {
    id: "faster-ordering",
    icon: Zap,
    title: "Faster food ordering",
  },
  {
    id: "real-time-tracking",
    icon: MapPin,
    title: "Real-time order tracking",
  },
  {
    id: "exclusive-deals",
    icon: Tag,
    title: "Exclusive app deals",
  },
];

export function AppDownload() {
  return (
    <section
      aria-labelledby="app-download-heading"
      className="bg-[#fffaf1] px-4 py-16 md:px-8 md:py-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary md:text-base">
              MOBILE APP
            </span>

            <h2
              id="app-download-heading"
              className="mt-3 font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl"
            >
              Get the{" "}
              <span className="text-primary">Food Wagon App</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
              Order your favourite meals faster, track your delivery, and enjoy
              exclusive app deals — all from the Food Wagon app.
            </p>

            <div className="mt-6">
              <AppDownloadBenefits benefits={benefits} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppDownloadBadge store="googlePlay" />
              <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-white/70 px-4 py-2 shadow-sm shadow-primary/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff1e6]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=food-wagon-app"
                    alt="Scan to download Food Wagon app"
                    width={80}
                    height={80}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    Scan to
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    download
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-text-secondary">
                ⭐ 4.8 · Loved by food lovers
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl hidden lg:block" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[#FFD166]/20 blur-3xl hidden lg:block" />
            <div className="absolute top-8 left-4 hidden rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-lg shadow-primary/20 lg:block">
              Good food anytime
            </div>

            <div className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]">
              <div className="relative rounded-[38px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-2 shadow-2xl shadow-black/20">
                <div className="rounded-[32px] bg-white overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                    <div className="font-display text-lg font-bold text-primary">
                      Food Wagon
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                      <div className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                      <div className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                    </div>
                  </div>

                  <div className="px-4 py-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for food..."
                        className="w-full rounded-xl border border-border bg-background-muted px-4 py-2.5 text-sm text-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        aria-label="Search for food"
                        readOnly
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-xl bg-[#fff1e6] px-4 py-2">
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          20% OFF
                        </p>
                        <p className="text-xs text-text-secondary">
                          On your first order
                        </p>
                      </div>
                      <span className="text-2xl">🍕</span>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-text-primary">
                        Categories
                      </p>
                      <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
                        <span className="flex-shrink-0 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white">
                          Burger
                        </span>
                        <span className="flex-shrink-0 rounded-full bg-background-muted px-4 py-1.5 text-xs font-semibold text-text-primary">
                          Pizza
                        </span>
                        <span className="flex-shrink-0 rounded-full bg-background-muted px-4 py-1.5 text-xs font-semibold text-text-primary">
                          Fries
                        </span>
                        <span className="flex-shrink-0 rounded-full bg-background-muted px-4 py-1.5 text-xs font-semibold text-text-primary">
                          Salad
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-text-primary">
                        Popular items
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-3 rounded-xl border border-border/60 p-2">
                          <div className="h-14 w-14 rounded-lg bg-[#fff1e6] flex items-center justify-center">
                            <span className="text-xl">🍔</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-text-primary truncate">
                              Cheeseburger
                            </p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="text-xs text-primary">★</span>
                              <span className="text-xs text-text-secondary">
                                4.8
                              </span>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-primary">
                            Ksh 3.88
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl border border-border/60 p-2">
                          <div className="h-14 w-14 rounded-lg bg-[#fff1e6] flex items-center justify-center">
                            <span className="text-xl">🍕</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-text-primary truncate">
                              Margherita Pizza
                            </p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="text-xs text-primary">★</span>
                              <span className="text-xs text-text-secondary">
                                4.9
                              </span>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-primary">
                            Ksh 4.99
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/60 px-5 py-2.5">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-lg">🏠</span>
                      <span className="text-[10px] text-primary">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-lg">🔍</span>
                      <span className="text-[10px] text-text-muted">Search</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-lg">🛒</span>
                      <span className="text-[10px] text-text-muted">Cart</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-lg">👤</span>
                      <span className="text-[10px] text-text-muted">Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
