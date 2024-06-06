import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto max-w-[800px] px-4">
      <Skeleton className=" h-[200px] rounded-xl w-full p-6 flex flex-col justify-between">
        <div className="w-full h-[40px] bg-zinc-700 rounded-xl"></div>
        <div className="w-full h-[70px] bg-zinc-700 rounded-xl"></div>
      </Skeleton>
    </div>
  );
};

export default Loading;
