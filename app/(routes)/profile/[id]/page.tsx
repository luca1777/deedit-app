import { getUserByClerkId } from "@/lib/actions/user.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "./loading";

export interface URLProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string;
  };
}

const Page = async ({ params, searchParams }: URLProps) => {
  const userId = params.id;
  const user = await getUserByClerkId({ userId });

  return (
    <div className="w-full p-4">
      <div className="w-full max-w-[800px] mx-auto p-4 flex flex-col gap-4 border-b border-gray-500">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col items-start gap-2">
            <div>
              <Image
                src={user.picture}
                alt="userImg"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-light-1 font-semibold text-xl">
                {user.username}
              </p>
            </div>
          </div>
          <div>
            <Link href="/profile/edit">
              <button className="text-light-1 font-semibold p-4 bg-dark-4 rounded-xl">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        <div>
          <p className="text-light-2 text-sm">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
