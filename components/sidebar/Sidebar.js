import Logo from '../logo/Logo';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import {
  AboutIcon,
  BlogIcon,
  CaseStudyIcon2,
  OverviewIcon,
} from '../../utils/icons/Icons';
import { useRouter } from 'next/router';

const Sidebar = function () {
  const router = useRouter();

  const activeClass = `${styles.sidebar__link} ${styles['sidebar__link--active']}`;
  const inActiveClass = `${styles.sidebar__link}`;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Link href='/admin' name='Posi' className={styles.sidebar__logo__link}>
          <a className={styles.sidebar__logo__link} name='Posi'>
            <Logo />
          </a>
        </Link>
      </div>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <Link href='/admin' name='Overview' className={styles.sidebar__link}>
            <a
              name='Overview'
              className={
                router.pathname == '/admin' ? activeClass : inActiveClass
              }
            >
              <span className={styles.sidebar__icon}>
                <OverviewIcon />
              </span>
              <span className={styles.sidebar__text}>Overview</span>
            </a>
          </Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link href='/admin/blog' name='Blog' className={styles.sidebar__link}>
            <a
              name='Blog'
              className={
                router.pathname.includes('/admin/blog')
                  ? activeClass
                  : inActiveClass
              }
            >
              <span className={styles.sidebar__icon}>
                <BlogIcon />
              </span>
              <span className={styles.sidebar__text}>Blog</span>
            </a>
          </Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link
            href='/admin/about'
            name='About'
            className={styles.sidebar__link}
          >
            <a
              name='About'
              className={
                router.pathname.includes('/admin/about')
                  ? activeClass
                  : inActiveClass
              }
            >
              <span className={styles.sidebar__icon}>
                <AboutIcon />
              </span>
              <span className={styles.sidebar__text}>About</span>
            </a>
          </Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link
            href='/admin/case-study'
            name='Case Studies'
            className={styles.sidebar__link}
          >
            <a
              name='Case Studies'
              className={
                router.pathname.includes('/admin/case-study')
                  ? activeClass
                  : inActiveClass
              }
            >
              <span className={styles.sidebar__icon}>
                <CaseStudyIcon2 />
              </span>
              <span className={styles.sidebar__text}>Case Study</span>
            </a>
          </Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link
            href='/admin/test'
            name='Case Studies'
            className={styles.sidebar__link}
          >
            <a
              name='Case Studies'
              className={
                router.pathname.includes('/admin/test')
                  ? activeClass
                  : inActiveClass
              }
            >
              <span className={styles.sidebar__icon}>
                <CaseStudyIcon2 />
              </span>
              <span className={styles.sidebar__text}>Just Testing</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
