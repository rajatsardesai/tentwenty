"use client";

import Image from "next/image";
import {sliderImages} from "@/app/constants";
import {useEffect, useState} from "react";

const Hero = () => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval=setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex + 1) % sliderImages.length);
        },5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full flex items-center h-screen overflow-hidden bg-black">
            {
                sliderImages.map((img, id) => (

            <Image
                src={img}
                alt="farm images"
                key={id}
                width={1440}
                height={900}
                className={`hero-banners ${
                    id === index ? "z-10 animate-reveal final-scale" : "z-0 brightness-80 transition-brightness duration-1000"
                }`}/>
                ))
            }

            <div className="hero-text-container">
            <span className="opacity-0 animate-fade-up">Welcome To TenTwenty Farms</span>
            <h1 className="hero-header animate-fade-up animation-delay-200">From Our Farm To Your Hands</h1>
            </div>
        </div>
    )
}

// @ts-ignore
export default Hero;