import Topbar from '../topbar/Topbar';
import styles from './Dashboard.module.scss';
import DashboardWrapper from './wrapper/Wrapper';

const Dashboard = function () {
  return (
    <div className={styles.dashboard}>
      <DashboardWrapper>
        <Topbar title='Overview' />
        <div className={styles.dashboard__wrapper}>
          <div className={styles.dashboard__card}>
            <h1 className={styles.dashboard__title}>4</h1>
            <p className={styles.dashboard__paragraph}>Case Studies</p>
          </div>
          <div className={styles.dashboard__card}>
            <h1 className={styles.dashboard__title}>5</h1>
            <p className={styles.dashboard__paragraph}>Blogs</p>
          </div>
          <div className={styles.dashboard__card}>
            <h1 className={styles.dashboard__title}>2</h1>
            <p className={styles.dashboard__paragraph}>Experiences</p>
          </div>
        </div>
        <div className={styles.dashboard__container}>
          <h1 className={styles.dashboard__heading}>Recent Activities</h1>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
