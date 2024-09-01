'use client'

import React, { useEffect } from 'react';

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
<section className="text-white bg-black">
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div>
      <h1 className="animate-slidein300 text-6xl text-center">Some Text HERE</h1>
    </div>
    <div>
      <h1 className="text-2xl text-center">So</h1>
    </div>
    <div>
      <h1 className="text-center">
        LOGO HERE LATER
      </h1>
    </div>
  </div>
</section>
  );
};

export default HomePage;
