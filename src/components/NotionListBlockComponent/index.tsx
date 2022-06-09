import React, { FC, ReactNode } from 'react';
import Notion_bookmark from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_bookmark';
import Notion_bulleted_list_item from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_bulleted_list_item';
import Notion_callout from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_callout';
import Notion_child_database from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_child_database';
import Notion_child_page from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_child_page';
import Notion_code from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_code';
import Notion_equation from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_equation';
import Notion_file from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_file';
import Notion_heading_1 from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_heading_1';
import Notion_heading_2 from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_heading_2';
import Notion_heading_3 from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_heading_3';
import Notion_image from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_image';
import Notion_numbered_list_item from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_numbered_list_item';
import Notion_paragraph from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_paragraph';
import Notion_pdf from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_pdf';
import Notion_quote from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_quote';
import Notion_to_do from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_to_do';
import Notion_toggle from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_toggle';
import Notion_video from '@/components/NotionListBlockComponent/NotionBlockComponents/Notion_video';
import { BlockChildrenNodeResponse, ListBlockChildrenNodeResponse } from 'pages/api/notion_api';
export interface NotionBlockComponentProps {
  getBlockRes: BlockChildrenNodeResponse;
  node: number;
}

export const NotionBlockHandler: FC<NotionBlockComponentProps> = ({ getBlockRes, node }) => {
  if (!('type' in getBlockRes)) {
    return <></>;
  }
  const { type } = getBlockRes;

  switch (type) {
    case 'paragraph': {
      return <Notion_paragraph getBlockRes={getBlockRes} node={node} />;
    }
    case 'heading_1': {
      return <Notion_heading_1 getBlockRes={getBlockRes} node={node} />;
    }
    case 'heading_2': {
      return <Notion_heading_2 getBlockRes={getBlockRes} node={node} />;
    }
    case 'heading_3': {
      return <Notion_heading_3 getBlockRes={getBlockRes} node={node} />;
    }
    case 'bulleted_list_item': {
      return <Notion_bulleted_list_item getBlockRes={getBlockRes} node={node} />;
    }
    case 'numbered_list_item': {
      return <Notion_numbered_list_item getBlockRes={getBlockRes} node={node} />;
    }
    case 'to_do': {
      return <Notion_to_do getBlockRes={getBlockRes} node={node} />;
    }
    case 'toggle': {
      return <Notion_toggle getBlockRes={getBlockRes} node={node} />;
    }
    case 'child_page': {
      return <Notion_child_page getBlockRes={getBlockRes} node={node} />;
    }
    case 'child_database': {
      return <Notion_child_database getBlockRes={getBlockRes} node={node} />;
    }
    case 'embed': {
      // return <Notion_embed getBlockRes={getBlockRes} node={node} />;
      return <></>;
    }
    case 'image': {
      return <Notion_image getBlockRes={getBlockRes} node={node} />;
    }
    case 'video': {
      return <Notion_video getBlockRes={getBlockRes} node={node} />;
    }
    case 'file': {
      return <Notion_file getBlockRes={getBlockRes} node={node} />;
    }
    case 'pdf': {
      return <Notion_pdf getBlockRes={getBlockRes} node={node} />;
    }
    case 'bookmark': {
      return <Notion_bookmark getBlockRes={getBlockRes} node={node} />;
    }
    case 'callout': {
      return <Notion_callout getBlockRes={getBlockRes} node={node} />;
    }
    case 'quote': {
      return <Notion_quote getBlockRes={getBlockRes} node={node} />;
    }
    case 'code': {
      return <Notion_code getBlockRes={getBlockRes} node={node} />;
    }
    case 'equation': {
      return <Notion_equation getBlockRes={getBlockRes} node={node} />;
    }
    case 'divider': {
      // return <Notion_divider getBlockRes={getBlockRes} node={node} />;
      return <></>;
    }
    case 'table_of_contents': {
      return <></>;
    }
    case 'link_preview': {
      return <></>;
    }
    case 'synced_block': {
      return <></>;
    }
    case 'template': {
      return <></>;
    }
    case 'link_to_page': {
      return <></>;
    }
    case 'table': {
      return <></>;
    }
    case 'table_row': {
      return <></>;
    }
    case 'unsupported': {
      return <></>;
    }
    default:
      return <></>;
  }
};

export const NotionChildrenLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='pl-5'>{children}</div>;
};

interface NotionListBlockComponentProps {
  blocks: ListBlockChildrenNodeResponse;
  node: number;
}

const NotionListBlockComponent: FC<NotionListBlockComponentProps> = ({ blocks, node }) => {
  return (
    <>
      {blocks.map((block, index: React.Key | null | undefined) => (
        <NotionBlockHandler getBlockRes={block} key={index} node={node} />
      ))}
    </>
  );
};

export default NotionListBlockComponent;
