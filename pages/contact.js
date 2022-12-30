import Head from 'next/head';
import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/Home.module.scss';
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
      <main className={styles.home}>
        <Container>
          <Header />
        </Container>
        <Footer />
      </main>
    </>
  );
}
