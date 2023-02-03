import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaUserCircle, FaWpforms } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/redux/store/store';

const SideBar = ({
  setOpenSideBar,
  openSideBar,
  logOut,
}: {
  setOpenSideBar: (args: boolean) => void;
  openSideBar: boolean;
  logOut: () => void;
}) => {
  const { userData } = useSelector((state: RootState) => state.userData);

  const sideBarMenu: {
    label: string;
    icon: ReactNode;
    delay: number;
    path?: string;
  }[] = [
    {
      label: 'Dashboard',
      icon: <MdDashboard />,
      delay: 0.3,
      path: '/elfitgroupdashboard',
    },
    {
      label: 'Users',
      icon: <HiUsers />,
      delay: 0.4,
      path: '/users',
    },
    {
      label: 'Charts',
      icon: <BsFillBarChartFill />,
      delay: 0.5,
      path: '/elfitgroupdashboard',
    },
    {
      label: 'Forms',
      icon: <FaWpforms />,
      delay: 0.6,
      path: '/elfitgroupdashboard',
    },
    {
      label: 'Profile',
      icon: <FaUserCircle />,
      delay: 0.7,
      path: '/profile',
    },
    {
      label: 'Settings',
      icon: <AiFillSetting />,
      delay: 0.8,
    },
  ];

  return (
    <div className="w-full">
      <div
        className={`absolute top-0 left-0 h-screen bg-white p-6 transition-all duration-300 ease-linear dark:bg-light-gray ${
          openSideBar
            ? 'visible w-[70%] shadow-xl dark:shadow-red-600/40 lg:w-[23%]'
            : 'invisible w-[0%]'
        }`}
      >
        {openSideBar && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex flex-row-reverse justify-between ">
              <VscClose
                onClick={() => {
                  setOpenSideBar(false);
                }}
                className="cursor-pointer text-4xl text-red-500 transition-all duration-200 ease-linear hover:rotate-90 hover:text-red-500/60"
              />
              <h2 className="text-2xl font-semibold text-red-500">
                EL-FiT Group
              </h2>
            </div>
          </motion.div>
        )}
        {openSideBar && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 200,
              delay: 0.3,
            }}
            className="my-4 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gray-200/50 p-2 dark:bg-gray-800/20 lg:h-[200px] lg:flex-row lg:p-0"
          >
            <img
              src={userData.image}
              alt=""
              className="w-[5rem] rounded-full shadow-2xl lg:w-[7rem]"
            />
            <div>
              <h2 className="text-lg font-semibold text-red-500 lg:text-xl">
                {userData.name}
              </h2>
              <p className="dark:text-gray-400 lg:text-lg">{userData.job}</p>
            </div>
          </motion.div>
        )}
        {openSideBar && (
          <div>
            <div className="my-3 flex flex-col gap-1 text-xl lg:my-10 lg:gap-8">
              {sideBarMenu.map((item, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    key={i}
                  >
                    <Link
                      key={i}
                      href={item.path ? item.path : '/elfitgroupdashboard'}
                    >
                      <a
                        key={i}
                        className="flex cursor-pointer items-center gap-3 rounded-xl p-2 transition-all duration-150 ease-linear hover:translate-x-2 hover:bg-gray-200/50 hover:text-red-500 hover:dark:bg-gray-800/20 dark:hover:text-red-500/40"
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
        {openSideBar && (
          <div className="flex h-[60px] items-center justify-center rounded-2xl bg-gray-200/50 dark:bg-gray-800/20">
            <button
              onClick={logOut}
              className="capitalize transition-all duration-150 ease-linear hover:font-semibold hover:shadow-xl dark:hover:text-red-500/40"
            >
              sign out
            </button>
          </div>
        )}
      </div>
      <div
        className={
          openSideBar
            ? ' absolute left-[70%] top-0 h-screen w-[40%] backdrop-blur-sm transition-all duration-300 ease-linear lg:left-[23%] lg:w-[77%] '
            : 'h-0 w-[40%] backdrop-blur-0 transition-all duration-300 ease-linear lg:w-[77%] '
        }
      ></div>
    </div>
  );
};

export default SideBar;
