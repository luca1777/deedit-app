"use client";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("global");

  const [search, setSearch] = useState(query || "");

  const handleClick = () => {
    setSearch("");
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "global",
          value: search,
        });

        router.push(newUrl, { scroll: false });
      } else {
        router.push("/search");
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, router, pathname, searchParams]);

  return (
    <div className="w-full mx-auto max-w-[600px] min-h-[200px] bg-dark-4 rounded-xl border-zinc-700 border">
      <div className="w-full p-6">
        <div className="w-full flex items-center h-10 gap-4 bg-dark-1 text-white rounded-xl border-zinc-700 border p-2">
          <Image src="/assets/search.svg" width={20} height={20} alt="search" />
          <input
            type="text"
            placeholder="Search for post, user, or comments..."
            value={search}
            className="bg-transparent outline-none w-full"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={handleClick}>
            <Image
              src="/assets/close-search.svg"
              width={25}
              height={25}
              alt="close"
            />
          </button>
        </div>
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;
