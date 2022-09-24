import styles from './Header.module.scss';
import NextLink from 'next/link';
import Logo from '../../logo/Logo';
import Navigation from '../navigation/Navigation';
import Button from '../../ui/button/Button';

const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <NextLink href='/' className={styles.header__link} name='Posi'>
          <a className={styles.header__link}>
            <Logo />
          </a>
        </NextLink>
      </div>
      <Navigation />
      <Button className={styles.header__btn}>
        <span
          className={`${styles.header__line} ${styles['header__line--lg']}`}
        >
          &nbsp;
        </span>
        <span
          className={`${styles.header__line} ${styles['header__line--sm']}`}
        >
          &nbsp;
        </span>
      </Button>
    </header>
  );
};

export default Header;
