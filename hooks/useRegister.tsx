import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { registerSchema } from '../schemas/auth';

interface Inputs {
  email: string;
  password: string;
  repeatPassword: string;
  remember: boolean;
}

export const useRegister = () => {
  // State
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(registerSchema) });

  // Functions
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return { errors, handleSubmit, onSubmit, register };
};
