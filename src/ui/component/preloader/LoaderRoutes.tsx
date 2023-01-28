import Lottie from 'lottie-react';

import loader from '@/public/assets/json/loader.json';

const LoaderRoutes = () => {
  return (
    <div className="absolute top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/50 ">
      <Lottie
        className="scale-[0.9] lg:scale-[0.3]"
        loop
        animationData={loader}
      />
    </div>
  );
};

export default LoaderRoutes;
