export function LoginButton() {
  return (
    <button
      className="
        flex items-center gap-2 p-2
        cursor-pointer
        rounded-lg
        shadow-md shadow-primary/30
        hover:bg-primary-light
        transition-colors duration-200
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#ff7a00"
        stroke="#ff7a00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>

      <span className="text-primary font-bold">
        Login
      </span>
    </button>
  );
}