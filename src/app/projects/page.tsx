"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="mt-16 max-w-sm shadow-md bg-[#3f3d56]">
      <div className="flex justify-center items-center">
        <Link href="https://kennethbalantucas.vercel.app">
          <Image
            src="/portfolio.png"
            alt="Kenneth's Portfolio"
            width={400}
            height={400}
          />
        </Link>
      </div>
      <div className="px-16 py-4">
        <div className="font-bold text-xl mb-2 text-white">My Portfolio</div>
        <p className="text-gray-400 text-base">
          A web app that showcases my projects and skills. The application is
          built using Next.js, Tailwind CSS and Material UI.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {["Next.JS", "Tailwind CSS", "Material UI"].map((tech) => (
          <span
            key={tech}
            className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
