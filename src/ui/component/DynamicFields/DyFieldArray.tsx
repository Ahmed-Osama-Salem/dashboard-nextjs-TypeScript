import { Field, FieldArray } from 'formik';
import { motion } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';

import Button from '../toggleBtn/Button';

const DyFieldArray = ({ name, values, obj, firstLable, secondLable }: any) => {
  return (
    <div className="">
      <FieldArray name={name}>
        {({ remove, push }) => (
          <div>
            {values.length > 0 &&
              values.map((_item: {}, index: number) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    key={index}
                  >
                    <div
                      className="flex flex-row-reverse items-center justify-center gap-5"
                      key={index}
                    >
                      <div className="">
                        <label
                          htmlFor={`${name}.${index}.${Object.keys(_item)[0]}`}
                          className="flex justify-end text-xl dark:text-white"
                        >
                          {firstLable}
                        </label>
                        <Field
                          name={`${name}.${index}.${Object.keys(_item)[0]}`}
                          placeholder={firstLable}
                          type="text"
                          className="my-2 h-[40px] w-[100%] rounded-lg border-none bg-[#ece5e5] px-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white"
                        />
                      </div>
                      <div className="w-[80%]">
                        <label
                          htmlFor={`${name}.${index}.${Object.keys(_item)[1]}`}
                          className="flex justify-end text-xl dark:text-white"
                        >
                          {secondLable}
                        </label>
                        <Field
                          name={`${name}.${index}.${Object.keys(_item)[1]}`}
                          placeholder={secondLable}
                          type="text"
                          className="my-2 h-[40px] w-[100%] rounded-lg border-none bg-[#ece5e5] px-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white"
                        />
                      </div>
                      <div className="">
                        <button type="button">
                          <AiFillCloseCircle
                            onClick={() => remove(index)}
                            className={
                              'z-30 text-[30px] text-red-600 opacity-100 transition-all duration-300 ease-linear hover:scale-105'
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

            <div
              className="mx-auto mt-3 flex h-16 w-64  items-center justify-center duration-700"
              onClick={() => push(obj)}
            >
              <Button label={`اضافة ${firstLable}`} type="button" />
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default DyFieldArray;
