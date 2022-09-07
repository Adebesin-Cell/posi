/* eslint-disable react/no-unescaped-entities */
import styles from './Footer.module.scss';
import background from '../../../assets/images/footer-bg.png';
import Link from 'next/link';

const Footer = function () {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className={styles.footer__wrapper}>
        <h1 className={styles.footer__heading}>Check out my blog</h1>
        <p className={styles.footer__paragraph}>
          I write blogs on UI/UX design when I'm less busy.
        </p>
        <div className={styles['footer__link--box']}>
          <Link href='/blog' name='Blog'>
            <a name='Blog' className={styles.footer__link}>
              Go to blog
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
