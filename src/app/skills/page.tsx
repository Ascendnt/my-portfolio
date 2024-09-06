"use client";
import React from "react";
import Image from "next/image";

const SkillsSections = () => {
  return (
    <div className="about-skills-page">
      <div className="flex flex-col items-center">
        <Image src="/html5.svg" width={50} height={50} alt="HTML" />
        <span className="about-skills-image">HTML</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/css3.svg" width={50} height={50} alt="CSS" />
        <span className="about-skills-image">CSS</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/javascript-js.svg"
          width={50}
          height={50}
          alt="JavaScript"
        />
        <span className="about-skills-image">JavaScript</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/react.svg" width={50} height={50} alt="React.JS" />
        <span className="about-skills-image">React.JS</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/node-js.svg" width={50} height={50} alt="Node.JS" />
        <span className="about-skills-image">Node.JS</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/typescript-icon.svg"
          width={50}
          height={50}
          alt="Typescript"
        />
        <span className="about-skills-image">Typescript</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="bg-white rounded-full"
          src="/nextjs.svg"
          width={50}
          height={50}
          alt="Next.JS"
        />
        <span className="about-skills-image">Next.JS</span>
      </div>
    </div>
  );
};

export default SkillsSections;
