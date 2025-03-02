import Image from "next/image";
import {sliderImages} from "@/app/constants";

const HeroButtonSlider = ({ currentIndex, nextIndex }: { currentIndex: number; nextIndex: number }) => {
    return (
        <div className="hero-button-slider-container">
            <span className="hero-button-slider-text">Next</span>
            <Image
                src={sliderImages[currentIndex]}
                alt="Current Slide"
                width={93}
                height={93}
                priority={true}
                className="hero-banners"
            />
            <Image
                src={sliderImages[nextIndex]}
                alt="Next Slide"
                width={93}
                height={93}
                loading="eager"
                className={`hero-banners ${
                    nextIndex === currentIndex ? "" : "z-10 animate-reveal"}`}
            />
        </div>
    )
}
export default HeroButtonSlider
