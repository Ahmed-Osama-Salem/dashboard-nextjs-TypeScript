import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const HorzintalBar = ({ users }: { users: IUserData[] }) => {
  const [webDev, setWebDev] = useState(0);
  const [job, setJob] = useState(0);

  useEffect(() => {
    const myJob = users.filter((item) => {
      if (item.job === 'web developer') {
        return item;
      }
      return 0;
    });

    const otherJobs = users.filter((item) => {
      if (item.job === 'Civil Engineer') {
        return item;
      }
      return 0;
    });

    setJob(otherJobs.length);
    setWebDev(myJob.length);
  }, [users]);

  const chart = {
    series: [
      {
        data: [webDev, job],
      },
    ],
    options: {
      chart: {
        // type: 'bar',
        // height: 40,
      },
      plotOptions: {
        bar: {
          barHeight: '40%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      colors: [
        '#f48024',
        '#d4526e',
        '#d4526e',
        '#13d8aa',
        '#A5978B',
        '#2b908f',
        '#f9a3a4',
        '#90ee7e',
        '#f48024',
        '#69d2e7',
      ],
      dataLabels: {
        enabled: true,
        textAnchor: 'start' as any,
        style: {
          colors: ['#fff'],
        },
        formatter(
          val: any,
          opt: {
            w: { globals: { labels: { [x: string]: any } } };
            dataPointIndex: string | number;
          }
        ) {
          return `${opt.w.globals.labels[opt.dataPointIndex]}:  ${val}`;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 0.6,
        colors: ['#fff'],
      },
      xaxis: {
        min: 0,
        max: users.length,
        tickAmount: 1,
        categories: [
          'Web Developer',
          'Civil Engineer',
          // 'United Kingdom',
          // 'Netherlands',
          // 'Italy',
          // 'France',
          // 'Japan',
          // 'United States',
          // 'China',
          // 'India',
        ],
      },
      yaxis: {
        min: 0,
        max: users.length,
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Jobs statictics',
        // align: 'center',
        floating: true,
      },

      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter() {
              return '';
            },
          },
        },
      },
    },
  };

  return (
    <div className="h-[300px] w-full rounded-3xl bg-white p-[20px] text-center dark:bg-light-gray  lg:w-[50%]">
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="bar"
          height={260}
        />
      </div>
    </div>
  );
};

export default HorzintalBar;
