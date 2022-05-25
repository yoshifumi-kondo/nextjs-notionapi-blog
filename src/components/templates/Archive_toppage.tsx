import * as dateFns from 'date-fns';
import React, { FC } from 'react';
import ArchiveLinkButton from '@/components/atoms/ArchibeLinkButton';

const Archive_toppage: FC = () => {
  const startDate = new Date('2022-04-01');
  const today = new Date();

  const diffDate = dateFns.differenceInCalendarMonths(today, startDate);

  const DateArray = Array.from(new Array(diffDate + 1)).map((_v, i) => {
    const retDate = dateFns.addMonths(startDate, i);
    const retDateStr = dateFns.format(retDate, 'yyyy-MM');
    return retDateStr;
  });

  console.log(DateArray);

  return (
    <div className='border-8 border-slate-700 rounded-lg shadow bg-white w-full p-8'>
      <h1 className='text-2xl text-gray-900 w-full text-center md:text-left'>Archive</h1>
      <div className='flex flex-col-reverse justify-center md:justify-start flex-wrap gap-2 my-4 items-center md:items-start'>
        {DateArray.map((date, i) => (
          <div key={i}>
            <ArchiveLinkButton text={date} href={'./'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive_toppage;
