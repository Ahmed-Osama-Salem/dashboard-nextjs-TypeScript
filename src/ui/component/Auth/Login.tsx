/* eslint-disable @typescript-eslint/dot-notation */
import { Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';
import { BiLockAlt } from 'react-icons/bi';

import ApiClientLocal from '@/app/utils/ApiClientLocal';

import DynamicButton from '../toggleBtn/DynamicButton';
import TextFeild from './TextField';

const Login = () => {
  // const router = useRouter();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleLoginSubmit = async (values: any) => {
    return ApiClientLocal.post('/api/login', {
      email: values.email,
      password: values.password,
    })
      .then((data) => {
        // if (data.data.data !== '') {
        //   router.push('/elfitgroupdashboard');
        // }
        console.log(data, 'local');

        return data.data;
      })
      .catch((err) => {
        console.log(err, 'err local');

        return err;
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <Formik
        // validationSchema={LoginFromSchema}
        initialValues={initialValues}
        onSubmit={handleLoginSubmit}
      >
        {({ errors, touched, isValid, isSubmitting }) => {
          return (
            <Form>
              <section data-testid="form-signin">
                <div className=" flex items-center justify-center border-b-[1px] border-[#E2E2E2] px-[29px] lg:h-[50px] lg:items-end lg:justify-between xl:h-[90px]">
                  <h1
                    className={
                      ' relative cursor-pointer text-[20px] font-semibold text-[#00157F] transition-all duration-200 after:bottom-[-1px]'
                    }
                  >
                    Sign in with phone
                  </h1>
                </div>
                <div className=" flex h-full w-full flex-col pt-[22px] lg:h-[443px] lg:w-[423px]">
                  <div className="pl-7"></div>
                  <div className="mx-auto">
                    <div className="relative ml-[55px] mb-[15px] w-[423px] lg:mb-[5px] lg:ml-7 ">
                      <TextFeild
                        width={'w-[363.24px]'}
                        label="Email"
                        name="email"
                        placeholder="email"
                        type={'email'}
                        showError={!!(touched.email && errors.email)}
                        icon={<BiLockAlt size={25} />}
                      />
                    </div>
                  </div>
                  <div className="relative mx-auto mb-[15px]">
                    <TextFeild
                      width={'w-[363.24px]'}
                      label="Password"
                      name="password"
                      placeholder="password"
                      type={'password'}
                      showError={!!(touched.password && errors.password)}
                      icon={<BiLockAlt size={25} />}
                    />
                  </div>
                  <div className=" flex items-center justify-center gap-4 pb-[10px] lg:justify-start lg:pl-[35px] ">
                    <Field
                      type={'checkbox'}
                      name={'checkbox'}
                      className="scale-[1.15]"
                    />
                    <span className="text-[#CCCCCC] lg:text-[14px]">
                      Save Password
                    </span>
                  </div>

                  <motion.div whileTap={{ scale: 0.9 }} className="mx-auto">
                    <DynamicButton
                      label={'Sign in'}
                      type="submit"
                      // loader={!!isLoading}
                      width="w-[200px]"
                      isDisabled={!isValid || isSubmitting}
                    />
                  </motion.div>

                  <div className="pl-[30px]">
                    <p className="text-[#CCCCCC] lg:text-[14px]">
                      Do you have any problem with Sign in?
                      {/* <Link href={'/forgetpassword'}> */}
                      <span className="ml-1 cursor-pointer text-[#034290]">
                        tell us
                      </span>
                      {/* </Link> */}
                    </p>
                    <p className="mt-[10px] text-[#CCCCCC] lg:text-[14px]">
                      Login with
                    </p>
                  </div>

                  <div className="px-[30px]">
                    <p className=" text-center text-[#CCCCCC] lg:text-[12px] xl:mt-[10px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptas adipisci quas et enim magnam excepturi
                    </p>
                  </div>
                </div>
              </section>
            </Form>
          );
        }}
      </Formik>
    </motion.div>
  );
};

export default Login;
