import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const SplineChart = () => {
  const chart = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        // type: 'area',
      },
      colors: ['#FDC800', '#a63524'],

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth' as any,
      },
      xaxis: {
        type: 'datetime' as any,
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  };

  return (
    <div className="h-[378.62px] w-[60%] rounded-3xl bg-white p-[20px] shadow-lg shadow-red-500/20 dark:bg-light-gray  lg:w-[50%]">
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default SplineChart;
