import { Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { setIsUpdateModal } from '@/app/redux/store/slice/modalSlice';
import type { RootState } from '@/app/redux/store/store';
import {
  fieldsUpdate,
  selectContractTypeFields,
  selectTopicsFields,
} from '@/app/server/fieldsData/fieldsData';
import { successNotify } from '@/app/server/notify/setNotify';
import ApiClientLocal from '@/app/utils/ApiClientLocal';
import getChangedValues from '@/app/utils/Update';

import SelectField from '../DynamicFields/SelectField';
import SuccessNotify from '../notify/SuccessNotify';

const UpdateModal = () => {
  const { cellData } = useSelector((state: RootState) => state.tableData);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id } = cellData;
  const router = useRouter();

  const dispatch = useDispatch();
  const initialValues: any = {
    allText: {
      dateNowUpdate: cellData.allText.dateNow,
      timeUpdate: cellData.time,
      rkmElw7daUpdate: cellData.allText.rkmElw7da,
      elbndUpdate: cellData.allText.elbnd,
      topicsUpdate: cellData.allText.topics,
      contractTypeUpdate: cellData.allText.contractType,
      techNumberUpdate: cellData.allText.techNumber,
      mosadNumberUpdate: cellData.allText.mosadNumber,
      fromUpdate: cellData.allText.from,
      toUpdate: cellData.allText.to,
      noteAddUpdate: cellData.allText.noteAdd,
      kmiatMonUpdate: cellData.allText.kmiatMon,
      tnfizStateUpdate: cellData.allText.tnfizState,
      angazUpdate: cellData.allText.angaz,
      notesUpdate: cellData.allText.notes,
      twqi3Update: cellData.allText.twqi3,
    },
  };

  const handleUpdateCells = async (values: any) => {
    const updateValues = {
      newConstrDate: values.allText.twqi3Update,
      dateNowUpdate: values.allText.dateNowUpdate,
      rkmElw7daUpdate: values.allText.rkmElw7daUpdate,
      elbndUpdate: values.allText.elbndUpdate,
      techNumberUpdate: values.allText.techNumberUpdate,
      mosadNumberUpdate: values.allText.mosadNumberUpdate,
      noteAddUpdate: values.allText.noteAddUpdate,
      kmiatMonUpdate: values.allText.kmiatMonUpdate,
      tnfizStateUpdate: values.allText.tnfizStateUpdate,
      angazUpdate: values.allText.angazUpdate,
      notesUpdate: values.allText.notesUpdate,
      fromUpdate: values.allText.fromUpdate,
      toUpdate: values.allText.toUpdate,
      topicsUpdate: values.allText.topicsUpdate,
      contractTypeUpdate: values.allText.contractTypeUpdate,
    };
    const newCell = getChangedValues(updateValues, initialValues);

    return ApiClientLocal.put(`/api/update/${_id}`, { ...newCell }, {})
      .then((data) => {
        // console.log(data);
        // console.log(newCell);
        if (data) {
          setTimeout(() => {
            router.reload();
          }, 6000);
        }
        successNotify('تم تعديل الخلية بنجاح');
        setTimeout(() => {
          successNotify(' يرجى الانتظار سوف يتم اعادة تشغيل الصفحة ');
        }, 1600);

        return data.data;
      })
      .catch((err) => {
        return err;
      });
  };
  const [showTwo, setShowTwo] = useState('one');
  return (
    <Formik initialValues={initialValues} onSubmit={handleUpdateCells}>
      {({ setFieldValue, values }) => {
        console.log(values);

        return (
          <section className="fixed top-0 z-[999] mx-auto w-screen overflow-x-hidden overflow-y-scroll bg-black/60 transition-all duration-200 ease-in-out sm:overflow-hidden lg:h-screen ">
            <SuccessNotify />
            <div className="flex h-screen items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                className=" h-[auto] rounded-2xl bg-white p-3 dark:bg-dark-gray lg:w-[90rem]"
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
                <div className="mb-2 flex justify-center gap-10 ">
                  <p
                    className={
                      showTwo === 'one'
                        ? 'cursor-pointer font-medium text-red-700 transition-all duration-300 ease-linear hover:text-red-500 dark:text-red-600 dark:hover:text-red-500 lg:text-2xl'
                        : 'cursor-pointer font-medium transition-all duration-300 ease-linear hover:text-red-500 dark:text-white  dark:hover:text-red-200 lg:text-2xl'
                    }
                    onClick={() => {
                      setShowTwo('one');
                    }}
                  >
                    الحقول الاساسية
                  </p>
                  <p
                    className={
                      showTwo === 'two'
                        ? 'cursor-pointer font-medium text-red-700 transition-all duration-300 ease-linear hover:text-red-500  dark:text-red-600 dark:hover:text-red-500  lg:text-2xl'
                        : 'cursor-pointer font-medium transition-all duration-300 ease-linear hover:text-red-500 dark:text-white  dark:hover:text-red-200 lg:text-2xl'
                    }
                    onClick={() => {
                      setShowTwo('two');
                    }}
                  >
                    باقى الحقول
                  </p>
                </div>
                <div className="flex w-[100%] flex-col items-center justify-center gap-2 lg:w-full ">
                  <Form className="px-10">
                    {showTwo === 'one' ? (
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className=" grid w-[100%] grid-cols-2 gap-3 rounded-[30px] bg-white p-[30px] shadow-lg  shadow-red-600/20 dark:bg-light-gray lg:w-[80rem] lg:grid-cols-3 lg:gap-8"
                      >
                        {fieldsUpdate.map((field, i) => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, y: -30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.7 }}
                              key={i}
                            >
                              <label
                                htmlFor={field.name}
                                className="flex justify-end text-sm dark:text-white lg:text-xl"
                              >
                                {field.label}
                              </label>
                              <Field
                                className="my-2 w-[100%] rounded-lg bg-[#ece5e5]  px-2 text-right outline-[0.6px] outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-[0.6px] dark:outline-white lg:h-[40px]"
                                name={`allText.${field.name}`}
                                type={field.type}
                                placeholder={field.label}
                              />
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    ) : null}
                    {showTwo === 'two' ? (
                      <div className="relative z-0 mt-3 grid h-full w-[100%] grid-cols-1 rounded-[30px] bg-white p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray   md:grid-cols-2 lg:h-[20rem] lg:w-[70rem] lg:grid-cols-2 lg:gap-7">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <label
                            htmlFor="allText.notesUpdate"
                            className="flex justify-end text-sm dark:text-white lg:text-xl"
                          >
                            ملاحظات
                          </label>
                          <Field
                            className="w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white lg:my-2 lg:h-[80%]"
                            name="allText.notesUpdate"
                            type="text"
                            as="textarea"
                            placeholder=""
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <label
                            htmlFor="allText.twqi3Update"
                            className="flex justify-end text-sm dark:text-white lg:text-xl"
                          >
                            التـوقيــعـات
                          </label>
                          <Field
                            className="w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white lg:my-2 lg:h-[40px]"
                            name="allText.twqi3Update"
                            type="text"
                            placeholder=""
                          />
                        </motion.div>
                        <SelectField
                          name={'allText.topicsUpdate'}
                          data={selectTopicsFields}
                          label={'نـوع المصنـعيـات'}
                          width={'w-[100%]'}
                          required={false}
                          setFieldValue={setFieldValue}
                        />
                        <SelectField
                          name={'allText.contractTypeUpdate'}
                          data={selectContractTypeFields}
                          label={'نـوع المقـاولة'}
                          width={'w-[100%]'}
                          required={false}
                          setFieldValue={setFieldValue}
                        />
                      </div>
                    ) : null}
                    <div className="my-4 flex flex-row-reverse justify-center gap-5">
                      <button
                        type="submit"
                        className="cursor-pointer rounded-lg border-2 border-red-600 px-3 py-2 text-red-400 transition-all duration-200 ease-linear hover:bg-red-600 hover:text-red-200"
                      >
                        متاكد
                      </button>
                      <button
                        onClick={() => dispatch(setIsUpdateModal(false))}
                        className="cursor-pointer rounded-lg border-2 border-green-600 px-3 py-2 text-green-400 transition-all duration-200 ease-linear hover:bg-green-600 hover:text-green-200"
                      >
                        لا
                      </button>
                    </div>
                  </Form>
                </div>
              </motion.div>
            </div>
          </section>
        );
      }}
    </Formik>
  );
};

export default UpdateModal;
