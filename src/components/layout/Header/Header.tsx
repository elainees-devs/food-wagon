import {
  DeliveryLocation,
  Logo,
  MobileMenu,
  SearchFab,
  SearchLoginButton,
} from "@/components/layout/Header";

export function Header() {
    return (
        <header className="w-full p-4 flex justify-between items-center gap-4 md:px-24">
            <Logo />
            <DeliveryLocation />
            <SearchLoginButton />
            <MobileMenu />
            <SearchFab />
        </header>
    )
}