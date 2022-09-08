import Head from 'next/head';
import Link from 'next/link';
import Logo from '../../components/logo/Logo';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/input/Input';
import styles from '../../styles/Auth.module.scss';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';

const AuthPage = function () {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);

  const authenticateUserHandler = function (user) {
    authCtx.login(user);
    router.replace('/admin');
  };

  const formSubmitHandler = async function (e) {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (
      emailValue.trim() === process.env.NEXT_ADMIN_USERNAME &&
      passwordValue === process.env.NEXT_ADMIN_PASSWORD
    ) {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailValue,
              password: passwordValue,
              returnSecureToken: true,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(response.body);
        }

        const user = await response.json();
        console.log(user);
        authenticateUserHandler(user);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Incorrect Details');
    }
  };

  return (
    <>
      <Head>
        <title>Login - Posi</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.auth}>
        <div className={styles.auth__view}>
          <div className={styles.auth__logo}>
            <Link href='/auth' name='Posi' className={styles.auth__logo__link}>
              <a className={styles.auth__logo__link} name='Posi'>
                <Logo />
              </a>
            </Link>
          </div>
          <p className={styles.auth__paragraph}>Log in to continue</p>
          <form
            action=''
            className={styles.auth__form}
            onSubmit={formSubmitHandler}
          >
            <div className={styles.auth__group}>
              <label htmlFor='email' className={styles.auth__label}>
                Email
              </label>
              <Input
                ref={emailRef}
                type='email'
                placeholder='bill.sanders@example.com'
                name='email'
                id='email'
                className={styles.auth__input}
              />
            </div>
            <div className={styles.auth__group}>
              <label htmlFor='password' className={styles.auth__label}>
                Password
              </label>
              <Input
                ref={passwordRef}
                type='password'
                placeholder='Password'
                name='password'
                id='password'
                className={styles.auth__input}
              />
            </div>
            <div className={styles['auth__button-box']}>
              <Button type='submit' className={styles.auth__button}>
                Login
              </Button>
            </div>
            <div className={styles['auth__button-box']}>
              <Link href='/auth/register'>
                <a name='Sign Up' className={styles.auth__link}>
                  Sign Up
                </a>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
