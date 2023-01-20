import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { MdOutlineHelp } from 'react-icons/md';

import { setIsHelpModal } from '@/app/redux/store/slice/modalSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch, useSelector } from '@/app/redux/store/store';

import ToogleBtn from './toggleBtn/ToggleBtn';
import UserProfile from './users/UserProfile';

const Navbar = () => {
  const { userData } = useSelector((state: RootState) => state.userData);
  const [openNav, setOpenNav] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showLabelHelp, setShowLabelHelp] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const logOut = () => {
    router.push('/login');
    localStorage.removeItem('user');
  };

  return (
    <div className="font-poppins">
      <nav
        className={
          openNav
            ? 'relative mx-6 flex h-[60vh] flex-wrap items-center justify-start rounded-2xl bg-white px-0 py-2 shadow-2xl shadow-red-600/40 transition-all duration-300 ease-linear  dark:bg-light-gray lg:h-[30vh] lg:flex-col lg:items-center lg:justify-between  xl:flex-nowrap xl:justify-start'
            : 'mx-6 flex h-[16vh] items-center rounded-2xl  bg-white px-0 py-2 shadow-lg shadow-red-600/20 transition-all duration-300 ease-linear dark:bg-light-gray  lg:relative lg:h-[7vh] lg:flex-row lg:flex-wrap lg:justify-between   xl:flex-nowrap xl:justify-start'
        }
      >
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-1">
          <ol className="mr-12 flex flex-wrap rounded-lg bg-transparent pt-1 sm:mr-16">
            <li className="text-sm leading-normal">
              <a
                className={
                  !openNav
                    ? 'text-xl font-bold capitalize tracking-[0.06rem] text-red-700  lg:text-2xl'
                    : 'text-xl font-bold capitalize tracking-[0.06rem] text-red-700  transition-all duration-300 ease-linear lg:text-3xl'
                }
              >
                EL-FiT Group{' '}
                <span className="text-gray-700/50 dark:text-white/50">|</span>{' '}
                <span className="font-medium text-red-600/70">Dashboard</span>
              </a>
            </li>
          </ol>

          <div className="mt-2 flex grow items-center sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center gap-4 md:ml-auto md:pr-4">
              <p
                onClick={() => setOpenNav((prev) => !prev)}
                className="animate-pulse cursor-pointer text-xl capitalize transition-all duration-200 ease-linear hover:animate-none hover:text-red-500 dark:text-white"
              >
                {userData.name}
              </p>
              <ToogleBtn />
              <MdOutlineHelp
                onMouseEnter={() => setShowLabelHelp(true)}
                onMouseLeave={() => setShowLabelHelp(false)}
                size={40}
                className="hidden cursor-pointer transition-all duration-200 ease-linear hover:text-red-500 dark:text-white lg:block"
                onClick={() => dispatch(setIsHelpModal(true))}
              />
              <BiLogIn
                onMouseEnter={() => setShowLabel(true)}
                onMouseLeave={() => setShowLabel(false)}
                size={40}
                onClick={logOut}
                className="cursor-pointer transition-all duration-150 ease-linear hover:rotate-6 hover:scale-[1.1] hover:text-red-500 dark:text-white"
              />
            </div>
          </div>
        </div>

        {openNav ? <UserProfile user={userData} /> : null}
      </nav>
      {showLabel && !openNav ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
          }}
          className="translate-y-3 px-10 text-end"
        >
          <span className="rounded-lg bg-white p-1 capitalize shadow-xl">
            log out
          </span>
        </motion.div>
      ) : null}
      {showLabelHelp && !openNav ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
          }}
          className="mr-[6.7rem] translate-y-3 text-end"
        >
          <span className="rounded-lg bg-white p-1 capitalize shadow-xl">
            help
          </span>
        </motion.div>
      ) : null}

      {/* {openNav ? (
        <div
          className={
            openNav
              ? ' flex h-screen flex-wrap items-center justify-center backdrop-blur-sm transition-all duration-300 ease-linear '
              : 'flex h-0 flex-wrap items-center justify-center backdrop-blur-0 transition-all duration-300 ease-linear '
          }
        >
          <ProfileCard user={userData} />
        </div>
      ) : null} */}
      <div
        className={
          openNav
            ? ' flex h-screen flex-wrap items-center justify-center backdrop-blur-sm transition-all duration-300 ease-linear '
            : 'flex h-0 flex-wrap items-center justify-center backdrop-blur-0 transition-all duration-300 ease-linear '
        }
      ></div>
    </div>
  );
};

export default Navbar;
