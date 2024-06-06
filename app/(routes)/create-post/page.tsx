import React from "react";
import PostForm from "../../../components/PostForm";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/lib/actions/user.action";
import Loading from "./loading";

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserByClerkId({ userId });

  return (
    <div className="w-full">
      <div className="w-full px-4">
        <PostForm
          username={mongoUser.username}
          userPicture={mongoUser.picture}
          authorId={JSON.stringify(mongoUser._id)}
        />
      </div>
    </div>
  );
};

export default Page;
