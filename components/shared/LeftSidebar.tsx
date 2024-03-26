'use client';
import React from 'react';
import { sidebarLinks } from '../../constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import LogoutImg from '../../public/assets/logout.svg';
import MenuIcon from '../../public/assets/menu-svgrepo-com.svg';
import CloseIcon from '../../public/assets/close-lg-svgrepo-com.svg';

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="hidden md:block">
      <div className="fixed right-0 top-0 mr-[50px] mt-[100px]">
        <button
          onClick={handleMenuOpen}
          className="p-2 bg-gradient-to-r from-red-500 via-purple-500 rounded-xl bg-opacity-70 transition duration-300 hover:scale-110"
        >
          <Image
            src={MenuIcon}
            alt="menuIcon"
            width={50}
            height={50}
            className="color-white"
          />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed right-0 top-0 z-20 h-screen w-full bg-gray-400 bg-opacity-40 flex justify-end">
          <div className="flex h-screen w-[250px] flex-col justify-between overflow-auto border-r border-r-dark-4 bg-zinc-800 bg-opacity-90 pb-5 pt-28 custom-scrollbar">
            <div className="absolute right-0 mr-[270px]">
              <button
                onClick={handleMenuOpen}
                className="p-2 bg-gradient-to-r from-red-500 via-purple-500 rounded-xl bg-opacity-70 transition duration-300 hover:scale-110 flex justify-center items-center"
              >
                <Image src={CloseIcon} alt="menuIcon" width={40} height={40} />
              </button>
            </div>
            <div className="flex w-full flex-1 flex-col gap-8 px-6">
              {sidebarLinks.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={`relative flex justify-start hover:bg-gray-400 gap-4 rounded-lg p-4 ${isActive && 'bg-firebrick'} `}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                    <p className="text-light-1">{link.label}</p>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 px-6"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LeftSidebar;
