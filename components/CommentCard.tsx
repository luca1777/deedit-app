import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchCommentById } from "@/lib/actions/comment.action";
import CommentButtons from "./CommentButtons";
import { getUserById } from "@/lib/actions/user.action";
import { getTimestamp } from "@/lib/utils";

interface CommentProps {
  comment: Comment;
}

interface Comment {
  _id: string;
  content: string;
  parentId: string;
  likes: number;
  author: string;
  createdAt: Date;
  children: Comment[];
}

const CommentCard = async ({ comment }: CommentProps) => {
  const { content, _id, parentId, createdAt, children, author, likes } =
    comment;
  const plainCommentId = JSON.parse(JSON.stringify(_id));
  const nestedReply = await fetchCommentById(_id);
  const user = await getUserById(author);

  return (
    <article className="w-full mx-auto max-w-[1000px] flex flex-col rounded-xl pl-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href="/" className="no-underline relative h-11 w-11">
              <Image
                src={user.picture}
                alt="user-img"
                width={40}
                height={40}
                className="cursor-pointer rounded-full"
              />
            </Link>
            <div className="relative mt-2 w-0.5 grow rounded-full bg-neutral-800" />
          </div>

          <div className="flex w-full flex-col">
            <Link href="/" className="w-fit">
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-2 items-center">
                  <div>
                    <h4 className="cursor-pointer text-base-semibold text-light-1">
                      {user.username}
                    </h4>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {getTimestamp(createdAt)}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-small-regular text-light-2">{content}</p>
                </div>
              </div>
            </Link>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <CommentButtons
                  commentId={plainCommentId}
                  likes={likes}
                  author={JSON.stringify(nestedReply.author)}
                  userPicture={user.picture}
                />

                <div className="flex gap-3">
                  {children && children.length > 0 && (
                    <Link href={`/post/${_id}`}>
                      <p className="text-sm text-gray-400">
                        {children.length} replies
                      </p>
                    </Link>
                  )}
                  <div>
                    {likes > 0 ? (
                      <p className="text-sm text-gray-400">
                        {likes} {likes === 1 ? "like" : "likes"}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

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
      </div>
    </article>
  );
};

export default CommentCard;
