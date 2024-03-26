'use client';
import type { NextPage } from 'next';
import UpArrow from './icons/UpArrow';
import DownArrow from './icons/DownArrow';
import ShareIcon from './icons/ShareIcon';
import Bookmark from './icons/Bookmark';
import Coments from './icons/Coments';
import Link from 'next/link';
import { useState } from 'react';
import ShareModal from './ShareModal';

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

const Post: React.FC<PostProps> = ({ post }) => {
  const { body, title } = post;
  const [isShareOpen, setIsShareOpen] = useState(false);

  const closeModal = () => {
    setIsShareOpen(false);
  };

  return (
    <div className="max-w-[1159px] flex flex-col text-white font-inter mx-6 mb-6">
      <Link href="/post" className="no-underline">
        <div className="w-full flex flex-col items-start justify-start gap-[10px_0px] shrink-0 mb-6">
          <div className="flex flex-row justify-between flex-wrap items-center gap-[0px_9px] max-w-full w-full">
            <h1 className="flex-1 relative text-2xl lg:text-4xl font-black font-inherit inline-block max-w-full">
              {title}
            </h1>
            <div className="w-[80.3px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-center text-11xl">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22.75px_0px]">
                <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.199999999999815px]">
                  <UpArrow />
                </div>
                <div className="self-stretch h-[45.5px] relative font-extrabold flex items-center justify-center shrink-0 mq950:text-5xl mq450:text-lg">
                  70
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.199999999999815px]">
                  <DownArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1087px] relative text-lg font-medium inline-block shrink-0 mt-2">
            {body}
          </div>
        </div>
      </Link>
      <div className="flex flex-row items-end justify-end gap-[0px_14px]">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIsShareOpen(true)}
            className="hover:scale-110 transition-all duration-300"
          >
            <ShareIcon color="white" />
          </button>
          <button className="hover:scale-110 transition-all duration-300">
            <Bookmark />
          </button>
          <button className="pulse">
            <Coments />
          </button>
          <button className="cursor-pointer [border:none] py-[9px] px-4 bg-white rounded-29xl flex flex-row items-center justify-center gap-[0px_4px] whitespace-nowrap hover:bg-red-300">
            <b className="relative text-xl tracking-[-0.01em] leading-[140%] font-inter text-firebrick text-left">
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
