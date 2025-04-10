import BlogCard from "@/app/components/ui/cards/blog/BlogCard";
import { BlogPostData } from "@/data/mockup/MockupData";

const BlogPage = () => {
    return (
        <>
            <h1 className="my-md px-sm self-start w-full max-w-[1280px] mx-auto">Blog Page</h1>
            <div className="cardsContainer">
                {BlogPostData.map((item, index) => (
                    <BlogCard 
                        key={index} 
                        title={item.title} 
                        slug={item.slug} 
                        excerpt={item.excerpt} 
                        image={item.image} 
                        content={item.content} 
                    />
                ))}
            </div>
        </>
    )
}

export default BlogPage;