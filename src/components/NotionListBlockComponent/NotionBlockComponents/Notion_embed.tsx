import React, { FC } from 'react';
import { NotionBlockComponentProps } from '@/components/NotionListBlockComponent';
const Notion_embed: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'embed';
  if (!('type' in getBlockRes)) return <></>;

  if (getBlockRes.type === type) {
    const { embed } = getBlockRes;
    // const { url } = embed;
    const url =
      'https://www.google.com/maps/place/embed?%E6%9D%B1%E4%BA%AC%E9%A7%85/@35.6812362,139.7671248,15z/data=!4m2!3m1!1s0x0:0x277c49ba34ed38?sa=X&ved=2ahUKEwjawOC45Pb3AhUCat4KHa8aCNAQ_BJ6BAhiEAU';
    console.log(url);
    return (
      <>
        <div className=''>
          <iframe src={url} />
        </div>
      </>
    );
  }
  return <></>;
};

export default Notion_embed;
