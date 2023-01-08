import ApiClient from '@/app/utils/ApiClient';

export const userSignUp = async ({
  name,
  email,
  password,
  job,
  phone,
}: any) => {
  return ApiClient.post('/register', {
    name,
    email,
    password,
    job,
    phone,
  })
    .then((data) => {
      console.log(data.data);

      return data.data;
    })
    .catch((err) => {
      return {
        // code: err.code,
        message: err.response.data.message,
        status: err.response.status,
      };
    });
};
