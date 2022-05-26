import React, { FC, useState } from 'react';
import PageLinks from '@/components/organisms/PageLinks';

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full  transition ease transform duration-300 bg-gray-300`;
  return (
    <>
      <button
        className='group z-40 flex h-12 w-12 flex-col items-center justify-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100 bg-gray-300'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100 bg-gray-300'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100 bg-gray-300'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
      <div
        className={`fixed top-0 right-0 z-20 mt-16  w-[40vw]  duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className='flex w-full flex-col items-start justify-end bg-gray-800 rounded-bl-lg gap-4 p-4 m-0 shadow-lg'>
          <PageLinks />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
