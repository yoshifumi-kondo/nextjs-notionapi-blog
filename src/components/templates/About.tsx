import React, { FC } from 'react';
import ScrollRevealContainer from '@/components/atoms/ScrollRevealContainer';
import About_toppage from '@/components/organisms/About_toppage';
import Archive_toppage from '@/components/organisms/Archive_toppage';
import Tags_toppage from '@/components/organisms/Tagas_toppage';
import { notionColor } from 'lib/getNotionsParamsForCSS';

interface AboutProps {
  tags: { name: string; color: notionColor }[];
}

const About: FC<AboutProps> = ({ tags }) => {
  return (
    <>
      <ScrollRevealContainer move={'bottom'} delay={200}>
        <About_toppage />
      </ScrollRevealContainer>
      <ScrollRevealContainer move={'bottom'} delay={600}>
        <Tags_toppage tags={tags} />
      </ScrollRevealContainer>
      <ScrollRevealContainer move={'bottom'} delay={1000}>
        <Archive_toppage />
      </ScrollRevealContainer>
    </>
  );
};

export default About;
