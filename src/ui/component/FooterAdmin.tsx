import { useRouter } from 'next/router';
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

const FooterAdmin = () => {
  const router = useRouter();
  return (
    <footer className="pt-4">
      <div className="mx-auto  my-2 ">
        <div className="-mx-3 flex items-center lg:flex-wrap lg:justify-between">
          <div className="mt-0 mb-6 w-full max-w-full shrink-0 px-3 lg:mb-0 lg:w-1/2 lg:flex-none">
            {router.pathname === '/profile' ? null : (
              <div className="flex items-center gap-1 text-center text-sm leading-normal text-slate-500 lg:text-left">
                <p>
                  Made with{' '}
                  <span>
                    {' '}
                    <BsFillHeartFill className="inline-block text-red-500" /> by
                  </span>{' '}
                  Eng/ Ahmed-Osama-Salem for a better web.
                </p>
              </div>
            )}
          </div>
          <div className="mt-0 w-full max-w-full shrink-0 px-3 lg:w-1/2 lg:flex-none"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAdmin;
