import Profile from "@/components/Profile";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserByClerkId({ userId });

  return (
    <div className="w-full p-4">
      <h1 className="text-light-1 text-xl font-semibold">Edit Profile</h1>
      <div className="mt-9">
        <Profile user={JSON.stringify(mongoUser)} clerkId={userId} />
      </div>
    </div>
  );
};

export default Page;
