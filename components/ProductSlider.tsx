import {useRef, useState} from "react";
import {products} from "@/app/constants";

const ProductSlider = () => {
    let startX = 0;
    let isDragging = false;
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleStart = (e) => {
        isDragging = true;
        startX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = startX - currentX;

        if (diff > 50 && currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
            isDragging = false;
        } else if (diff < -50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            isDragging = false;
        }
    };

    const handleEnd = () => {
        isDragging = false;
    };

    return (
        <>
        <div className="relative flex justify-center mt-1 md:mt-15">
            <div
                ref={sliderRef}
                className="relative w-full h-[410px] xl:h-[705px] overflow-hidden drag-cursor"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
            >
                {products.map((product, index) => {
                    let position = "left-0 scale-90 opacity-80 z-10";

                    if (index === currentIndex - 1) {
                        position = "-left-48 md:-left-28 top-5 md:top-10 rotate-[-10deg] scale-95 opacity-90 z-20"; // Left image
                    } else if (index === currentIndex) {
                        position = "left-1/2 right-1/2 -translate-x-[50%] scale-100 rotate-0 z-30"; // Center image
                    } else if (index === currentIndex + 1) {
                        position = "-right-48 md:-right-20 top-5 md:top-10 rotate-[10deg] scale-95 opacity-90 z-20"; // Right image
                    } else if (index > currentIndex + 1) {
                        position = "-left-full rotate-[10deg] scale-80 opacity-60 z-10"; // Far left
                    } else if (index < currentIndex - 1) {
                        position = "-right-full rotate-[-10deg] scale-80 opacity-60 z-10"; // Far right
                    }

                    return (
                        <div
                            key={index}
                            className={`absolute w-[233px] xl:w-[435px] h-[331px] xl:h-[619px] shadow-lg flex flex-col items-center justify-end text-white text-2xl mt-10 font-bold transition-all duration-300 ease-in-out ${position}`}
                            style={{ backgroundImage: `url(${product.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        />
                    );
                })}
            </div>

        </div>
            <div className="w-full p-4 text-center">
                <p className="text-2xl md:text-4xl font-semibold mb-5">{products[currentIndex]?.title}</p>
                <p className="md:text-2xl text-gray-100">{products[currentIndex]?.description}</p>
            </div>
        </>
    )
}
export default ProductSlider
