import React, { FC } from 'react';
import { NotionBlockComponentProps } from '@/components/NotionListBlockComponent';
const Notion_video: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'video';
  if (!('type' in getBlockRes)) return <></>;

  if (getBlockRes.type === type) {
    const { video } = getBlockRes;
    const { type } = video;
    if (type === 'external') {
      const { external } = video;
      const { url } = external;
      if (url.indexOf('youtube')) {
        const src = url.split('/').pop();
        return (
          <>
            <div className='my-2'>
              <iframe
                className=' w-full rounded shadow-lg md:h-[600px] h-60'
                src={`https://www.youtube.com/embed/${src}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </>
        );
      }
    }
  }
  return <></>;
};

export default Notion_video;
