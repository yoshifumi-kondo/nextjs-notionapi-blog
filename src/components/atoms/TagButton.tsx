import Link from 'next/link';
import React, { FC } from 'react';
import { getBgColor, notionColor } from 'lib/getNotionsParamsForCSS';

interface TagButtonProps {
  text: string;
  color: notionColor;
}

const TagButton: FC<TagButtonProps> = ({ text, color }) => {
  const classColor = getBgColor(color);
  return (
    <Link href={`/tagfilter/${text}/1`} passHref>
      {/* the under tag is for set css don't remove  */}
      {/* <div className='bg-gray-500 bg-orange-500 bg-yellow-500 bg-blue-500 bg-purple-500 bg-pink-500 bg-red-500 bg-amber-500 bg-gray-900'></div> */}
      <button
        className={`${classColor} text-sm md:text-md rounded-lg shadow hover:opacity-80 text-white p-2 whitespace-nowrap transform hover:scale-125 ease-in-out duration-300`}
      >
        {text}
      </button>
    </Link>
  );
};

export default TagButton;
