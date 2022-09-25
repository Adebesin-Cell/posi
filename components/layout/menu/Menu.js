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
      </div>
    </div>
  );
};

export default Menu;
