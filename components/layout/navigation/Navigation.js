import styles from './Navigation.module.scss';
import Link from 'next/link';

const Navigation = function () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href='/blog' className={styles.nav__link} name='Blogs'>
            <a className={styles.nav__link}>Blog</a>
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/about' className={styles.nav__link} name='About Me'>
            <a className={styles.nav__link}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
