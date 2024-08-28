'use client'

import React from 'react'
import ExperienceSection from '../experience/page';
import EducationSection from '../education/page';

const AboutPage = () => {
  return (
    <section className="flex min-h-screen bg-black text-white">
      <div className="p-32">
        <div className='inline-flex flex-col'>
          <h1>Name</h1>
          <h2>Course</h2>
          
        </div>
        <div className='flex'>
          Some Paragraph here
        </div>
        <div className='inline-flex flex-col py-9'>
          <a href="">Experience</a>
          <a href="">Education</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>

        <div className='flex gap-7'>
          <a href="">Logo</a>
          <a href="">Logo</a>
          <a href="">Logo</a>
          <a href="">Logo</a>
          <a href="">Logo</a>
        </div>
      </div>

      <div className='flex-1 p-32'>
        <div>
          <h1>Experience</h1>
          <div className="flex px-8">
            <ExperienceSection />
            
          </div>
        </div>

        <div>
          <h1>Education</h1>
          <div className="inline-flex flex-col px-8">
            <EducationSection />
          </div>
        </div>
        <div>
          <h1>Projects</h1>
          <div className="flex px-8">
            <p>we test here</p>
          </div>
        </div>
        <div>
          <h1>Contact</h1>
          <div className="flex flex-col items-center justify-center">
            <h1 className='py-9'>blah blah blah</h1>
            <button>Button</button>
            
          </div>
        </div>
        

      </div>
    
    </section>
    

  )
}

export default AboutPage
