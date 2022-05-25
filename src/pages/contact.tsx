import { NextPage } from 'next';
import dynamic from 'next/dist/shared/lib/dynamic';
import React from 'react';
import About_toppage from '@/components/templates/About_toppage';
import Contact_info from '@/components/templates/Contact_info';
import Layout from '@/components/templates/Layout';
import TechStack_toppage from '@/components/templates/TechStack_toppage';

const ScrollRevealContainer = dynamic(import('@/components/atoms/ScrollRevealContainer'), {
  ssr: false,
});

const contact: NextPage = () => {
  return (
    <Layout title='contact'>
      <div className='m-4 flex flex-col gap-4 justify-center'>
        <div className=' max-w-xl'>
          <ScrollRevealContainer>
            <About_toppage />
          </ScrollRevealContainer>
        </div>
        <div className=' max-w-xl'>
          <ScrollRevealContainer delay={500}>
            <TechStack_toppage />
          </ScrollRevealContainer>
        </div>
        <div className=' max-w-xl'>
          <ScrollRevealContainer delay={800}>
            <Contact_info />
          </ScrollRevealContainer>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
