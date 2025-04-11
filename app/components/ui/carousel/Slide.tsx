import { ModelImage } from "@/data/mockup/MockupImage";
import Image from "next/image";
import styles from "./carousel.module.css"
import MainButton from "../buttons/MainButton";
import Link from "next/link";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/Icons";

interface SlideProps {
    name: string;
    detail: string;
    image: string;
    quality: string[];
    isActive: boolean;
    scrollNext: () => void;
    scrollPrev: () => void;
}

const Slide: React.FC<SlideProps> = ({ name = "PRODUCT NAME", image=ModelImage.image001, detail, quality, isActive, scrollNext, scrollPrev }) => {

    // const uri = name.toLowerCase();

    return (
        <div className={styles.slideContainer}>
            {/* Left Column (image) */}
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
            {/* Right Column (text & arrows) */}
            <div className="md:w-[50%] flex flex-col flex-1 justify-between">


                <div className={`${styles.textContainer}`}>
                    <h1 className="text-[var(--secondary)] font-bold text-2xl md:text-xl">{name}</h1>
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
                        <Link href={`/shop/${name.toLowerCase()}`}>
                            <MainButton name="View Details" background="var(--accent)" weight="font-light" />
                        </Link>

                    </div>
                </div>

                {/* Arrow buttons */}
                <div className="gap-xs mt-xs pl-md pb-sm hidden md:flex">
                    <button onClick={scrollPrev} className="text-[var(--secondary)] cursor-pointer">
                        <ArrowUpIcon size={20} color="var(--secondary)" />
                    </button>
                    <button onClick={scrollNext} className="text-[var(--secondary)] cursor-pointer">
                        <ArrowDownIcon size={20} color="var(--secondary)" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slide;