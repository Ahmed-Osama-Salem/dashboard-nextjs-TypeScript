import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  setInitialDateValue,
  SetSelectedDate,
} from '@/app/redux/store/slice/filterSlice';
import { useDispatch } from '@/app/redux/store/store';

const TableFilters = () => {
  const [showFilters, setShowFilters] = useState(false);
  // const { initialDateValue, selectedDateValue } = useSelector(
  //   (state) => state.filter
  // );

  const dispatch = useDispatch();

  return (
    <section className="mb-2 px-10">
      <div className="my-6 text-end">
        <button
          onClick={() => {
            setShowFilters((prev) => !prev);
            dispatch(setInitialDateValue(''));
            dispatch(SetSelectedDate(''));
          }}
          className="rounded-xl bg-green-600 bg-gradient-to-br  from-red-400 to-red-600 p-2  text-white"
        >
          استخراج فلاتر الجدول
        </button>
      </div>
      <div
        className={
          showFilters
            ? 'flex h-[10rem] flex-row-reverse items-center justify-center gap-[10rem]  rounded-3xl px-10 text-end shadow-lg shadow-red-600/20 transition-all duration-300 ease-linear dark:bg-light-gray'
            : 'flex h-[0rem] flex-row-reverse items-center justify-center gap-[10rem]  rounded-3xl px-10 text-end shadow-lg shadow-red-600/20 transition-all duration-300 ease-linear dark:bg-light-gray'
        }
      >
        {showFilters ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
              className={' w-full'}
            >
              <label htmlFor="initialData" className="dark:text-white">
                {' '}
                من التاريخ{' '}
              </label>
              <input
                name="initialData"
                onChange={(e) => dispatch(setInitialDateValue(e.target.value))}
                type="date"
                // value={initialDateValue}
                className="my-2 h-[40px] w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:text-white dark:outline-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
              className={' w-full'}
            >
              <label htmlFor="selectedData" className="dark:text-white">
                الى التاريخ
              </label>
              <input
                name="selectedData"
                type="date"
                onChange={(e) => dispatch(SetSelectedDate(e.target.value))}
                // value={selectedDateValue}
                className="my-2 h-[40px] w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:text-white dark:outline-white"
              />
            </motion.div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default TableFilters;
