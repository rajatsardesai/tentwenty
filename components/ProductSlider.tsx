import {products} from "@/app/constants";
import {useSwipeSlider} from "@/hooks/use-slider";

const ProductSlider = () => {
    const { sliderRef, currentIndex, handleStart, handleMove, handleEnd } = useSwipeSlider(products);

    //Positioning each card
    const getPositionClass = (index: number, currentIndex: number) => {
        if (index === currentIndex - 1) return "card-left";
        if (index === currentIndex) return "card-center";
        if (index === currentIndex + 1) return "card-right";
        if (index > currentIndex + 1) return "card-far-left";
        if (index < currentIndex - 1) return "card-far-right";
        return "";
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
                    return (
                        <div key={index} className={`product-card ${getPositionClass(index, currentIndex)}`} style={{ backgroundImage: `url(${product.imageUrl})` }} />
                    );
                })}
            </div>

        </div>
            <div className="product-card-text">
                <p className="product-card-title">{products[currentIndex]?.title}</p>
                <p className="product-card-description">{products[currentIndex]?.description}</p>
            </div>
        </>
    )
}
export default ProductSlider
