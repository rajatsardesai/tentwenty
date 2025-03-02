"use client";

import Image from "next/image";
import {SLIDE_DURATION, sliderImages} from "@/app/constants";
import {useSlider} from "@/hooks/use-slider"
import HeroButtonSlider from "@/components/HeroButtonSlider";

interface HeroProps {
    currentIndex: number;
    nextIndex: number;
    resetAnimation: boolean;
    nextSlide: () => void;
}

const HeroContent=()=>(
    <div className="hero-content-container items-start max-md:mb-28">
        <span className="opacity-0 animate-fade-up">Welcome To TenTwenty Farms</span>
        <h1 className="hero-header animate-fade-up animation-delay-200 mt-1">
            From Our <br className="md:hidden"/>
            Farms <br className="md:hidden"/>
            To Your Hands
        </h1>
    </div>
);

const HeroNavigation = ({currentIndex, nextIndex, resetAnimation, nextSlide}:HeroProps)=>(
    <div className="hero-navigation">
        <button onClick={nextSlide} className="hero-button">
            <HeroButtonSlider currentIndex={currentIndex} nextIndex={nextIndex}/>

            {/*Animated Border*/}
            <div className={`absolute w-full h-full inset-0 overflow-hidden ${resetAnimation ? "animate-none" : ""}`}>
                {["top", "right", "bottom", "left"].map((side) => (
                    <div key={side} className={`animated-border border-${side}`} />
                ))}
            </div>
        </button>

        <div className="flex items-center gap-4 text-white">
                    <span key={currentIndex} className="opacity-0 animate-fade-up">
            {String(currentIndex + 1).padStart(2, "0")}
        </span>
            <span className="flex-grow h-[2px] bg-white w-[100px]"></span>
            <span className="opacity-60">{String(sliderImages.length).padStart(2, "0")}</span>
        </div>
    </div>
)

const Hero = () => {
    const { currentIndex, nextIndex, resetAnimation, nextSlide } = useSlider(sliderImages.length, SLIDE_DURATION);

    return (
        <div className="hero-container">
            {
                sliderImages.map((img, index) => (

            <Image
                src={img}
                alt="farm images"
                key={index}
                width={1440}
                height={900}
                priority={index === 0}
                className={`hero-banners ${
                    index === currentIndex ? "active animate-reveal" : "inactive"
                }`}/>
                ))
            }

            <HeroContent/>
            <HeroNavigation currentIndex={currentIndex} nextIndex={nextIndex} resetAnimation={resetAnimation} nextSlide={nextSlide}/>
        </div>
    )
}

export default Hero;