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

const Notion_callout: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'callout';
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
    const { callout } = getBlockRes;
    const { rich_text, icon } = callout;
    const emojiComp = icon?.type === 'emoji' ? <div>{icon.emoji}</div> : <></>;
    return (
      <>
        <div className='flex flex-wrap gap-1 p-3 bg-yellow-100 rounded my-2'>
          {emojiComp}
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
                  <a className={`notion_callout notion_link`} key={i}>
                    {plain_text}
                  </a>
                </Link>
              );
            }
            return (
              <p
                className={`notion_callout ${textColor}  ${textBold} ${textStrikthrough} ${textUnderline}  `}
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

export default Notion_callout;
