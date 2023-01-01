import Head from 'next/head';
import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/Home.module.scss';
import Intro from '../components/sections/intro/Intro';
import CaseStudies from '../components/sections/caseStudies/CaseStudies';
import { useRef } from 'react';
import Footer from '../components/layout/footer/Footer';

export default function Home() {
  const caseStudiesRef = useRef();

  const handleClick = () => {
    caseStudiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Posi - Adekanmbi Ayomiposi</title>
        <meta
          name='description'
          content='Ayomiposi is a product designer, I’m passionate about design and i love to create solutions for
                  complex problems through user-centric design.'
        />
        <meta
          property='og:title'
          content='Posi - Adekanmbi Ayomiposi'
          key='title'
        />
        <meta
          name='og:image'
          key='og:image'
          content='https://ayoposi.vercel.app/images/og-image.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.home}>
        <Container>
          <Header />
        </Container>
        <Intro onClick={handleClick} />
        <CaseStudies ref={caseStudiesRef} />
        <Footer />
      </main>
    </>
  );
}
