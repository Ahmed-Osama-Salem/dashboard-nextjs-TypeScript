import * as yup from 'yup';

export const LoginFromSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is Required'),
  password: yup.string().required('You must add a password'),
});
