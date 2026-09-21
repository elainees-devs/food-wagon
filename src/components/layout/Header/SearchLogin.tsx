import { LoginButton } from "@/components/layout/Header/LoginButton";
import { SearchButton } from "@/components/layout/Header/SearchButton";

export function SearchLoginButton(){
    return(
        <div className="flex items-center gap-4">
            <SearchButton />
            <LoginButton />
        </div>
    )
}