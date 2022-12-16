import { Field, Form, Formik } from 'formik';
import React from 'react';

import type { ITableApiData } from '@/app/interface/tableApiData';
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
import Button from '../toggleBtn/Button';

const UsersTabel = () => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();

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

    return ApiClientLocal.post('/api/insert', singleData)
      .then((data) => {
        console.log(data.data);

        return data.data;
      })
      .catch((err) => {
        console.log(err);

        return err;
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={(values) => {
      //   console.log(values);
      // }}
      onSubmit={handelInsertData}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form>
            <section className="mt-16 flex w-full flex-row-reverse  gap-10 dark:bg-dark-gray">
              <div className=" grid w-[50%] grid-cols-2 gap-8 rounded-[30px] bg-white  p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray">
                {fieldsData.map((field, i) => {
                  return (
                    <div key={i}>
                      <label
                        htmlFor={field.name}
                        className="flex justify-end text-xl dark:text-white"
                      >
                        {field.label}
                      </label>
                      <Field
                        className="my-2 h-[40px] w-[100%] rounded-lg  bg-[#ece5e5] px-2 text-right outline-[0.6px] outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-[0.6px] dark:outline-white"
                        name={`allText.${field.name}`}
                        type="text"
                        placeholder={field.label}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex w-[50%] flex-col gap-10">
                <div className=" grid h-[200px] w-[100%] grid-cols-2 gap-6  rounded-[30px] bg-white p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray">
                  <SelectField
                    name={'allText.topics'}
                    data={selectTopicsFields}
                    label={'نـوع المصنـعيـات'}
                    // showErrors={!!(errors.topics && touched.topics)}
                    width={'w-[400px]'}
                    required={false}
                    setFieldValue={setFieldValue}
                  />
                  <SelectField
                    name={'allText.contractType'}
                    data={selectContractTypeFields}
                    label={'نـوع المقـاولة'}
                    // showErrors={!!(errors.contractType && touched.contractType)}
                    width={'w-[400px]'}
                    required={false}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div className="relative grid h-full w-[100%] grid-cols-2 gap-6  rounded-[30px] bg-white p-[30px]  shadow-lg shadow-red-600/20 dark:bg-light-gray">
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div className="absolute top-[150px] right-[50px]">
                    <Preloader />
                  </div>
                </div>
              </div>
            </section>
            <div className=" mt-[40px] grid h-full w-[100%] grid-cols-2  gap-10 rounded-[30px] bg-white p-[30px] shadow-lg shadow-red-600/20 dark:bg-light-gray">
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
                firstLable="اسـم المساعد"
                secondLable="الاعمــال"
              />
            </div>
            <div className="mx-auto mt-3 flex h-16 w-64  items-center justify-center duration-700">
              <Button label={'اضافة خلية'} type="submit" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UsersTabel;
