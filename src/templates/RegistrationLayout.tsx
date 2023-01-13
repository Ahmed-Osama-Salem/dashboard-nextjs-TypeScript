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
    <section className="relative mx-auto  h-screen w-full overflow-hidden ">
      <div className="flex h-screen flex-row items-center justify-center lg:justify-start ">
        <div className="z-[999] flex w-[80%] flex-col rounded-b-3xl border-t-2 border-red-500 bg-white/60  px-10 shadow-md shadow-black lg:h-screen lg:w-[40%] lg:justify-start lg:rounded-b-none lg:bg-white">
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
      <div className="absolute top-0 z-10 h-screen w-screen bg-black/60"></div>

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
