import type { ITableApiData } from '@/app/interface/tableApiData';

import BarChart from '../component/Apexcharts/BarChart';
import LineChart from '../component/Apexcharts/LineChart';

const ChartSection = ({ data }: { data: ITableApiData[] }) => {
  return (
    <section className="flex w-full gap-10">
      <LineChart data={data} />

      <BarChart data={data} />
    </section>
  );
};

export default ChartSection;
