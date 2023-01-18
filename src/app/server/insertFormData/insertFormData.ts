import type { ITableApiData } from '@/app/interface/tableApiData';
import ApiClient from '@/app/utils/ApiClient';

export const insertFormData = async ({
  time,
  allText,
  text,
  textMosad,
}: ITableApiData) => {
  return ApiClient.post('/insert', {
    time,
    allText,
    text,
    textMosad,
  })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};
