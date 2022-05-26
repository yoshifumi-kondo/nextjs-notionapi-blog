import React, { FC } from 'react';
import TagButton from '@/components/atoms/TagButton';
import { notionColor } from 'lib/getNotionsParamsForCSS';

interface Tags_toppageProps {
  tags: { name: string; color: notionColor }[];
}

const Tags_toppage: FC<Tags_toppageProps> = ({ tags }) => {
  return (
    <div className='border-8 border-slate-700 rounded-lg shadow bg-white w-full p-8'>
      <h1 className='text-2xl text-gray-900 w-full text-center md:text-left'>Tags</h1>
      <div className='flex justify-center md:justify-start flex-wrap gap-3 my-4'>
        {tags.map((tag, index) => (
          <TagButton text={tag.name} key={index} color={tag.color} />
        ))}
      </div>
    </div>
  );
};

export default Tags_toppage;
