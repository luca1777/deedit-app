import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto max-w-[1000px] px-4">
      <Skeleton className=" h-[200px] rounded-xl w-full p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="w-[80px] h-[80px] bg-zinc-700 rounded-full"></div>
          <div className="w-[120px] h-[50px] bg-zinc-700 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[100px] h-[20px] bg-zinc-700 rounded-full"></div>
          <div className="w-[200px] h-[10px] bg-zinc-700 rounded-xl"></div>
        </div>
      </Skeleton>
    </div>
  );
};

export default Loading;
