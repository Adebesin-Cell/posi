import styles from './WorkCard.module.scss';
import Image from 'next/image';
import Tag from '../ui/tag/Tag';
import Link from 'next/link';

const WorkCard = function (props) {
  return (
    <li className={styles.card}>
      <Image
        src={props.image}
        alt={props.title}
        className={styles.card__image}
      />
      <div className={styles.card__overlay}>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{props.title}</h3>
          <h1 className={styles.card__heading}>{props.name}</h1>
          <p className={styles.card__paragraph}>{props.description}</p>
          <Tag
            tag={props.tag}
            tagBg={props.tagBackground}
            tagColor={props.tagColor}
          />
          <div className={styles['card__link--box']}>
            <Link href={props.caseStudyLink} name={props.name}>
              <a
                name={props.name}
                target={props.target}
                className={styles.card__link}
              >
                View Case Study
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkCard;
