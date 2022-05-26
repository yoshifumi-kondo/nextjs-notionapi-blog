import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextPage } from 'next';
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

interface Props {
  posts: QueryDatabaseResponse;
}
const Home: NextPage<Props> = ({ posts }) => {
  const sampleArticle: ArticleLinkProps[] = [
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
    {
      title: "'this is test for title'",
      date: '2022-01-02',
      href: '/test/notion_blocks',
      tags: ['AWS', 'Docker'],
    },
  ];
  return (
    <Layout title='KONTACO-BLOG'>
      <div className='flex flex-col md:flex-row w-screen mt-8'>
        <div className='w-screen md:w-2/3  border-r-2 p-4 md:p-8 flex flex-col gap-8 overflow-hidden'>
          {sampleArticle.map((aricle, index) => {
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
          <PagenationFooter />
        </div>
        <div className='w-screen md:w-1/3 border-r-2 border-white p-4  flex flex-col gap-8'>
          <ScrollRevealContainer move={'bottom'} delay={200}>
            <About_toppage />
          </ScrollRevealContainer>
          <ScrollRevealContainer move={'bottom'} delay={600}>
            <Tags_toppage />
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
