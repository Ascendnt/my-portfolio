'use client'

import React from 'react'
import ExperienceSection from '../experience/page';
import EducationSection from '../education/page';
import Link from "next/link";
import SkillsSections from '../skills/page';

const AboutPage = () => {
  return (
    <section className="flex min-h-screen text-white animate-slidein bg-custom-radial-gradient">
      <div className="p-32">

        <div className='w-max m-5 select-none'>Name</div>
        <div className='w-max m-5 select-none'>Course</div>
        <div className='w-max m-5 select-none'>Some Paragraph Here</div>

        

      <div className='w-max m-5'>
        <div className='mt-10'><Link href="">Experience</Link></div>
        <div className='mt-3'><Link href="">Education</Link></div>
        <div className='mt-3'><Link href="">Skills</Link></div>
        <div className='mt-3'><Link href="">Projects</Link></div>
        <div className='mt-3'><Link href="">Contact</Link></div>      
      </div>



        <div className='flex gap-7 m-5'>
          <a href="" className='mt-10'>Logo</a>
          <a href="" className='mt-10'>Logo</a>
          <a href="" className='mt-10'>Logo</a>
          <a href="" className='mt-10'>Logo</a>
        </div>
      </div>

      <div className='flex-1 p-32'>

        <div className='w-max select-none'>Experience</div>
        <div className='mt-10 px-8 select-none'><ExperienceSection /></div>
        

        <div className='w-max mt-16 select-none'>Education</div>
        <div className='mt-10 px-8 select-none'><EducationSection />
        </div>
        
        
        <div>
          <div className='w-max mt-16'>Skills</div>
          <div className="mt-10 px-8 "><SkillsSections /></div>
        </div>
        <div>
          <div className='w-max mt-16'>Projects</div>
          <div className="w-max mt-10 px-8">we test here</div>
        </div>
        <div>
          <div className='w-max mt-16'>Contact</div>
            <div className="flex flex-col items-center justify-center">
              <div className='my-9'>Get in touch!</div>
              <div className=''>You can contact me here!</div>
              <button type="button" className="my-9 px-6 py-3.5 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Extra large</button>

            
          </div>
        </div>
        

      </div>
    
    </section>
    

  )
}

export default AboutPage
