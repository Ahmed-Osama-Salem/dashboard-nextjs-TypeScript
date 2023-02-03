import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { setUserData } from '@/app/redux/store/slice/userDataSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch } from '@/app/redux/store/store';
import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import SplineChart from '@/ui/component/Apexcharts/SplineChart';
import Error404 from '@/ui/component/Error404';
import ProfileCard from '@/ui/component/users/ProfileCard';

const Index = () => {
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
          title={`EL-FiT Group | ${userData.name}`}
          description="EL-FiT GROUP has been established since 2017 , in engineering training sector and general contracting ,the CEO & the founder of this company called Eng/ Mohamed Osama EL-FiT, we are providing engineering courses for training students and also providing concrete works items for genral contracting services. "
        />
      }
    >
      {userData ? (
        <div className="min-h-screen overflow-x-hidden">
          <Dashboard>
            <div className="mt-28 flex w-full items-start justify-start gap-10 px-10 ">
              <ProfileCard user={userData} />
              <SplineChart />
            </div>
          </Dashboard>
        </div>
      ) : (
        <Error404 />
      )}
    </Main>
  );
};

export default Index;
