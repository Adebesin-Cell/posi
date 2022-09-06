import styles from './Container.module.scss';

const Container = function (props) {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
