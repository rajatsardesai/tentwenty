import {useCallback, useEffect, useState} from "react";

const useScrollReveal = (id: string, threshold: number = 0.8) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // To handle Scrolling Effect
        const handleScroll = useCallback(() => {
            const section = document.getElementById(id);
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight * threshold) {
                    setIsVisible(true);
                }
            }
        }, [id,threshold]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return isVisible;
};

export default useScrollReveal;