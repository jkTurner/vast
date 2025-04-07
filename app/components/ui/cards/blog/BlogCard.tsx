import Image from "next/image";
import MainButton from "../../buttons/MainButton";
import styles from "./blogcard.module.css"

interface BlogCardProps {
    title: string;
    image: string;
    excerpt: string;
    content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({image, title, excerpt, content}) => {
    return (
        <div className={`flex flex-col w-full h-[480px] bg-primary items-center ${styles.cardGroup}`}>
            
            {/* top section (image) */}
            {/* <div className="h-[55%] w-full relative"> */}
            <div className={styles.cardImageContainer}>
                <Image
                    src={image}
                    alt="Sample Product"
                    fill
                    className="object-cover"
                    priority
                />
                {/* <div className="bg-primaryAdd absolute w-full h-full opacity-70"> */}
                <div className={styles.contentOverlay}>
                    <p className="absolute w-full p-sm text-secondary">{content}</p>
                </div>
            </div>

            {/* bottom section (text) */}
            <div className="flex flex-col h-[45%] w-full bg-secondary text-primary p-sm justify-between">
                <div className="flex flex-col gap-xs w-full">
                    <h3 className="text-lg font-normal">{title}</h3>
                    <p>{excerpt}</p>
                </div>
                <div className="self-end">
                    <MainButton name="Read More" weight="font-light" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard;