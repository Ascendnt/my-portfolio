import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Projects = () => {
  return (
    <div className="mt-16 max-w-sm rounded shadow-lg bg-gray-800">
      <div className="flex justify-center items-center bg-gray-900">
        <Link href="/">
    
          <Image src="/html.png" alt="Sunset in the mountains" width={75} height={75} />
      
        </Link>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">My Portfolio</div>
        <p className="text-gray-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">#winter</span>
      </div>
    </div>

  )
}

export default Projects
