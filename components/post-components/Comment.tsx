"use client";
import Image from "next/image";
import { useState } from "react";
import UserImg from "../../public/assets/user-fake.jpg";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { addCommentToPost } from "@/lib/actions/post.action";
import { addReplyToComment } from "@/lib/actions/comment.action";

interface Props {
  author: string;
  postId: string;
  isReply: boolean;
}

const Comment = ({ postId, isReply, author }: Props) => {
  const [commentBody, setCommentBody] = useState<string>("");
  const pathname = usePathname();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      comment: commentBody,
    },
  });

  const onSubmit = async (values) => {
    console.log(postId);
    const plainPostId = JSON.parse(JSON.stringify(postId));

    if (isReply) {
      await addReplyToComment(
        JSON.parse(author),
        plainPostId,
        values.comment,
        pathname
      );
    } else {
      await addCommentToPost(
        JSON.parse(author),
        plainPostId,
        values.comment,
        pathname
      );
    }
    reset();
  };

  return (
    <div className="w-full mx-auto max-w-[1000px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-between gap-8 border-t border-b border-dark-4 py-4 items-center">
          <div className="w-full flex gap-4">
            <div>
              <Image
                src={UserImg}
                alt="user"
                width={40}
                height={40}
                className="rounded-full w-full"
              />
            </div>
            <div className="w-full">
              <div className="mt-2">
                <input
                  id="comment"
                  placeholder="Repply..."
                  onInput={(e) =>
                    setCommentBody((e.target as HTMLInputElement).value)
                  }
                  {...register("comment")}
                  className="w-full text-white bg-black border-none focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              className="text-white rounded-full bg-red-500 px-6 py-2 w-full text-xs hover:bg-red-700 transition-all duration-300 ease-in-out"
            >
              Reply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
