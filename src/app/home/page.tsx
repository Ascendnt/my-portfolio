'use client'
import React, { useEffect } from 'react';
import ParticlesBackground from '../particles/page';

const HomePage = () => {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
      }, []);
      return (
        <div className=''>
          <ParticlesBackground />
          
        <div className="relative flex flex-col min-h-screen items-center justify-center z-10 text-white text-center animate-slidein">
        <div>
          <h1 className="text-6xl select-none">Some Text HERE</h1>
        </div>
        <div><h1 className="mt-4 text-2xl text-center select-none">So</h1></div>
        <div className='mt-12'><h1>LOGO HERE LATER</h1></div>
      </div>
      </div>



      );
    };

export default HomePage;


