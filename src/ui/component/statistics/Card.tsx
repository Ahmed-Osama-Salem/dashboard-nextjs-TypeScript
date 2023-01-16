import type { ReactNode } from 'react';

const Card = ({
  icon,
  cardLabel,
  staticticsRate,
  date,
}: {
  icon: ReactNode;
  cardLabel: string;
  staticticsRate: number | string;
  date: string[] | any;
}) => {
  return (
    <div className="w-full p-2 print:hidden">
      <div className="group drk:shadow-gray-200  flex flex-col overflow-hidden rounded-2xl bg-white px-6 py-10 shadow-lg duration-300 ease-linear hover:bg-red-500 dark:bg-light-gray dark:shadow-md dark:hover:bg-red-600 dark:hover:shadow-xl dark:hover:shadow-gray-800">
        <div className="flex flex-row items-center justify-between">
          <div className="rounded-xl bg-gray-300 bg-opacity-30 p-4 text-gray-600  transition-all duration-300 ease-linear group-hover:text-gray-200">
            {icon}
          </div>
          <div className="inline-flex text-red-600 transition-all duration-300  ease-linear group-hover:text-gray-200 sm:text-base">
            <p className="text-lg transition-all duration-300 ease-linear group-hover:text-xl  lg:text-3xl group-hover:lg:text-4xl">
              {cardLabel}
            </p>
          </div>
        </div>
        <h1 className="mt-12 text-3xl font-bold text-gray-700 transition-all duration-300 ease-linear group-hover:text-gray-50 sm:text-4xl xl:text-5xl">
          {staticticsRate}
        </h1>
        <div className="flex flex-row justify-between transition-all duration-300 ease-linear group-hover:text-gray-200">
          <p>
            {cardLabel} بتاريخ
            {''} {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
