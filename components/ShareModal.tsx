"use client";
import React from "react";
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

const ShareModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30 opacity-100 backdrop-blur-[.5px]"></div>
      <div className="z-30 flex flex-col items-center gap-8 rounded-lg bg-zinc-800 p-4">
        <div className="flex items-center justify-between gap-16">
          <div></div>
          <p className="mx-8 border-b text-lg">Trimite catre prieteni</p>
          <div className="p-2">
            <button onClick={closeModal}>X</button>
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
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
          <div>
            <TwitterShareButton url={"http://localhost:3001/"}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div>
            <WhatsappShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
              separator=":: "
            >
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
  );
};

export default ShareModal;
