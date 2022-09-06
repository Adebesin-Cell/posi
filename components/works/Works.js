import WorkCard from './WorkCard';
import styles from './Works.module.scss';
import caseStudy from '../../assets/images/casestudy--1.png';

const Works = function () {
  return (
    <ul className={styles.list}>
      <WorkCard image={caseStudy}></WorkCard>
    </ul>
  );
};

export default Works;
