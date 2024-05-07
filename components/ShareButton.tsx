"use client";
import React from "react";
import ShareImg from "../public/assets/share.svg";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import Image from "next/image";

const ShareButton = () => {
  const [isShareOpen, setIsShareOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsShareOpen(true)}>
        <Image
          src={ShareImg}
          alt="share"
          width={24}
          height={24}
          className="cursor-pointer object-contain hover:scale-110"
        />
      </button>
      {isShareOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/30 opacity-100 backdrop-blur-[.5px]"></div>
          <div className="z-30 flex flex-col items-center gap-8 rounded-lg bg-zinc-800 p-4">
            <div className="flex items-center justify-between gap-16">
              <div></div>
              <p className="mx-8 border-b text-lg text-white">
                Trimite catre prieteni
              </p>
              <div className="p-2 text-white">
                <button onClick={() => setIsShareOpen(false)}>X</button>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <FacebookShareButton url={"https://github.com/next-share"}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              <div>
                <TelegramShareButton
                  url={"https://github.com/next-share"}
                  title={"next-share"}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>
              <div>
                <TwitterShareButton url={""}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div>
                <WhatsappShareButton url={"https://github.com/next-share"}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
              <div>
                <FacebookMessengerShareButton
                  url={"https://github.com/next-share"}
                  appId={""}
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
