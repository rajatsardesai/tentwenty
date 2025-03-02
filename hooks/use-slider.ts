import React, {useEffect, useState, useCallback, useRef} from "react";

const useSlider = (slideCount:number,slideDuration:number) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(1);
    const [resetAnimation, setResetAnimation] = useState<boolean>(true);

    const nextSlide = useCallback(() => {
        setResetAnimation(true);
        setTimeout(() => setResetAnimation(false), 5); // Restart animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, [slideCount]);

    // Delay updating nextIndex by 500ms after currentIndex updates
    useEffect(() => {
        const timeout = setTimeout(() => {
            setNextIndex((currentIndex + 1) % slideCount);
        }, 500);

        return () => clearTimeout(timeout);
    }, [currentIndex, slideCount]);

    useEffect(() => {
        const interval=setInterval(nextSlide,slideDuration);
        return () => clearInterval(interval);
    }, [nextSlide,slideDuration]);

    return { currentIndex, nextIndex, resetAnimation, nextSlide };
};

const useSwipeSlider=<T>(items:T[])=>{
    let startX = useRef(0);
    let isDragging = useRef(false);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    const handleStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        isDragging.current = true;
        startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    }, []);

    const handleMove = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging.current) return;
        const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const diff = startX.current - currentX;

        if (diff > 50 && currentIndex < items.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            isDragging.current = false;
        } else if (diff < -50 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            isDragging.current = false;
        }
    }, [currentIndex, items.length]);

    const handleEnd = useCallback(() => {
        isDragging.current = false;
    }, []);

    return { sliderRef, currentIndex, handleStart, handleMove, handleEnd };
}

export {useSlider, useSwipeSlider};