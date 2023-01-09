/* eslint-disable @typescript-eslint/dot-notation */
import { setCookie } from 'cookies-next';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import ApiClientLocal from '@/app/utils/ApiClientLocal';

import DynamicButton from '../toggleBtn/DynamicButton';
import TextFeild from './TextField';

const Login = () => {
  const router = useRouter();
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
        if (data.data.code === 200) {
          router.push('/elfitgroupdashboard');
          localStorage.setItem('user', JSON.stringify(data.data.user));
          const { user } = data.data;
          setCookie('user', user.name);
        }
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
              <section className="w-full" data-testid="form-signin">
                <div className=" flex items-center justify-center border-b-[1px] border-[#E2E2E2] px-[29px] lg:h-[50px] lg:items-end lg:justify-between xl:h-[90px]">
                  <h1
                    className={
                      ' relative cursor-pointer text-2xl font-semibold text-red-600 transition-all duration-200 after:bottom-[-1px]'
                    }
                  >
                    Sign in with email
                  </h1>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center pt-[22px] ">
                  <div className="mt-7">
                    <TextFeild
                      width={'w-[24rem]'}
                      label="Email"
                      name="email"
                      placeholder="email"
                      type={'email'}
                      showError={!!(touched.email && errors.email)}
                      icon={<HiOutlineMail size={25} />}
                    />
                  </div>
                  <div className="mt-7">
                    <TextFeild
                      width={'w-[24rem]'}
                      label="Password"
                      name="password"
                      placeholder="password"
                      type={'password'}
                      showError={!!(touched.password && errors.password)}
                      icon={<BiLockAlt size={25} />}
                    />
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
