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
      <div className="flex h-screen flex-row-reverse items-center justify-start ">
        <div className="z-[999] h-screen w-screen bg-black/50"></div>

        <div className="z-[999] flex h-screen w-[60%] flex-col justify-start  border-t-2 border-red-500 bg-white px-10 shadow-md shadow-black">
          <div className="flex justify-center gap-20 pt-2">
            <Link href={'/'}>
              <p
                onClick={() => {
                  setPathUrl('/');
                }}
                className={
                  pathUrl === '/'
                    ? 'cursor-pointer text-2xl text-red-600'
                    : 'cursor-pointer text-2xl '
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
                    ? 'cursor-pointer text-2xl text-red-600'
                    : 'cursor-pointer text-2xl '
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
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-screen backdrop-brightness-100 "
      >
        <source src="/assets/vedio/authbackground.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default RegistrationLayout;
