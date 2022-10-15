import styles from './Intro.module.scss';
import Container from '../../ui/container/Container';
import Image from 'next/image';
import {
  BehanceIcon,
  DribbbleIcon,
  FlowIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../../../utils/icons/Icons';
import Avatar from '../../avatar/Avatar';

const Intro = function (props) {
  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.intro__wrapper}>
          <Container>
            <div className={styles.intro__container}>
              <div className={styles.intro__content}>
                <h1 className={styles.intro__heading}>
                  <span>Ayomiposi is a</span>
                  <span>product designer</span>
                </h1>
                <p className={styles.intro__paragraph}>
                  I’m passionate about design and i love to create solutions for
                  complex problems through user-centric design.
                </p>
                <ul className={styles.intro__list}>
                  <li className={styles.intro__item}>
                    <a
                      href='https://www.linkedin.com/in/ayomiposi-adekanmbi-b961351b4/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.intro__link}
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li className={styles.intro__item}>
                    <a
                      href='https://dribbble.com/Posiay'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.intro__link}
                    >
                      <DribbbleIcon />
                    </a>
                  </li>
                  <li className={styles.intro__item}>
                    <a
                      href='https://twitter.com/AyomiposiUIUX'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.intro__link}
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className={styles.intro__item}>
                    <a
                      href='https://www.behance.net/ayomipoadekanm'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.intro__link}
                    >
                      <BehanceIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <Avatar className={styles['intro__image-box']} />
            </div>
          </Container>
        </div>
        <div className={styles.intro__flow}>
          <FlowIcon onClick={props.onClick} />
        </div>
      </Container>
    </section>
  );
};

export default Intro;
