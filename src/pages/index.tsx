import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextPage } from 'next';
import { queryDatabase } from 'api/notion_api';

interface Props {
  posts: QueryDatabaseResponse;
}
const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className='grid grid-cols-3 gap-2 w-screen px-4 my-2'>
      <div className={'md:col-span-2 col-span-3 row-span-full '}>
        {posts.results.map((v, i) => (
          <div key={i}> {v.id}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const [posts] = await Promise.all([queryDatabase()]);
  return {
    props: {
      posts,
    },
    revalidate: 3,
  };
}
