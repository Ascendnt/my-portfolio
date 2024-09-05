'use client'

import React from 'react'
import ExperienceSection from '../experience/page';
import EducationSection from '../education/page';
import Link from "next/link";
import SkillsSections from '../skills/page';
import Projects from '../projects/page';
import Image from 'next/image';




const AboutPage = () => {
  return (
      <section className="flex min-h-screen text-white animate-slidein bg-custom-radial-gradient">
        
        <div className=" fixed top-0 left-0 w-1/3 p-32 h-full ">
          <div className='w-max m-5 select-none text-4xl'>Kenneth Balantucas</div>
          <div className='w-max m-5 select-none text-gray-400'>BS Computer Engineering</div>
          <div className='w-max m-5 mt-12 select-none'>Some Paragraph Here</div>

          <div className='w-max m-5'>
            <div className='mt-10 hover:underline scroll-mt-[50%]'><Link href="about#experience">Experience</Link></div>
            <div className='mt-3 hover:underline'><Link href="about#education">Education</Link></div>
            <div className='mt-3 hover:underline'><Link href="about#skills">Skills</Link></div>
            <div className='mt-3 hover:underline'><Link href="about#projects">Projects</Link></div>
            <div className='mt-3 hover:underline'><Link href="about#contact">Contact</Link></div>
          </div>

          <div className='flex gap-7 m-5 mt-12'>
          <div className='bg-white rounded-full'>
            <Link href="https://github.com/kennethBalantucas" target="_blank">      
              <Image
                src="/github.svg"
                width={40}
                height={40}
                alt="HTML"
              /></Link>

          </div>

          <Link href="https://linkedin.com/in/kennethbalantucas" target="_blank">      
            <Image
              src="/linkedin.svg"
              width={40}
              height={40}
              alt="HTML"
            /></Link>
          </div>
        </div>

        
        <div className='flex-1 ml-[35%] p-32 mt-0'>
          <div className='w-max text-3xl select-none scroll-mt-[7.5rem]' id='experience'>Experience</div>
          <div className='mt-10 ml-16 px-8 select-none'><ExperienceSection /></div>

          <div className='w-max text-3xl mt-32 select-none scroll-mt-[7.5rem]' id='education'>Education</div>
          <div className='mt-10 ml-16 px-8 select-none'><EducationSection /></div>

          <div>
            <div className='w-max text-3xl mt-32 scroll-mt-[7.5rem]' id='skills'>Skills</div>
            <div className="mt-10 ml-16 px-8 "><SkillsSections /></div>
          </div>
          <div>
            <div className='w-max text-3xl mt-32 scroll-mt-[7.5rem]' id='projects'>Projects</div>
            <div className="flex items-center justify-center w-full mt-10 px-8"><Projects /></div>
          </div>
          <div>
            <div className='w-max text-3xl mt-32 scroll-smooth scroll-mt-[7.5rem]' id='contact'>Contact</div>
            <div className="flex flex-col items-center justify-center">
              <div className='my-9'>Get in touch!</div>
              <div className=''>You can contact me here!</div>
              <button type="button" className="my-9 px-6 py-3.5 text-base font-medium text-white bg-[#535C91] hover:bg-[#070F2B] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">My Email!</button>
            </div>
          </div>
        </div>
      </section>



  )
}

export default AboutPage
