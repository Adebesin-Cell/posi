import Logo from '../logo/Logo';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

const Sidebar = function () {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Link href='/admin' name='Posi' className={styles.sidebar__logo__link}>
          <a className={styles.sidebar__logo__link} name='Posi'>
            <Logo />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
