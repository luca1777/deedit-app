import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReplyImg from "../public/assets/reply.svg";
import RepostImg from "../public/assets/repost.svg";
import LikeButton from "./LikePostButton";
import ShareButton from "./ShareButton";

const PostButtons = ({ postId, likes }) => {
  const plainCommentId = JSON.parse(JSON.stringify(postId));

  return (
    <div className="flex gap-3.5">
      <LikeButton postId={plainCommentId} likes={likes} />
      <Link href={`/post/${postId}`}>
        <Image
          src={ReplyImg}
          alt="reply"
          width={24}
          height={24}
          className="cursor-pointer object-contain pulse-comment-btn"
        />
      </Link>
      <Image
        src={RepostImg}
        alt="repost"
        width={24}
        height={24}
        className="cursor-pointer object-contain hover:scale-110"
      />
      <ShareButton />
    </div>
  );
};

export default PostButtons;
