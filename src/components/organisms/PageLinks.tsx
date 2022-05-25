import React, { FC } from 'react';
import PageLinkButton from '@/components/atoms/PageLinkButton ';

const PageLinks: FC = () => {
  return (
    <>
      <PageLinkButton href={'./'} text={'Home'} />
      <PageLinkButton href={'./'} text={'Contact'} />
    </>
  );
};

export default PageLinks;
