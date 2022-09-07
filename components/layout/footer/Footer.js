import styles from './Footer.module.scss';
import background from '../../../assets/images/footer-bg.png';

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
      </div>
    </footer>
  );
};

export default Footer;
