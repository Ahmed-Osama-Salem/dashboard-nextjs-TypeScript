import ApiClient from '@/app/utils/ApiClient';

export const updateCell = async (
  id: any,
  newConstrDate: any,
  dateNowUpdate: any,
  rkmElw7daUpdate: any,
  elbndUpdate: any,
  techNumberUpdate: any,
  mosadNumberUpdate: any,
  noteAddUpdate: any,
  kmiatMonUpdate: any,
  tnfizStateUpdate: any,
  angazUpdate: any,
  notesUpdate: any
) => {
  return ApiClient.put(`/update/${id}`, {
    newConstrDate,
    dateNowUpdate,
    rkmElw7daUpdate,
    elbndUpdate,
    techNumberUpdate,
    mosadNumberUpdate,
    noteAddUpdate,
    kmiatMonUpdate,
    tnfizStateUpdate,
    angazUpdate,
    notesUpdate,
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
