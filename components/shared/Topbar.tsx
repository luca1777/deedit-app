import Link from "next/link";
import React from "react";
import LogoutImg from "../../public/assets/logout.svg";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-center md:justify-start bg-zinc-800 px-6 py-3">
      <div className="flex justify-between w-full">
        <Link href="/">
          <p className="text-heading3-bold text-light-1 max-xs:hidden">
            Deedit
          </p>
        </Link>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: "h-10 w-10" },
              variables: { colorPrimary: "#ff0000" },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Topbar;
