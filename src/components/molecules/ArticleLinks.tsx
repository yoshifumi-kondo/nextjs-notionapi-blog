import { URL } from 'url';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import TagButton from '@/components/atoms/TagButton';
import { notionColor } from 'lib/getNotionsParamsForCSS';

export interface ArticleLinkProps {
  title: string;
  href: string | URL;
  tags: { name: string; color: notionColor }[];
  date: string;
}

export const ArticleLinkLeft: FC<ArticleLinkProps> = ({ title, href, tags, date }) => {
  return (
    <Link href={href} passHref>
      <div className='flex gap-8 md:gap-12  items-center cursor-pointer'>
        <div className='w-24 md:w-36 p-2  flex justify-center items-center rounded-full shadow-lg bg-white border-8 border-gray-400 '>
          <Image alt='img' width={400} height={400} objectFit='cover' src={'/icon.png'} />
        </div>
        <div className='relative w-full bg-white border-8 flex flex-col gap-3 hover:gap-5  p-4 rounded-x balloon-left rounded-lg bottom-5 border-yellow-400 transform hover:scale-105 ease-in-out duration-300 hover:bg-yellow-50 shadow-lg'>
          <h2 className='text-sm md:text-lg text-gray-600'>{date}</h2>
          <h1 className='text-base  md:text-xl'>{title}</h1>
          <div className='flex w-full gap-3 flex-wrap'>
            {tags.map((tag, index) => {
              return <TagButton text={tag.name} key={index} color={tag.color} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ArticleLinkRight: FC<ArticleLinkProps> = ({ title, href, tags, date }) => {
  return (
    <Link href={href} passHref>
      <div className='flex gap-8 md:gap-12  items-center cursor-pointer'>
        <div className='relative w-full bg-white border-8 flex flex-col gap-3 hover:gap-5  p-4 rounded-x balloon-right rounded-lg bottom-5 border-yellow-400 transform hover:scale-105 ease-in-out duration-300 hover:bg-yellow-50 shadow-lg'>
          <h2 className='text-sm md:text-lg text-gray-600'>{date}</h2>
          <h1 className='text-base  md:text-xl'>{title}</h1>
          <div className='flex w-full gap-3 flex-wrap'>
            {tags.map((tag, index) => {
              return <TagButton text={tag.name} key={index} color={tag.color} />;
            })}
          </div>
        </div>
        <div className='w-24 md:w-36 p-2  flex justify-center items-center rounded-full shadow-lg bg-white border-8 border-gray-400'>
          <Image alt='img' width={400} height={400} objectFit='cover' src={'/icon.png'} />
        </div>
      </div>
    </Link>
  );
};
