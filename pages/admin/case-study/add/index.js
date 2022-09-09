import Head from 'next/head';
import AddCaseStudyView from '../../../../components/case-study/AddCaseStudyView';
import Sidebar from '../../../../components/sidebar/Sidebar';
import styles from '../../../../styles/AddCaseStudy.module.scss';

const AddCaseStudyPage = function () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.admin}>
        <Sidebar />
        <AddCaseStudyView />
      </main>
    </>
  );
};

export default AddCaseStudyPage;
