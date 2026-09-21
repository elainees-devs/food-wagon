import logo from "@/assets/logo/Logo.svg";

export function Logo() {
  return (
    <div>
      <img
        src={logo}
        alt="burger"
        loading="lazy"
        width={300}
        height={200}
      />
    </div>
  );
}
