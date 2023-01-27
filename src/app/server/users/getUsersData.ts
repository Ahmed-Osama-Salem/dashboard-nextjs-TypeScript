import ApiClient from '@/app/utils/ApiClient';

export const getUsersData = async () => {
  return ApiClient.get('/users')
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
