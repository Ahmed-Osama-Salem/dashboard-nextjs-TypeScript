import { Toaster } from 'react-hot-toast';

const SuccessNotify = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        success: {
          duration: 3000,
        },
      }}
    />
  );
};
export default SuccessNotify;
