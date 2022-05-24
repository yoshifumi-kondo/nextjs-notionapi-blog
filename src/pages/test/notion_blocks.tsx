import React, { FC } from 'react';
import NotionListBlockComponent from '@/components/NotionListBlockComponent';
import { ListBlockChildrenNodeResponse, retriveBlocksWithChildren } from 'api/notion_api';

interface PagePrpps {
  blocks: ListBlockChildrenNodeResponse;
}

const Page: FC<PagePrpps> = ({ blocks }) => {
  return <NotionListBlockComponent blocks={blocks} />;
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
