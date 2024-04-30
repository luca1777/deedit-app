"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Category: NextPage = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center items-center bg-black">
      <nav className="w-[450px] rounded-61xl bg-gray-400 shadow-[0px_12px_20px_rgba(0,_0,_0,_0.04)] flex justify-between py-[5px] px-1 max-w-[95%] lg:max-w-full text-xl text-black font-inter">
        <Link href="/">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/" ? "bg-firebrick" : "bg-transparent"
            } rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${
                pathname === "/" ? "text-white" : "text-black"
              }`}
            >
              All
            </b>
          </button>
        </Link>
        <Link href="/funny">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/funny" ? "bg-firebrick" : "bg-transparent"
            } rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${
                pathname === "/funny" ? "text-white" : "text-black"
              }`}
            >
              Funny
            </b>
          </button>
        </Link>
        <Link href="/sad">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/sad" ? "bg-firebrick" : "bg-transparent"
            } rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${
                pathname === "/sad" ? "text-white" : "text-black"
              }`}
            >
              Sad
            </b>
          </button>
        </Link>
        <Link href="/love">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/love" ? "bg-firebrick" : "bg-transparent"
            } rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${
                pathname === "/love" ? "text-white" : "text-black"
              }`}
            >
              Love
            </b>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Category;
