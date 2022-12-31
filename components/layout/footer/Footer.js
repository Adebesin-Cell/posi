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
        <h1 className={styles.footer__heading}>Let's work together!</h1>
        <p className={styles.footer__paragraph}>Keep in touch.</p>
        <div className={styles['footer__link--box']}>
          <Link href='/contact' name='Contact'>
            <a name='=Contact me' className={styles.footer__link}>
              Go to Contact
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
