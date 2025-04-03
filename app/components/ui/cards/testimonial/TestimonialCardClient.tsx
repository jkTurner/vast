'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./testimonial.module.css";
import TestimonialCardServer from "./TestimonialCardServer";

interface Props {
    userName?: string;
    image: string;
}

const TestimonialCardClient: React.FC<Props> = (props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Animate once
            }
        },
        { threshold: 0.3 }
        );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

    return (
        <div
            ref={ref}
            className={`${styles.testimonialCard} ${inView ? styles.visible : ''}`}
        >
            <TestimonialCardServer {...props} />
        </div>
    );
};

export default TestimonialCardClient;
