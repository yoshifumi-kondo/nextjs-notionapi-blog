import { Client } from '@notionhq/client';
import {
  GetBlockResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { NOTION_DATABASE_ID, NOTION_KEY } from '@/utils/server-constants';

const notion = new Client({
  auth: NOTION_KEY,
});
const database_id = NOTION_DATABASE_ID ? NOTION_DATABASE_ID : 'no_database_id';

/**
 * # retrive database
 * https://developers.notion.com/reference/retrieve-a-database
 */
export const retrieveDataBase = async () => {
  const params = {
    database_id,
  };
  const response = await notion.databases.retrieve(params);
  return response;
};

/**
 * # query database for my database properties
 * there are type of any.
 * it's depends on a database properties.
 * you sould fix your notion's properties or arges properties.
 * https://developers.notion.com/reference/post-database-query
 */
export const queryDatabase = async (
  pageSize = 10,
  start_cursor?: string,
  tagFilter?: string,
  after_date?: string,
  before_date?: string,
) => {
  const params: QueryDatabaseParameters = {
    database_id,
    page_size: pageSize,
    start_cursor: start_cursor,
    filter: undefined,
  };

  params.filter = {
    and: [
      {
        property: 'status',
        select: {
          equals: 'published',
        },
      },
    ],
  };

  if (tagFilter) {
    params.filter.and.push({ property: 'tags', multi_select: { contains: tagFilter } });
  }

  if (before_date) {
    params.filter.and.push({ property: 'date', date: { before: before_date } });
  }
  if (after_date) {
    params.filter.and.push({ property: 'date', date: { after: after_date } });
  }

  const posts = await notion.databases.query(params);
  return posts;
};

/**
 * to get page properties
 * */
export async function retrivePage(page_id: string) {
  const params = { page_id };
  const page = await notion.pages.retrieve(params);
  return page;
}

export type BlockChildrenNodeResponse = GetBlockResponse & {
  children?: ListBlockChildrenNodeResponse;
};

export type ListBlockChildrenNodeResponse = Array<BlockChildrenNodeResponse>;

/**
 * return blocks
 * notion defult api dosen't get children blocks
 */
export async function retriveBlocksWithChildren(
  block_id: string,
  target?: ListBlockChildrenNodeResponse,
) {
  const params = { block_id };
  const page = await notion.blocks.children.list(params);
  const { results } = page;
  const retrieveAllData = await Promise.all(
    (results as ListBlockChildrenNodeResponse).map(async (result) => {
      if (!('type' in result)) {
        return result;
      }
      const { has_children, id } = result;
      if (has_children) {
        if (target) {
          await Promise.all(
            target.map(async (t) => {
              await retriveBlocksWithChildren(t.id, t.children);
            }),
          );
        } else {
          const children = await retriveBlocksWithChildren(id);
          result['children'] = children;
          return result;
        }
      } else {
        return result;
      }
    }),
  );
  return retrieveAllData as ListBlockChildrenNodeResponse;
}

/**
 * return page ids
 * @returns
 */
export async function queryDatabasePageIds() {
  const params: QueryDatabaseParameters = {
    database_id,
  };
  const posts = await notion.databases.query(params);
  const { results } = posts;
  const paths = results.map((result) => {
    return `/article/${result.id}`;
  });
  return paths;
}
