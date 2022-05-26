import { Url } from 'url';
import Link from 'next/link';
import React, { FC } from 'react';

interface PageLinkButtonProps {
  href: string | Url;
  text: string;
}

const PageLinkButton: FC<PageLinkButtonProps> = ({ href, text }) => {
  return (
    <>
      <Link href={href}>
        <a
          className={
            ' link link-underline link-underline-white rounded p-1 text-lg tracking-wider text-gray-200'
          }
        >
          {text}
        </a>
      </Link>
    </>
  );
};

export default PageLinkButton;
