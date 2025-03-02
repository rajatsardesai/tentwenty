"use client";

import ProductSlider from "@/components/ProductSlider";
import useScrollReveal from "@/hooks/use-scrollreveal";

export default function Home() {
  const isVisible = useScrollReveal("products-section", 0.8);

  return (
      <div id="products-section" className="products-container">
        <div className="products-text">
          <h2 className={`fade-products-heading md:leading-7xl -tracking-1  ${isVisible && "animate-fade-up"}`}>Quality Products</h2>
          <p className={`fade-products-paragraph ${isVisible && "animate-fade-up"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <ProductSlider/>
      </div>
  );
}
