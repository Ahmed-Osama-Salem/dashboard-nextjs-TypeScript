import { motion } from 'framer-motion';
import { BsFacebook, BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';

const ProfileCard = ({ user }: { user: IUserData }) => {
  const { image, name, email, job, role, phone } = user;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className=" w-[40%]"
    >
      {/* <div className=" w-[40%]"> */}
      <div className="mx-4 max-w-screen-md rounded-b-2xl border-t-2 border-red-500 bg-white px-10 py-6 shadow-lg shadow-red-500/20 dark:bg-light-gray md:mx-auto">
        <div className="m-auto flex w-full flex-col items-start sm:flex-row">
          <div className="mx-auto flex sm:m-0 sm:mr-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="m-auto mr-4 h-[12rem] w-[12rem] items-center justify-center rounded-full shadow-xl">
                <img
                  alt="profil"
                  src={image}
                  className="mx-auto h-[12rem] w-[12rem] rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="m-auto flex flex-col pt-4 sm:mx-0 sm:pt-0">
            <div className="mx-auto flex flex-col sm:mx-0 sm:flex-row ">
              <h2 className="flex pr-4 text-xl font-light text-gray-900 sm:text-3xl"></h2>
              <div className="flex">
                <a className="flex items-center rounded border border-gray-600 bg-transparent px-1 text-sm font-medium text-gray-900 outline-none transition-all duration-200 ease-linear hover:border-red-700 hover:bg-red-600 hover:text-white focus:outline-none dark:text-white sm:ml-2">
                  Edit profile
                </a>
                <a
                  className="ml-2 cursor-pointer rounded-full border-transparent p-1 text-gray-700 hover:text-red-600 focus:text-gray-600 focus:outline-none"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-4 w-4 sm:h-8 sm:w-8"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between space-x-2">
              <div className="flex">
                <span className="mr-1 font-semibold">55 </span> Post
              </div>
              <div className="flex">
                <span className="mr-1 font-semibold">10k </span> Follower
              </div>
              <div className="flex">
                <span className="mr-1 font-semibold">20</span> Following
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="w-full pt-5">
            <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white">
              {name}
            </h1>
            <p className="text-xl text-gray-500">{job}</p>
            {role === 'Admin' ? (
              <div className="h-6 w-20 rounded-lg bg-[#FDC800] text-center text-white shadow-lg shadow-[#afa113]/30">
                Admin
              </div>
            ) : (
              <div className="h-6 w-20 rounded-lg bg-blue-400 text-center text-white shadow-lg shadow-blue-600/60">
                Editor
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="mt-6">
            <p className="text-xl font-semibold text-red-700">About </p>
            <p className="text-sm capitalize text-gray-800 dark:text-gray-500 md:text-base">
              {role === 'Admin'
                ? ' I am Eng/ Mohamed Osama EL-FiT CEO & founder of EL-FiT Group company, we are providing engineering courses for training students and also providing concrete works items for genral contracting services'
                : `I am ${name} work as ${job}`}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="mt-6">
            <p className="text-xl font-semibold text-red-700">Details </p>
            <div className="flex items-center gap-3">
              <HiOutlineMail />
              <p className="text-sm text-gray-800 dark:text-gray-500 md:text-base">
                {email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineDevicePhoneMobile />
              <p className="text-sm text-gray-800 dark:text-gray-500 md:text-base">
                {phone}
              </p>
            </div>
          </div>
        </motion.div>
        <div className="mt-6 flex items-center gap-6">
          <p className="text-xl font-semibold text-red-700">Status </p>
          <div className="h-6 w-20 rounded-lg bg-green-400 text-center text-white shadow-lg shadow-green-600/60">
            Active
          </div>
        </div>
        {role !== 'Admin' ? (
          <div className="mt-6 ">
            <p className="text-xl font-semibold capitalize text-red-700">
              accessibility control
            </p>
            <div className="text-sm text-gray-800 dark:text-gray-500 md:text-base">
              Editor accessibility , you can create cells only and track admin
              changes.
            </div>
          </div>
        ) : null}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="mt-6 flex justify-center gap-8">
            <BsFacebook
              size={40}
              className="translate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
            />
            <BsGithub
              size={40}
              className="translate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
            />
            <BsLinkedin
              size={40}
              className="translate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
            />
            <BsGoogle
              size={40}
              className="translate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
            />
          </div>
        </motion.div>
      </div>
      {/* </div> */}
    </motion.div>
  );
};

export default ProfileCard;
