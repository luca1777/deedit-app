"use client";
import { globalSearch } from "@/lib/actions/general.actions";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchResult = () => {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  const global = searchParams.get("global");
  const type = searchParams.get("type");

  useEffect(() => {
    const fetchResult = async () => {
      setResult([]);
      setIsLoading(true);

      try {
        const res = await globalSearch({ query: global, type });

        setResult(JSON.parse(res));
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    if (global) {
      fetchResult();
    }
  }, [global, type]);

  const renderLink = (type: string, id: string) => {
    switch (type) {
      case "post":
        return `/post/${id}`;
      case "comment":
        return `/post/${id}`;
      case "user":
        return `/profile/${id}`;
      default:
        return "/";
    }
  };

  return (
    <div className="w-full text-white">
      <div className="my-5 h-[1px]" />

      <div className="space-y-5">
        {global === null ? (
          <div className="font-semibold">Search something</div>
        ) : (
          <p className="font-semibold">
            We find {`${result.length} results for you`}
          </p>
        )}

        {global === null ? (
          ""
        ) : isLoading ? (
          <div className="flex flex-col justify-center items-center gap-4 px-5">
            <p className="loader items center"></p>
            <p className="">Browsing in our app</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {global ? (
              result.map((item: any, index: number) => (
                <Link
                  href={renderLink(item.type, item.id)}
                  key={item.type + item.id + index}
                  className="flex w-full cursor-pointer items-start gap-3 py-2.5 hover:bg-light-700/50 dark:bg-dark-500/50"
                >
                  <Image
                    src="/assets/search.svg"
                    alt="tags"
                    width={18}
                    height={18}
                    className="invert-colors mt-1 object-contain"
                  />

                  <div className="flex flex-col">
                    <p className="line-clamp-1 text-small-regular text-light-2">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm capitalize mt-1">
                      {item.type}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex-center flex-col px-5">
                <p className="text-dark200_light800 body-regular px-5 py-2.5">
                  Oops, no results found
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
