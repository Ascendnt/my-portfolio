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
        <div className='relative text-white min-h-screen'>
          <ParticlesBackground />
          <div className='flex items-center justify-center min-h-screen'>
            <div className='text-center z-10 animate-slidein'>
              <span className='block'>PAANO</span>
              <span className='block text-lg'>KUNG</span>
              <span className='block'>MAMAYA NA</span>
            </div>
          </div>
        </div>

      );
    };

export default HomePage;


