import BarChart from '../component/Apexcharts/BarChart';
import LineChart from '../component/Apexcharts/LineChart';

const ChartSection = () => {
  return (
    <section className=" mt-16 w-full px-10 print:hidden">
      <div className="flex gap-10">
        <LineChart />
        <BarChart />
      </div>
    </section>
  );
};

export default ChartSection;
