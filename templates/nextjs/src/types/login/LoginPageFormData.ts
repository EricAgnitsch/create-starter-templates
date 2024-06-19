import * as yup from 'yup';

export type LoginPageFormData = {
  email: string;
  password: string;
};

export const LoginPageFormDataSchema = yup
  .object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })
  .required();
