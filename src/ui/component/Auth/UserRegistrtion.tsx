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
    password: '',
    job: '',
  };

  const handleRegsiterSubmit = async (value: any) => {
    return ApiClientLocal.post('/api/register', {
      name: value.name,
      email: value.email,
      password: value.password,
      job: value.job,
    })
      .then((data) => {
        console.log(data, 'local');

        return data.data;
      })
      .catch((err) => {
        console.log(err);

        return err;
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className=" "
    >
      <Formik
        // validationSchema={SignUpFormSchema}
        initialValues={initialValuesSignUp}
        onSubmit={handleRegsiterSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <section className="" data-testid="form-signup">
                <div className=" px-[30px] lg:pt-[5px] xl:pt-[20px]">
                  <h2 className="text-center text-[22px] font-semibold text-[#524c4c] lg:text-start">
                    Create Account
                  </h2>
                </div>
                <div className=" flex h-[443px] flex-col gap-1 lg:mt-[5px] xl:w-[423px] xl:gap-3 ">
                  <div className="pl-7 "></div>
                  <div className=" mx-auto">
                    <TextFeild
                      width={'w-[363.24px]'}
                      label="Name"
                      name="name"
                      placeholder="your name"
                      type="name"
                      showError={!!(touched.name && errors.name)}
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
                    {/* <Button
                      btnStyle="btn-auth"
                      btnText="Sign up"
                      btnType="submit"
                      btnWidth="w-[363px]"
                      // isDisabled={!isValid || isSubmitting}
                    /> */}
                    <button type="submit">submit</button>
                  </div>

                  <div className="lg:hidden xl:block">
                    {/* <SocialContainer /> */}
                  </div>

                  {/* <div className="pl-[30px]">
                    <p className="text-[14px] text-[#5d5656]">
                      Already,Have an account?
                      <Link href={'/signin'}>
                        <span className="cursor-pointer text-[#034290]">
                          Sign in
                        </span>
                      </Link>
                    </p>
                  </div> */}
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
