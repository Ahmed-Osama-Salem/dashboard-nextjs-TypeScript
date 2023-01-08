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
  console.log(pathUrl);

  return (
    <section className="relative mx-auto  h-screen w-full overflow-hidden ">
      <div className="flex h-screen flex-row items-center justify-start ">
        <div className="z-[999] flex h-screen w-[30%] flex-col justify-center  border-t-2 border-red-500 bg-white px-10 shadow-md shadow-black">
          <div className="flex justify-center gap-20">
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
          <div className="flex items-center justify-center gap-[16rem] ">
            {authComponent}
          </div>
        </div>
      </div>
      <video autoPlay muted loop className="absolute top-0 w-full ">
        <source src="/assets/vedio/authbackground.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default RegistrationLayout;
