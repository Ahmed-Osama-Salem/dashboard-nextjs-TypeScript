import ApiClient from '@/app/utils/ApiClient';

export const userSignUp = async ({
  name,
  email,
  password,
  job,
  phone,
  image,
}: any) => {
  return ApiClient.post('/register', {
    name,
    email,
    password,
    job,
    phone,
    image,
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return {
        message: err.response.data.message,
        status: err.response.status,
      };
    });
};
