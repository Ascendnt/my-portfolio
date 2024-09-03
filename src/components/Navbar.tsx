"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import './NavBar.scss';

const NavBar = () => {

  return (
    <div className="relative">
  <nav className="fixed top-0 left-0 w-full z-10 p-4 text-white bg-[#1B2735]">
    <div className="flex items-center justify-center gap-3">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  </nav>
</div>

  );
};

export default NavBar;
