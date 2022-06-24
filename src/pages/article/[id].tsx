import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import About from '@/components/templates/About';
import Article from '@/components/templates/Article';
import Article_error from '@/components/templates/Article_error';
import Layout from '@/components/templates/Layout';
import { notionColor } from 'lib/getNotionsParamsForCSS';
import {
  ListBlockChildrenNodeResponse,
  retriveBlocksWithChildren,
  queryDatabase,
  retrieveDataBase,
  retrivePage,
} from 'pages/api/notion_api';
import { originNotionPropertieProps } from 'types/origin-notion-type';

interface PagePrpps {
  page: GetPageResponse;
  blocks: ListBlockChildrenNodeResponse;
  tags: { name: string; color: notionColor }[];
  err: boolean;
}

const Page: FC<PagePrpps> = ({ page, blocks, tags, err }) => {
  const router = useRouter();
  if (router.isFallback || !blocks) {
    return (
      <Layout title='KONTACO-BLOG'>
        <div>Loding...</div>
      </Layout>
    );
  }

  return (
    <Layout title='KONTACO-BLOG'>
      <div className='flex flex-col md:flex-row w-screen mt-4 md:mt-8'>
        <div className='w-screen md:w-2/3  border-r-2 p-4 flex flex-col gap-8'>
          {err ? <Article_error /> : <Article page={page} blocks={blocks} />}
        </div>

        <div className='w-screen md:w-1/3 border-r-2 border-white p-4  flex flex-col gap-8'>
          <About tags={tags} />
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
  try {
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
        err: false,
      },
      revalidate: 3,
    };
  } catch (error) {
    return {
      props: {
        page: {} as GetPageResponse,
        blocks: {} as ListBlockChildrenNodeResponse,
        tags: [],
        err: true,
      },
      revalidate: 3,
    };
  }
};
