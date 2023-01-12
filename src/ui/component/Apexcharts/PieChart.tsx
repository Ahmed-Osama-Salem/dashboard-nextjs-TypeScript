import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

import type { ITableApiData } from '@/app/interface/tableApiData';
import type { RootState } from '@/app/redux/store/store';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const LineChartN = () => {
  const { table } = useSelector((state: RootState) => state.tableData);

  const chart = {
    series: [
      {
        type: 'line',
        name: 'عـدد الفنين	',
        data: table.map((item: ITableApiData) => {
          return item.allText.techNumber;
        }),
      },
      {
        name: 'عدد المســاعدين	',
        data: table.map((item: ITableApiData) => {
          return item.allText.mosadNumber;
        }),
        fillColor: '#1fc900',
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      tooltip: {
        theme: 'dark',
      },
      xaxis: {
        categories: table.map((item: ITableApiData) => {
          return item.allText.dateNow;
        }),
        labels: {
          style: {
            fontSize: '13px',
          },
        },
      },
      yaxis: {
        min: 0,
        max: 20,
        tickAmount: 10,
      },
    },
  };

  return (
    <div className="h-[378.62px] w-full rounded-3xl bg-white p-[20px] dark:bg-light-gray dark:text-white lg:w-[50%]">
      <div id="chart" className="text-white">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default LineChartN;
