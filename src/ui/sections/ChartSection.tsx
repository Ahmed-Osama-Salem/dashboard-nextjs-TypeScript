import BarChart from '../component/Apexcharts/BarChart';
import LineChart from '../component/Apexcharts/LineChart';

const ChartSection = () => {
  return (
    <section className="mt-[10rem] w-full px-10 print:hidden md:mt-16 lg:mt-[5.5rem]">
      <div className="flex flex-col gap-10 lg:flex-row">
        <LineChart />
        <BarChart />
      </div>
    </section>
  );
};

export default ChartSection;
