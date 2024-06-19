'use client';

import { useAuth } from '@/contexts/AuthContext';
import {
  LoginPageFormData,
  LoginPageFormDataSchema,
} from '@/types/login/LoginPageFormData';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider, Input, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<LoginPageFormData>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(LoginPageFormDataSchema),
  });
  const router = useRouter();
  const { user, authLoading, signIn } = useAuth();

  useEffect(() => {
    if (!authLoading && user) {
      router.replace('/');
    }
  }, [user, authLoading]);

  const onSubmit: SubmitHandler<LoginPageFormData> = async (data) => {
    signIn({ email: data.email, password: data.password }).then(() => {
      router.replace('/');
    });
  };

  return (
    <div className={'flex flex-col items-center justify-center min-h-screen'}>
      {authLoading ? (
        <Spinner />
      ) : (
        <div className={'space-y-8'}>
          <p className={'text-2xl'}>Log in to your account</p>
          <Divider />
          <form
            className={'flex flex-col space-y-8'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={'space-y-2'}>
              <Controller
                name={'email'}
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder={'Email'}
                    {...field}
                    autoComplete={'off'}
                    autoCapitalize={'off'}
                  />
                )}
              />
              <Controller
                name={'password'}
                control={control}
                render={({ field }) => (
                  <Input
                    type={'password'}
                    placeholder={'Password'}
                    {...field}
                    autoComplete={'off'}
                  />
                )}
              />
            </div>
            <Button type={'submit'} isDisabled={!isValid}>
              Sign in and Continue
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
