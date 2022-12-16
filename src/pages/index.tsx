import type { ITableApiData } from '@/app/interface/tableApiData';
import { getTableData } from '@/app/server/read/getTabledata';
import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import TableConstract from '@/ui/component/Table/TableConstract';
import UsersTabel from '@/ui/component/users/UsersTable';

const Index = ({ data }: { data: ITableApiData[] }) => {
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
          <UsersTabel />
          <TableConstract tabelBody={data} />
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
