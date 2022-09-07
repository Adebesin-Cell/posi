/* eslint-disable react/no-unescaped-entities */
import styles from './AboutMe.module.scss';
import Container from '../ui/container/Container';
import Avatar from '../avatar/Avatar';

const AboutMe = function () {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__wrapper}>
          <div className={styles['about__box']}>
            <Avatar className={styles['about__image-box']} />
          </div>
          <div className={styles['about__box']}>
            <p>
              Hey there, my name is Ayomiposi Adekanmbi and i am a product
              designer. It’s been a year since i started designing products. I
              love nature. Its really beautiful, Isnt it?. Anyways, back to
              designing. I love to create prooducts that put a smile on its
              users beacuse of its ease of use and the better experience it
              gives.
            </p>
            <p>
              I'm constantly learning new things everyday and love meeting
              people who are motivated and unafraid of sharing their ideas with
              the world. I'm a self taught designer and have learnt a lot of the
              processes, concepts and theories of UI/UX and product design
              through attending workshops, reading blogs and applying these to
              projects in my spare time and at work. I am very much a
              big-picture thinker and enjoy working on products end to end, from
              ideation all the way to development.
            </p>
            <p>
              I love to sing. I sing at my leisure and also when i work cause it
              makes me focus more. I also love to write. I’ve been writing my
              entire life. Before i began UI/UX design, i used to write on
              different topics and even wrote fictions. When i began UI/UX
              design, i began to write on topics related to UI/UX design. Check
              my{' '}
              <a href='/blog' target='_blank' rel='noopener noreferrer'>
                blog
              </a>{' '}
              for these
            </p>
          </div>
          <div className={styles['about__box']}>
            <ul className={styles.about__list}>
              <h1 className={styles.about__title}>Skills</h1>
              <li className={styles.about__item}>Research</li>
              <li className={styles.about__item}>Mobile App Design</li>
              <li className={styles.about__item}>Websites Design</li>
              <li className={styles.about__item}>Wireframing</li>
              <li className={styles.about__item}>Prototyping</li>
            </ul>
            <ul className={styles.about__list}>
              <h1 className={styles.about__title}>Experience</h1>
              <li className={styles.about__item}>Product designer at EF4A</li>
              <li className={styles.about__item}>Freelance Designer</li>
            </ul>
            <ul className={styles.about__list}>
              <h1 className={styles.about__title}>Socials</h1>
              <li className={styles.about__item}>
                <a
                  href='https://dribbble.com/'
                  className={styles.about__link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dribbble
                </a>
              </li>
              <li className={styles.about__item}>
                <a
                  href='https://dribbble.com/'
                  className={styles.about__link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Behance
                </a>
              </li>
              <li className={styles.about__item}>
                <a
                  href='https://dribbble.com/'
                  className={styles.about__link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
            </ul>
            <ul className={styles.about__list}>
              <a href='' className={styles.about__button}>
                Download Resume
              </a>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
