'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed w-full z-50 p-4 text-white transition-all duration-300 ${
          isScrolled ? 'bg-custom-radial-gradient bg-opacity-100' : 'bg-opacity-0'
        }`}
      >
        <div className="flex items-center justify-center gap-9 animate-slidein">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
