import { Url } from 'url';
import Link from 'next/link';
import React, { FC } from 'react';

interface ArchiveLinkButtonProps {
  href: string | Url;
  text: string;
}

const ArchiveLinkButton: FC<ArchiveLinkButtonProps> = ({ href, text }) => {
  return (
    <>
      <Link href={href}>
        <a
          className={
            ' link link-underline link-underline-black rounded p-1 text-xl tracking-wider text-slate-700'
          }
        >
          {text}
        </a>
      </Link>
    </>
  );
};

export default ArchiveLinkButton;
