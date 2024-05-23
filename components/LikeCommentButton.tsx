"use client";
import Image from "next/image";
import React from "react";
import HeartImgGray from "../public/assets/heart-gray.svg";
import HeartImgRed from "../public/assets/heart-filled.svg";
import { dislikeComment, likeComment } from "@/lib/actions/comment.action";

const LikeCommentButton = ({ commentId, likes }) => {
  const handleToLike = async () => {
    await likeComment(commentId);
  };

  const handleLiked = async () => {
    await dislikeComment(commentId);
  };

  return (
    <div className="flex justify-center items-center gap-0.5">
      {likes >= 1 ? (
        <button onClick={handleLiked} className="flex items-center">
          <Image
            src={HeartImgRed}
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain hover:scale-110"
          />
        </button>
      ) : (
        <button onClick={handleToLike} className="flex items-center">
          <Image
            src={HeartImgGray}
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain hover:scale-110"
          />
        </button>
      )}
    </div>
  );
};

export default LikeCommentButton;
