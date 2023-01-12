import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { setIsHelpModal } from '@/app/redux/store/slice/modalSlice';
import type { RootState } from '@/app/redux/store/store';
import {
  helpCreateCell,
  helpFeatures,
  helpForm,
  helpJobFlow,
  helpSatisticsbottom,
  helpSatisticsTop,
  helpValidFields,
} from '@/app/server/helpCenter/helpContent';
import help from '@/public/assets/json/help.json';

import ContentCard from '../Cards/ContentCard';
import NoteCard from '../Cards/NoteCard';

const HelpModal = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <section className="fixed top-0 z-[999] mx-auto h-screen w-screen bg-black/60 transition-all duration-200 ease-in-out ">
      <div className="flex h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className=" h-[40rem] overflow-y-scroll rounded-l-[40px] bg-white p-3 dark:bg-light-gray lg:w-[76rem] lg:p-3"
        >
          <div>
            <AiFillCloseCircle
              onClick={() => {
                dispatch(setIsHelpModal(false));
              }}
              className={
                'z-30 cursor-pointer text-[40px] text-red-600 opacity-100 transition-all duration-300 ease-linear hover:scale-105'
              }
            />
          </div>
          <div className="my-10 flex flex-row items-center justify-center gap-3 ">
            <Lottie
              loop
              animationData={help}
              className={'w-[8rem] lg:w-[40rem]'}
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-[27rem] px-4 text-end"
            >
              <p className=" dark:text-white lg:text-5xl">مرحبا بك فى نظام</p>
              <p className=" font-semibold text-red-500 dark:text-red-600 lg:text-6xl">
                الفيت جروب
              </p>
            </motion.div>
          </div>
          <div className="mt-[6rem] text-center">
            <p className=" my-10 dark:text-white lg:text-2xl">
              Features & functionality of system
            </p>
          </div>
          <div className="my-7 flex gap-10 px-10">
            <ContentCard title="Features" content={helpFeatures} />
            <ContentCard title="Functionality" content={helpJobFlow} />
          </div>
          <div className=" text-center">
            <p className=" my-11 dark:text-white lg:text-2xl">
              Important Notes for better experince of using system
            </p>
          </div>
          <p className="pl-10 text-xl text-red-600">1- Dashboard</p>
          <NoteCard
            content={helpSatisticsTop}
            darkImg="/assets/images/statisticDark.png"
            lightImg="/assets/images/statisticLight.png"
            style="flex-row"
          />
          <NoteCard
            content={helpSatisticsbottom}
            darkImg="/assets/images/cardDark.png"
            lightImg="/assets/images/cardLight.png"
            style="flex-row-reverse"
            specialNote="Note: After any change in your table kindly Refresh page to effect your statictics numbers"
          />
          <p className="pl-10 text-xl text-red-600">2- Form</p>
          <NoteCard
            content={helpForm}
            darkImg="/assets/images/formDark.png"
            lightImg="/assets/images/formLight.png"
            style="flex-row"
          />
          <NoteCard
            content={helpValidFields}
            darkImg="/assets/images/validDark.png"
            lightImg="/assets/images/vaildLight.png"
            style="flex-row-reverse"
            specialNote="Note: you must fill these three Fields cause the statistics widget works depends on there values so if no values kindly set 0 [zero] as number"
          />
          <p className="pl-10 text-xl text-red-600">3- Disabled Create</p>
          <div className={`flex w-full  items-center gap-5 p-10`}>
            <img
              src={
                theme === 'dark'
                  ? '/assets/images/wrongLight.png'
                  : '/assets/images/wrongDark.png'
              }
              alt="img"
              className=" w-[50%] rounded-xl shadow-lg shadow-gray-300 dark:shadow-md dark:shadow-black"
            />
            <img
              src={
                theme === 'dark'
                  ? '/assets/images/rightLight.png'
                  : '/assets/images/rightDark.png'
              }
              alt="img"
              className=" w-[50%] rounded-xl shadow-lg shadow-gray-300 dark:shadow-md dark:shadow-black"
            />
          </div>
          <div
            className={`flex w-full items-center justify-center gap-5 px-10 py-2`}
          >
            <AiFillCloseCircle
              className={
                'z-30 w-[50%]  cursor-pointer  text-[40px] text-red-600 opacity-100 transition-all duration-300 ease-linear hover:scale-105'
              }
            />
            <BsFillCheckCircleFill
              className={
                'z-30 w-[50%]  cursor-pointer  text-[36px] text-green-600 opacity-100 transition-all duration-300 ease-linear hover:scale-105'
              }
            />
          </div>
          <p className="pl-10 text-xl text-red-600">
            3- Create cell in the table
          </p>
          <NoteCard
            content={helpCreateCell}
            darkImg="/assets/images/create.gif"
            lightImg="/assets/images/create.gif"
            style="flex-row"
            specialNote="Note: you must fill these three Fields cause the statistics widget works depends on there values so if no values kindly set 0 [zero] as number"
          />
          <div className="my-4 flex flex-row-reverse justify-center gap-5">
            <button className="cursor-pointer rounded-lg border-2 border-red-600 px-3 py-2 text-red-400 transition-all duration-200 ease-linear hover:bg-red-600 hover:text-red-200">
              نعم متاكد
            </button>
            <button
              onClick={() => dispatch(setIsHelpModal(false))}
              className="cursor-pointer rounded-lg border-2 border-green-600 px-3 py-2 text-green-400 transition-all duration-200 ease-linear hover:bg-green-600 hover:text-green-200"
            >
              لا
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpModal;
