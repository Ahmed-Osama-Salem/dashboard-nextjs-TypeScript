import ApiClient from '@/app/utils/ApiClient';

export const userSignUp = async ({ name, email, password, job }: any) => {
  return ApiClient.post('/register', {
    name,
    email,
    password,
    job,
  })
    .then((data) => {
      console.log(data.data);

      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
