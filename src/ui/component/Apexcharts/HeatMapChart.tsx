import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const HeatMapChart = () => {
  function generateData(count: string | any, yrange: string | any) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = `w${(i + 1).toString()}`;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x,
        y,
      });
      // eslint-disable-next-line no-plusplus
      i++;
    }
    return series;
  }
  const chart = {
    series: [
      {
        name: 'Task1',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task2',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task3',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task4',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task5',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task6',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task7',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task8',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Task9',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        // type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#a63524'],
      title: {
        text: 'Daily work flow',
      },
    },
  };

  return (
    <div className="h-[340px] w-[60%] rounded-3xl bg-white p-[20px] shadow-lg shadow-red-500/20 dark:bg-light-gray  lg:w-[70%]">
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="heatmap"
          height={300}
        />
      </div>
    </div>
  );
};

export default HeatMapChart;
