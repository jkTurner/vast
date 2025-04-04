import { LoremText } from "@/data/mockup/MockupText";
import MainButton from "../ui/buttons/MainButton";
import Image from "next/image";
import { BlogImage } from "@/data/mockup/MockupImage";
import styles from "./banner.module.css"

const LatestBlogBanner = () => {
    return (
        <div className="w-full bg-primary mt-2xl">

            {/* Date & Title */}
            <div className={styles.blogDateTitleContainer}>
                <div className={styles.blogDateTitleSubContainer}>
                    <h4 className="text-xl font-bold text-accent">8 Mar 2025</h4>
                    <h3 className="text-secondary font-bold text-3xl">Nature’s Finest<br/>For Those Who Don’t Settle</h3>
                </div>
            </div>

            {/* Detail & Image */}
            <div className={styles.blogDetailImageContainer}>
                <div className={styles.blogDetailImageSubContainer}>

                    {/* Text & Button */}
                    <div className={styles.blogDetailButtonContainer}>
                        <p>{LoremText.set30}</p>
                        <div className="h-sm" />
                        <div className="flex gap-sm self-end">
                            <MainButton name="Read More" weight="font-light" />
                            <MainButton name="View All" weight="font-light" />
                        </div>
                    </div>

                    {/* Image  */}
                    <div className={styles.blogImageContainer}>
                        <Image
                            src={BlogImage.image006}
                            alt="Blog Image"
                            fill
                            className="object-cover object-middle"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogBanner;