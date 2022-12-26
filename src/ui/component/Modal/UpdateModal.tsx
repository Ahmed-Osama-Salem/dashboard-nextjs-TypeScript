import { Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { setIsUpdateModal } from '@/app/redux/store/slice/modalSlice';
import type { RootState } from '@/app/redux/store/store';
import { fieldsData } from '@/app/server/fieldsData/fieldsData';

const UpdateModal = () => {
  const { cellData } = useSelector((state: RootState) => state.tableData);
  console.log(cellData);

  const dispatch = useDispatch();
  const initialValues: any = {
    allText: {
      dateNow: cellData.allText.dateNow,
      time: cellData.time,
      rkmElw7da: cellData.allText.rkmElw7da,
      elbnd: cellData.allText.elbnd,
      topics: cellData.allText.topics,
      contractType: cellData.allText.contractType,
      techNumber: cellData.allText.techNumber,
      mosadNumber: cellData.allText.mosadNumber,
      from: cellData.allText.from,
      to: cellData.allText.to,
      noteAdd: '',
      kmiatMon: '',
      tnfizState: '',
      angaz: '',
      notes: '',
      twqi3: '',
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
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
                  dispatch(setIsUpdateModal(false));
                }}
                className={
                  'z-30 cursor-pointer text-[40px] text-red-600 opacity-100 transition-all duration-300 ease-linear hover:scale-105'
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Form className="px-10">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className=" grid w-[100%] grid-cols-2 gap-8 rounded-[30px] bg-white  p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray"
                >
                  {fieldsData.map((field, i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        key={i}
                      >
                        <label
                          htmlFor={field.name}
                          className="flex justify-end text-xl dark:text-white"
                        >
                          {field.label}
                        </label>
                        <Field
                          className="my-2 h-[40px] w-[100%] rounded-lg  bg-[#ece5e5] px-2 text-right outline-[0.6px] outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-[0.6px] dark:outline-white"
                          name={`allText.${field.name}`}
                          type={field.type}
                          placeholder={field.label}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </Form>
            </div>
            <div className="my-4 flex flex-row-reverse justify-center gap-5">
              <button className="cursor-pointer rounded-lg border-2 border-red-600 px-3 py-2 text-red-400 transition-all duration-200 ease-linear hover:bg-red-600 hover:text-red-200">
                متاكد
              </button>
              <button
                onClick={() => dispatch(setIsUpdateModal(false))}
                className="cursor-pointer rounded-lg border-2 border-green-600 px-3 py-2 text-green-400 transition-all duration-200 ease-linear hover:bg-green-600 hover:text-green-200"
              >
                لا
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Formik>
  );
};

export default UpdateModal;
