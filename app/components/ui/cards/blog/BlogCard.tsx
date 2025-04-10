import Image from "next/image";
import MainButton from "../../buttons/MainButton";
import styles from "./blogcard.module.css"
import Link from "next/link";

interface BlogCardProps {
    title: string;
    slug: string;
    image: string;
    excerpt: string;
    content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, slug, excerpt, content, image }) => {
    return (
        <div className={`flex flex-col w-full h-[480px] bg-[var(--primary)] items-center ${styles.cardGroup}`}>
            
            {/* top section (image) */}
            <div className={styles.cardImageContainer}>
                <Image
                    src={image}
                    alt="Sample Product"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Preview Overlay */}
                <div className={styles.contentOverlay}>
                    <p className="text-[var(--secondary)] text-size-sm line-clamp-4 overflow-hidden">{content}</p>
                </div>
                <Link href={`/blog/${slug}`} className="absolute inset-0 z-0">
                    <span className="sr-only">View Post</span>
                </Link>
            </div>

            {/* bottom section (text) */}
            <div className="flex flex-col h-[45%] w-full bg-[var(--secondary)] text-[var(--primary)] p-sm justify-between">
                <div className="flex flex-col gap-xs w-full">
                    <h3 className="text-md font-normal line-clamp-1">{title}</h3>
                    <p className="line-clamp-3">{excerpt}</p>
                </div>
                <div className="self-end">
                    <Link href={`/blog/${slug}`}>
                        <MainButton name="Read More" weight="font-light" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;