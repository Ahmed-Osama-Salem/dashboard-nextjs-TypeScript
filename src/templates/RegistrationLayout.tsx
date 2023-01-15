import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useState } from 'react';

const RegistrationLayout = ({
  authComponent,
}: {
  authComponent: ReactNode;
}) => {
  const router = useRouter();
  const [pathUrl, setPathUrl] = useState(router.pathname);

  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden ">
      <div className="flex h-screen flex-col items-center justify-center gap-7 lg:flex-row-reverse lg:justify-start lg:gap-0 ">
        <div className="z-[999] flex flex-col items-center justify-center lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          >
            <h3 className="font-poppins text-3xl font-semibold text-red-500 drop-shadow-2xl lg:text-[6rem]">
              EL-FiT Group
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-center font-poppins text-[1rem] font-medium lg:text-[2rem] lg:text-white">
              General Contracting and Engineering Training
            </p>
          </motion.div>
        </div>
        <div className="z-[999] flex  max-h-[90%] w-[80%] flex-col rounded-b-3xl border-t-2 border-red-500 bg-white  px-10 shadow-lg shadow-red-500/75 lg:h-screen lg:max-h-screen lg:w-[40%] lg:justify-start lg:rounded-b-none lg:bg-white">
          <div className="flex justify-center gap-20 pt-2">
            <Link href={'/'}>
              <p
                onClick={() => {
                  setPathUrl('/');
                }}
                className={
                  pathUrl === '/'
                    ? 'cursor-pointer text-red-600 lg:text-2xl'
                    : 'cursor-pointer lg:text-2xl '
                }
              >
                Sign up
              </p>
            </Link>
            <Link href={'/login'}>
              <p
                onClick={() => {
                  setPathUrl('/login');
                }}
                className={
                  pathUrl === '/login'
                    ? 'cursor-pointer text-red-600 lg:text-2xl'
                    : 'cursor-pointer lg:text-2xl '
                }
              >
                Sign in
              </p>
            </Link>
          </div>
          <div className="flex w-full items-center justify-center gap-[16rem] ">
            {authComponent}
          </div>
        </div>
      </div>

      <div className="absolute top-0 z-10 h-screen w-screen bg-white md:bg-black/60"></div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0  min-h-full min-w-full max-w-none  backdrop-brightness-100 "
      >
        <source src="/assets/vedio/authbackground.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default RegistrationLayout;
