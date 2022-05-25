import React, { FC } from 'react';
import NotionListBlockComponent from '@/components/NotionListBlockComponent';
import TagButton from '@/components/atoms/TagButton';
import About_toppage from '@/components/templates/About_toppage';
import Archive_toppage from '@/components/templates/Archive_toppage';
import Layout from '@/components/templates/Layout';
import Tags_toppage from '@/components/templates/Tagas_toppage';
import { ListBlockChildrenNodeResponse, retriveBlocksWithChildren } from 'api/notion_api';

interface PagePrpps {
  blocks: ListBlockChildrenNodeResponse;
}

const Page: FC<PagePrpps> = ({ blocks }) => {
  const title = 'This is sample title';
  const tags = ['AWS', 'CSS'];
  return (
    <Layout title='KONTACO-BLOG'>
      <div className='flex flex-col md:flex-row w-screen mt-4 md:mt-8'>
        <div className='w-screen md:w-2/3  border-r-2 p-4  flex flex-col gap-8'>
          <div className='border-8 border-slate-700 rounded-lg shadow-lg bg-white w-full flex-wrap'>
            <div className='px-8 pt-8 pb-4 bg-slate-700 flex flex-col gap-2'>
              <h1 className='text-2xl md:text-4xl text-white'>{title}</h1>
              <div className='flex gap-x-4 flex-col md:flex-row '>
                <h2 className='text-gray-300'>Date:2022-02-01</h2>
                <h2 className='text-gray-300 '>Last Edit:2022-02-01</h2>
              </div>
              <div className='flex gap-2 my-2'>
                {tags.map((tag, index) => {
                  return <TagButton text={tag} key={index} />;
                })}
              </div>
            </div>

            <div className='p-4 md:p-8 flex gap-2 flex-col'>
              <NotionListBlockComponent blocks={blocks} node={0} />
            </div>
          </div>
        </div>
        <div className='w-screen md:w-1/3 border-r-2 border-white p-4  flex flex-col gap-8'>
          <About_toppage />
          <Tags_toppage />
          <Archive_toppage />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps() {
  const id = 'ee4a59c7-8000-4d3b-979d-dcc7610b3837';
  const [blocks] = await Promise.all([retriveBlocksWithChildren(id)]);
  return {
    props: {
      blocks,
    },
    revalidate: 3,
  };
}
