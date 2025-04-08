import TagButton from "@/app/components/ui/buttons/TagButton";
import CommentBox from "@/app/components/ui/form/comment/CommentBox";
import TextField from "@/app/components/ui/form/textfield/TextField";
import { FacebookIcon, LineIcon, TwitterIcon } from "@/assets/Icons";
import { BlogPostData, UserData } from "@/data/mockup/MockupData";
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
    
        <div className="flex flex-col md:flex-row gap-md w-full max-w-[1280px] px-sm ">

            {/* Post Content */}
            <div className="w-full md:max-w-[70%]">
                
                {/* Title & Author */}
                <div className="flex flex-col mb-sm gap-[8px]">
                    <h1 className="text-[var(--primary)] text-2xl font-bold">{post.title}</h1>
                    <div className="flex gap-xxs items-baseline just">
                        <h4 className="text-[var(--textLight)] text-size-xs">By {post.author}</h4>
                        <span className="text-[var(--textLight)] text-size-xs">{post.date}</span>
                    </div>
                </div>
        
                {/* Image */}
                <div className="w-full h-full max-h-[400px] relative mb">
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
                <div className="flex justify-between my-sm border-y-1 border-[var(--textKill)] items-center py-xs">
                    <span className="text-sm font-medium text-[var(--textLight)]">2 Comments</span>
                    <div className="flex gap-xs">
                        <LineIcon size={34} color="var(--textLight)" />
                        <TwitterIcon size={34} color="var(--textLight)" />
                        <FacebookIcon size={34} color="var(--textLight)" />
                    </div>
                </div>

                {/* Comment Section */}
                <TextField placeholder="Write your comment..." buttonName="Submit" />
                
                {UserData.map((user, index) => (
                    <CommentBox key={index} name={user.name} image={user.image} comment={user.comment} />
                ))}

            </div>

            {/* Side Content */}
            <div className="w-full md:max-w-[30%] h-[500px] bg-[var(--primary)]">

            </div>
        </div>
    );
  };
  
  export default PostPage;
  
  