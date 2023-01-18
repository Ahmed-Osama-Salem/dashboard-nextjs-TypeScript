import { useEffect } from 'react';

import type { ITableApiData } from '@/app/interface/tableApiData';
import {
  setLastDate,
  setMosadRate,
  setTableData,
  setTechRate,
} from '@/app/redux/store/slice/tableDataSlice';
import { setUserData } from '@/app/redux/store/slice/userDataSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch, useSelector } from '@/app/redux/store/store';
import { getTableData } from '@/app/server/read/getTabledata';
import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import Error404 from '@/ui/component/Error404';
import HelpModal from '@/ui/component/Modal/HelpModal';
import TableConstract from '@/ui/component/Table/TableConstract';
import UsersTabel from '@/ui/component/users/UsersTable';
import ChartSection from '@/ui/sections/ChartSection';
import StatisticsCards from '@/ui/sections/statisticscards/StatisticsCards';

const Index = ({ data }: { data: ITableApiData[] }) => {
  const dispatch = useDispatch();
  const { isHelpModal } = useSelector((state: RootState) => state.modal);
  const { userData } = useSelector((state: RootState) => state.userData);
  // const lastDateState = useSelector(
  //   (state: RootState) => state.tableData.lastDate
  // );

  const getTechRate = () => {
    const rateOfTech = data
      .map((a: ITableApiData) => parseInt(a.allText.techNumber, 10))
      .reduce((a: number, b: number) => a + b, 0);
    dispatch(setTechRate(rateOfTech));
  };

  const getMosadRate = () => {
    const rateOfMosad = data
      .map((a: ITableApiData) => parseInt(a.allText.mosadNumber, 10))
      .reduce((a: number, b: number) => a + b, 0);
    dispatch(setMosadRate(rateOfMosad));
  };
  const getLastDate = () => {
    const lastDate = data.map((d) => d.allText.dateNow);
    dispatch(setLastDate(lastDate.slice(-1)));
  };

  useEffect(() => {
    if (data) {
      getTechRate();
      getMosadRate();
      getLastDate();
    }
  }, [data]);

  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    const dataParse = JSON.parse(userLocal as string);
    dispatch(setUserData(dataParse));
    dispatch(setTableData(data));
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="EL-FiT Group | system"
          description="EL-FiT GROUP has been established since 2017 , in engineering training sector and general contracting ,the CEO & the founder of this company called Eng/ Mohamed Osama EL-FiT, we are providing engineering courses for training students and also providing concrete works items for genral contracting services. "
        />
      }
    >
      {userData ? (
        <div className="overflow-x-hidden">
          <Dashboard>
            <ChartSection />
            <StatisticsCards />
            <UsersTabel />
            <TableConstract />
          </Dashboard>
          {isHelpModal ? <HelpModal /> : null}
        </div>
      ) : (
        <Error404 />
      )}
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
