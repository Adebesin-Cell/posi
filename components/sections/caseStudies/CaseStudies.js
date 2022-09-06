/* eslint-disable react/display-name */
import Container from '../../ui/container/Container';
import styles from './caseStudies.module.scss';
import Works from '../../works/Works';
import React from 'react';

const CaseStudies = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} className={styles.container}>
      <Container>
        <Works></Works>
      </Container>
      {/* test */}
    </section>
  );
});

export default CaseStudies;
