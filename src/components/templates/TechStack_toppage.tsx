import React, { FC } from 'react';

const TechStack_toppage: FC = () => {
  const techStacks = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'React',
    'Next.js',
    'Python',
    'Django',
    'AWS',
    'Docker',
    'Linux',
  ];

  const learnings = ['AfterEffect', 'Unreal Engine', 'Video Editing'];

  return (
    <div className='border-8 border-slate-700 rounded-lg shadow bg-white w-full p-8'>
      <h1 className='text-2xl text-gray-900 w-full text-center md:text-left'>TechStack</h1>
      <div className='flex justify-center md:justify-start flex-wrap gap-1 my-4'>
        {techStacks.map((techStack, index) => (
          <div
            className='text-md text-gray-100 border-2 bg-slate-700 shadow p-2 rounded-lg md:text-lg'
            key={index}
          >
            {techStack}
          </div>
        ))}
      </div>
      <h1 className='text-2xl text-gray-900 w-full text-center md:text-left'>Learning</h1>
      <div className='flex justify-center md:justify-start flex-wrap gap-1 mt-4'>
        {learnings.map((leraning, index) => (
          <div
            className='text-md text-gray-700 border-2 border-slate-700 shadow p-2 rounded-lg md:text-lg'
            key={index}
          >
            {leraning}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack_toppage;
