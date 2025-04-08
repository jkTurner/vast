import { LoremText } from "@/data/mockup/MockupData";
import MainButton from "../ui/buttons/MainButton";
import Image from "next/image";
import { BlogImage } from "@/data/mockup/MockupImage";
import styles from "./banner.module.css"
import Link from "next/link";

const LatestBlogBanner = () => {
    return (
        <div className="w-full bg-[var(--primary)] mt-2xl">

            {/* Date & Title */}
            <div className={styles.blogDateTitleContainer}>
                <div className={styles.blogDateTitleSubContainer}>
                    <h4 className="text-xl font-bold text-[var(--accent)]">8 Mar 2025</h4>
                    <h3 className="text-[var(--secondary)] font-bold text-3xl">Nature’s Finest<br/>For Those Who Don’t Settle</h3>
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
                            <Link href="/blog">
                                <MainButton name="View All" weight="font-light" />
                            </Link>
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