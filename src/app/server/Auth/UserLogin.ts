import ApiClient from '@/app/utils/ApiClient';

export const userLogin = async ({ email, password }: any) => {
  return ApiClient.post('/login', {
    email,
    password,
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
