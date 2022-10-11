import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { loginSchema } from '../schemas/auth';
import { AppContext } from 'context';

interface Inputs {
  email: string;
  password: string;
  remember: boolean;
}

export const useLogin = () => {
  // State
  const { setAuth } = useContext(AppContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(loginSchema) });

  // Functions
  const onSubmit = (data: Inputs) => {
    const { remember } = data;
    setAuth(true);
    if (remember) localStorage.setItem('auth', JSON.stringify(true));
    else sessionStorage.setItem('auth', JSON.stringify(true));
    router.push('/');
  };

  return { errors, handleSubmit, onSubmit, register };
};
