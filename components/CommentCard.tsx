import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserImg from "../public/assets/user-fake.jpg";
import ShareImg from "../public/assets/share.svg";
import ShareModal from "./ShareButton";
import { text } from "stream/consumers";
import { fetchCommentById } from "@/lib/actions/comment.action";
import CommentButtons from "./CommentButtons";

interface CommentProps {
  comment: Comment;
}

interface Comment {
  _id: string;
  content: string;
  parentId: string;
  likes: number;
  createdAt: string;
  children: Comment[];
}

const CommentCard = async ({ comment }: CommentProps) => {
  const { content, _id, parentId, createdAt, children, likes } = comment;
  const plainCommentId = JSON.parse(JSON.stringify(_id));

  const nestedReply = await fetchCommentById(_id);

  return (
    <article className="w-full mx-auto max-w-[1000px] flex flex-col rounded-xl pl-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href="/" className="no-underline relative h-11 w-11">
              <Image
                src={UserImg}
                alt="user-img"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
            <div className="relative mt-2 w-0.5 grow rounded-full bg-neutral-800" />
          </div>

          <div className="flex w-full flex-col pb-4">
            <Link href="/" className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1 pb-1">
                Mihai Alexandru
              </h4>
            </Link>
            <p className="text-small-regular text-light-2">{content}</p>

            <div className="mt-2 flex flex-col gap-3">
              <CommentButtons commentId={plainCommentId} likes={likes} />

              {children && children.length > 0 && (
                <div className="">
                  <p className="text-subtle-medium text-gray-1">
                    {children.length} replies
                  </p>
                </div>
              )}

              <div>
                <div>
                  {nestedReply.children.map((reply) => (
                    <div key={reply._id}>
                      <CommentCard comment={reply} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {isShareOpen && <ShareModal closeModal={closeModal} />} */}
      </div>
    </article>
  );
};

export default CommentCard;
