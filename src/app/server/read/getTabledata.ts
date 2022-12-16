import ApiClient from '@/app/utils/ApiClient';

export const getTableData = async () => {
  return ApiClient.get('/read')
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
