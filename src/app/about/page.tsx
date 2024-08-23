import React from 'react'

const AboutPage = () => {
  return (
    <section className="flex bg-black text-white h-screen">
      <div className="p-32">
        <div className='inline-flex flex-col'>
          <h1>Name</h1>
          <h2>Course</h2>
          <p>Some Paragraph Here</p>
        </div>
        <div></div>
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
            <p className='border bg-blue-500'>we test here</p>
          </div>
        </div>
        <div>
          <h1>Education</h1>
          <div className="inline-flex flex-col px-8">
          <p className='border bg-blue-500'>we test here</p>
          <p className='border bg-blue-500'>we test here</p>
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
