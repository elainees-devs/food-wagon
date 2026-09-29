import { Header } from "@/components/layout/Header";
import { FlashDeals, Hero, HowItWorks } from "@/features/home/components";

export function HomePage(){
    return(
        <div>
            <Header />
            <Hero />
            <FlashDeals />
            <HowItWorks />
        </div>
    )
}