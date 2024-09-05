'use client'
import React, { useEffect } from 'react';
import ParticlesBackground from '../particles/page';
import Link from 'next/link';
import Image from 'next/image';

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
          <h1 className="text-5xl select-none">Kenneth Balantucas</h1>
        </div>
        <div><h1 className="mt-4 text-2xl text-center select-none text-gray-400">BS Computer Engineering</h1></div>
        <div className='flex mt-12 gap-4'>
          <div className='bg-white rounded-full'>
            <Link href="https://github.com/kennethBalantucas" target="_blank">      
              <Image
                src="/github.svg"
                width={40}
                height={40}
                alt="HTML"
              /></Link>

          </div>

          <Link href="https://linkedin.com/in/kennethbalantucas"target="_blank">      
            <Image
              src="/linkedin.svg"
              width={40}
              height={40}
              alt="HTML"
            /></Link>
          
          </div>
      </div>
      </div>



      );
    };

export default HomePage;


