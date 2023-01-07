import { useEffect } from 'react';

import type { ITableApiData } from '@/app/interface/tableApiData';
import {
  setMosadRate,
  setTableData,
  setTechRate,
} from '@/app/redux/store/slice/tableDataSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch, useSelector } from '@/app/redux/store/store';
import { getTableData } from '@/app/server/read/getTabledata';
import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import HelpModal from '@/ui/component/Modal/HelpModal';
import TableConstract from '@/ui/component/Table/TableConstract';
import UsersTabel from '@/ui/component/users/UsersTable';
import ChartSection from '@/ui/sections/ChartSection';
import StatisticsCards from '@/ui/sections/statisticscards/StatisticsCards';

const Index = ({ data }: { data: ITableApiData[] }) => {
  const dispatch = useDispatch();
  const { isHelpModal } = useSelector((state: RootState) => state.modal);

  const getTechRate = () => {
    const rateOfTech = data
      .map((a: ITableApiData) => parseInt(a.allText.techNumber, 10))
      .reduce((a: number, b: number) => a + b);
    dispatch(setTechRate(rateOfTech));
  };

  const getMosadRate = () => {
    const rateOfMosad = data
      .map((a: ITableApiData) => parseInt(a.allText.mosadNumber, 10))
      .reduce((a: number, b: number) => a + b);
    dispatch(setMosadRate(rateOfMosad));
  };

  useEffect(() => {
    getTechRate();
    getMosadRate();
  }, [data]);

  useEffect(() => {
    dispatch(setTableData(data));
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="EL-FiT Group"
          description="Suiiz Tech Team Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="overflow-x-hidden">
        <Dashboard>
          <ChartSection />
          <StatisticsCards />
          <UsersTabel />
          <TableConstract />
        </Dashboard>
        {isHelpModal ? <HelpModal /> : null}
      </div>
    </Main>
  );
};

export default Index;

export async function getServerSideProps() {
  const data = await getTableData();

  return {
    props: { data },
  };
}
