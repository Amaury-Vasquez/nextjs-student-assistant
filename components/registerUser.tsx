import { AiOutlineKey, AiOutlineMail } from 'react-icons/ai';

import styles from '../styles/auth.module.css';
import { useRegister } from '../hooks/useRegister';
import animation from '../styles/animation.module.css';

const { fadeIn } = animation;
const {
  checkLabel,
  checkBox,
  checkWrapper,
  error,
  icon,
  iconInput,
  input,
  label,
  loginForm,
  submit,
} = styles;

export const RegisterUser = () => {
  const { errors, handleSubmit, onSubmit, register } = useRegister();

  return (
    <form
      className={loginForm + ' ' + fadeIn}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className={label}> Email </label>
      {errors.email && (
        <label className={label + ' ' + error}>{errors.email.message}</label>
      )}
      <div className={iconInput}>
        <span className={icon}>
          <AiOutlineMail />{' '}
        </span>
        <input
          className={input}
          placeholder="email@example.com"
          type="email"
          {...register('email', { required: true })}
        />
      </div>
      <label className={label}> Password </label>
      {errors.password && (
        <label className={label + ' ' + error}>{errors.password.message}</label>
      )}
      <div className={iconInput}>
        <span className={icon}>
          <AiOutlineKey />
        </span>
        <input
          className={input}
          placeholder="password"
          type="password"
          {...register('password', { required: true })}
        />
      </div>
      <label className={label}> Repeat password </label>
      {errors.repeatPassword && (
        <label className={label + ' ' + error}>
          {errors.repeatPassword.message}
        </label>
      )}
      <div className={iconInput}>
        <span className={icon}>
          <AiOutlineKey />
        </span>
        <input
          placeholder="repeat password"
          className={input}
          {...register('repeatPassword', { required: true })}
        />
      </div>
      <div className={checkWrapper}>
        <input
          className={checkBox}
          type="checkbox"
          {...register('remember', { required: true })}
        />
        <label className={checkLabel}> Remember me </label>
      </div>
      <button type="submit" className={submit}>
        Login
      </button>
    </form>
  );
};
