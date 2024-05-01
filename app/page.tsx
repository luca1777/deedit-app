import type { NextPage } from "next";
// import { useEffect, useState } from "react";
// import WelcomeAnimation from "../components/home-page/welcome-animation";
// import Post from "../components/Post";
import BannerHome from "../components/home-page/BannerHome";
import Category from "../components/Category";
import { fetchPosts } from "@/lib/actions/post.action";
import PostCard from "@/components/PostCard";
// import { PostsContext } from "../context/posts";

const HomePage: NextPage = async () => {
  // const [showAnimation, setShowAnimation] = useState(false);
  // const [showMainContent, setShowMainContent] = useState(false);

  const postsData = await fetchPosts(1, 30);

  console.log(postsData);

  // useEffect(() => {
  //   const isVisited = localStorage.getItem("isVisited");

  //   if (!isVisited) {
  //     setShowAnimation(true);
  //     setTimeout(() => {
  //       setShowAnimation(false);
  //       localStorage.setItem("isVisited", "true");
  //       setShowMainContent(true);
  //     }, 1500);
  //   } else {
  //     setShowMainContent(true);
  //   }
  // }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-black">
        <Category />
        <div className="flex w-full flex-col">
          <BannerHome textPrimary="exploreaza" textSecondary="povestile" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6">
          {postsData.posts.map((post: any) => (
            <div key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
