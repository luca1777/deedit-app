import React from "react";
import Post from "../../../components/Post";
import CommentComponent from "../../../components/post-components/CommentComponent";

const PostLayout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="px-4 mb-6">
        {/* <Post /> */}
        <CommentComponent />
      </div>
    </div>
  );
};

export default PostLayout;
