import React from "react";
import Image from "next/image";

const SkillsSections = () => {
  return (
    <div className="grid grid-cols-5 items-center justify-center gap-7">
      <Image src="/html5.svg" width={50} height={50} alt="HTML" />
      <Image src="/css3.svg" width={50} height={50} alt="CSS" />
      <Image src="/javascript-js.svg" width={50} height={50} alt="JavaScript" />
      <Image src="/react.svg" width={50} height={50} alt="React.JS" />
      <Image src="/node-js.svg" width={50} height={50} alt="Node.JS" />
      <Image
        src="/typescript-icon.svg"
        width={50}
        height={50}
        alt="Typesscript"
      />
      <Image
        className="bg-white rounded-full"
        src="/nextjs.svg"
        width={50}
        height={50}
        alt="Next.JS"
      />
    </div>
  );
};

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
