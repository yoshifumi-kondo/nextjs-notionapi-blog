import Link from 'next/link';
import React, { FC } from 'react';
import NotionListBlockComponent, {
  NotionBlockComponentProps,
  NotionChildrenLayout,
} from '@/components/NotionListBlockComponent';
import {
  getAnnotationColor,
  getBold,
  getStrikethrough,
  getUnderline,
} from 'lib/getNotionsParamsForCSS';

const Notion_heading_2: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'heading_2';
  if (!('type' in getBlockRes)) return <></>;
  const { children } = getBlockRes;
  const childrenComp = children ? (
    <NotionChildrenLayout>
      <NotionListBlockComponent blocks={children} node={node + 1} />
    </NotionChildrenLayout>
  ) : (
    <></>
  );
  if (getBlockRes.type === type) {
    const { heading_2 } = getBlockRes;
    const { rich_text } = heading_2;
    return (
      <>
        <div className='flex flex-wrap gap-1'>
          {rich_text.map((v, i) => {
            const { href, plain_text, annotations } = v;
            const { color, bold, strikethrough, underline } = annotations;
            const textColor = getAnnotationColor(color);
            const textBold = getBold(bold);
            const textStrikthrough = getStrikethrough(strikethrough);
            const textUnderline = getUnderline(underline);
            if (href) {
              return (
                <Link href={href}>
                  <a className={`notion_heading_2 notion_link`} key={i}>
                    {plain_text}
                  </a>
                </Link>
              );
            }
            return (
              <p
                className={`notion_heading_2 ${textColor}  ${textBold} ${textStrikthrough} ${textUnderline}  `}
                key={i}
              >
                {plain_text}
              </p>
            );
          })}
        </div>
        {childrenComp}
      </>
    );
  }
  return <></>;
};

export default Notion_heading_2;
