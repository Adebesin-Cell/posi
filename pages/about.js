import Head from 'next/head';
import AboutMe from '../components/about/AboutMe';
import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/About.module.scss';

const About = function () {
  return (
    <>
      <>
        <Head>
          <title>About | Posi - Adekanmbi Ayomiposi</title>
          <meta
            name='description'
            content='Ayomiposi is a product designer, I’m passionate about design and i love to create solutions for
                  complex problems through user-centric design.'
          />
          <meta
            property='og:title'
            content='About | Posi - Adekanmbi Ayomiposi'
            key='title'
          />
          <meta
            name='og:image'
            key='og:image'
            content='https://ayoposi.vercel.app/images/og-image.png'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={styles.about}>
          <Container>
            <Header />
          </Container>
          <Container>
            <h1 className={styles.about__heading}>ABOUT ME</h1>
          </Container>
          <AboutMe />
        </main>
      </>
    </>
  );
};

export default About;
