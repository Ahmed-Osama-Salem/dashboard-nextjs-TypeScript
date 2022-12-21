import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { setIsTouched } from '@/app/redux/store/slice/modalSlice';
import { removeCellTable } from '@/app/redux/store/slice/tableDataSlice';
import type { RootState } from '@/app/redux/store/store';
import ApiClientLocal from '@/app/utils/ApiClientLocal';
import warrn from '@/public/assets/json/warrn.json';

const Modal = () => {
  const { cellID } = useSelector((state: RootState) => state.tableData);

  const dispatch = useDispatch();

  const deleteCellDB = async (id: string) => {
    return ApiClientLocal.delete(`/api/delete/${id}`)
      .then((data) => {
        console.log(data);

        return data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const handelRemoveCell = () => {
    dispatch(removeCellTable(cellID));
    dispatch(setIsTouched(false));
    deleteCellDB(cellID);
  };
  return (
    <section className="fixed top-0 z-[999] mx-auto h-screen w-screen bg-black/60 transition-all duration-200 ease-in-out ">
      <div className="flex h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className=" h-[auto] w-[40rem] rounded-2xl bg-white p-3"
        >
          <div>
            <AiFillCloseCircle
              onClick={() => {
                dispatch(setIsTouched(false));
              }}
              className={
                'z-30 cursor-pointer text-[40px] text-red-600 opacity-100 transition-all duration-300 ease-linear hover:scale-105'
              }
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Lottie loop animationData={warrn} className={' w-[14rem]'} />
            <p className=" text-3xl">هل انت متاكد من مسح هذه الخلية؟</p>
          </div>
          <div className="my-4 flex flex-row-reverse justify-center gap-5">
            <button
              onClick={handelRemoveCell}
              className="cursor-pointer rounded-lg border-2 border-red-600 px-3 py-2 text-red-400 transition-all duration-200 ease-linear hover:bg-red-600 hover:text-red-200"
            >
              نعم متاكد
            </button>
            <button
              onClick={() => dispatch(setIsTouched(false))}
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

export default Modal;
