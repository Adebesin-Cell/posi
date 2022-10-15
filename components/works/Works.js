import WorkCard from './WorkCard';
import styles from './Works.module.scss';
import { CaseStudies } from '../../data/CaseStudy';

const Works = function () {
  return (
    <ul className={styles.list}>
      {CaseStudies.map((caseStudy) => (
        <WorkCard
          key={caseStudy.id}
          image={caseStudy.image}
          title={caseStudy.title}
          name={caseStudy.name}
          description={caseStudy.description}
          target={caseStudy.target}
          {...caseStudy}
        ></WorkCard>
      ))}
    </ul>
  );
};

export default Works;
