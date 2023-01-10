import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { MdOutlineHelp } from 'react-icons/md';

import { setIsHelpModal } from '@/app/redux/store/slice/modalSlice';
import { useDispatch } from '@/app/redux/store/store';

import ToogleBtn from './toggleBtn/ToggleBtn';
import UserProfile from './users/UserProfile';

const Navbar = () => {
  const [userData, setUserData] = useState<any>({});
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const logOut = () => {
    router.push('/login');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    const dataParse = JSON.parse(userLocal as string);
    setUserData(dataParse);
  }, []);
  console.log(userData, 'state');

  return (
    <>
      <nav
        className={
          openNav
            ? 'relative mx-6 flex h-[30vh] flex-col flex-wrap items-center justify-between rounded-2xl bg-white px-0 py-2 shadow-2xl  shadow-red-600/40 transition-all duration-300 ease-linear dark:bg-light-gray  xl:flex-nowrap xl:justify-start'
            : 'relative mx-6 flex h-[7vh] flex-row flex-wrap items-center justify-between rounded-2xl bg-white px-0 py-2 shadow-lg  shadow-red-600/20 transition-all duration-300 ease-linear dark:bg-light-gray   xl:flex-nowrap xl:justify-start'
        }
      >
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-1">
          <nav>
            <ol className="mr-12 flex flex-wrap rounded-lg bg-transparent pt-1 sm:mr-16">
              <li className="text-sm leading-normal">
                <a
                  className={
                    !openNav
                      ? 'text-xl font-bold tracking-[0.06rem] text-red-700  lg:text-2xl'
                      : 'text-xl font-bold tracking-[0.06rem] text-red-700  transition-all duration-300 ease-linear lg:text-3xl'
                  }
                >
                  EL-FiT Group system
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-2 flex grow items-center sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center gap-4 md:ml-auto md:pr-4">
              <p
                onClick={() => setOpenNav((prev) => !prev)}
                className="cursor-pointer text-xl capitalize dark:text-white"
              >
                {userData.name}
              </p>
              <ToogleBtn />
              <MdOutlineHelp
                size={40}
                className="cursor-pointer dark:text-white"
                onClick={() => dispatch(setIsHelpModal(true))}
              />
              <BiLogIn
                size={40}
                onClick={logOut}
                className="cursor-pointer transition-all duration-150 ease-linear hover:rotate-6 hover:scale-[1.1] dark:text-white"
              />
            </div>
          </div>
        </div>
        {openNav ? <UserProfile user={userData} /> : null}
      </nav>
    </>
  );
};

export default Navbar;
