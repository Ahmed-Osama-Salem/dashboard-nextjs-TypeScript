import dynamic from 'next/dynamic';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const UserCharts = ({ users }: { users: IUserData[] }) => {
  const userJobSort = users.filter(
    (item) => item.job === 'Civil Engineer'
  ).length;

  const userJobSortTwo = users.filter(
    (item) => item.job === 'web developer'
  ).length;
  console.log(userJobSortTwo);

  const chart = {
    series: [userJobSort, userJobSortTwo],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div className="h-[378.62px] w-[60%] rounded-3xl bg-white p-[20px] dark:bg-light-gray  lg:w-[50%]">
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="polarArea"
          height={350}
        />
      </div>
    </div>
  );
};

export default UserCharts;
