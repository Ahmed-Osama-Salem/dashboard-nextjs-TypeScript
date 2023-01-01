import { Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import type { ITableApiData } from '@/app/interface/tableApiData';
import { pushTableData } from '@/app/redux/store/slice/tableDataSlice';
import { useDispatch } from '@/app/redux/store/store';
import {
  fieldsData,
  MosadObject,
  selectContractTypeFields,
  selectTopicsFields,
  TechObject,
} from '@/app/server/fieldsData/fieldsData';
import ApiClientLocal from '@/app/utils/ApiClientLocal';

import DyFieldArray from '../DynamicFields/DyFieldArray';
import SelectField from '../DynamicFields/SelectField';
import Preloader from '../preloader/PreLoader';
import DynamicButton from '../toggleBtn/DynamicButton';

const UsersTabel = () => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();
  const [isLoading, setIsLoading] = useState(false);
  // const { table, cellData } = useSelector(
  //   (state: RootState) => state.tableData
  // );
  const dispatch = useDispatch();

  const initialValues: ITableApiData = {
    allText: {
      dateNow: '',
      time: '',
      rkmElw7da: '',
      elbnd: '',
      topics: '',
      contractType: '',
      techNumber: '',
      mosadNumber: '',
      from: '',
      to: '',
      noteAdd: '',
      kmiatMon: '',
      tnfizState: '',
      angaz: '',
      notes: '',
      twqi3: '',
    },
    text: [
      {
        text1: '',
        text2: '',
      },
    ],
    textMosad: [
      {
        mosadName: '',
        mosadJob: '',
      },
    ],
  };

  const handelInsertData = async (values: ITableApiData) => {
    const singleData = {
      allText: values.allText,
      time,
      text: values.text,
      textMosad: values.textMosad,
    };
    setIsLoading(true);

    return ApiClientLocal.post('/api/insert', singleData)
      .then((data) => {
        dispatch(pushTableData(singleData));
        setIsLoading(false);
        return data.data;
      })
      .catch((err) => {
        console.log(err);

        return err;
      });
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handelInsertData}>
        {({ setFieldValue, values }) => {
          return (
            <Form className="px-10 print:hidden">
              <section className="mt-12 flex w-full flex-col gap-10 dark:bg-dark-gray md:flex-col xl:flex-row-reverse">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                  className=" grid w-full gap-8 rounded-[30px] bg-white p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray  md:w-full md:grid-cols-1 xl:w-[50%] xl:grid-cols-2"
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
                          className="my-2 h-[40px] w-[100%] rounded-lg  bg-[#ece5e5] px-2 text-right outline-[0.6px] outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:text-white dark:outline-[0.6px] dark:outline-white"
                          name={`allText.${field.name}`}
                          type={field.type}
                          placeholder={field.label}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>

                <div className="flex w-full flex-col gap-10 md:w-full xl:w-[50%]">
                  <div className=" z-10 h-[200px] w-[100%] gap-6 rounded-[30px] bg-white  p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray xl:grid xl:grid-cols-2">
                    <SelectField
                      name={'allText.topics'}
                      data={selectTopicsFields}
                      label={'نـوع المصنـعيـات'}
                      width={'w-[100px] xl:w-[400px]'}
                      required={false}
                      setFieldValue={setFieldValue}
                    />
                    <SelectField
                      name={'allText.contractType'}
                      data={selectContractTypeFields}
                      label={'نـوع المقـــاولة'}
                      width={'w-[100px] xl:w-[400px]'}
                      required={false}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="relative z-0 grid h-full w-[100%] grid-cols-2 gap-6  rounded-[30px] bg-white p-[30px]  shadow-lg shadow-red-600/20 dark:bg-light-gray">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <label
                        htmlFor="notes"
                        className="flex justify-end text-xl dark:text-white"
                      >
                        ملاحظات
                      </label>
                      <Field
                        className="my-2 h-[80%] w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white"
                        name="allText.notes"
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
                        htmlFor=""
                        className="flex justify-end text-xl dark:text-white"
                      >
                        التـوقيــعـات
                      </label>
                      <Field
                        className="my-2 h-[40px] w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white"
                        name="allText.twqi3"
                        type="text"
                        placeholder=""
                      />
                    </motion.div>

                    <div className="absolute top-[150px] right-[50px]">
                      <Preloader />
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-[40px] grid h-full w-[100%] grid-cols-2 gap-10  rounded-[30px] bg-white p-[30px] px-10 shadow-lg shadow-red-600/20 dark:bg-light-gray">
                <DyFieldArray
                  name={'text'}
                  values={values.text}
                  obj={TechObject}
                  firstLable="اسـم الفـنـى"
                  secondLable="الاعمــال"
                />
                <DyFieldArray
                  name={'textMosad'}
                  values={values.textMosad}
                  obj={MosadObject}
                  firstLable=" المساعد"
                  secondLable="الاعمــال"
                />
              </div>

              <div className="flex justify-center">
                <DynamicButton
                  label={'اضافة خلية'}
                  type="submit"
                  loader={!!isLoading}
                  width="w-[160px]"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default UsersTabel;
