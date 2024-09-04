"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {

  return (
    <div className="relative">
      <nav className="fixed w-full z-50 p-4 text-white bg-[#1B2735] bg-opacity-0">
        <div className="flex items-center justify-center gap-3 hover:cursor-default animate-slidein">
          <Link href="/" className="cursor-default">Home</Link>
          <Link href="/about" className="cursor-default">About</Link>
        </div>
      </nav>
    </div>

  );
};

export default NavBar;
