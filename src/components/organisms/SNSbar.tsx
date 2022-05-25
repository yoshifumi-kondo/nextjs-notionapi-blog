import Link from 'next/link';
import React, { FC } from 'react';

const SNSbar: FC<{ color: 'navy' | 'yellow' }> = () => {
  const url_youtube = 'https://www.youtube.com/channel/UCWtLm7TcA2jF9PbTuGFnBjw';
  const url_instagram = '';
  const url_linkedin = '';
  const url_twitter = '';

  return (
    <>
      <Link href={url_youtube}>
        <a>
          <svg
            className='h-8 w-8 text-yellow-500'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />{' '}
            <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
          </svg>
        </a>
      </Link>

      <Link href={url_instagram}>
        <a>
          <svg
            className='h-8 w-8 text-yellow-500'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />{' '}
            <rect x='4' y='4' width='16' height='16' rx='4' /> <circle cx='12' cy='12' r='3' />{' '}
            <line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
          </svg>
        </a>
      </Link>
      <Link href={url_linkedin}>
        <a>
          <svg
            className='h-8 w-8 text-yellow-500'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />{' '}
            <rect x='2' y='9' width='4' height='12' /> <circle cx='4' cy='4' r='2' />
          </svg>
        </a>
      </Link>
      <Link href={url_twitter}>
        <a>
          <svg
            className='h-8 w-8 text-yellow-500'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />{' '}
            <path d='M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z' />
          </svg>
        </a>
      </Link>
    </>
  );
};

export default SNSbar;
