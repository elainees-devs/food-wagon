import logo from "@/assets/logo/Logo.svg";

export function Logo() {
  return (
    <img
      src={logo}
      alt="burger"
      loading="lazy"
      width={300}
      height={200}
      className="w-28 h-auto md:w-[300px]"
    />
  );
}