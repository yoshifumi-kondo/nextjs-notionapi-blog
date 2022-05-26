import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import * as dateFns from 'date-fns';
import { GetStaticProps, NextPage } from 'next';
import ScrollRevealContainer from '@/components/atoms/ScrollRevealContainer';
import {
  ArticleLinkLeft,
  ArticleLinkProps,
  ArticleLinkRight,
} from '@/components/molecules/ArticleLinks';
import About_toppage from '@/components/templates/About_toppage';
import Archive_toppage from '@/components/templates/Archive_toppage';
import Layout from '@/components/templates/Layout';
import PagenationFooter from '@/components/templates/PagenationFooter';
import Tags_toppage from '@/components/templates/Tagas_toppage';
import { queryDatabase, retrieveDataBase } from 'api/notion_api';
import { notionColor } from 'lib/getNotionsParamsForCSS';
import { originNotionPropertieProps } from 'types/origin-notion-type';

interface Props {
  pageLength: number;
  pagePosition: number;
  posts: QueryDatabaseResponse;
  tags: { name: string; color: notionColor }[];
}

const Home: NextPage<Props> = ({ pageLength, pagePosition = 1, posts, tags }) => {
  const articleArray: ArticleLinkProps[] = posts.results.map((post) => {
    if ('properties' in post) {
      const { created_time, id } = post;
      const properties = post.properties as unknown as originNotionPropertieProps;
      const { Page, tags } = properties;
      const title = Page.title
        .map((v) => v.plain_text)
        .toString()
        .replaceAll(',', '');
      const date = dateFns.format(new Date(created_time), 'yyyy-MM-dd');
      const href = `/article/${id}`;
      const tagArray = tags.multi_select.map((v) => {
        const { name, color } = v;
        return { name, color };
      });
      return { date, href, title, tags: tagArray };
    }
    return {} as ArticleLinkProps;
  });

  return (
    <Layout title='KONTACO-BLOG'>
      <div className='flex flex-col md:flex-row w-screen mt-8'>
        <div className='w-screen md:w-2/3  border-r-2 p-4 md:p-8 flex flex-col gap-8 overflow-hidden'>
          {articleArray.map((aricle, index) => {
            const { title, href, tags, date } = aricle;
            const delay = 5 > index ? index * 200 : 200;
            if (index % 2) {
              return (
                <ScrollRevealContainer move='right' delay={delay} key={index}>
                  <ArticleLinkRight title={title} href={href} tags={tags} date={date} />
                </ScrollRevealContainer>
              );
            }
            return (
              <ScrollRevealContainer move='left' delay={delay} key={index}>
                <ArticleLinkLeft title={title} href={href} tags={tags} date={date} />
              </ScrollRevealContainer>
            );
          })}
          <ScrollRevealContainer move={'bottom'} delay={200}>
            <PagenationFooter pagePosition={pagePosition} pageLength={pageLength} />
          </ScrollRevealContainer>
        </div>
        <div className='w-screen md:w-1/3 border-r-2 border-white p-4  flex flex-col gap-8'>
          <ScrollRevealContainer move={'bottom'} delay={200}>
            <About_toppage />
          </ScrollRevealContainer>
          <ScrollRevealContainer move={'bottom'} delay={600}>
            <Tags_toppage tags={tags} />
          </ScrollRevealContainer>
          <ScrollRevealContainer move={'bottom'} delay={1000}>
            <Archive_toppage />
          </ScrollRevealContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pagePosition = 1;
  const postsPerPage = 2;
  const allPosts = await queryDatabase({});
  const posts = { ...allPosts };
  posts.results = allPosts.results.slice(
    (pagePosition - 1) * postsPerPage,
    pagePosition * postsPerPage,
  );
  const page = await retrieveDataBase();
  const pageLength = Math.ceil(allPosts.results.length / postsPerPage);
  const { tags } = page.properties as unknown as originNotionPropertieProps;
  const { options } = tags.multi_select as any;
  return {
    props: {
      pageLength,
      pagePosition,
      posts,
      tags: options,
    },
  };
};
