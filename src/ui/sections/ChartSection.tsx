import BarChart from '../component/Apexcharts/BarChart';
import LineChart from '../component/Apexcharts/LineChart';

const ChartSection = () => {
  return (
    <section className="flex w-full gap-10 px-10">
      <LineChart />

      <BarChart />
    </section>
  );
};

export default ChartSection;
