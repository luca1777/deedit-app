import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto max-w-[800px] px-4">
      <Skeleton className=" h-[300px] rounded-xl w-full p-6 flex flex-col justify-between">
        <div className="w-full h-[120px] bg-zinc-700 rounded-xl"></div>
        <div className="w-full h-[100px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
      <Skeleton className=" h-[120px] rounded-xl w-full p-6 flex flex-col justify-between">
        <div className="w-full h-[100px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
      <Skeleton className=" h-[100px] rounded-xl w-[80%] p-6 flex flex-col justify-between">
        <div className="w-full h-[100px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
      <Skeleton className=" h-[100px] rounded-xl w-[80%] p-6 flex flex-col justify-between">
        <div className="w-full h-[100px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
      <Skeleton className=" h-[100px] rounded-xl w-[80%] p-6 flex flex-col justify-between">
        <div className="w-full h-[100px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
      <Skeleton className=" h-[100px] rounded-xl w-[80%] p-6 flex flex-col justify-between">
        <div className="w-full h-[100px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
    </div>
  );
};

export default Loading;
