import {useEffect, useRef, useState} from "react";
import {motion} from "motion/react";

export default function ArrowRight() {
    const [isVisible, setIsVisible] = useState(false);
    const svgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            },
        );

        if (svgRef.current) {
            observer.observe(svgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const pathVariants = {
        hidden: {pathLength: 0},
        visible: {
            pathLength: 1,
            transition: {duration: 1.25, ease: "easeIn"},
        },
    };

    const clipVariants = {
        hidden: {clipPath: "inset(0 100% 0 0)"},
        visible: {
            clipPath: "inset(0 0% 0 0)",
            transition: {duration: 0.15, ease: "easeOut", delay: 1.25},
        },
    };

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="254"
            height="153"
            viewBox="0 0 254 153"
            fill="none"
        >
            <motion.path
                d="M12.8011 109.135C12.8011 109.135 86.7628 121.738 126.097 80.2247C145.57 59.6727 130.938 31.5233 106.491 35.7875C86.3287 39.3043 69.7628 56.3629 62.346 80.5332C45.9845 133.854 104.582 148.691 158.682 100.669C205.836 58.8131 201.732 58.38 226.482 50.5968"
                stroke="black"
                strokeWidth="4.57712"
                fill="none"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={pathVariants}
            />
            <motion.path
                d="M215.219 40.5318L240.829 45.8761L223.396 65.3829L215.219 40.5318Z"
                fill="black"
                stroke="black"
                strokeWidth="0.152571"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={clipVariants}
            />
        </svg>
    );
}
