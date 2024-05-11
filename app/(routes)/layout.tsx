import Category from "@/components/Category";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Topbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex flex-1 flex-col items-center bg-dark-1 padding-top-layout padding-md-top-layout sm:px-10 padding-layout">
          <div className="w-full max-w-4xl pb-4">{children}</div>
        </section>
      </div>
      <Bottombar />
    </main>
  );
};

export default Layout;
