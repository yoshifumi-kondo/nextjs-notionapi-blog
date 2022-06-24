import { NextPage } from 'next';
import React from 'react';
import ScrollRevealContainer from '@/components/atoms/ScrollRevealContainer';
import About_toppage from '@/components/organisms/About_toppage';
import Contact_info from '@/components/templates/Contact_info';
import Layout from '@/components/templates/Layout';
import TechStack_toppage from '@/components/templates/TechStack_toppage';

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
          <ScrollRevealContainer delay={300}>
            <TechStack_toppage />
          </ScrollRevealContainer>
        </div>
        <div className=' max-w-xl'>
          <ScrollRevealContainer delay={400}>
            <Contact_info />
          </ScrollRevealContainer>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
