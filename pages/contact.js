import Head from 'next/head';
import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/Contact.module.scss';
import Footer from '../components/layout/footer/Footer';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm('mknawdkr');

  return (
    <>
      <Head>
        <title>Contact | Posi - Adekanmbi Ayomiposi</title>
        <meta
          name='description'
          content='Ayomiposi is a product designer, I’m passionate about design and i love to create solutions for
                  complex problems through user-centric design.'
        />
        <meta
          property='og:title'
          content='Contact | Posi - Adekanmbi Ayomiposi'
          key='title'
        />
        <meta
          name='og:image'
          key='og:image'
          content='https://ayoposi.vercel.app/images/og-image.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.contact}>
        <Container>
          <Header />
        </Container>
        <Container>
          <p className={styles.contact__paragraph}>
            Have a project idea? Feel free to send me a message.
          </p>
          <h1 className={styles.contact__heading}>
            <span>CONTACT </span>
            <span className={styles.contact__me}>
              ME{' '}
              <div className={styles.contact__icon}>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 2H20V22' stroke='#E7E7E7' strokeWidth='3' />
                </svg>
              </div>
            </span>
          </h1>
          <form
            action=''
            className={styles.contact__form}
            onSubmit={handleSubmit}
          >
            <div className={styles.contact__wrapper}>
              <div className={styles.contact__group}>
                <div className={styles.contact__box}>
                  <label htmlFor='name' className={styles.contact__label}>
                    Name
                  </label>
                  <input
                    required
                    name='name'
                    type='text'
                    id='name'
                    className={styles.contact__input}
                  />
                  <ValidationError
                    prefix='Name'
                    field='name'
                    errors={state.errors}
                  />
                </div>
                <div className={styles.contact__box}>
                  <label htmlFor='email' className={styles.contact__label}>
                    Email
                  </label>
                  <input
                    required
                    name='email'
                    type='email'
                    id='email'
                    className={styles.contact__input}
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <div className={styles.contact__wrapper}>
              <div className={styles.contact__box}>
                <label htmlFor='subject' className={styles.contact__label}>
                  Subject
                </label>
                <input
                  required
                  name='subject'
                  type='text'
                  id='subject'
                  className={styles.contact__input}
                />
                <ValidationError
                  prefix='Subject'
                  field='subject'
                  errors={state.errors}
                />
              </div>
            </div>
            <div className={styles.contact__wrapper}>
              <div className={styles.contact__box}>
                <label htmlFor='message' className={styles.contact__label}>
                  Message
                </label>
                <textarea
                  required
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                  className={styles.contact__textarea}
                ></textarea>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
            </div>
            <div className={styles.contact__wrapper}>
              <div className={styles.contact__box}>
                <button
                  className={styles.contact__button}
                  disabled={state.submitting}
                >
                  {!state.submitting && 'Submit'}
                  {state.submitting && 'Loading...'}
                </button>
              </div>
            </div>
          </form>
        </Container>
        <Footer />
      </main>
    </>
  );
}
