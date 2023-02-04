import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/redux/store/store';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const RedialChart = () => {
  const { userData } = useSelector((state: RootState) => state.userData);
  const [adminVrefy, setAdminVrefy] = useState(0);

  useEffect(() => {
    if (userData.role === 'Admin') {
      setAdminVrefy(100);
    } else {
      setAdminVrefy(80);
    }
  }, [userData]);
  const chart = {
    series: [adminVrefy],
    options: {
      chart: {
        height: 350,
        // type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
        },
      },
      colors: ['#a63524'],
      labels: ['Account Vrefied'],
    },
  };

  return (
    <div className="h-[340px] w-[100%] rounded-3xl bg-white p-[20px] shadow-lg shadow-red-500/20 dark:bg-light-gray  lg:w-[30%]">
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="radialBar"
          height={300}
        />
      </div>
    </div>
  );
};

export default RedialChart;
