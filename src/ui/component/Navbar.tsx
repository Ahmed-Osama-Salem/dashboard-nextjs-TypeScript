import React from 'react';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineHelp } from 'react-icons/md';

import { setIsHelpModal } from '@/app/redux/store/slice/modalSlice';
import { setIsOpen } from '@/app/redux/store/slice/sidebarSlice';
import { useDispatch, useSelector } from '@/app/redux/store/store';

import ToogleBtn from './toggleBtn/ToggleBtn';

const Navbar = () => {
  const openSidebar = useSelector((state) => state.sidebar.isOpen);

  const dispatch = useDispatch();

  return (
    <nav className="relative mx-6 flex  flex-wrap items-center justify-between rounded-2xl bg-white px-0 py-2 shadow-lg  shadow-red-600/20 transition-all dark:bg-light-gray  xl:flex-nowrap xl:justify-start">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-1">
        <nav>
          <ol className="mr-12 flex flex-wrap rounded-lg bg-transparent pt-1 sm:mr-16">
            <li className="text-sm leading-normal">
              <a className="text-xl font-bold tracking-[0.06rem] text-red-700  lg:text-2xl">
                EL-FiT Group system
              </a>
            </li>
          </ol>
        </nav>

        <div className="mt-2 flex grow items-center sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className="flex items-center gap-4 md:ml-auto md:pr-4">
            <ToogleBtn />
            <MdOutlineHelp
              size={40}
              className="cursor-pointer dark:text-white"
              onClick={() => dispatch(setIsHelpModal(true))}
            />
            <div className=" relative flex w-full flex-wrap items-stretch rounded-lg transition-all">
              <input
                type="text"
                className="  relative -ml-px block w-1/12 min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pl-8 pr-3 text-sm leading-5 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Type here..."
              />
            </div>
          </div>
          <ul className="md-max:w-full mx-2 mb-0  flex list-none flex-row justify-end pl-0">
            <li className="flex items-center gap-1">
              <AiOutlineUser size={25} />
            </li>
            <li className="flex items-center px-1">
              <AiOutlineMenu
                size={25}
                onClick={() => dispatch(setIsOpen(!openSidebar))}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
