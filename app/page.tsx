import type { NextPage } from "next";
import BannerHome from "../components/home-page/BannerHome";
import Category from "../components/Category";
import { fetchPosts } from "@/lib/actions/post.action";
import PostCard from "@/components/PostCard";

const HomePage: NextPage = async () => {
  const postsData = await fetchPosts(1, 30);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-black">
        <Category />
        <div className="flex w-full flex-col">
          <BannerHome textPrimary="exploreaza" textSecondary="povestile" />
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

export default HomePage;
