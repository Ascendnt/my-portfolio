"use client";
import React, { useEffect } from "react";
import ParticlesBackground from "../particles/page";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div>
      <ParticlesBackground />
      <div className="home">
        <div>
          <h1 className="home-name">Kenneth Balantucas</h1>
        </div>
        <div className="home-course">Web Developer</div>
        <div className="logo-images">
          <div className="bg-white rounded-full">
            <Link href="https://github.com/kennethBalantucas" target="_blank">
              <Image src="/github.svg" width={40} height={40} alt="HTML" />
            </Link>
          </div>

          <Link
            href="https://linkedin.com/in/kennethbalantucas"
            target="_blank">
            <Image src="/linkedin.svg" width={40} height={40} alt="HTML" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
