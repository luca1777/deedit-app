import type { NextPage } from "next";
import Category from "../../../../components/Category";
import { fetchPostsByCategory } from "@/lib/actions/post.action";
import PostCard from "@/components/PostCard";
import Loading from "./loading";

const FunnyPage: NextPage = async () => {
  const postsData = await fetchPostsByCategory("funny", 1, 30);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
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

export default FunnyPage;
