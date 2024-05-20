import React from "react";
import PostForm from "../../../components/PostForm";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div className="w-full">
      <div className="w-full px-4">
        <PostForm authorId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
