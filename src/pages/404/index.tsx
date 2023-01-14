import Lottie from 'lottie-react';
import router from 'next/router';

import error from '@/public/assets/json/error.json';
import DynamicButton from '@/ui/component/toggleBtn/DynamicButton';

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-y-hidden bg-white">
      <div className="flex h-screen flex-col items-center justify-center">
        <Lottie
          width={200}
          height={200}
          className="md:scale-[1.5]  xl:scale-[1.1]"
          animationData={error}
        />

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

export default Index;
