'use client'

// import { ArrowDownIcon, ArrowUpIcon } from "@/assets/Icons";
// import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Slide from "./Slide";
import { ProductData } from "@/data/mockup/MockupData";

const ProductCarousel = () => {

    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
      
        const onSelect = () => {
          setActiveIndex(emblaApi.selectedScrollSnap());
        };
      
        emblaApi.on("select", onSelect);
        onSelect(); // set initially
      
        return () => {
            emblaApi.off("select", onSelect);
        };
      }, [emblaApi]);

    return (
        <>
        <div className="embla bg-[var(--primary)] vastPatternPrimary w-full">
            <div className="embla__viewport mx-auto h-[75vh] max-h-[80vh] md:h-[500px] w-full max-w-[1280px]" ref={emblaRef}>
                <div className="embla__container h-full">

                    {ProductData.map((item, index) => (
                        <div key={item.id} className="embla__slide flex items-center justify-center">
                            <Slide 
                                name={item.name} 
                                detail={item.detail} 
                                image={item.image} 
                                quality={item.quality} 
                                isActive={index === activeIndex}
                                scrollNext={scrollNext}
                                scrollPrev={scrollPrev}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
            {/* Arrows Buttons */}
            {/* <div className="w-full max-w-[1280px] mx-auto flex justify-center gap-sm mt-sm">
                <button className="embla__prev cursor-pointer" onClick={scrollPrev}><ArrowUpIcon  /></button>
                <button className="embla__next cursor-pointer" onClick={scrollNext}><ArrowDownIcon  /></button>
            </div> */}
        </>
    )
}

export default ProductCarousel;