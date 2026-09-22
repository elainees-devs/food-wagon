import noodles from "@/assets/images/hero/noodles.png";

export function HeroImage(){
    return(
        <img
            src={noodles}
            alt="Noodles"
            className="absolute right-[-40px] bottom-[-30px] z-10 hidden h-auto w-[42%] max-w-[420px] object-contain md:block md:w-[36%] lg:w-[42%]"
        />
    )
}
