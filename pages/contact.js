import Head from 'next/head';
import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/Contact.module.scss';
import Footer from '../components/layout/footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Posi - Adekanmbi Ayomiposi</title>
        <meta
          name='description'
          content='Ayomiposi is a product designer, I’m passionate about design and i love to create solutions for
                  complex problems through user-centric design.'
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
          <form action='' className={styles.contact__form}>
            <div className={styles.contact__wrapper}>
              <div className={styles.contact__group}>
                <div className={styles.contact__box}>
                  <label htmlFor='name' className={styles.contact__label}>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className={styles.contact__input}
                  />
                </div>
                <div className={styles.contact__box}>
                  <label htmlFor='email' className={styles.contact__label}>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className={styles.contact__input}
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
                  type='text'
                  id='subject'
                  className={styles.contact__input}
                />
              </div>
            </div>
          </form>
        </Container>
        <Footer />
      </main>
    </>
  );
}
