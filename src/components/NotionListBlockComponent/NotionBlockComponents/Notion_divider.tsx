import React, { FC } from 'react';
import NotionListBlockComponent, {
  NotionBlockComponentProps,
  NotionChildrenLayout,
} from '@/components/NotionListBlockComponent';
const Notion_divider: FC<NotionBlockComponentProps> = ({ getBlockRes }) => {
  const type = 'divider';
  if (!('type' in getBlockRes)) return <></>;
  const { children } = getBlockRes;
  const childrenComp = children ? (
    <NotionChildrenLayout>
      <NotionListBlockComponent blocks={children} />
    </NotionChildrenLayout>
  ) : (
    <></>
  );
  if (getBlockRes.type === type) {
    return (
      <>
        {type}
        {childrenComp}
      </>
    );
  }
  return <></>;
};

export default Notion_divider;
