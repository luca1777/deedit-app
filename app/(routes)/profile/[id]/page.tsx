import React from "react";

export interface URLProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string;
  };
}

const Page = async ({ params, searchParams }: URLProps) => {
  // const userInfo = await getUserInfo({ userId: params.id });

  return <div className="text-white">{params.id}</div>;
};

export default Page;
