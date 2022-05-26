import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import * as dateFns from 'date-fns';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import NotionListBlockComponent from '@/components/NotionListBlockComponent';
import ScrollRevealContainer from '@/components/atoms/ScrollRevealContainer';
import TagButton from '@/components/atoms/TagButton';
import About_toppage from '@/components/templates/About_toppage';
import Archive_toppage from '@/components/templates/Archive_toppage';
import Layout from '@/components/templates/Layout';
import Tags_toppage from '@/components/templates/Tagas_toppage';
import {
  ListBlockChildrenNodeResponse,
  retriveBlocksWithChildren,
  queryDatabase,
  retrieveDataBase,
  retrivePage,
} from 'api/notion_api';
import { notionColor } from 'lib/getNotionsParamsForCSS';
import {
  originNotionPagePropertieProps,
  originNotionPropertieProps,
} from 'types/origin-notion-type';

interface PagePrpps {
  page: GetPageResponse;
  blocks: ListBlockChildrenNodeResponse;
  tags: { name: string; color: notionColor }[];
}

const Page: FC<PagePrpps> = ({ page, blocks, tags }) => {
  const router = useRouter();
  if (router.isFallback || !blocks) {
    return <div>Loding...</div>;
  }

  const { created_time, last_edited_time, properties } =
    page as unknown as originNotionPagePropertieProps;

  const { Page } = properties;
  const title = Page.title
    .map((v) => v.plain_text)
    .toString()
    .replace(/,/g, ' ');

  const createdDate = dateFns.format(new Date(created_time), 'yyyy/MM/dd');
  const editDate = dateFns.format(new Date(last_edited_time), 'yyyy/MM/dd');

  return (
    <Layout title='KONTACO-BLOG'>
      <div className='flex flex-col md:flex-row w-screen mt-4 md:mt-8'>
        <div className='w-screen md:w-2/3  border-r-2 p-4  flex flex-col gap-8'>
          <ScrollRevealContainer move={'bottom'} delay={200}>
            <div className='border-8 border-slate-700 rounded-lg shadow-lg bg-white w-full flex-wrap'>
              <div className='px-8 pt-8 pb-4 bg-slate-700 flex flex-col gap-2'>
                <h1 className='text-2xl md:text-4xl text-white'>{title}</h1>
                <div className='flex gap-x-4 flex-col md:flex-row '>
                  <h2 className='text-gray-300'>Date:{createdDate}</h2>
                  <h2 className='text-gray-300 '>Last Edit:{editDate}</h2>
                </div>
                <div className='flex gap-2 my-2'>
                  {properties.tags.multi_select.map((tag, index) => {
                    return <TagButton text={tag.name} key={index} color={tag.color} />;
                  })}
                </div>
              </div>

              <div className='p-4 md:p-8 flex gap-2 flex-col'>
                <NotionListBlockComponent blocks={blocks} node={0} />
              </div>
            </div>
          </ScrollRevealContainer>
        </div>

        <div className='w-screen md:w-1/3 border-r-2 border-white p-4  flex flex-col gap-8'>
          <ScrollRevealContainer move={'bottom'} delay={200}>
            <About_toppage />
          </ScrollRevealContainer>
          <ScrollRevealContainer move={'bottom'} delay={600}>
            <Tags_toppage tags={tags} />
          </ScrollRevealContainer>
          <ScrollRevealContainer move={'bottom'} delay={1000}>
            <Archive_toppage />
          </ScrollRevealContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const db = await queryDatabase({});
  const { results } = db;
  const paths = results.map((result) => {
    const { id } = result;
    return { params: { id } };
  });
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<PagePrpps, { id: string }> = async ({ params }) => {
  const id = params ? params.id : '';
  const db = await retrieveDataBase();
  const { tags } = db.properties as unknown as originNotionPropertieProps;
  const { options } = tags.multi_select as any;

  const [page, blocks] = await Promise.all([retrivePage(id), retriveBlocksWithChildren(id)]);
  return {
    props: {
      page,
      blocks,
      tags: options,
    },
    revalidate: 3,
  };
};
