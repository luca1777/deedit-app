import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReplyImg from "../public/assets/reply.svg";
import RepostImg from "../public/assets/repost.svg";
import ShareImg from "../public/assets/share.svg";
import LikeButton from "./LikeButton";

const PostButtons = ({ postId }) => {
  const plainCommentId = JSON.parse(JSON.stringify(postId));

  return (
    <div className="flex gap-3.5">
      <LikeButton postId={plainCommentId} />
      <Link href={`/post/${postId}`}>
        <Image
          src={ReplyImg}
          alt="reply"
          width={24}
          height={24}
          className="cursor-pointer object-contain animate-pulse"
        />
      </Link>
      <Image
        src={RepostImg}
        alt="repost"
        width={24}
        height={24}
        className="cursor-pointer object-contain hover:scale-110"
      />
      {/* <button onClick={() => setIsShareOpen(true)}> */}
      <Image
        src={ShareImg}
        alt="share"
        width={24}
        height={24}
        className="cursor-pointer object-contain hover:scale-110"
      />
      {/* </button> */}
    </div>
  );
};

export default PostButtons;
