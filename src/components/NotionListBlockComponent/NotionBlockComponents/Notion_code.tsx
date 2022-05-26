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
const Notion_code: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  const type = 'code';
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
    const { code } = getBlockRes;
    const { rich_text } = code;
    return (
      <>
        <div className='flex flex-col gap-1  p-4 bg-gray-200 rounded my-2'>
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
                  <a className={`notion_code notion_link`} key={i}>
                    {plain_text}
                  </a>
                </Link>
              );
            }
            return splitText.map((text, index) => (
              <h1
                className={`notion_code ${textColor}  ${textBold} ${textStrikthrough} ${textUnderline}  `}
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

export default Notion_code;
