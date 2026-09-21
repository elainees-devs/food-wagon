export function SearchFab() {
  return (
    <button
      type="button"
      aria-label="Search food"
      className="
        md:hidden
        fixed bottom-6 right-6 z-30
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-primary text-white
        shadow-lg shadow-primary/40
        transition-transform duration-200
        hover:scale-105 active:scale-95
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    </button>
  );
}