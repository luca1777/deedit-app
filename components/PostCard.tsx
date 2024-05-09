import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserImg from "../public/assets/user-fake.jpg";

import PostButtons from "./PostButtons";

interface PostProps {
  post: Post;
}

interface Post {
  _id: string;
  content: string;
  parentId: string | null;
  createdAt: string;
  likes: number;
  children: Comment[];
}

const PostCard = ({ post }: PostProps) => {
  const { content, _id, parentId, createdAt, children, likes } = post;

  return (
    <article className="w-full mx-auto max-w-[800px] flex flex-col rounded-xl bg-dark-4 p-7">
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

          <div className="flex w-full flex-col">
            <Link href="/" className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1 pb-2">
                Mihai Alexandru
              </h4>
            </Link>
            <p className="text-small-regular text-light-2">{content}</p>

            <div className="mt-5 flex flex-col gap-3">
              <PostButtons postId={_id} likes={likes} />

              {children && children.length > 0 && (
                <Link href={`/post/${_id}`}>
                  <p className="text-subtle-medium text-gray-400">
                    {children.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
