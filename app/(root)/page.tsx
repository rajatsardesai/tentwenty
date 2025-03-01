"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // To handle Scrolling Effect
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("products-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div id="products-section" className="products-container">
        <div className="max-w-[321px] md:max-w-[772px] mx-auto text-center space-y-5 md:space-y-16">
          <h2 className={`text-3xl md:text-[56px] leading-[40px] md:leading-7xl -tracking-1 opacity-0  ${isVisible && "animate-fade-up"}`}>Quality Products</h2>
          <p className={`md:text-2xl leading-[18px] md:leading-[28px] text-gray-100 px-1  ${isVisible && "animate-fade-up"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

<ProductSlider/>
      </div>
  );
}
