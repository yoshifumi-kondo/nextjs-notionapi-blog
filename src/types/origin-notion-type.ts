import { notionColor } from 'lib/getNotionsParamsForCSS';

const samplePoperties = {
  tags: {
    id: 'ItuC',
    type: 'multi_select',
    multi_select: [
      {
        id: 'ce62d160-0c67-47dc-b80e-d6dd722b1c23',
        name: 'Next.js',
        color: 'brown' as notionColor,
      },
    ],
  },
  status: {
    id: 'YkDi',
    type: 'select',
    select: {
      id: '82e01ad9-7eec-42ff-96da-55f3bd0752b2',
      name: 'published',
      color: 'orange',
    },
  },
  related_articles: {
    id: 'ZSnr',
    type: 'relation',
    relation: [
      {
        id: '462b976c-9621-4142-aa87-6a9d74f6aa15',
      },
    ],
  },
  date: {
    id: '%5CzLt',
    type: 'created_time',
    created_time: '2022-05-23T23:29:00.000Z',
  },
  Page: {
    id: 'title',
    type: 'title',
    title: [
      {
        type: 'text',
        text: {
          content: 'List notion blocks',
          link: null,
        },
        annotations: {
          bold: false,
          italic: false,
          strikethrough: false,
          underline: false,
          code: false,
          color: 'default',
        },
        plain_text: 'List notion blocks',
        href: null,
      },
    ],
  },
};

export type originNotionPropertieProps = typeof samplePoperties;
