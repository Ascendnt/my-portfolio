"use client";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AppNav = () => {
  const currentRoute = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
  ];
  return <div></div>;
};

export default AppNav;
