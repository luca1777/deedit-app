import type { NextPage } from "next";
import { fetchPosts } from "@/lib/actions/post.action";
import PostCard from "@/components/PostCard";

const HomePage: NextPage = async () => {
  const postsData = await fetchPosts(1, 30);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-6 px-4">
          {postsData.posts.map((post: any) => (
            <div key={post._id} className="w-full">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
