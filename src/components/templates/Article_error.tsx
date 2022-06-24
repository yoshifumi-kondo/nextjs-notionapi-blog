import Link from 'next/link';
import React, { FC } from 'react';

const Article_error: FC = () => {
  return (
    <div className='border-8 border-slate-700 rounded-lg shadow-lg bg-white w-full flex-wrap'>
      <div className='px-4 md:px-8 pt-8 pb-4 bg-slate-700 flex flex-col gap-2'>
        <h1 className='text-2xl md:text-4xl text-white'>{'Sorry this post is not exist.'}</h1>
      </div>
      <div className='flex flex-col gap-2 my-2 h-20 p-4 md:p-8'>
        <h2 className={'text-gray-800 text-xl font-mono whitespace-nowrap'}>
          Please checkout athor posts
        </h2>
        <Link href={'/'}>
          <a>
            <h2 className={'text-gray-800 text-xl font-mono whitespace-nowrap underline'}>
              Back Home
            </h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Article_error;
