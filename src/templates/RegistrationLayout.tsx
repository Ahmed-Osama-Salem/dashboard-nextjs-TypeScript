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
      <div className="flex h-screen flex-row items-center justify-center lg:justify-start ">
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
      <div className="relative z-20 block w-[7.9rem] translate-y-[-830px] translate-x-[100%] xl:hidden xl:w-[17rem]">
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
