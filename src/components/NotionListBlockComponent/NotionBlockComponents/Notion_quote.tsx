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
const Notion_quote: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'quote';
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
    const { quote } = getBlockRes;
    const { rich_text } = quote;
    return (
      <>
        <div className='flex flex-col gap-1 border-l-4 px-4 border-gray-600 my-2'>
          {rich_text.map((v, i) => {
            const { href, plain_text, annotations } = v;
            const { color, bold, strikethrough, underline } = annotations;
            const textColor = getAnnotationColor(color);
            const textBold = getBold(bold);
            const textStrikthrough = getStrikethrough(strikethrough);
            const textUnderline = getUnderline(underline);

            const splitText = plain_text.split(`\n`);
            if (href) {
              return (
                <Link href={href}>
                  <a className={`notion_quote notion_link`} key={i}>
                    {plain_text}
                  </a>
                </Link>
              );
            }
            return splitText.map((text, index) => (
              <h1
                className={`notion_quote ${textColor}  ${textBold} ${textStrikthrough} ${textUnderline}  `}
                key={index}
              >
                {text}
              </h1>
            ));
          })}
        </div>
        {childrenComp}
      </>
    );
  }
  return <></>;
};

export default Notion_quote;
