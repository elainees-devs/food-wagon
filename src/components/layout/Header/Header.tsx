import { DeliveryLocation, Logo, SearchLoginButton } from "@/components/layout/Header";


export function Header() {
    return (
        <div className="w-full p-4 flex justify-between px-24">
            <Logo />
            <DeliveryLocation />
            <SearchLoginButton />
        </div>
    )
}