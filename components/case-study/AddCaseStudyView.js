import DashboardWrapper from '../dashboard/wrapper/Wrapper';
import styles from './AddCaseStudyView.module.scss';

const AddCaseStudyView = function () {
  return (
    <div className={styles.view}>
      <DashboardWrapper>
        <div className={styles.view__header}>&nbsp;</div>
      </DashboardWrapper>
    </div>
  );
};

export default AddCaseStudyView;
