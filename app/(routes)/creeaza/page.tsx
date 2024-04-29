import React from "react";
import PostForm from "../../../components/PostForm";

const Page = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-screen z-30 bg-gray-400 bg-opacity-40 flex justify-center items-center">
      <div className="w-full px-4">
        <PostForm />
      </div>
    </div>
  );
};

export default Page;
