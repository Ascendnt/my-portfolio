'use client'
import React, { useEffect } from 'react';
import './home.scss';

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
    <div>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="title" className='flex flex-col items-center justify-center animate-slidein'>
      <span>PAANO</span>
      <span className='text-lg'>KUNG</span>
      <span>MAMAYA NA</span>
    </div>
  </div>
  );
};

export default HomePage;


