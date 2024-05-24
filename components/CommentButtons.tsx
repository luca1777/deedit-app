"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReplyImg from "../public/assets/reply.svg";
import RepostImg from "../public/assets/repost.svg";
import Comment from "./post-components/Comment";
import LikeCommentButton from "./LikeCommentButton";
import ShareButton from "./ShareButton";

const CommentButtons = ({ commentId, likes, author, userPicture }) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleReply = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-3.5">
        <LikeCommentButton commentId={commentId} likes={likes} />
        <button onClick={handleReply}>
          <Image
            src={ReplyImg}
            alt="reply"
            width={24}
            height={24}
            className="cursor-pointer object-contain pulse-comment-btn"
          />
        </button>
        <Image
          src={RepostImg}
          alt="repost"
          width={24}
          height={24}
          className="cursor-pointer object-contain hover:scale-110"
        />
        <ShareButton />
      </div>

      {isReplyOpen && (
        <div>
          <Comment
            postId={commentId}
            isReply={true}
            author={author}
            userPicture={userPicture}
          />
        </div>
      )}
    </div>
  );
};

export default CommentButtons;
