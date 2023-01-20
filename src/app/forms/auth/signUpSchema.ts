import * as yup from 'yup';

export const SignUpFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name Required'),
  phone: yup.string().max(11, 'wrong number').required('You must add a mobile'),
  email: yup.string().email('Invalid email'),
  password: yup.string().min(8, 'Password must be 8 characters long'),
  job: yup.string().required('Job Required'),
});
