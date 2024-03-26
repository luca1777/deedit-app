import Link from 'next/link';
import React from 'react';
import LogoutImg from '../../public/assets/logout.svg';
import Image from 'next/image';

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-zinc-800 px-6 py-3">
      <Link href="/" className="flex items-center">
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Deedit</p>
      </Link>
      <div className="flex items-center gap-6 md:gap-0">
        <div className="">
        </div>
        <div className="block md:hidden">

        </div>
      </div>
    </nav>
  );
};

export default Topbar;
