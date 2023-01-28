import { HiUsers } from 'react-icons/hi';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';
import Card from '@/ui/component/statistics/Card';

const UsersCard = ({ users }: { users: IUserData[] }) => {
  const statisticData = [
    {
      icon: <HiUsers size={30} />,
      cardLabel: 'اعداد المستخدمين',
      staticticsRate: users.length,
      date: '10/20/300',
    },
  ];

  return (
    <div className="m-auto w-[40%] items-center justify-center px-10">
      <div className="flex w-full  flex-col gap-6 pb-3  lg:mx-0 lg:flex-row">
        {statisticData.map((card, i) => {
          return (
            <Card
              key={i}
              icon={card.icon}
              cardLabel={card.cardLabel}
              staticticsRate={card.staticticsRate}
              date={card.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersCard;
