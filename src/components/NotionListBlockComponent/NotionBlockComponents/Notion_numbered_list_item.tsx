import React, { FC } from 'react';
import NotionListBlockComponent, {
  NotionBlockComponentProps,
  NotionChildrenLayout,
} from '@/components/NotionListBlockComponent';
const Notion_numbered_list_item: FC<NotionBlockComponentProps> = ({ getBlockRes }) => {
  const type = 'numbered_list_item';
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

export default Notion_numbered_list_item;
