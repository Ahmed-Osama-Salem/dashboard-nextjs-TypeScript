import ApiClient from '@/app/utils/ApiClient';

export const deleteTableCell = async (id: string | string[] | undefined) => {
  return ApiClient.delete(`/delete/${id}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
