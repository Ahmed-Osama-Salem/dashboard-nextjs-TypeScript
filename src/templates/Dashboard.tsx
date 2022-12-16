import type { ReactNode } from 'react';

import FooterAdmin from '@/ui/component/FooterAdmin';
import Navbar from '@/ui/component/Navbar';

type IDashboardProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Dashboard = (props: IDashboardProps) => (
  <div
    // style={{ background: 'rgb(248 249 250' }}
    className="h-auto w-full px-1 text-gray-700 antialiased dark:bg-dark-gray"
  >
    {props.meta}

    {/* <Sidebar /> */}
    <div className="bg-white dark:bg-dark-gray ">
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <div className=" mt-14 h-auto w-full md:px-10">
        {props.children}
        <FooterAdmin />
      </div>
    </div>
  </div>
);

export { Dashboard };
