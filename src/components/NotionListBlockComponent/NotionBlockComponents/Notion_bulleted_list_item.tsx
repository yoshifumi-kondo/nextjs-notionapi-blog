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

const Notion_bulleted_list_item: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'bulleted_list_item';
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
    const { bulleted_list_item } = getBlockRes;
    const { rich_text } = bulleted_list_item;

    return (
      <>
        <div className='flex flex-wrap gapーx-1'>
          {rich_text.map((v, i) => {
            const { href, plain_text, annotations } = v;
            const { color, strikethrough, bold, underline } = annotations;
            const textColor = getAnnotationColor(color);
            const textBold = getBold(bold);
            const textStrikthrough = getStrikethrough(strikethrough);
            const textUnderline = getUnderline(underline);
            const icon = node % 3 == 0 ? '◯' : node % 3 === 1 ? '●' : node % 3 === 2 ? '◇' : '◆';
            if (href) {
              return (
                <Link href={href}>
                  <a className={`notion_bulleted_list_item notion_link`} key={i}>
                    {plain_text}
                  </a>
                </Link>
              );
            }
            return (
              <>
                <p
                  className={`notion_bulleted_list_item ${textColor}  ${textBold} ${textStrikthrough} ${textUnderline}  `}
                  key={i}
                >
                  {icon} {plain_text}
                </p>
              </>
            );
          })}
        </div>
        {childrenComp}
      </>
    );
  }
  return <></>;
};

export default Notion_bulleted_list_item;
