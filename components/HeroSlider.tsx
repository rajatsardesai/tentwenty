import Image from "next/image";
import {sliderImages} from "@/app/constants";

const HeroSlider = ({ currentIndex, nextIndex }: { currentIndex: number; nextIndex: number }) => {
    return (
        <div className="relative w-[77px] md:w-[93px] h-[77px] md:h-[93px]  overflow-hidden">
            <span className="absolute top-1/2 left-1/2 z-50 text-white transform -translate-x-1/2 -translate-y-1/2">Next</span>
            <Image
                src={sliderImages[currentIndex]}
                alt="Current Slide"
                width={93}
                height={93}
                className="hero-banners"
            />
            <Image
                src={sliderImages[nextIndex]}
                alt="Next Slide"
                width={93}
                height={93}
                className={`hero-banners ${
                    nextIndex === currentIndex ? "" : "z-10 animate-reveal"}`}
            />
        </div>
    )
}
export default HeroSlider
