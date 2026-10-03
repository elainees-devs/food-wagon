export type StoreType = "appStore" | "googlePlay";

export interface AppDownloadBadgeProps {
  store: StoreType;
  href?: string;
  className?: string;
}

const BADGE_CONFIG = {
  appStore: {
    label: "Download on the App Store",
    src: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=200x63",
    alt: "Download on the App Store",
    width: 200,
    height: 63,
  },
  googlePlay: {
    label: "Get it on Google Play",
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
    alt: "Get it on Google Play",
    width: 646,
    height: 250,
  },
} as const;

export function AppDownloadBadge({
  store,
  href = "#",
  className,
}: AppDownloadBadgeProps) {
  const config = BADGE_CONFIG[store];
  const scale = store === "googlePlay" ? "h-12 md:h-14" : "h-12 md:h-14";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={config.label}
      className={[
        "inline-flex shrink-0 items-center transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-lg",
        className ?? "",
      ].join(" ")}
    >
      <img
        src={config.src}
        alt={config.alt}
        width={config.width}
        height={config.height}
        className={`${scale} w-auto object-contain`}
        loading="lazy"
      />
    </a>
  );
}
