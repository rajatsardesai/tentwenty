"use client";

import Image from "next/image";
import {SLIDE_DURATION, sliderImages} from "@/app/constants";
import {useEffect, useState} from "react";
import HeroSlider from "@/components/HeroSlider";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(1);
    const [resetAnimation, setResetAnimation] = useState<boolean>(true);

    const nextSlide = () => {
        setResetAnimation(true);
        setTimeout(() => setResetAnimation(false), 5); // Restart the animation

        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % sliderImages.length;

            setTimeout(() => {
                setNextIndex((newIndex + 1) % sliderImages.length);
            }, 500);

            return newIndex;
        });
    };

    useEffect(() => {
        const interval=setInterval(nextSlide,SLIDE_DURATION);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full flex items-center h-[810px] md:h-[900px] overflow-hidden bg-black max-md:px-2">
            {
                sliderImages.map((img, id) => (

            <Image
                src={img}
                alt="farm images"
                key={id}
                width={1440}
                height={900}
                className={`hero-banners ${
                    id === currentIndex ? "z-10 animate-reveal final-scale" : "z-0 brightness-80 transition-brightness duration-1000"
                }`}/>
                ))
            }

            <div className="hero-content-container items-start max-md:mb-28">
            <span className="opacity-0 animate-fade-up">Welcome To TenTwenty Farms</span>
            <h1 className="hero-header animate-fade-up animation-delay-200 mt-1">From Our <br className="md:hidden"/>
                Farms <br className="md:hidden"/>
                To Your Hands</h1>
            </div>

            <div className="hero-content-container flex-row items-center bottom-16 md:bottom-17 gap-10 md:gap-8">
            <button onClick={nextSlide} className="relative flex justify-center items-center w-[115px] md:w-[138px] h-[115px] md:h-[138px] border-[0.1px] border-light-100 cursor-pointer">
                <HeroSlider currentIndex={currentIndex} nextIndex={nextIndex}/>

                <div
                    className={`absolute inset-0 border-[8px] border-white animate-border-move ${
                        resetAnimation ? "animate-none" : ""
                    }`}
                />
            </button>

                <div className="flex items-center gap-4 text-white">
                    <span key={currentIndex} className="opacity-0 animate-fade-up">
            {String(currentIndex + 1).padStart(2, "0")}
        </span>
                    <span className="flex-grow h-[2px] bg-white w-[100px]"></span>
                    <span className="opacity-60">{String(sliderImages.length).padStart(2, "0")}</span>
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
export default Hero;