import styles from './Intro.module.scss';
import Container from '../../ui/container/Container';

const Intro = function () {
  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.intro__wrapper}>
          <Container>&nbsp;</Container>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
