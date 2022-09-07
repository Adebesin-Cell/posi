import styles from './Wrapper.module.scss';

const DashboardWrapper = function (props) {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default DashboardWrapper;
