"use client";
import type { NextPage } from "next";
import Post from "../../../components/Post";
import BannerHome from "../../../components/home-page/BannerHome";
import Category from "../../../components/Category";

const SadPage: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black flex flex-col justify-center items-center">
        <Category />
        <div className="flex flex-col w-full">
          <BannerHome textPrimary="povesti" textSecondary="cam triste" />
        </div>
        {/* <Post />
        <Post /> */}
      </div>
    </>
  );
};

export default SadPage;
