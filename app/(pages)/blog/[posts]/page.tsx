import { BlogPostData } from "@/data/mockup/MockupData";
import Image from "next/image";
import { notFound } from "next/navigation";
// import Markdown from "react-markdown";

type Params = {
  posts: string;
};

const PostPage = async ({ params }: { params: Promise<Params> }) => {
    const { posts: slug } = await params;
  
    const post = BlogPostData.find(item => item.slug === slug);
  
    if (!post) {
      notFound();
    }
  
    return (
    
        <div className="flex gap-md w-full max-w-[1280px] px-sm">

            {/* Post Content */}
            <div className="w-full md:max-w-[70%]">
                
                {/* Title & Author */}
                <div className="flex flex-col mb-sm gap-[8px]">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <div className="flex gap-xxs items-baseline just">
                        <h4 className="text-textLight text-size-xs">By {post.author}</h4>
                        <span className="text-textLight text-size-xs">{post.date}</span>
                    </div>
                </div>
        
                <div className="w-full h-[300px] relative mb-md">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover w-full h-full"
                />
                </div>
        
                <div className="">
                    <p className="text-textLight text-size-sm">{post.content}</p>
                </div>
            </div>

            {/* Side Content */}
            <div className="w-full md:max-w-[30%] h-[500px] bg-primary">

            </div>
        </div>
    );
  };
  
  export default PostPage;
  
  