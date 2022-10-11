import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/auth.module.css';
import { LoginUser } from '../components/loginUser';
import animation from '../styles/animation.module.css';
import { RegisterUser } from '../components/registerUser';

const { fadeIn } = animation;
const { content, formWrapper, leftTab, options, rightTab, tab, selected } =
  styles;

const Auth = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Head>
        <title> Login | Studen assistant </title>
      </Head>
      <main className={content}>
        <div className={formWrapper + ' ' + fadeIn}>
          <div className={options}>
            <button
              className={leftTab + ' ' + tab + ' ' + (toggle && selected)}
              onClick={(e) => {
                e.currentTarget.blur();
                toggle && setToggle(!toggle);
              }}
            >
              Login
            </button>
            <button
              className={rightTab + ' ' + tab + ' ' + (!toggle && selected)}
              onClick={(e) => {
                e.currentTarget.blur();
                !toggle && setToggle(!toggle);
              }}
            >
              Register
            </button>
          </div>
          {!toggle ? <LoginUser /> : <RegisterUser />}
        </div>
      </main>
    </>
  );
};

export default Auth;
