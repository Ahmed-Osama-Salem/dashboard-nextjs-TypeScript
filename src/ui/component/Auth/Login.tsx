/* eslint-disable @typescript-eslint/dot-notation */
import { setCookie } from 'cookies-next';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiLockOpenAlt } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';
import { errorNotify, successNotify } from '@/app/server/notify/setNotify';
import ApiClientLocal from '@/app/utils/ApiClientLocal';

import ErrorNotify from '../notify/ErrorNotify';
import SuccessNotify from '../notify/SuccessNotify';
import DynamicButton from '../toggleBtn/DynamicButton';
import TextFeild from './TextField';

const Login = () => {
  const router = useRouter();
  const initialValues = {
    email: '',
    password: '',
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (values: any) => {
    setIsLoading(true);
    return ApiClientLocal.post('/api/login', {
      email: values.email,
      password: values.password,
    })
      .then((data) => {
        if (data.data.code === 200) {
          setTimeout(() => {
            router.push('/elfitgroupdashboard');
          }, 3000);
          localStorage.setItem('user', JSON.stringify(data.data.user));
          const { user }: { user: IUserData } = data.data;
          const cookieData = {
            email: user.email,
            name: user.name,
            phone: user.phone,
            job: user.phone,
            role: user.role,
          };
          setCookie('user', cookieData);
          successNotify(data.data.message);
        }
        if (data.data.status === 500) {
          errorNotify('Server Time out , please press on sign in again');
        }
        setIsLoading(false);

        return data.data;
      })
      .catch((err) => {
        if (err.response.status === 422) {
          errorNotify(err.response.data);
        }
        if (err.response.status === 400) {
          errorNotify(err.response.data);
        }
        if (err.response.status === 404) {
          errorNotify(err.response.data);
        }
        setIsLoading(false);

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
              <ErrorNotify />
              <SuccessNotify />
              <section className="w-full" data-testid="form-signin">
                <div className=" flex items-center justify-center border-b-[1px] border-[#E2E2E2] px-[29px] lg:h-[50px] lg:items-end lg:justify-between xl:h-[90px]">
                  <h1
                    className={
                      ' relative cursor-pointer text-lg font-semibold text-red-600 transition-all duration-200 after:bottom-[-1px] md:text-2xl'
                    }
                  >
                    Sign in with email
                  </h1>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center pt-[22px] ">
                  <div className="md:mt-7">
                    <TextFeild
                      width={'w-[100%] md:w-[25rem]'}
                      label="Email"
                      name="email"
                      placeholder="email"
                      type={'email'}
                      showError={!!(touched.email && errors.email)}
                      icon={
                        <HiOutlineMail
                          size={25}
                          className={`${
                            touched.email && errors.email
                              ? 'input-icons-error'
                              : 'input-icons-success'
                          } input-icons`}
                        />
                      }
                    />
                  </div>
                  <div className="md:mt-7">
                    <TextFeild
                      width={'w-[100%] md:w-[25rem]'}
                      label="Password"
                      name="password"
                      placeholder="password"
                      type={'password'}
                      showError={!!(touched.password && errors.password)}
                      icon={
                        <BiLockOpenAlt
                          size={25}
                          className={`${
                            touched.password && errors.password
                              ? 'input-icons-error'
                              : 'input-icons-success'
                          } input-icons`}
                        />
                      }
                    />
                  </div>

                  <motion.div whileTap={{ scale: 0.9 }} className="mx-auto">
                    <DynamicButton
                      label={'Sign in'}
                      type="submit"
                      loader={!!isLoading}
                      width="w-[200px]"
                      isDisabled={!isValid || isSubmitting}
                    />
                  </motion.div>

                  <div className="mt-2 pl-[30px]">
                    <p className="text-[#CCCCCC] lg:text-[20px]">
                      Do you have any problem with Sign in?
                      {/* <Link href={'/forgetpassword'}> */}
                      <span className="ml-1 cursor-pointer text-red-700">
                        tell us
                      </span>
                      {/* </Link> */}
                    </p>
                  </div>

                  <div className=" flex w-full justify-center px-[30px] pt-10">
                    <div className="relative hidden xl:block xl:w-[12rem]">
                      <img
                        src="https://raw.githubusercontent.com/Ahmed-Osama-Salem/EL-FiT-GroupManegment_System/main/public/images/elfitlogoone.png"
                        alt="fit-logo"
                        className="fit-logo-round absolute"
                      />
                      <img
                        src="https://raw.githubusercontent.com/Ahmed-Osama-Salem/EL-FiT-GroupManegment_System/main/public/images/logotwo.png"
                        alt="fit-logo"
                        className="logo-two-pre absolute"
                      />
                    </div>
                  </div>
                  <div className="flex translate-y-[17rem] justify-center gap-8">
                    <BsFacebook
                      size={40}
                      className="transalate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
                    />
                    <BsGithub
                      size={40}
                      className="transalate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
                    />
                    <BsLinkedin
                      size={40}
                      className="transalate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
                    />
                    <BsGoogle
                      size={40}
                      className="transalate-y-0 cursor-pointer text-red-500 transition-all duration-200 ease-linear hover:-translate-y-1 "
                    />
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
