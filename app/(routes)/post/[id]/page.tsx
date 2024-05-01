import Comment from "@/components/post-components/Comment";
import PostCard from "@/components/PostCard";
import { fetchPostById } from "@/lib/actions/post.action";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const plainPostId = JSON.parse(JSON.stringify(params.id));
  const post = await fetchPostById(params.id);

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="px-4 mb-6">
        <PostCard post={post} />
      </div>

      <div className="w-full px-4 mt-7">
        <Comment postId={plainPostId} />
      </div>

      <div className="mt-10">
        {post.children.map((reply) => (
          <div key={reply.id}>
            <PostCard post={reply} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
