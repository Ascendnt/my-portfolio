"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={`nav-section ${
          isScrolled
            ? "bg-custom-radial-gradient bg-opacity-100"
            : "bg-opacity-0"
        }`}>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
