"use client";
import type { NextPage } from "next";
import UpArrow from "./icons/UpArrow";
import DownArrow from "./icons/DownArrow";
import ShareIcon from "./icons/ShareIcon";
import Bookmark from "./icons/Bookmark";
import Coments from "./icons/Coments";
import Link from "next/link";
import { useState } from "react";
import ShareModal from "./ShareModal";

interface PostProps {
  post: {
    _id: string;
    title: string;
    identifier: string;
    slug: string;
    sub: string;
    body: string;
    subName: string;
    username: string;
    user: string;
    comments: string;
    votes: string;
  };
}

const Post: NextPage = ({ post }: PostProps) => {
  const { body, title } = post;
  const [isShareOpen, setIsShareOpen] = useState(false);

  const closeModal = () => {
    setIsShareOpen(false);
  };

  return (
    <div className="mx-6 mb-6 flex max-w-[1159px] flex-col text-white">
      <Link href="/post" className="no-underline">
        <div className="mb-6 flex w-full shrink-0 flex-col items-start justify-start gap-[10px_0px]">
          <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-between gap-[0px_9px]">
            <h1 className="relative inline-block max-w-full flex-1 text-2xl font-black lg:text-4xl">
              {title}
            </h1>
            <div className="box-border flex w-[80.3px] flex-col items-start justify-start px-0 pb-0 pt-2.5 text-center">
              <div className="flex flex-col items-start justify-start gap-[22.75px_0px] self-stretch">
                <div className="flex flex-row items-start justify-start py-0 pl-[22.199999999999815px] pr-[22px]">
                  <UpArrow />
                </div>
                <div className="mq950:text-5xl mq450:text-lg relative flex h-[45.5px] shrink-0 items-center justify-center self-stretch font-extrabold">
                  70
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-[22.199999999999815px] pr-[22px]">
                  <DownArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-2 inline-block max-w-[1087px] shrink-0 text-lg font-medium">
            {body}
          </div>
        </div>
      </Link>
      <div className="flex flex-row items-end justify-end gap-[0px_14px]">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIsShareOpen(true)}
            className="transition-all duration-300 hover:scale-110"
          >
            <ShareIcon color="white" />
          </button>
          <button className="transition-all duration-300 hover:scale-110">
            <Bookmark />
          </button>
          <button className="pulse">
            <Coments />
          </button>
          <button className="flex cursor-pointer flex-row items-center justify-center gap-[0px_4px] whitespace-nowrap rounded-29xl bg-white px-4 py-[9px] [border:none] hover:bg-red-300">
            <b className="relative text-left text-xl leading-[140%] tracking-[-0.01em] text-firebrick">
              zi si tu ceva
            </b>
          </button>
        </div>
      </div>
      {isShareOpen && <ShareModal closeModal={closeModal} title={title} />}
    </div>
  );
};

export default Post;
