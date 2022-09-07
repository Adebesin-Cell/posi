import Search from '../search/Search';
import styles from './Topbar.module.scss';

const Topbar = function (props) {
  return (
    <div className={styles.topbar}>
      <h1 className={styles.topbar__heading}>{props.title}</h1>
      <Search />
    </div>
  );
};

export default Topbar;
