import type { NextPage } from "next";
import BannerHome from "../../../components/home-page/BannerHome";
import Category from "../../../components/Category";
import { fetchPostsByCategory } from "@/lib/actions/post.action";
import PostCard from "@/components/PostCard";

const FunnyPage: NextPage = async () => {
  const postsData = await fetchPostsByCategory("funny", 1, 30);

  return (
    <>
      <div className="w-full bg-black flex flex-col justify-center items-center">
        <Category />
        <div className="flex flex-col w-full">
          <BannerHome textPrimary="povesti" textSecondary="funny" />
        </div>
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
