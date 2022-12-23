import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

import type { ITableApiData } from '@/app/interface/tableApiData';
import type { RootState } from '@/app/redux/store/store';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const BarChart = () => {
  const tableData = useSelector((state: RootState) => state.tableData.table);

  const chart = {
    series: [
      {
        name: 'نسبة انجاز',
        type: 'column',
        data: tableData.map((item: ITableApiData) => {
          return item.allText.angaz;
        }),
      },
      {
        name: 'Social Media',
        type: 'line',
        data: tableData.map((item: ITableApiData) => {
          return item.allText.angaz;
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        // type: 'line',
        color: ['#be1d1d'],
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          // dataLabels: {
          //   position: ['top', 'left'],
          // },
        },
      },
      colors: ['#FDC800', '#2D2E83'],
      stroke: {
        width: [0, 2],
      },
      title: {
        text: 'احصائيات نسبة انجاز البنود',
        style: {
          color: '#2D2E83',
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        formatter(val: string) {
          return `${val}%`;
        },
        // style: {
        //   color: '#be1d1d',
        // },
      },
      labels: tableData.map((item: ITableApiData) => {
        return item.allText.dateNow;
      }),
      xaxis: {
        type: tableData.map((item: ITableApiData) => {
          return item.allText.dateNow;
        }),
      },
      fill: {
        colors: ['#be1d1d'],
      },
      yaxis: [
        {
          title: {
            text: 'نسبة انجاز',
          },
        },
        {
          opposite: true,
          title: {
            text: 'نسبة انجاز',
          },
        },
      ],
    },
  };

  return (
    <div className="h-[378.62px] w-[50%] rounded-3xl bg-white p-[20px]  dark:bg-light-gray">
      <div id="chart">
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

export default BarChart;
