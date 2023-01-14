import Lottie from 'lottie-react';
import { useRouter } from 'next/router';

import error from '@/public/assets/json/error.json';

import DynamicButton from './toggleBtn/DynamicButton';

const Error404 = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen overflow-y-hidden bg-white">
      <div className="flex h-screen flex-col items-center justify-center">
        <Lottie
          width={200}
          height={200}
          className="md:scale-[1.5]  xl:scale-[1.1]"
          animationData={error}
        />
        <p className="text-center font-poppins font-semibold text-black lg:text-3xl">
          Sorry , you are not register you must login to access EL-FiT Group
          system
        </p>
        <DynamicButton
          label={'Go back to login'}
          type="button"
          width="w-[170px]"
          handleClick={() => router.push('/login')}
        />
      </div>
    </div>
  );
};

export default Error404;
