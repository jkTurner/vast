import { BlogPostData } from "@/data/mockup/MockupData";
import Image from "next/image";
import MainButton from "../ui/buttons/MainButton";
import Link from "next/link";


const BlogBanner = () => {
    return (
        <div className="container md:px-sm mb-md">
            <div className="flex md:flex-row flex-col bg-[var(--primary)] vastPatternPrimary md:h-[450px]">

                {/* Left Column (Text) */}
                <div className="flex flex-col justify-center gap-sm p-md md:w-[50%] w-full">
                    <div className="">
                        <h1 className="headerL text-[var(--secondary)]">{BlogPostData[0].title}</h1>
                        <span className="text-[var(--accent)] text-sm">{BlogPostData[0].date}</span>
                    </div>
                    <p className="text-[var(--textKill)]">{BlogPostData[0].excerpt}</p>
                    <p className="text-[var(--textKill)] line-clamp-4">{BlogPostData[0].content}</p>

                    <div className="self-end">
                        <Link href={`/blog/${BlogPostData[0].slug}`}>
                            <MainButton name="Read More" background="var(--accent)" />
                        </Link>
                    </div>
                </div>

                {/* Right Column (Image) */}
                <div className="relative h-[320px] md:flex-1 md:h-full">
                    <Image
                        src={BlogPostData[0].image}
                        alt={BlogPostData[0].title}
                        fill
                        priority
                        className="object-cover overflow-hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogBanner;