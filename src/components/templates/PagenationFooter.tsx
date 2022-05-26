import Link from 'next/link';
import React, { FC } from 'react';

interface PagenationFooterProps {
  pageLength: number;
  pagePosition: number;
  basePath?: string;
}

const PagenationFooter: FC<PagenationFooterProps> = ({
  pageLength,
  pagePosition = 1,
  basePath = '/pagenation',
}) => {
  const sampleArray = Array.from(new Array(pageLength)).map((_v, i) => i + 1);
  const hooterArray: Array<'...' | number> =
    pageLength > 10 && (3 > pagePosition || pagePosition > pageLength - 3)
      ? [...sampleArray.slice(0, 3), '...', ...sampleArray.slice(pageLength - 3)]
      : pageLength > 10
      ? [
          ...sampleArray.slice(0, 1),
          '...',
          pagePosition - 1,
          pagePosition,
          pagePosition + 1,
          '...',
          ...sampleArray.slice(pageLength - 1),
        ]
      : sampleArray;
  return (
    <div className='flex md:gap-5 gap-1 flex-wrap justify-center items-center'>
      {pagePosition !== 1 && (
        <Link href={`/${basePath}/${String(pagePosition - 1)}`}>
          <a>
            <button className=' rounded-full  border-4 border-yellow-500 bg-white text-xl text-yellow-500 w-8 h-8 md:w-10 md:h-10 hover:scale-110 flex justify-center items-center transform ease-in-out duration-200 hover:bg-yellow-500 hover:text-white group'>
              <svg
                className=' text-yellow-500 h-4 w-4 md:h-6 md:w-6 group-hover:text-white ease-in-out duration-300'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='4'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' /> <line x1='5' y1='12' x2='19' y2='12' />
                <line x1='5' y1='12' x2='11' y2='18' /> <line x1='5' y1='12' x2='11' y2='6' />
              </svg>
            </button>
          </a>
        </Link>
      )}
      {hooterArray.map((v, i) => {
        if (v === '...') {
          return (
            <>
              <div
                className=' rounded-full  border-4 border-yellow-500 bg-white w-3 h-3'
                key={i}
              ></div>
            </>
          );
        }
        if (v === pagePosition) {
          return (
            <button
              className=' cursor-default rounded-full  border-4 border-yellow-400 bg-yellow-400 text-xl text-white w-10 h-10 md:w-12 md:h-12 '
              key={i}
            >
              {v}
            </button>
          );
        }
        if (
          (3 > pagePosition || pagePosition > pageLength - 3) &&
          (v === 3 || v === pageLength - 2) &&
          pageLength > 4
        ) {
          return (
            <Link href={`/${basePath}/${String(v)}`}>
              <a>
                <button
                  className=' hidden md:block rounded-full  border-4 border-yellow-500 bg-white text-xl text-yellow-500 w-10 h-10 md:w-12 md:h-12 hover:scale-110 transform ease-in-out duration-200 hover:bg-yellow-500 hover:text-white'
                  key={i}
                >
                  {v}
                </button>
              </a>
            </Link>
          );
        }

        return (
          <Link href={`/${basePath}/${String(v)}`} key={i}>
            <a>
              <button
                className=' rounded-full  border-4 border-yellow-500 bg-white text-xl text-yellow-500 w-10 h-10 md:w-12 md:h-12 hover:scale-110 transform ease-in-out duration-200 hover:bg-yellow-500 hover:text-white'
                key={i}
              >
                {v}
              </button>
            </a>
          </Link>
        );
      })}
      {pagePosition !== pageLength && (
        <Link href={`/${basePath}/${String(pagePosition + 1)}`}>
          <a>
            <button className=' rounded-full  border-4 border-yellow-500 bg-white text-xl text-yellow-500 w-8 h-8 md:w-10 md:h-10 hover:scale-110 flex justify-center items-center transform ease-in-out duration-200 hover:bg-yellow-500 hover:text-white group'>
              <svg
                className=' text-yellow-500 h-4 w-4 md:h-6 md:w-6 group-hover:text-white ease-in-out duration-300'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='4'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' /> <line x1='5' y1='12' x2='19' y2='12' />
                <line x1='13' y1='18' x2='19' y2='12' /> <line x1='13' y1='6' x2='19' y2='12' />
              </svg>
            </button>
          </a>
        </Link>
      )}
    </div>
  );
};

export default PagenationFooter;
