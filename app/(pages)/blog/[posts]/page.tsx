import { BlogPostData } from "@/data/mockup/MockupData";
import Image from "next/image";
import { notFound } from "next/navigation";

const PostPage = async ({ params }: { params: { posts: string } }) => {
  const post = BlogPostData.find((item) => item.slug === params.posts);

  if (!post) {
    notFound();
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

      <div className="text-base text-primary">{post.content}</div>
    </div>
  );
};

export default PostPage;
