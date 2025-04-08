import { ModelImage } from "@/data/mockup/MockupImage";
import Image from "next/image";
import styles from "./carousel.module.css"
import MainButton from "../buttons/MainButton";

interface SlideProps {
    name: string;
    detail: string;
    image: string;
    quality: string[];
    isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ name = "PRODUCT NAME", image=ModelImage.image001, detail, quality, isActive }) => {
    return (
        <div className={styles.slideContainer}>
            {/* Image Section */}
            <div className={`${styles.imageContainer} ${ isActive ? styles.animateImage : ""}`}>
                <Image
                    src={image}
                    alt="Product Image"
                    fill
                    // className={`object-cover object-top ${styles.imageZoom}`}
                    className={`object-cover object-top ${ isActive ? styles.imageZoom : "opacity-[20%]"}`}
                    priority
                />
            </div>
            {/* Text Section */}
            <div className={styles.textContainer}>
                <h1 className="text-[var(--secondary)] font-bold text-2xl md:text-4xl">{name}</h1>
                <p className="text-[var(--textKill)] font-light text-sm">{detail}</p>
                <div className="flex gap-xs mt-xs flex-wrap">
                    {quality?.map((q, index) => (
                        <span key={index} className="border border-[var(--textLight)] text-[var(--secondary)] px-4 py-2 text-xs tracking-wide">
                            {q}
                        </span>
                    ))}
                </div>
                {/* <div className={`hidden md:block w-[100%] h-[1px] bg-[var(--textLight)] my-xs`}/> */}
                <div className="block">
                    <div className={styles.lineContainer}>
                        <div className={`${ isActive ? styles.line : ""}`} />
                    </div>
                </div>
                <div className="self-end md:self-start">
                    <MainButton name="View Details" background="var(--accent)" weight="font-light" />
                </div>
            </div>
        </div>
    )
}

export default Slide;