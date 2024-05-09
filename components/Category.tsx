"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Category: NextPage = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center items-center bg-black mb-10 px-4">
      <nav className="max-w-[450px] rounded-xl bg-dark-4 flex justify-between py-[5px] px-1 w-full text-xl text-black font-inter">
        <Link href="/">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/" ? "bg-custom-gradient" : "bg-transparent"
            } rounded-xl hover:bg-custom-gradient`}
          >
            <b className="relative text-xl font-semibold text-white">All</b>
          </button>
        </Link>
        <Link href="/funny">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/funny" ? "bg-custom-gradient" : "bg-transparent"
            } rounded-xl hover:bg-custom-gradient`}
          >
            <b className="relative text-xl font-semibold text-white">Funny</b>
          </button>
        </Link>
        <Link href="/sad">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/sad" ? "bg-custom-gradient" : "bg-transparent"
            } rounded-xl hover:bg-custom-gradient`}
          >
            <b className="relative text-xl font-semibold text-white">Sad</b>
          </button>
        </Link>
        <Link href="/love">
          <button
            className={`cursor-pointer py-[9px] px-4 ${
              pathname === "/love" ? "bg-custom-gradient" : "bg-transparent"
            } rounded-xl hover:bg-custom-gradient`}
          >
            <b className="relative text-xl font-semibold text-white">Love</b>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Category;
