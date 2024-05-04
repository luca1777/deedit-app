"use client";
import Image from "next/image";
import React from "react";
import HeartImgGray from "../public/assets/heart-gray.svg";
import { likePost } from "@/lib/actions/post.action";

const LikeButton = ({ postId }) => {
  const handleLike = async () => {
    await likePost(postId);
  };

  return (
    <div>
      <button onClick={handleLike}>
        <Image
          src={HeartImgGray}
          alt="heart"
          width={24}
          height={24}
          className="cursor-pointer object-contain hover:scale-110"
        />
      </button>
    </div>
  );
};

export default LikeButton;
