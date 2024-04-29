"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import WelcomeAnimation from "../components/home-page/welcome-animation";
// import Post from "../components/Post";
import BannerHome from "../components/home-page/BannerHome";
import Category from "../components/Category";
// import { PostsContext } from "../context/posts";

const HomePage: NextPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

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
        <div className="flex w-full flex-col items-center justify-center bg-black">
          <Category />
          <div className="flex w-full flex-col">
            <BannerHome textPrimary="exploreaza" textSecondary="povestile" />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
