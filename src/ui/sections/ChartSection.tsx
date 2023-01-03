import BarChart from '../component/Apexcharts/BarChart';
import LineChart from '../component/Apexcharts/LineChart';

const ChartSection = () => {
  return (
    <section className="mt-20 w-full px-10 print:hidden md:mt-16 lg:mt-16">
      <div className="flex flex-col gap-10 lg:flex-row">
        <LineChart />
        <BarChart />
      </div>
    </section>
  );
};

export default ChartSection;
