import Image from 'next/image';
import React, { FC } from 'react';
import { NotionBlockComponentProps } from '@/components/NotionListBlockComponent';
const Notion_image: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'image';
  if (!('type' in getBlockRes)) return <></>;

  if (getBlockRes.type === type) {
    const { image } = getBlockRes;
    const { type } = image;
    switch (type) {
      case 'file':
        const { file } = image;
        const { url } = file;
        const getImage = () => {
          return url;
        };
        return (
          <>
            <div className='w-full'>
              <Image
                loader={getImage}
                objectFit='contain'
                layout='intrinsic'
                width={500}
                height={400}
                src={url}
                alt={'iamge'}
              />
            </div>
          </>
        );

      case 'external':
        return <></>;
    }
  }
  return <></>;
};

export default Notion_image;
