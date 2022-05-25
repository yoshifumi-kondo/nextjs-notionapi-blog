import React, { FC } from 'react';

const Contact_info: FC = () => {
  return (
    <div className='border-8 border-slate-700 rounded-lg shadow bg-white w-full p-8'>
      <div className='flex flex-col md:flex-row gap-2 items-center flex-wrap'>
        <div className='flex flex-col justify-between p-2 items-center md:items-start gap-2'>
          <h1 className='text-2xl text-gray-900'>Contact</h1>
          <h2 className='text-xl text-gray-500 text-center md:text-left'>
            For work requests, please contact me at the address below!
          </h2>
          <a
            href='mailto:kontaco.navoct@gmail.com'
            className='text-xl text-blue-500 text-center md:text-left'
          >
            kontaco.navoct@gmail.com
          </a>
          <div>
            <h2 className='text-sm text-gray-500 text-center md:text-left'>
              {'I can work for any company in any country.'}
            </h2>
            <h2 className='text-sm text-gray-500 text-center md:text-left'>
              {"We're connected through the Internet."}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_info;
