"use client";
import React from "react";
import { sidebarLinks } from "../../constants/index";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignOutButton, useAuth } from "@clerk/nextjs";

const LeftSidebar = () => {
  const userId = useAuth();
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <div className="sticky min-w-[100px] left-0 top-0 flex justify-end">
        <div className="flex h-screen flex-col justify-between overflow-auto border-r border-r-dark-4 bg-zinc-800 bg-opacity-90 pb-5 pt-28 custom-scrollbar w-full">
          <div className="flex w-full flex-1 flex-col gap-8 px-6">
            {sidebarLinks.map((link) => {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

              if (link.route === "/profile") {
                if (userId) {
                  link.route = `${link.route}/${userId.userId}`;
                } else {
                  return null;
                }
              }

              return (
                <div key={link.label} className="w-[60px] h-[60px]">
                  <Link
                    href={link.route}
                    key={link.label}
                    className={`relative flex hover:bg-gray-400 rounded-lg p-4 w-full justify-center ${isActive && "bg-firebrick"} `}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center mb-8">
            <SignOutButton>
              <Image
                src="/assets/signout.svg"
                width={20}
                height={20}
                alt="sign-out"
                className="cursor-pointer"
              />
            </SignOutButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftSidebar;
