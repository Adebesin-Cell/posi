import styles from './Header.module.scss';
import NextLink from 'next/link';
import Logo from '../../logo/Logo';
import Navigation from '../navigation/Navigation';
import Button from '../../ui/button/Button';
import { useEffect, useState } from 'react';
import Menu from '../menu/Menu';

const Header = function () {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [body, setBody] = useState();

  const menuBtnStylesOpened = `${styles.header__btn} ${styles['header__btn--opened']}`;
  const menuBtnStylesClosed = `${styles.header__btn}`;

  const toggleMenuHandler = function () {
    setMenuIsOpen(!menuIsOpen);
    body.classList.toggle('no-scroll');
  };

  const menuCloseHandler = function () {
    setMenuIsOpen(false);
    body.classList.remove('no-scroll');
  };

  useEffect(() => {
    setBody(document.querySelector('body'));
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <NextLink href='/' className={styles.header__link} name='Posi'>
            <a className={styles.header__link}>
              <Logo />
            </a>
          </NextLink>
        </div>
        <Navigation />
        <Button
          className={menuIsOpen ? menuBtnStylesOpened : menuBtnStylesClosed}
          onClick={toggleMenuHandler}
        >
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
      {menuIsOpen && <Menu close={menuCloseHandler} />}
    </>
  );
};

export default Header;
