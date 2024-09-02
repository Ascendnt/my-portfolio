import React from 'react';
import skills from "../../data/skills.json";
import Image from 'next/image';



const SkillsSections = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-7'>
      <Image
        src="/html.png"
        width={50}
        height={50}
        alt="HTML"
      />
      <Image
        src="/css.png"
        width={50}
        height={50}
        alt="CSS"
      />
      <Image
        src="/react.png"
        width={50}
        height={50}
        alt="React.JS"
      />
      <Image
        src="/node.png"
        width={50}
        height={50}
        alt="Node."
      />
    </div>
  );
}

export default SkillsSections;




// import React, { useEffect, useState } from 'react';

// // Define types for TypeScript
// type Skill = {
//   title: string;
//   imageSrc: string;
// };

// const SkillsComponent: React.FC = () => {
//   const [skills, setSkills] = useState<Skill[]>([]);

//   useEffect(() => {
//     fetch('/path/to/skills.json')
//       .then(response => response.json())
//       .then(data => setSkills(data))
//       .catch(error => console.error('Error fetching skills:', error));
//   }, []);

//   return (
//     <div className="skills-sections">
//       {skills.map((skill, index) => (
//         <div key={index} className="skill">
//           <div className="skill-image-container">
//             <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//           </div>
//           <p>{skill.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SkillsComponent;

// // Mocking getImageUrl function
// const getImageUrl = (src: string) => `/path/to/images/${src}`;
