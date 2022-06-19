import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import PageLinks from '@/components/organisms/PageLinks';
import Sidebar from '@/components/organisms/Sidebar';

interface LayoutProps {
  title: string;
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={'min-h-screen py-0  flex flex-col justify-center items-center bg-slate-200'}>
      <Head>
        <title>{title}</title>
        <link rel='shortcut icon' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icon.png' />
        <link rel='manifest' href='/icon.png' />
        <link rel='mask-icon' href='/icon.png' />
      </Head>
      <header>
        <nav className={'bg-gray-800 w-screen overflow-hidden fixed left-0 top-0 shadow-lg z-50'}>
          <div className={'flex space-x-4 py-2 justify-between items-center h-16 px-4 md:px-8'}>
            <Link href={'/'}>
              <a>
                <div className={'flex justify-around gap-4 items-center rounded'}>
                  <div className='h-12 w-12 '>
                    <Image
                      src={'/icon_outline.png'}
                      width={200}
                      height={200}
                      alt={'icon'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h2 className={'text-gray-100 text-xl font-mono whitespace-nowrap'}>
                    KONTACO BLOG
                  </h2>
                </div>
              </a>
            </Link>
            <div className='md:hidden'>
              <Sidebar />
            </div>
            <div className={'hidden w-full space-x-4 md:block md:w-auto'}>
              <PageLinks />
            </div>
          </div>
        </nav>
      </header>
      <div className='h-16 w-screen'></div>
      <main className={'flex flex-1  items-center flex-col w-screen'}>{children}</main>

      <footer className={'w-full h-12 flex justify-center items-center border-t bg-gray-800'}>
        <p className={'flex text-white'}>Copyright (c) 2022 KONTACO</p>
      </footer>
    </div>
  );
};

export default Layout;
