"use client";
import Image from "next/image";
import React from "react";
import HeartImgGray from "../public/assets/heart-gray.svg";
import HeartImgRed from "../public/assets/heart-filled.svg";
import { dislikePost, likePost } from "@/lib/actions/post.action";
import { usePathname } from "next/navigation";

const LikeButton = ({ postId, likes }) => {
  const pathname = usePathname();

  const handleToLike = async () => {
    await likePost(postId, pathname);
  };

  const handleLiked = async () => {
    await dislikePost(postId, pathname);
  };

  return (
    <div className="flex justify-center items-center gap-0.5">
      {likes >= 1 ? (
        <button onClick={handleLiked}>
          <Image
            src={HeartImgRed}
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain hover:scale-110"
          />
        </button>
      ) : (
        <button onClick={handleToLike}>
          <Image
            src={HeartImgGray}
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain hover:scale-110"
          />
        </button>
      )}
      <div>
        <p className="text-gray-400 text-sm">{likes}</p>
      </div>
    </div>
  );
};

export default LikeButton;
