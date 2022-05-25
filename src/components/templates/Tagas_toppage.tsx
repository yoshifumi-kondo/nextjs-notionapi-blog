import React, { FC } from 'react';
import TagButton from '@/components/atoms/TagButton';

const Tags_toppage: FC = () => {
  const tags = ['AWS', 'CSS'];

  return (
    <div className='border-8 border-slate-700 rounded-lg shadow bg-white w-full p-8'>
      <h1 className='text-2xl text-gray-900 w-full text-center md:text-left'>Tags</h1>
      <div className='flex justify-center md:justify-start flex-wrap gap-2 my-4'>
        {tags.map((tag, index) => (
          <TagButton text={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Tags_toppage;
