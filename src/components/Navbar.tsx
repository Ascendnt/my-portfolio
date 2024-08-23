"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// {navLinks.map((link, index) => (
//   <Link 
//   href={link.href}
//   className={`${
//     currentRoute === link.href ? "bg-blue-500" : "bg-black"
//     }`}
//     key={index}
//   >
//     {link.name}
//   </Link>
// ))}

const NavBar = () => {
  // // flex items-center justify-center p-4 gap-3 bg-black text-white
  // // const currentRoute = usePathname();
  // const navLinks = [
  //   {
  //     name: "Home",
  //     href: "/",
      
  //   },
  //   {
  //     name: "About",
  //     href: "/about",
      
  //   },
  // ];
  return (
    <div>
        <nav className="flex gap-3 justify-center items-center p-4 bg-black text-white">
        {/* {navLinks.map(())} */}
          <Link href="/">Home</Link>
          <Link href="/">Logo</Link>
          <Link href="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavBar;
