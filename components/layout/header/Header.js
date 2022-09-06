import styles from './Header.module.scss';
import NextLink from 'next/link';
import Logo from '../../logo/Logo';
import Navigation from '../navigation/Navigation';

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
    </header>
  );
};

export default Header;