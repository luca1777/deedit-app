"use client";
import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import WelcomeAnimation from "../components/home-page/welcome-animation";
import Post from "../components/Post";
import BannerHome from "../components/home-page/BannerHome";
import Category from "../components/Category";
import { PostsContext } from "../context/posts";

const HomePage: NextPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  // const postsContext = useContext(PostsContext);
  // const { posts } = postsContext;

  useEffect(() => {
    const isVisited = localStorage.getItem("isVisited");

    if (!isVisited) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        localStorage.setItem("isVisited", "true");
        setShowMainContent(true);
      }, 1500);
    } else {
      setShowMainContent(true);
    }
  }, []);

  return (
    <>
      <WelcomeAnimation showAnimation={showAnimation} />
      {showMainContent && (
        <div className="w-full bg-black flex flex-col justify-center items-center">
          <Category />
          <div className="flex flex-col w-full">
            <BannerHome textPrimary="exploreaza" textSecondary="povestile" />
          </div>
          {/* {posts?.map((post) => (
            <Post key={post._id} post={post} />
          ))} */}
        </div>
      )}
    </>
  );
};

export default HomePage;
