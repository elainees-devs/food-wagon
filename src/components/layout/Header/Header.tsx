import { DeliveryLocation } from "@/components/layout/Header/DeliveryLocation";
import { Logo } from "@/components/layout/Header/Logo";
import { SearchLoginButton } from "@/components/layout/Header/SearchLogin";


export function Header() {
    return (
        <div className="w-full p-4 flex justify-between px-24">
            <Logo />
            <DeliveryLocation />
            <SearchLoginButton />
        </div>
    )
}