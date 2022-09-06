import Container from '../../ui/container/Container';
import styles from './caseStudies.module.scss';
import Works from '../../works/Works';

const CaseStudies = function () {
  return (
    <section className={styles.container}>
      <Container>
        <Works></Works>
      </Container>
    </section>
  );
};

export default CaseStudies;
