import { useEffect, useState } from 'react';
import { HiUsers } from 'react-icons/hi';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';
import Card from '@/ui/component/statistics/Card';

const UsersCard = ({ users }: { users: IUserData[] }) => {
  const [admin, setAdmin] = useState(0);
  const [editor, setEditor] = useState(0);

  useEffect(() => {
    const adminUsers = users.filter((item) => {
      if (item.role === 'Admin') {
        return item;
      }
      return 0;
    });

    const edtorUsers = users.filter((item) => {
      if (item.role !== 'Admin') {
        return item;
      }
      return 0;
    });
    setEditor(edtorUsers.length);
    setAdmin(adminUsers.length);
  }, [users]);

  const statisticData = [
    {
      icon: <HiUsers size={30} />,
      cardLabel: 'Admin users',
      staticticsRate: admin,
      date: '10/20/2023',
    },
    {
      icon: <HiUsers size={30} />,
      cardLabel: 'Editor users',
      staticticsRate: editor,
      date: '10/20/2023',
    },
  ];

  return (
    <div className="m-auto w-[100%] items-center justify-center px-10">
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
