import Link from 'next/link';
import React, { FC } from 'react';

interface TagButtonProps {
  text: string;
}

const TagButton: FC<TagButtonProps> = ({ text }) => {
  return (
    <Link href={`/tagfilter/${text}/1`} passHref>
      <button
        color={'white'}
        className={`text-sm md:text-lg rounded-lg shadow bg-slate-400 hover:bg-slate-300 text-white p-2 whitespace-nowrap transform hover:scale-125 ease-in-out duration-300`}
      >
        {text}
      </button>
    </Link>
  );
};

export default TagButton;
