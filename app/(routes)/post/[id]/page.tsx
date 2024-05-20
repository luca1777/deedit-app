import Comment from "@/components/post-components/Comment";
import PostCard from "@/components/PostCard";
import { fetchPostById } from "@/lib/actions/post.action";
import React from "react";
import CommentCard from "../../../../components/CommentCard";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const plainPostId = JSON.parse(JSON.stringify(params.id));
  const post = await fetchPostById(params.id);

  console.log(post);

  return (
    <section className="w-full flex flex-col justify-center items-center pb-8">
      <div className="px-4 mb-6">
        <PostCard post={post} />
      </div>

      <div className="w-full px-4 mt-7">
        <Comment
          postId={plainPostId}
          isReply={false}
          author={JSON.stringify(post.author)}
        />
      </div>

      <div className="mt-10 px-4 w-full flex flex-col gap-6">
        {post.children.map((reply) => (
          <div key={reply.id} className="">
            <CommentCard comment={reply} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
