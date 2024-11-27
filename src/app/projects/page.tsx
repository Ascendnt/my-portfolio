"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      <div className="max-w-sm shadow-md bg-[#3f3d56]">
        <div className="flex justify-center items-center">
          <Image
            src="/portfolio.png"
            alt="Kenneth's Portfolio"
            width={400}
            height={400}
          />
        </div>
        <div className="px-16 py-4">
          <div className="font-bold text-xl mb-2 text-white">
            Task Manager App
          </div>
          <p className="text-gray-400 text-base">
            This is a Task Manager application developed using React.js.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div>
            {["HTML", "CSS", "React", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="https://github.com/Ascendnt/task-manager-app"
              className="no-underline hover:underline"
              target="_blank">
              Github Repository
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm shadow-md bg-[#3f3d56]">
        <div className="flex justify-center items-center">
          <Link href="https://ascendnt.github.io/WeatherApp/">
            <Image
              src="/portfolio.png"
              alt="Kenneth's Portfolio"
              width={400}
              height={400}
            />
          </Link>
        </div>
        <div className="px-16 py-4">
          <div className="font-bold text-xl mb-2 text-white">Weather App</div>
          <p className="text-gray-400 text-base">
            A web that shows you the weather of cities.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div>
            {["HTML", "CSS", "React", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="https://github.com/Ascendnt/my-portfolio"
              className="no-underline hover:underline"
              target="_blank">
              Github Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
