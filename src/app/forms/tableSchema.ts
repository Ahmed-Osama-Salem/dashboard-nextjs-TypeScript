import * as yup from 'yup';

export const TableSchema = yup.object().shape({
  angaz: yup.string().required('You must add angaz'),
  // password: yup.string().required('You must add a password'),
});
