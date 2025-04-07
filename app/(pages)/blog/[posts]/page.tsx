import { BlogPostData } from "@/data/mockup/MockupData";
import Image from "next/image";

interface PostPageProps {
    params: { posts: string },
}

const PostPage = ({ params }: PostPageProps) => {

    const slug = params.posts;
    const post = BlogPostData.find(item => item.slug === slug);

    if (!post) {
        return <div className="p-md text-center text-accent">
            Post Not Found
        </div>
    }

    return (
        <div className="p-md">
            <h1 className="text-2xl font-bold mb-sm">{post.title}</h1>

            <div className="w-full h-[300px] relative mb-md">
                <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    priority
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="text-base text-primary">
                {post.content}
            </div>
        </div>
    )
}

export default PostPage;