import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';
import { setUserData } from '@/app/redux/store/slice/userDataSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch } from '@/app/redux/store/store';
import { getUsersData } from '@/app/server/users/getUsersData';
import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import HorzintalBar from '@/ui/component/Apexcharts/HorzintalBar';
import Error404 from '@/ui/component/Error404';
import UsersCard from '@/ui/sections/statisticscards/UsersCard';
import UsersTable from '@/ui/sections/usersTableSection/UsersTable';

const Index = ({ users }: { users: IUserData[] }) => {
  const { userData } = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    const dataParse = JSON.parse(userLocal as string);
    dispatch(setUserData(dataParse));
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="EL-FiT Group | users"
          description="EL-FiT GROUP has been established since 2017 , in engineering training sector and general contracting ,the CEO & the founder of this company called Eng/ Mohamed Osama EL-FiT, we are providing engineering courses for training students and also providing concrete works items for genral contracting services. "
        />
      }
    >
      {userData ? (
        <div className="overflow-x-hidden">
          <Dashboard>
            <div className="mt-24 flex w-full items-center justify-center px-10">
              <HorzintalBar users={users} />
              <UsersCard users={users} />
            </div>
            <UsersTable users={users} />
          </Dashboard>
        </div>
      ) : (
        <Error404 />
      )}
    </Main>
  );
};

export default Index;
export async function getServerSideProps() {
  const users: IUserData[] = await getUsersData();

  return {
    props: {
      users,
    },
  };
}
