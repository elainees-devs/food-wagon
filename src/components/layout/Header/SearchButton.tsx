export function SearchButton() {
  return (
    <div>
      <button className="flex pt-2 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff7a00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search preview-icon"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <span className="text-text-primary text-base font-semibold">Search Food</span>
      </button>
    </div>
  );
}
