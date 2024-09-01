'use client'

import React from 'react'
import ExperienceSection from '../experience/page';
import EducationSection from '../education/page';
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="flex min-h-screen bg-black text-white">
      <div className="p-32">

        <div className='w-max m-5'>Name</div>
        <div className='w-max m-5'>Course</div>
        <div className='w-max m-5'>Some Paragraph Here</div>

        

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

        <div className='w-max'>Experience</div>
        <div className='mt-10 px-8'><ExperienceSection /></div>
        
        <div className=''>
          <span className=''></span>
          
          <div className="flex px-8">
            
            
          </div>
        </div>

        <div className='w-max mt-16'>Education</div>
        <div className='mt-10 px-8'><EducationSection /></div>
        
        <div className=''>
          <span className=''></span>
          
          <div className="flex px-8">
            
            
          </div>
        </div>

        <div>
          <div className='w-max mt-16'>Skills</div>
          <div className="flex flex-col items-center justify-center mt-10 px-8 ">we test here</div>
        </div>
        <div>
          <div className='w-max mt-16'>Projects</div>
          <div className="w-max mt-10 px-8">we test here</div>
        </div>
        <div>
          <div className='w-max mt-16'>Contact</div>
            <div className="flex flex-col items-center justify-center">
              <div className='my-9'>blah blah blah</div>
              <button>Button</button>
            
          </div>
        </div>
        

      </div>
    
    </section>
    

  )
}

export default AboutPage
