import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const PieChart = () => {
  const pie = {
    series: [42, 47, 52, 58, 68],
    options: {
      chart: {
        width: 310,
      },
      labels: [
        ' adipisicing elit. Ipsum natus  ',
        ' Provident vitae error rehenderit.',
        '  Provident vitae error rehenderit.',
        ' cupiditate  Provident vitae rehenderit.',
        ' Provident vitae error rehenderit rehenderit.',
      ],
      fill: {
        opacity: 1,
      },

      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        labels: {
          colors: 'black',
          useSeriesColors: false,
        },
      },
      markers: {
        width: 100,
        height: 12,
        strokeWidth: 2,
        strokeColor: 'red',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: 'red',
          useSeriesColors: false,
        },
      },

      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          color: '#008FFB',
          enabled: true,
          shadeIntensity: 0.5,
        },
      },
    },
  };

  return (
    <div className="h-[378.62px] w-[50%] rounded-3xl bg-white p-[20px] dark:bg-light-gray dark:text-white">
      <h1 className="text-[20.87px] font-semibold text-[#00157F]">
        Lorem ipsum dolor sit{' '}
      </h1>

      <div id="chart">
        <ReactApexChart
          options={pie.options}
          series={pie.series}
          type="polarArea"
          width={660}
        />
      </div>
    </div>
  );
};
export default PieChart;
