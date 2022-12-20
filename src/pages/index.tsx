import { useEffect } from 'react';

import type { ITableApiData } from '@/app/interface/tableApiData';
import { setTableData } from '@/app/redux/store/slice/tableDataSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch, useSelector } from '@/app/redux/store/store';
import { getTableData } from '@/app/server/read/getTabledata';
import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import TableConstract from '@/ui/component/Table/TableConstract';
import UsersTabel from '@/ui/component/users/UsersTable';
import ChartSection from '@/ui/sections/ChartSection';

const Index = ({ data }: { data: ITableApiData[] }) => {
  const dispatch = useDispatch();

  const tableData = useSelector((state: RootState) => state.tableData.table);

  useEffect(() => {
    dispatch(setTableData(data));
  }, []);

  console.log('redux', tableData);

  return (
    <Main
      meta={
        <Meta
          title="Suiiz Tech Team"
          description="Suiiz Tech Team Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div>
        <Dashboard>
          <ChartSection data={data} />
          <UsersTabel />
          <TableConstract />
        </Dashboard>
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
