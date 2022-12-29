import ApiClient from '@/app/utils/ApiClient';

export const updateCell = async (
  id: string | string[] | undefined,
  newConstrDate: string,
  dateNowUpdate: string,
  rkmElw7daUpdate: string,
  elbndUpdate: string,
  techNumberUpdate: string,
  mosadNumberUpdate: string,
  noteAddUpdate: string,
  kmiatMonUpdate: string,
  tnfizStateUpdate: string,
  angazUpdate: string,
  notesUpdate: string,
  fromUpdate: string,
  toUpdate: string,
  topicsUpdate: string,
  contractTypeUpdate: string
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
    fromUpdate,
    toUpdate,
    topicsUpdate,
    contractTypeUpdate,
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
