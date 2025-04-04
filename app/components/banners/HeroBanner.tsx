import { LoremText } from "@/data/mockup/MockupText";
import Image from "next/image";
import HeroText from "./HeroText";
import styles from "./banner.module.css"

const HeroBanner = () => {
    return (
        <div className="bg-primary vastPatternPrimary w-full md:h-[500px]">
            <div className={styles.container}>

                {/* left column */}
                <div className={styles.leftColumnContainer}>
                    <h1 className={`text-secondary text-md md:text-xl font-extralight tracking-widest ${styles.fadeInItem}`}>
                        VAST ORIGINAL
                    </h1>
                    <div className={styles.fadeInItem} style={{ animationDelay: '0.15s' }}>
                        <HeroText />
                    </div>
                    <p className={`text-secondary ${styles.fadeInItem}`} style={{ animationDelay: '0.3s' }}>
                        {LoremText.set30}
                    </p>
                    <div className={`hidden md:block w-[96%] h-[1px] bg-accent ${styles.fadeInItem}`} style={{ animationDelay: '0.45s' }} />
                </div>

                {/* right column */}
                <div className={styles.rightColumn}>
                    <div className={`${styles.rightColumnImageContainer} ${styles.imageZoom}`}>
                        <Image
                            src="/images/sample-image-001.jpg"
                            alt="Hero Image"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                    {/* right column second container */}
                    <div className={`${styles.rightConlumnSecondContainer} ${styles.fadeInItem}`} style={{ animationDelay: "0.5s" }}>
                        <div className="flex w-[50%] h-full bg-accent text-secondary items-center justify-center">
                            <h4 className="font-bold text-4xl text-primary">Define<br/>Gravity</h4>
                        </div>
                        <div className="w-[50%] h-full text-secondary relative">
                            <Image
                                src="/images/sample-image-002.jpg"
                                alt="Hero Image"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;