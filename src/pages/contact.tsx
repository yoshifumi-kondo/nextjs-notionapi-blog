import { NextPage } from 'next';
import React from 'react';
import About_toppage from '@/components/templates/About_toppage';
import Contact_info from '@/components/templates/Contact_info';
import Layout from '@/components/templates/Layout';
import TechStack_toppage from '@/components/templates/TechStack_toppage';

const contact: NextPage = () => {
  return (
    <Layout title='contact'>
      <div className='m-4 flex flex-col gap-4 justify-center'>
        <div className=' max-w-xl'>
          <About_toppage />
        </div>
        <div className=' max-w-xl'>
          <TechStack_toppage />
        </div>
        <div className=' max-w-xl'>
          <Contact_info />
        </div>
      </div>
    </Layout>
  );
};

export default contact;
