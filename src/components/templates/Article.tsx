import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import * as dateFns from 'date-fns';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import NotionListBlockComponent from '@/components/NotionListBlockComponent';
import ScrollRevealContainer from '@/components/atoms/ScrollRevealContainer';
import TagButton from '@/components/atoms/TagButton';
import { notionColor } from 'lib/getNotionsParamsForCSS';
import { ListBlockChildrenNodeResponse } from 'pages/api/notion_api';
import { originNotionPagePropertieProps } from 'types/origin-notion-type';

interface ArticleProps {
  page: GetPageResponse;
  blocks: ListBlockChildrenNodeResponse;
  tags: { name: string; color: notionColor }[];
}

const Article: FC<ArticleProps> = ({ page, blocks, tags }) => {
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
    <ScrollRevealContainer move={'bottom'} delay={200}>
      <div className='border-8 border-slate-700 rounded-lg shadow-lg bg-white w-full flex-wrap'>
        <div className='px-4 md:px-8 pt-8 pb-4 bg-slate-700 flex flex-col gap-2'>
          <h1 className='text-2xl md:text-4xl text-white'>{title}</h1>
          <div className='flex gap-x-4 flex-col md:flex-row '>
            <h2 className='text-gray-300'>Date:{createdDate}</h2>
            <h2 className='text-gray-300 '>Last Edit:{editDate}</h2>
          </div>
          <div className='flex gap-2 my-2 flex-wrap'>
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
  );
};

export default Article;
