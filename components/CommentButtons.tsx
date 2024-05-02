"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeartImgGray from "../public/assets/heart-gray.svg";
import ReplyImg from "../public/assets/reply.svg";
import RepostImg from "../public/assets/repost.svg";
import ShareImg from "../public/assets/share.svg";
import Comment from "./post-components/Comment";

const CommentButtons = ({ commentId }) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleReply = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-3.5">
        <Image
          src={HeartImgGray}
          alt="heart"
          width={24}
          height={24}
          className="cursor-pointer object-contain hover:scale-110"
        />
        <button onClick={handleReply}>
          <Image
            src={ReplyImg}
            alt="reply"
            width={24}
            height={24}
            className="cursor-pointer object-contain animate-pulse"
          />
        </button>
        <Image
          src={RepostImg}
          alt="repost"
          width={24}
          height={24}
          className="cursor-pointer object-contain hover:scale-110"
        />
        <Image
          src={ShareImg}
          alt="share"
          width={24}
          height={24}
          className="cursor-pointer object-contain hover:scale-110"
        />
      </div>

      {isReplyOpen && (
        <div>
          <Comment postId={commentId} isReply={true} />
        </div>
      )}
    </div>
  );
};

export default CommentButtons;
