import { BsTable } from 'react-icons/bs';
import { GrUserWorker } from 'react-icons/gr';
import { HiUserGroup } from 'react-icons/hi';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/redux/store/store';
import Card from '@/ui/component/statistics/Card';

const StatisticsCards = () => {
  const { techRate, mosadRate, table } = useSelector(
    (state: RootState) => state.tableData
  );

  const statisticData = [
    {
      icon: <GrUserWorker size={30} />,
      cardLabel: 'اعداد الفنين',
      staticticsRate: techRate,
    },
    {
      icon: <HiUserGroup size={30} />,
      cardLabel: 'اعداد المساعدين',
      staticticsRate: mosadRate,
    },
    {
      icon: <BsTable size={30} />,
      cardLabel: 'اعداد خلايا الجدول',
      staticticsRate: table.length,
    },
  ];

  return (
    <div className="m-auto mt-10 w-full items-center px-10">
      <div className="flex w-full flex-col gap-6 pb-3  lg:mx-0 lg:flex-row">
        {statisticData.map((card, i) => {
          return (
            <Card
              key={i}
              icon={card.icon}
              cardLabel={card.cardLabel}
              staticticsRate={card.staticticsRate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatisticsCards;
