import Image from 'next/image';
import React, { FC } from 'react';

const About_toppage: FC = () => {
  return (
    <div className='border-8 border-slate-700 rounded-lg shadow bg-white w-full p-8'>
      <div className='flex flex-col md:flex-row gap-2 items-center flex-wrap'>
        <div className=' h-32 w-32  px-2 flex justify-center items-center rounded-full border-8 border-gray-400'>
          <Image src={'/icon.png'} width={120} height={120} objectFit='cover' alt={'icon'} />
        </div>
        <div className='flex flex-col justify-between p-2 items-center md:items-start'>
          <h1 className='text-2xl text-gray-900'>KONTACO</h1>
          <h2 className='text-xl text-gray-500'>Japanese🇯🇵</h2>
          <h2 className='text-xl text-gray-500'>Front-end Engineer</h2>
          <h2 className='text-xl text-gray-500'>I love octopus</h2>
          <h2 className='text-xl text-gray-500'>(in the sense of eating it)</h2>
        </div>
      </div>
    </div>
  );
};

export default About_toppage;
