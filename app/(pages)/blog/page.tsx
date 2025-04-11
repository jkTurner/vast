import BlogBanner from "@/app/components/banners/BlogBanner";
import BlogCard from "@/app/components/ui/cards/blog/BlogCard";
import { BlogPostData } from "@/data/mockup/MockupData";

const BlogPage = () => {

    const blogPost = BlogPostData.slice(1, BlogPostData.length);

    return (
        <>
            <BlogBanner />
            <div className="cardsContainer">
                {blogPost.map((item, index) => (
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