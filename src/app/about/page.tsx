"use client";

import React from "react";
import ExperienceSection from "../experience/page";
import EducationSection from "../education/page";
import Link from "next/link";
import SkillsSections from "../skills/page";
import Projects from "../projects/page";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-sidebar">
        <div className="about-name">Kenneth Balantucas</div>

        <div className="about-logo">
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

        {/* <div className="about-course">BS Computer Engineering</div> */}
        <div className="about-paragraph">
          I&apos;m a BS Computer Engineering graduate, passionate about web
          development, dedicated to continuous learning and personal growth.
        </div>

        <div className="about-link">
          <div className="mt-10 hover:underline">
            <Link href="about#experience">Experience</Link>
          </div>
          <div className="about-links">
            <Link href="about#education">Education</Link>
          </div>
          <div className="about-links">
            <Link href="about#skills">Skills</Link>
          </div>
          <div className="about-links">
            <Link href="about#projects">Projects</Link>
          </div>
          <div className="about-links">
            <Link href="about#contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-experience" id="experience">
          Experience
        </div>
        <div className="about-experience-section">
          <ExperienceSection />
        </div>

        <div
          className="about-education-skills-projects-contacts"
          id="education">
          Education
        </div>
        <div className="about-education-section">
          <EducationSection />
        </div>

        <div>
          <div className="about-education-skills-projects-contacts" id="skills">
            Skills
          </div>
          <div className="about-skills-section">
            <SkillsSections />
          </div>
        </div>
        <div>
          <div
            className="about-education-skills-projects-contacts"
            id="projects">
            Projects
          </div>
          <div className="about-projects-section">
            <Projects />
          </div>
        </div>
        <div>
          <div
            className="about-education-skills-projects-contacts"
            id="contact">
            Contact
          </div>
          <div className="about-contacts-section">
            <div className="my-9">Get in touch!</div>
            <div>You can contact me here!</div>
            <a href="mailto:kennethbalantucas14@gmail.com">
              <button type="button" className="about-contacts-btn">
                Email me!
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
