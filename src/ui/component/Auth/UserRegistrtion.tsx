import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';

import ApiClientLocal from '@/app/utils/ApiClientLocal';

// import useUserRegistration from '@/hooks/Auth/useUserRegistration';
import TextFeild from './TextField';

const UserRegistrtion = () => {
  const initialValuesSignUp = {
    name: '',
    email: '',
    phone: '',
    password: '',
    job: '',
  };

  const handleRegsiterSubmit = async (value: any) => {
    return ApiClientLocal.post('/api/register', {
      name: value.name,
      email: value.email,
      phone: value.phone,
      password: value.password,
      job: value.job,
    })
      .then((data) => {
        console.log(data.data, 'local');

        return data.data;
      })
      .catch((err) => {
        console.log(err.response.data, 'err local');

        return err;
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className=" max-h-[50rem]  bg-white"
    >
      <Formik
        // validationSchema={SignUpFormSchema}
        initialValues={initialValuesSignUp}
        onSubmit={handleRegsiterSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <section className="h-[41rem]" data-testid="form-signup">
                <div className=" px-[30px] lg:pt-[5px] xl:pt-[20px]">
                  <h2 className="text-center text-[22px] font-semibold text-red-600 lg:text-start">
                    Create Account
                  </h2>
                </div>
                <div className=" flex  flex-col gap-1 lg:mt-[5px] xl:w-[423px] xl:gap-3 ">
                  <div className="pl-7"></div>
                  <div className=" mx-auto">
                    <TextFeild
                      width={'w-[363.24px]'}
                      label="Name"
                      name="name"
                      placeholder="your name"
                      type="name"
                      showError={!!(touched.name && errors.name)}
                    />

                    <TextFeild
                      width={'w-[363.24px]'}
                      label="Phone"
                      name="phone"
                      placeholder="your Phone"
                      type="text"
                      showError={!!(touched.phone && errors.phone)}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TextFeild
                        width={'w-[363.24px]'}
                        label="Email"
                        name="email"
                        placeholder="email"
                        type="email"
                        showError={!!(touched.email && errors.email)}
                      />
                    </motion.div>

                    <TextFeild
                      width={'w-[363.24px]'}
                      label="Password"
                      name="password"
                      placeholder="password"
                      type="password"
                      showError={!!(touched.password && errors.password)}
                    />

                    <TextFeild
                      width={'w-[363.24px]'}
                      label="job"
                      name="job"
                      placeholder="job"
                      type="text"
                      showError={!!(touched.job && errors.job)}
                    />
                  </div>

                  <div className="mx-auto ">
                    <button type="submit" className="w-24 bg-slate-500">
                      submit
                    </button>
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

export default UserRegistrtion;
