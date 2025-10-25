import React, { use } from 'react';
import Skill from '../Home/Skill';


const skillPromise = fetch('/skills2.json').then(res=> res.json())
const Skills = () => {
  const skills = use(skillPromise)
  console.log(skills)
  return ( 
    
 <div className='container mx-auto'>
     <h1 className='w-[250px] font-bold text-3xl py-6 gradient '>Popular skills</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
   

     {
      skills.map(skill => <Skill key={skill.skillId} skill={skill}></Skill>)
     }
    </div>
 </div>
  );
};

export default Skills;