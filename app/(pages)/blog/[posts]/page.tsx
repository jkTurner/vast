import TagButton from "@/app/components/ui/buttons/TagButton";
import BlogCard from "@/app/components/ui/cards/blog/BlogCard";
import CommentBox from "@/app/components/ui/form/comment/CommentBox";
import TextField from "@/app/components/ui/form/textfield/TextField";
import { FacebookIcon, LineIcon, TwitterIcon } from "@/assets/Icons";
import { BlogCategories, BlogPostData, UserData } from "@/data/mockup/MockupData";
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
    
        <div className="flex flex-col blogxl:flex-row gap-sm md:gap-xl w-full max-w-[1280px] px-sm ">

            {/* Post Content */}
            <div className="flex flex-col w-full blogxl:max-w-[70%]">
                
                {/* Title & Author */}
                <div className="flex flex-col mb-sm gap-[8px]">
                    <h1 className="text-[var(--primary)] text-2xl font-bold">{post.title}</h1>
                    <div className="flex gap-xxs items-baseline just">
                        <h4 className="text-[var(--textLight)] text-size-xs">By {post.author}</h4>
                        <span className="text-[var(--textLight)] text-size-xs">{post.date}</span>
                    </div>
                </div>
        
                {/* Image */}
                <div className="w-full h-[400px] relative mb">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Tags */}
                <div className="flex gap-xs flex-wrap my-sm">
                    {post.tags.map((tag, index) => (
                        <TagButton key={index} name={tag} />
                    ))}
                </div>
        
                <div className="">
                    <p className="text-[var(--textLight)] text-size-sm">{post.content}</p>
                </div>

                {/* Comment Count & Share */}
                <div className="flex justify-between my-md md:my-xl border-y-1 border-[var(--textKill)] items-center py-xs">
                    <span className="text-sm font-medium text-[var(--textLight)]">3 Comments</span>
                    <div className="flex gap-xs">
                        <LineIcon size={34} color="var(--textLight)" />
                        <TwitterIcon size={34} color="var(--textLight)" />
                        <FacebookIcon size={34} color="var(--textLight)" />
                    </div>
                </div>

                {/* Comment Section */}
                <TextField placeholder="Write your comment..." buttonName="Submit" />
                
                <div className="flex flex-col gap-xs md:gap-sm mt-sm">
                    {UserData.map((user, index) => (
                        <CommentBox key={index} name={user.name} image={user.image} comment={user.comment} />
                    ))}
                </div>

            </div>

            {/* Side Content */}
            <div className="flex flex-col flex-1">

                {/* Category Section */}
                <div className="flex flex-col">
                    <h4 className="font-bold text-[var(--textLight)]">Categories</h4>
                    <div className="flex flex-wrap gap-xs my-sm">
                        {BlogCategories.map((category, index) => (
                            <TagButton key={index} name={category} />
                        ))}
                    </div>
                </div> 


                 <div className="flex flex-col">
                    <h4 className="font-bold text-[var(--textLight)]">Popular Reads</h4>
                    <div className="flex flex-wrap gap-xs md:gap-sm my-sm">
                        {BlogPostData.slice(0, 3).map((post, index) => (
                            <BlogCard 
                                key={index} 
                                title={post.title}
                                slug={post.slug}
                                excerpt={post.excerpt}
                                content={post.content}
                                image={post.image}    
                            />
                        ))}
                    </div>
                </div> 

            </div>
        </div>
    );
  };
  
  export default PostPage;
  
  