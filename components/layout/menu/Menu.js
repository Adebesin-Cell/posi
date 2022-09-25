import Link from 'next/link';
import Logo from '../../logo/Logo';
import styles from './Menu.module.scss';

const Menu = function (props) {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__body}>
        <Link href='/'>
          <a
            name="Posi's logo"
            className={styles.menu__logo}
            onClick={props.close}
          >
            <Logo />
          </a>
        </Link>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link href='/blog'>
              <a
                name='Blog'
                className={styles.menu__link}
                onClick={props.close}
              >
                Blog
              </a>
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link href='/about'>
              <a
                name='About me'
                className={styles.menu__link}
                onClick={props.close}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
