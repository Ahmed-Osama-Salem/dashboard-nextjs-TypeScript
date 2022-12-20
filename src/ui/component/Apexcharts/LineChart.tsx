import dynamic from 'next/dynamic';

import type { ITableApiData } from '@/app/interface/tableApiData';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const LineChart = ({ data }: { data: ITableApiData[] }) => {
  console.log(data);

  const chart = {
    series: [
      {
        type: 'line',
        name: 'عـدد الفنين	',
        data: data.map((item) => {
          return item.allText.techNumber;
        }),
      },
      {
        type: 'line',
        name: 'عدد المســاعدين	',
        data: data.map((item) => {
          return item.allText.mosadNumber;
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        zoom: {
          enabled: true,
        },
      },

      stroke: {
        width: [3, 3],
      },

      dataLabels: {
        enabled: false,
      },

      title: {
        text: 'احصائيات اعداد الفنين و المساعدين',
        style: {
          color: '#2D2E83  ',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.2,
        },
      },
      colors: ['#FDC800', '#2D2E83'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#2D2E83'],
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            [
              {
                offset: 0,
                color: '#FFEF26',
                opacity: 1,
              },
              {
                offset: 20,
                color: '#FED70F',
                opacity: 1,
              },
              {
                offset: 60,
                color: '#FDC800',
                opacity: 1,
              },
              {
                offset: 100,
                color: '#E3312D',
                opacity: 1,
              },
            ],
            [
              {
                offset: 0,
                color: '#009FE3',
                opacity: 1,
              },
              {
                offset: 50,
                color: '#2D2E83',
                opacity: 0.75,
              },
              {
                offset: 100,
                color: '#2D2E83',
                opacity: 1,
              },
              {
                offset: 100,
                color: '#2D2E83',
                opacity: 1,
              },
            ],
          ],
        },
      },

      xaxis: {
        categories: data.map((item) => {
          return item.allText.dateNow;
        }),
      },
      yaxis: {
        min: 0,
        max: 20,
        tickAmount: 10,
      },
    },
  };

  return (
    <div className="h-[378.62px] w-[50%] rounded-3xl bg-white p-[20px] dark:bg-light-gray dark:text-white">
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

export default LineChart;
