"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import './NavBar.scss';

const NavBar = () => {

  return (
    <div>
        <nav className="flex gap-3 justify-center items-center p-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavBar;
