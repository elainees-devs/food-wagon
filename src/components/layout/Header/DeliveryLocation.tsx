export function DeliveryLocation() {
  return (
    <div className="flex pt-2 text-text-primary">
      <span className="pr-4 font-bold text-sm">Deliver to:</span>
      <span className="flex text-base">
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
        className="lucide lucide-map-pin preview-icon"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <p className="pl-2 text-base">Current Location</p>
      <span className="pl-2 font-semibold text-base">Langata, Nairobi, Kenya</span>
      </span>
      
    </div>
  );
}
