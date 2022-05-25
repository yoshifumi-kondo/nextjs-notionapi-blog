import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextPage } from 'next';
import { ArticleLinkLeft, ArticleLinkRight } from '@/components/molecules/ArticleLinks';
import About_toppage from '@/components/templates/About_toppage';
import Archive_toppage from '@/components/templates/Archive_toppage';
import Layout from '@/components/templates/Layout';
import Tags_toppage from '@/components/templates/Tagas_toppage';

interface Props {
  posts: QueryDatabaseResponse;
}
const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title='KONTACO-BLOG'>
      <div className='flex flex-col md:flex-row w-screen mt-8'>
        <div className='w-screen md:w-2/3  border-r-2 p-4 md:p-8 flex flex-col gap-8'>
          <ArticleLinkLeft
            title={'this is test for title'}
            href={'/test/notion_blocks'}
            tags={['AWS', 'Docker']}
            date={'2022-01-04'}
          />
          <ArticleLinkRight
            title={'this is test for title'}
            href={'/test/notion_blocks'}
            tags={['Nodejs', 'Nextjs']}
            date={'2022-01-02'}
          />
        </div>
        <div className='w-screen md:w-1/3 border-r-2 border-white p-4  flex flex-col gap-8'>
          <About_toppage />
          <Tags_toppage />
          <Archive_toppage />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
